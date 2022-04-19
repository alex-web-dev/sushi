export function showMessage(messageValue, status, time = 1200) {
  let message = document.createElement('div');
  message.className = 'message message_hide';

  if(status === 'error')
    message.classList.add('message_error');
  else if(status === 'warning')
    message.classList.add('message_warning');

  message.innerHTML = `<p class="message__value">${messageValue}</p>`;
  document.querySelector('.messages').appendChild(message);
  setTimeout(function() {
    message.classList.toggle('message_hide');
  }, 100);
  
  setTimeout(function() {
    message.classList.toggle('message_hide');
    message.addEventListener('transitionend', function() {
      this.remove();
    })
  }, time);
}

export function showChangeNum(num, coords) {
  let block = document.createElement('div');
  let blockStr = '';
  block.className = 'change-num';

  if(num > 0) {
    blockStr = '+' + num;
  } else {
    blockStr = num;
    block.classList.add('change-num_dec');
  }

  block.innerHTML = blockStr;

  let randX = getRandomNum(-5, 5);
  const blockPositionX = coords.x - randX;
  const blockPositionY = coords.y;
  block.style.left = `${blockPositionX}px`;
  block.style.top = `${blockPositionY}px`;

  document.body.appendChild(block);

  setTimeout(function() {
    block.remove();
  }, 1000);
}

export function validateStreet(street) {
  if(street.length < 5 || street.length > 50)
    return false;
  return true;
}

export function validatePhone(phone) {
  if(phone.length < 11 || phone.length > 17)
    return false;
  return true;
}

export function validateComment(comment) {
  if( comment.length !== 0 && (comment.length < 5 || comment.length > 300) )
    return false;
  return true;
}

export function validateOrderForm(form) {
  const street = form.querySelector('.order-form__field_street');
  const phoneNumber = form.querySelector('.order-form__field_number');
  const comment = form.querySelector('.order-form__field_comment');

  street.classList.remove('order-form__field_error');
  phoneNumber.classList.remove('order-form__field_error');
  comment.classList.remove('order-form__field_error');

  if(validateStreet(street.value) && validatePhone(phoneNumber.value) && validateComment(comment)) {
    return true;
  } else {
    showMessage('Неверная информация или заполнены не все поля!', 'error', 2000);
    
    if(!validateStreet(street.value)) {
      street.classList.add('order-form__field_error');
    }
    if(!validatePhone(phoneNumber.value)) {
      phoneNumber.classList.add('order-form__field_error');
    }
    if(!validateComment(comment.value)) {
      comment.classList.add('order-form__field_error');
    }

    return false;
  }
}

export function showOrderMenu() {
  let order = document.createElement('div');
  order.className = 'order';
  order.innerHTML = `
    <div class="wrapper">
      <div class="order__content">
        <h1 class="title title_black order__title">Оформление заказа</h1>
        <div class="order-form">
          <div class="order-form__item">
            <input type="text" name="street" class="order-form__field order-form__field_street" autocomplete="off" placeholder="Улица">
          </div>
          <div class="order-form__item">
            <input type="text" name="phone-number" class="order-form__field order-form__field_number" autocomplete="off" placeholder="Номер телефона">
          </div>
          <div class="order-form__item">
            <textarea name="comment" class="order-form__field order-form__field_comment" cols="40" rows="5" placeholder="Комментарий (не обязательно)" resize="no"></textarea>
          </div>
          <input type="button" class="btn order-form__submit" value="Подтвердить адрес">
        </div>
        <button class="btn-dlt order__close-btn">
          <svg width="27" height="27" viewBox="0 0 17 17">
            <path d="M9.207 8.5l6.646 6.646-0.707 0.707-6.646-6.646-6.646 6.646-0.707-0.707 6.646-6.646-6.647-6.646 0.707-0.707 6.647 6.646 6.646-6.646 0.707 0.707-6.646 6.646z" />
          </svg>
        </button>
      </div>
    </div>`;
  document.body.appendChild(order);

  eventCloseOrderMenu();
  eventSendOrder();
}

