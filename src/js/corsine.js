'use strict';
import { btnAddCorsineEvent, btnDecCorsineEvent, btnDeleteCorsineEvent,
         generateCorsine, showOrderMenu } from './functions';

generateCorsine();

document.querySelectorAll('.btn_add_corsine').forEach(function (btn) {
  btnAddCorsineEvent(btn);
});

document.querySelectorAll('.btn_dec_corsine').forEach(function (btn) {
  btnDecCorsineEvent(btn);
});

document.querySelectorAll('.btn_del_corsine').forEach(function (btn) {
  btnDeleteCorsineEvent(btn);
});

document.querySelectorAll('.btn_order').forEach(function(btn) {
  btn.addEventListener('click', function (e) {
    showOrderMenu();
  });
});