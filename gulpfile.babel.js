import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'autoprefixer';
import del from 'del';
import { src, dest, watch, series, parallel } from 'gulp';
import yargs from 'yargs';
import cleanCss from 'gulp-clean-css';
import gulpif from 'gulp-if';
import imagemin from 'gulp-imagemin';
import webpack from 'webpack-stream';
import named from 'vinyl-named';
import browserSync from 'browser-sync';
import webp from 'gulp-webp';
import clone from 'gulp-clone';

const sass = require('gulp-sass')(require('sass'));


const cloneSink = clone.sink();

const PRODUCTION = yargs.argv.prod;

export const styles = () => {
    return src(['src/scss/main.scss'])
        .pipe(gulpif(!PRODUCTION, sourcemaps.init()))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulpif(PRODUCTION, postcss([ autoprefixer ])))
        .pipe(gulpif(PRODUCTION, cleanCss({compatibility:'ie8'})))
        .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
        .pipe(dest('src/css'))
        .pipe(server.stream());
}

export const watchForChanges = () => {
    watch('src/scss/**/*.scss', series(styles));
    watch('src/img/**/*.{jpg,jpeg,png,svg,gif}', series(images, reload));
    watch(['src/**/*','!src/{img,js,scss}','!src/{img,js,scss}/**/*'], series(copy, reload));
    watch('src/js/**/*.js', series(scripts, reload));
    watch(['**/*.php', '**/*.html'], reload);
}

export const images = () => {
    return src('src/img/**/*.{jpg,jpeg,png,svg,gif}')
        .pipe(gulpif(PRODUCTION, imagemin()))
        .pipe(cloneSink)
        .pipe(webp())
        .pipe(cloneSink.tap())
        .pipe(dest('dist/img'));
}

export const copy = () => {
    return src(['src/**/*','!src/{img,js,scss}','!src/{img,js,scss}/**/*'])
        .pipe(dest('dist'));
}

export const clean = () => del(['dist']);

export const scripts = () => {
    return src(['src/js/common.js'])
        .pipe(named())
        .pipe(webpack({
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: []
                            }
                        }
                    }
                ]
            },
            mode: PRODUCTION ? 'production' : 'development',
            devtool: !PRODUCTION ? 'inline-source-map' : false,
            output: {
                filename: '[name].js'
            }
        }))
        .pipe(dest('dist/js'))
}

const server = browserSync.create();
export const serve = done => {
    server.init({
        server: "./"
    });
    done();
};

export const reload = done => {
    server.reload();
    done();
};

export const dev = series(clean, parallel(images, copy, scripts), serve, watchForChanges);
export const build = series(clean, parallel(styles, images, copy, scripts));
export default dev;