export function eventCloseOrderMenu() {
  if(document.querySelectorAll('.order').length !== 0) {
    document.querySelector('.order').addEventListener('click', function(e) {
      let elemClass = e.target.className;

      if(elemClass === 'order' || elemClass === 'btn-dlt order__close-btn' || typeof elemClass === 'object') {
        document.querySelector('.order').remove();
      }
    });
  }
}

export function eventSendOrder() {
  document.querySelector('.order-form__submit').addEventListener('click', function() {
    const form = document.querySelector('.order-form');    
    const street = form.querySelector('.order-form__field_street');
    const phoneNumber = form.querySelector('.order-form__field_number');
    const comment = form.querySelector('.order-form__field_comment');
    if(!validateOrderForm(form)) {
      return;
    }

    const corsineData = corsineGet();
    if(corsineData === null) {
      showMessage('Ваша корзина пуста', 'error');
      return;
    }

    sendOrder();
      setTimeout(function() {
        clearCorsineBlock();
        corsineRemove();
      }, 2000);
  });
}

export function sendOrder() {
  const isOrder = document.querySelectorAll('.order').length !== 0;
  if(!isOrder)
    return;
  
  const $orderForm = document.querySelector('.order-form');
  $orderForm.remove();

  const $loader = document.createElement('div');
  $loader.className = 'loader';
  document.body.appendChild($loader);

  setTimeout(function() {
    const $orderContent = document.querySelector('.order__content');
    appendMessage('Ваша заявка успешно отправлена! Ожидайте звонка.', $orderContent);
    $loader.remove();
  }, 2000);
}

export function toggleMainMenu() {
  const navMenu = document.querySelector('.nav-menu');
  navMenu.classList.toggle('nav-menu_active');
}

export function indexCheckHeaderTop() {
  const isIndexFile = document.querySelectorAll('.header__center').length !== 0;
  if(!isIndexFile)
    return;

  let scrollValue = window.pageYOffset || document.documentElement.scrollTop;
  let headerTopClass = document.querySelector('.header__top').className;
  if(scrollValue >= 60 &&  headerTopClass === 'header__top') {
    document.querySelector('.header__top').classList.add('header__top_fixed');
  } else if(scrollValue <= 30 && headerTopClass !== 'header__top') {
    document.querySelector('.header__top').classList.remove('header__top_fixed');
  }
}

export function checkUpToggle() {
  const isUp = document.querySelectorAll('.up').length !== 0;
  if(!isUp)
    return

  const up = document.querySelector('.up');
  if(window.pageYOffset < 1000 && up.className === 'up') {
    up.classList.add('up_hide');
  } else if(window.pageYOffset > 1000){
    up.classList.remove('up_hide');
  }
}

export function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function corsineAdd(goodId) {
  if (!goodId)
    return;

  let corsineData = corsineGet();
  if (corsineData === null) {
    const newCorsineData = [{
      id: goodId,
      count: 1
    }];

    localStorage.setItem('corsine', JSON.stringify(newCorsineData));
    return;
  }

  for (let [i, corsineItem] of corsineData.entries()) {
    if (corsineItem.id === goodId) {
      corsineData[i].count++;
      localStorage.setItem('corsine', JSON.stringify(corsineData));
      return;
    }
  }

  const newCorsineItem = {
    id: goodId,
    count: 1
  }

  corsineData.push(newCorsineItem);
  localStorage.setItem('corsine', JSON.stringify(corsineData));
}

export function corsineDec(goodId) {
  if (!goodId)
    return;

  let corsineData = corsineGet();
  if (corsineData === null)
    return;

  for (let [i, corsineItem] of corsineData.entries()) {
    if (corsineItem.id === goodId) {
      if (corsineItem.count > 1)
        corsineData[i].count--;
      else
        corsineData.splice(i, 1);

      if (corsineData.length === 0)
        corsineRemove();
      else
        localStorage.setItem('corsine', JSON.stringify(corsineData));
      return;
    }
  }
}

export function corsineDel(goodId) {
  if (!goodId)
    return;

  let corsineData = corsineGet();
  if (corsineData === null)
    return;

  for (let [i, corsineItem] of corsineData.entries()) {
    if (corsineItem.id === goodId) {
      corsineData.splice(i, 1);

      if (corsineData.length === 0)
        corsineRemove();
      else
        localStorage.setItem('corsine', JSON.stringify(corsineData));
      return;
    }
  }
}

export function corsineGet() {
  return JSON.parse(localStorage.getItem('corsine'));
}

export function corsineRemove() {
  localStorage.removeItem('corsine');
}

export function corsineHas(goodId) {
  const corsineData = corsineGet();

  if(corsineData === null)
    return false;

  for(let corsineItem of corsineData) {
    if(corsineItem.id === goodId)
      return true;
  }

  return false;
}

export function appendCountControl(elem, count = 1) {
  elem.querySelector('.btn_add_corsine').remove();

  const countControl = document.createElement('div');
  countControl.className = 'count-control goods__count-control';
  countControl.innerHTML = `
    <button type="button" class="count-control__btn count-control__btn_up btn_add_corsine">
      <svg width="15" height="15" viewBox="0 0 17 17">
        <path d="M16 9h-7v7h-1v-7h-7v-1h7v-7h1v7h7v1z" />
      </svg>
    </button>
    <span class="count-control__value">${count}</span>
    <button type="button" class="count-control__btn count-control__btn_down btn_dec_corsine">
      <svg width="15" height="15" viewBox="0 0 17 17">
        <path d="M15 8v1h-13v-1h13z" />
      </svg>
    </button>`;

  elem.append(countControl);
}

export function btnAddCorsineEvent(btn) {
  btn.addEventListener('click', function (e) {
    const good = btn.closest('.product-item');
    const goodId = +good.getAttribute('data-id');

    corsineAdd(goodId);

    const mouseCoords = {
      x: e.pageX,
      y: e.pageY
    }
    showChangeNum(1, mouseCoords);

    const isCorsineItem = good.className.includes('corsine__item');
    const isGoodHasControl = good.querySelector('.count-control') || null;
    if (isGoodHasControl) {
      const controlValue = +good.querySelector('.count-control__value').innerHTML;
      good.querySelector('.count-control__value').innerHTML = controlValue + 1;
      if(isCorsineItem)
        updateCorsineBlock();

      return;
    }

    const goodBuy = good.querySelector('.goods__buy');
    appendCountControl(goodBuy);
    
    goodBuy.querySelectorAll('.btn_add_corsine').forEach(function (btn) {
      btnAddCorsineEvent(btn);
    });

    goodBuy.querySelectorAll('.btn_dec_corsine').forEach(function (btn) {
      btnDecCorsineEvent(btn);
    });

    if(isCorsineItem)
      updateCorsineBlock();
  });
}

export function btnDecCorsineEvent(btn) {
  btn.addEventListener('click', function (e) {
    const good = btn.closest('.product-item');
    const goodId = +good.getAttribute('data-id');

    corsineDec(goodId);
    const mouseCoords = {
      x: e.pageX,
      y: e.pageY
    }
    showChangeNum(-1, mouseCoords);

    const isCorsineItem = good.className.includes('corsine__item');
    const controlValue = +good.querySelector('.count-control__value').innerHTML;
    if (controlValue > 1) {
      good.querySelector('.count-control__value').innerHTML = controlValue - 1;
    } else {
      if(isCorsineItem) {
        good.remove();
      } else {
        const countControl = good.querySelector('.count-control');
        countControl.remove();
        const goodBuy = good.querySelector('.goods__buy');
        appendDefaultCorsineBtn(goodBuy);
      }
    }

    if(isCorsineItem)
      updateCorsineBlock();
  });
}

export function btnDeleteCorsineEvent(btn) {
  btn.addEventListener('click', function (e) {
    const good = btn.closest('.product-item');
    const goodId = +good.getAttribute('data-id');
    const goodCount = good.querySelector('.count-control__value').innerHTML;
    
    corsineDel(goodId);
    const mouseCoords = {
      x: e.pageX,
      y: e.pageY
    }
    showChangeNum(`-${goodCount}`, mouseCoords);

    const controlValue = +good.querySelector('.count-control__value').innerHTML;
    const isCorsineItem = good.className.includes('corsine__item');
    if(isCorsineItem) {
      good.remove();
      updateCorsineBlock();
    }
  });
}

export function appendDefaultCorsineBtn(elem) {
  const btn = document.createElement('input');
  btn.setAttribute('type', 'button');
  btn.className = 'btn_add_corsine goods__add-corsine-btn';
  btn.value = "В корзину";

  btnAddCorsineEvent(btn);

  elem.append(btn);

}

export function generateCorsine() {
  const isCorsineFile = document.querySelectorAll('.corsine').length !== 0;
  if (!isCorsineFile)
    return;

  const corsineData = corsineGet();
  const corsineContent = document.querySelector('.corsine__content');

  if (corsineData === null) {
    appendMessage('Ваша корзина пуста!', corsineContent);
    const footerBlock = getCorsineFooterBlock(0);
    corsineContent.append(footerBlock);
    return;
  }

  const corsineListBlock = document.querySelector('.corsine__items');
  corsineData.forEach(function (corsineItem) {
    const corsineItemBlock = getCorsineItemBlock(corsineItem);
    corsineListBlock.append(corsineItemBlock);
  });

  let totalValue = 0;
  document.querySelectorAll('.corsine__price-value').forEach(function(priceValue) {
    totalValue += +priceValue.innerHTML;
  });

  const footerBlock = getCorsineFooterBlock(totalValue);
  corsineContent.append(footerBlock);
}

export function getCorsineFooterBlock(sum) {
  const allSumBlock = document.createElement('p');
  allSumBlock.className = 'corsine__total-sum';
  allSumBlock.innerHTML = `Общая сумма: <span class="corsine__total-sum-value">${sum}</span> руб.`;


  const corsineBtns = document.createElement('div');
  corsineBtns.className = 'corsine__btns';
  
  if(sum > 0) {
    corsineBtns.innerHTML = `
    <a href="/sushi" class="btn btn_green corsine__btn-return">Вернуться в меню</a>
    <button class="btn order-link corsine__btn-order btn_order">Сделать заказ</button>`;
  } else {
    corsineBtns.innerHTML = `
    <a href="/sushi" class="btn btn_green corsine__btn-return">Вернуться в меню</a>
    <button class="btn btn_disabled order-link">Сделать заказ</button>`;
  }


  const footerBlock = document.createElement('div');
  footerBlock.className = 'corsine__footer';
  footerBlock.appendChild(allSumBlock);
  footerBlock.appendChild(corsineBtns);

  return footerBlock;
}

export function getCorsineItemBlock(corsineItem) {
  const productInf = getProductInf(corsineItem.id);
  const corsineItemSum = corsineItem.count * +productInf.price;
  const corsineItemBlock = document.createElement('div');
  corsineItemBlock.className = 'corsine__item product-item';
  corsineItemBlock.setAttribute('data-id', corsineItem.id);
  corsineItemBlock.innerHTML = `
    <header class="corsine__item-header">
      <div class="corsine__bg">
        <img src="dist/img/goods/${productInf.id}.jpg" alt="" class="corsine__img">
      </div>
      <div class="corsine__main">
        <p class="corsine__name">${productInf.name}</p>
        <p class="corsine__item-price"><span class="corsine__item-price-value">${productInf.price}</span> руб.</p>
      </div>
    </header>
    <div class="count-control corsine__count-control">
      <button type="button" class="count-control__btn count-control__btn_up btn_add_corsine">
        <svg width="15" height="15" viewBox="0 0 17 17">
          <path d="M16 9h-7v7h-1v-7h-7v-1h7v-7h1v7h7v1z" />
        </svg>
      </button>
      <span class="count-control__value">${corsineItem.count}</span>
      <button type="button" class="count-control__btn count-control__btn_down btn_dec_corsine">
        <svg width="15" height="15" viewBox="0 0 17 17">
          <path d="M15 8v1h-13v-1h13z" />
        </svg>
      </button>
    </div>
    <p class="corsine__price"><span class="corsine__price-value">${corsineItemSum}</span> руб.</p>
    <button type="button" class="btn-dlt corsine__btn-dlt btn_del_corsine" title="Убрать из корзины">
      <svg width="17" height="17" viewBox="0 0 17 17">
        <path d="M9.207 8.5l6.646 6.646-0.707 0.707-6.646-6.646-6.646 6.646-0.707-0.707 6.646-6.646-6.647-6.646 0.707-0.707 6.647 6.646 6.646-6.646 0.707 0.707-6.646 6.646z" />
      </svg>
    </button>`;

  return corsineItemBlock;
}

export function appendMessage(message, elem) {
  const messageBlock = document.createElement('p');
  messageBlock.className = 'text-message';
  messageBlock.innerHTML = message;

  elem.append(messageBlock);
}

export function getProductInf(id) {
  const products = [{"id":"1","name":"Калифорния тунец","struct":"Рис, нори, огурец, сыр, авокадо, тунец, фирменный соус, кунжут, тобико","price":"290","category":"roll"},{"id":"2","name":"Калифорния угорь","struct":"Рис, нори, огурец, майонез, авокадо, угорь, тобико","price":"270","category":"roll"},{"id":"3","name":"Тобико угорь","struct":"Рис, нори, огурец, сыр \"Филадельфия\", тобико, зеленый лук","price":"270","category":""},{"id":"4","name":"Филадельфия","struct":"Рис, нори, сыр \"Филадельфия\", огурец, лосось","price":"250","category":"roll"},{"id":"5","name":"Сакура","struct":"Рис, лист тофу, сыр \"Филадельфия\", угорь","price":"270","category":"roll"},{"id":"6","name":"Пирамида","struct":"Рис, нори, сыр \"Филадельфия\", омлет, тобико, угорь, лосось","price":"270","category":"roll"},{"id":"7","name":"Лосось","struct":"рис, лосось","price":"50","category":"sushi"},{"id":"8","name":"Копченный лосось","struct":"рис, копченый лосось","price":"60","category":"sushi"},{"id":"9","name":"Креветка","struct":"рис, креветка","price":"60","category":"sushi"},{"id":"10","name":"Спайси лосось","struct":"нори, рис, спайси соус, лосось","price":"50","category":"sushi"},{"id":"11","name":"Спайси угорь","struct":"нори, рис, спайси соус, угорь","price":"50","category":"sushi"},{"id":"12","name":"Спайси мидии","struct":"нори, рис, спайси соус, мидии","price":"50","category":"sushi"},{"id":"13","name":"Дункан икура","struct":"нори, рис, икра лосося","price":"70","category":"sushi"},{"id":"14","name":"Дункан чука","struct":"нори, рис, чука салат","price":"35","category":"sushi"},{"id":"15","name":"Пицца Пепперони","struct":"сыр моцарелла, соус, салями пепперони, томаты черри, чеснок, острый перец","price":"380","category":"pizza"},{"id":"16","name":"Пицца Карбонара","struct":"Соус томатный, сыр моцарелла, бекон, ветчина, колбаски баварские, сыр пармезан, яйцо куриное","price":"370","category":"pizza"},{"id":"17","name":"Пицца Маргарита","struct":"сыр моцарелла, соус, базилик","price":"240","category":"pizza"},{"id":"18","name":"Пицца Цезарь","struct":"сыр моцарелла, соус, куриное филе, томаты черри, капуста пекинская,соус цезарь,сыр пармезан.","price":"390","category":"pizza"},{"id":"19","name":"Бобовая лапша","struct":"Лапша бобовая, овощной микс, морепродукты, тигровая креветка, терияки соус, фирменный соус ","price":"240","category":"pasta"},{"id":"20","name":"Лапша Карбонара","struct":"Лапша удон, сливочно-чесночный соус, бекон, яичный желток, сыр пармезан","price":"240","category":"pasta"},{"id":"21","name":"Набор Овощной","struct":"Лапша фунчоза, овощи","price":"120","category":"pasta"},{"id":"22","name":"Набор яичный","struct":"Лапша яичная, курица, сливочно-чесночный соус","price":"220","category":"pasta"},{"id":"23","name":"Креветочный с авокадо","struct":"коктейльные креветки, помидоры, огурцы, авокадо, тобико,японский майонез.","price":"250","category":"salad"},{"id":"24","name":"Греческий","struct":"капуста пекинская, помидоры, огурцы, перец болгарский, сыр греческий, маслины, зелень.","price":"180","category":"salad"},{"id":"25","name":"Цезарь с креветками","struct":"капуста пекинская ,соус цезарь, чесночные гренки, томаты черри, яйцо перепелиное, сыр пармезан, тигровые креветки.","price":"280","category":"salad"},{"id":"26","name":"Цезарь с курицей","struct":"капуста пекинская ,соус цезарь, чесночные гренки, томаты черри, яйцо перепелиное, сыр пармезан, куриное филе.","price":"250","category":"salad"}];

  for(let productItem of products) {
    if(productItem.id == id)
      return productItem;
  }

  return false;
}

export function addControlToCorsineGoods() {
  const isGoodsSection = document.querySelectorAll('.goods').length !== 0;
  if(!isGoodsSection)
    return;

  const goods = document.querySelectorAll('.goods__item');
  goods.forEach(function(good) {
    const goodId = +good.getAttribute('data-id');
    const corsineData = corsineGet();

    if(corsineData === null)
      return;
    for(let corsineItem of corsineData) {
      if(corsineItem.id === goodId) {
        const goodBuy = good.querySelector('.goods__buy');
        appendCountControl(goodBuy, corsineItem.count);
      }
    }
  });
}

export function updateCorsineBlock() {
  let totalValue = 0;
  const corsineItems = document.querySelectorAll('.corsine__item');

  if(corsineItems.length === 0) {
    clearCorsineBlock();
    return;
  }

  corsineItems.forEach(function(item) {
    const itemPrice = +item.querySelector('.corsine__item-price-value').innerHTML;
    const itemCount = +item.querySelector('.count-control__value').innerHTML;
    const itemSum = itemPrice * itemCount;

    const $itemTotal = item.querySelector('.corsine__price-value');
    $itemTotal.innerHTML = itemSum;

    totalValue += itemSum;
  });

  const $total = document.querySelector('.corsine__total-sum-value');
  $total.innerHTML = totalValue;
}

export function clearCorsineBlock() {
  const isCorsine = document.querySelectorAll('.corsine').length !== 0;
  if(!isCorsine)
    return;
  
  const $corsineItems = document.querySelector('.corsine__items');
  $corsineItems.innerHTML = '';

  const $corsineFooter = document.querySelector('.corsine__footer');
  $corsineFooter.remove();

  const $corsineContent = document.querySelector('.corsine__content');
  appendMessage('Ваша корзина пуста!', $corsineContent);

  const $newCorsineFooter = getCorsineFooterBlock(0);
  $corsineContent.append($newCorsineFooter);
}
