
// let ac =  document.querySelector('.swiper-slide-active');
// let sr = document.querySelectorAll('.swiper-slide');

// function changeBgi() {   
//     sr.forEach((ele) => {
//             if (ele.classList.contains('swiper-slide-active')) {
//                 document.querySelector('body.products').style.backgroundImage = `url(${ele.children[0].src})`
//             } 
//     })
// }
//     setInterval(() => {
//         changeBgi();
//     }, 0);

// function getNumOfStar() {
//         for (let i = 0; i < parent_cards.children[0].children[2].children.length; i++) {
//             if (parent_cards.children[i].children[2].children[i].classList.contains('fill-1')) {
//                 arrNew.push(parent_cards.children[i].children[2].children[i])
//             }
//         }
//         for (let i = 0; i < parent_cards.children.length; i++) {
//             document.querySelectorAll('#number-off-stars')[i].innerHTML += `${arrNew.length}.0`
//         }
// }

let anyFunction;
let arrIf = [];
let mood = 'true';
let input1 = false;
let input2 = false;
let input3 = false;
let total;
let secondtotal;
let statDis;
let allPrices = 0;
let arrPrices = [];
let count = 1;
let arrShopping = [];
let image;
let i = 0;
let min;
let stat;
let newArryDiscount = [];
let newImageArray = [];
let resultPriceWorld;
let selectPrice;
let newSelect;
let newArrySelection = [];
let newPrice;
let arrNew = [];
let arrNumStar = [];
let numOfStar;
let parent_cards = document.querySelector('#parent-cards');
let cardParentImage = document.querySelector('.product-image');
let any = document.querySelectorAll('.any');
let priceOfProduct = document.querySelector('#priceOfProduct');
let titleProduct = document.querySelector('#titleProduct');
let priceWorld = document.querySelector('#priceWorld');
let selectParent = document.querySelector('#select-1');
let discountInput = document.querySelector('#discount-input');
let anyProduct = document.querySelector('.any-product');
let correct = document.querySelector('.correct');
let close_1 = document.querySelector('.close');
let shoppingCart = document.querySelector('#shopping-page');
let shoppingCartButton = document.querySelector('.shoping-cart-btn');
let overlay_1 = document.querySelector('.overlay-1');
let addToCart = document.querySelector('#add-to-cart');
let buy_1 = document.querySelector('#buy-1');
let countShoppingCart = document.querySelector('#countShoppingCart');
let alert_1 = document.querySelector('#alert-1-acsecc');
let items = document.querySelector('#items');
let btnRemove = document.querySelector('#remove-btn');
let loader_1 = document.querySelector('#parentLoader');
let prices = document.querySelector('#prices');
let discountDiv = document.querySelector('.discount');
let total_1 = document.querySelector('.total-1');
let checkout = document.querySelector('#checkout');
let paySection = document.querySelector('#pay-section')
let buyBtn = document.querySelector('#buy');
let cardNumber = document.querySelector('#card-number');
let cardName = document.querySelector('#card-name');
let cardDate = document.querySelector('#card-date');
let cardSecurity = document.querySelector('#card-security');
let checkBox_1 = document.querySelector('#check-1');
let increase = document.querySelector('#increase');
let minus = document.querySelector('#minus');

function discountCodes() {
  let codeOfDiscount1 = {
        code: "12kj",
        disCode: 10
   }
  let codeOfDiscount2 = {
      code: "50po500",
      disCode: 15
   }
  let codeOfDiscount3 = {
      code: "180oit",
      disCode: 8
   }

  newArryDiscount.push(codeOfDiscount1);
  newArryDiscount.push(codeOfDiscount2);
  newArryDiscount.push(codeOfDiscount3);
}
function showProductToScreen(img, title, price) {
  cardParentImage.innerHTML = `<img class=" object-scale-down w-full" style="height: 40vh" src="${img}" alt="image description">`;
  titleProduct.innerHTML = `<h1 class="font-bold text-gray-100 text-xl">${title}</h1>`;
  priceOfProduct.innerHTML = `${price}$`;
  selectParent.options[0].selected = true;
  priceWorld.innerHTML = +newArrySelection[0] * parseInt(priceOfProduct.innerHTML)
  document.querySelector('#test').onclick = () => {
    selectedBox();
    if (selectPrice != '') {
      resultPriceWorld = +selectPrice * parseInt(priceOfProduct.innerHTML);
      priceWorld.innerHTML = resultPriceWorld;
      document.querySelector('#price-name').innerHTML = newSelect;
    }
  } 
}

if (localStorage.getItem('shoppingItem') != null) {
  arrShopping = JSON.parse(localStorage.getItem('shoppingItem'));
}
if (localStorage.getItem('shopingIf') != null) {
  arrIf = JSON.parse(localStorage.getItem('shopingIf'));
}

function addProductToShoppingCartLocalStorage() {
  let itemCart = '';
  for (let i = 0; i < arrShopping.length; i++) {
    console.log(arrShopping[i].img);
  itemCart += `
  <div class="items flex items-center justify-between border border-b-slate-600 border-x-0 border-t-0 px-3 py-6 max-[768px]:flex-col max-[768px]:gap-6">
    <div class="info-product flex gap-4 basis-2/5  max-[768px]:w-full">
      <div class="img overflow-hidden rounded-lg border border-gray-400 w-fit m-auto h-32 max-[768px]:m-0"><img loading="lazy" src="${arrShopping[i].img}" alt="phone" class="w-32 h-32 object-cover"></div>
        <div class="titles flex flex-col gap-0.5 text-gray-100">
          <span id="name-shopping" class="font-bold text-2xl max-[500px]:text-xl">${arrShopping[i].title}</span>
          <span class="text-gray-400 max-[500px]:text-sm">${arrShopping[i].date}</span>
          <span class="text-gray-400 max-[500px]:text-sm">128GB - 12GB</span>
        </div>
      </div>
      <div class="flex items-center gap-6 justify-between max-[768px]:justify-around max-[768px]:w-full max-[768px]:flex-wrap">
        <div class="buttons flex gap-0.5">
          <button  id="minus" class="rounded-md border-gray-500 border px-1 py-1 text-gray-50 w-8 hover:border-none">-</button>
          <div class="screen-1-count rounded-md border-gray-500 border px-4 py-1 text-gray-50">${count}</div>
          <button id="increase" class="rounded-md border-gray-500 border px-1 py-1 text-gray-50 w-8 hover:bg-green-400 hover:border-none">+</button>
        </div>
        <div class="price flex flex-col">
          <span class="font-bold text-xl text-gray-100">${arrShopping[i].price}$</span>
          <span class="text-gray-400 text-xs">${(arrShopping[i].price * arrShopping[i].selectPrice).toFixed()} ${arrShopping[i].newSelect}</span>
        </div>
        <div class="remove ">
          <button onclick=removeItem(${i}) id="remove-btn" class="max-[768px]:justify-center rounded-full bg-red-300 bg-opacity-10 py-1.5 px-4 text-red-600 flex items-center gap-1 hover:bg-opacity-30">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-red-600">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>                          
            Remove
          </button>
      </div>
      </div>
  </div>
  `
      }
    document.querySelector('#parent-scroll').innerHTML = itemCart;
    allPrices = arrPrices.reduce(add, 0);
    prices.innerHTML = `${allPrices.toFixed(1)}$`;
    secondtotal = `Total: ${Number(allPrices + allPrices * 2 / 100)}$`;
    total_1.innerHTML = secondtotal;
    if (arrShopping.length > 1) {
      document.querySelector('#remove-btn-all').classList.add('flex');
      document.querySelector('#remove-btn-all').classList.remove('hidden');
    }else {
      document.querySelector('#remove-btn-all').classList.add('hidden');
    }
    increase_2();

    minus_2();
}


if (document.querySelector('#parent-scroll').innerHTML != '') {
  allPrices = arrPrices.reduce(add, 0);
  prices.innerHTML = `${allPrices}$`;
  total_1.innerHTML = secondtotal
  for (let i = 0; i < arrShopping.length; i++) {
    arrPrices.push(arrShopping[i].price);    
  }
  discountInput.oninput = () => {
    if (discountInput.value != '') {
      for (let i = 0; i < newArryDiscount.length; i++) {
          if (discountInput.value == newArryDiscount[i].code) {
            console.log(newArryDiscount[i].disCode);
            statDis = newArryDiscount[i].disCode;
            stat = newArryDiscount[i].code
          }
        }
    }
    setTimeout(() => {
      if (discountInput.value.length >= 2) {
        if (discountInput.value == stat) {
          total = Number(((parseInt(prices.innerHTML)) + (parseInt(prices.innerHTML) * 2 / 100) - (parseInt(prices.innerHTML) * statDis / 100)).toFixed(1));
          total_1.innerHTML = `Total: ${total}$`;
          correct.classList.remove('hidden');
          correct.children[0].classList.remove('border-red-500');
          correct.children[0].classList.remove('text-red-400');
          correct.children[0].innerHTML = 'code is correct';
          discountDiv.children[1].innerHTML = `${statDis}%`;
        }else {
          total_1.innerHTML = `Total: ${Number(parseInt(prices.innerHTML) + parseInt(prices.innerHTML) * 2 / 100)}$`;
          correct.classList.remove('hidden');
          console.log('not');
          correct.children[0].classList.add('border-red-500')
          correct.children[0].classList.add('text-red-400')
          correct.children[0].innerHTML = 'code not correct';
          discountDiv.children[1].innerHTML = '0%';
        }  
      }else if (discountInput.value.length <= 1) {  
        correct.classList.add('hidden');
      }
    }, 0);
  }
  
}

function add(accumulator, a) {
  return accumulator + a;
}


function addProductToSh() {
  let minuts =  new Date().getMinutes()
  if (minuts < 10) {
    minuts = `0${minuts}`
  }
  let dates = [new Date().getFullYear(), new Date().getDate(), new Date().getMonth()+1, new Date().getHours(), minuts];

  let objectShopping = {
    img: image,
    price: pric,
    title: title,
    selectPrice: selectPrice,
    newSelect: newSelect.toUpperCase(),
    date: `${dates[0]}/${dates[2]}/${dates[1]} - ${dates[3]}:${dates[4]}`
  }

  arrShopping.push(objectShopping);

  arrPrices.push(objectShopping.price);
    
  localStorage.setItem('shoppingItem', JSON.stringify(arrShopping));

  
  addProductToShoppingCartLocalStorage();
}

addProductToShoppingCartLocalStorage();

function removeItem(i_2) {
  arrPrices.splice(i_2, 1);
  allPrices -= arrShopping[i_2].price;
  arrShopping.splice(i_2, 1);
  localStorage.shoppingItem = JSON.stringify(arrShopping);
  addProductToShoppingCartLocalStorage();
  i--
  localStorage.setItem('i', i);
  countShoppingCart.innerHTML = localStorage.getItem('i');
  items.innerHTML = `items: ${localStorage.getItem('i')}`;
}

function checkout_1() {
  checkout.addEventListener("click",  () => {
    if (arrShopping.length > 0) {
      closeShoppingCart();
    }
    openPayForm();
  })
}

checkout_1();

function lastBuy() {
  buyBtn.addEventListener("click", () => {
    checkInputs();
  })
}

function getFetch() {
  // const response = await fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=dff1a201cece4bf8a5e2d92e2b45b944");
  // const jsonData = await response.json();
  let priceEgp = 30.8;
  let priceSar = 3.7;
  let priceAed = 3.7;
  let priceKwd = 0.3;
  // Number(jsonData.rates["SAR"]).toFixed(1)
  // Number(jsonData.rates["EGP"]).toFixed(1)
  // Number(jsonData.rates["KWD"]).toFixed(1)
  // Number(jsonData.rates["AED"]).toFixed(1)
  newArrySelection = [priceEgp, priceSar, priceAed, priceKwd];
}
function selectedBox() {
  for (let i = 0; i < selectParent.options.length; i++) {
    if (selectParent.options[i].selected == true) {
        newSelect = selectParent.options[i].innerHTML;
        selectPrice = Number(newArrySelection[i]);
      }
    }
}
  function getChildAny() {
    anyProduct.children[0].classList.add('border-2');
    anyProduct.children[0].classList.add('border-sky-400')
    for (let x = 0; x < anyProduct.children.length; x++) {
      anyProduct.children[x].children[0].onclick = () => {
        setTimeout(() => {
          document.querySelectorAll('.any').forEach((ele) => {
            ele.classList.remove('border-sky-400');
            ele.classList.remove('border-2');
          })
          anyProduct.children[x].classList.add('border-sky-400');
          anyProduct.children[x].classList.add('border-2');
        }, 0);
        document.querySelector('.product-image').innerHTML = `<img loading="lazy" class="w-full object-scale-down" style="height: 40vh" src=${anyProduct.children[x].children[0].src} alt="image description">`
      }
    }
  }
  function increaseingCountOfShoppingCartHidder() {
    addToCart.onclick = () => {
          i++
          localStorage.setItem('i', i);
          countShoppingCart.innerHTML = localStorage.getItem('i');
          items.innerHTML = `items: ${localStorage.getItem('i')}`
          alert_1.classList.add('left-0');
          alert_1.style.left = '0';
          alert_1.classList.add('before:w-full');
          setTimeout(() => {
            alert_1.classList.remove('left-0');
            alert_1.classList.remove('before:w-full');
            alert_1.style.left = '-150%';
          }, 6000);
      addProductToSh();
  }
  }

  items.innerHTML = `items: ${localStorage.getItem('i')}`
    if (localStorage.getItem('i') != null) {
      countShoppingCart.innerHTML = localStorage.getItem('i');
    }else {
      i = 0;
      countShoppingCart.innerHTML = 0;
      items.innerHTML = 0;
    }
    if (localStorage.getItem('i') == null) {
      items.innerHTML = `items: 0`;
    }

  
i = localStorage.getItem('i');

function increase_2() {
  for (let i = 0; i < document.querySelectorAll('#increase').length; i++) {
    document.querySelectorAll('#increase')[i].addEventListener("click", () => {
      if (+document.querySelectorAll('.screen-1-count')[i].innerHTML < 10) {
        +document.querySelectorAll('.screen-1-count')[i].innerHTML++
         prices.innerHTML =  parseInt(prices.innerHTML) + arrShopping[i].price;
         setTimeout(() => {
          total_1.innerHTML = `Total: ${Number(parseInt(prices.innerHTML) + parseInt(prices.innerHTML) * 2 / 100)}$`;
         }, 0);
      }
    })
  }
}

function minus_2() { 
  for (let i = 0; i < document.querySelectorAll('#minus').length; i++) {
    document.querySelectorAll('#minus')[i].addEventListener("click", () => {
      if (+document.querySelectorAll('.screen-1-count')[i].innerHTML > 0) {
        +document.querySelectorAll('.screen-1-count')[i].innerHTML--
        prices.innerHTML =  parseInt(prices.innerHTML) - arrShopping[i].price;
        setTimeout(() => {
         total_1.innerHTML = `Total: ${Number(parseInt(prices.innerHTML) + parseInt(prices.innerHTML) * 2 / 100)}$`;
        }, 0);
      }
    })
  }
}


fetch("main.json").then((ele) => {
    return ele.json();
}).then((result) => {
    for (let i = 0; i < result.items.length; i++) {
        parent_cards.innerHTML += `
            <div id="card" class="flex flex-col gap-2 p-4 rounded-lg border border-gray-500 overflow-hidden h-fit">
                <div class="img -m-4">
                    <img class="max-w-full w-80 h-60 object-cover" loading="lazy" src="${result.items[i].fields.image.fields.file.url}" alt="phone-1">
                </div>
                <div class="title m-4 ml-0">
                    <h1 class="font-bold text-gray-100  text-xl">${result.items[i].fields.title}</h1>
                </div>
                <div class="flex items-center flex-row-reverse justify-end" id="parent-stars">                    

                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3"  id="number-off-stars">${result.items[i].fields.numOfStar}.0</span>
                </div>
                <div class="flex items-center justify-between mt-2">
                    <span class="text-2xl font-bold text-gray-900 dark:text-white">${result.items[i].fields.price}$</span>
                    <button id="show" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Show</button>
                </div>
            </div>
        `
    }
     function appendStar() {
        for (let i = 0; i < result.items.length; i++) {
            arrNumStar.push(result.items[i].fields.numOfStar);
            console.log('true');
            for (let x = 0; x < 5 - result.items[i].fields.numOfStar; x++) {
                parent_cards.children[i].children[2].innerHTML += `<svg id="unfill" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>`
            }
            for (let j = 0; j < result.items[i].fields.numOfStar; j++) {
                parent_cards.children[i].children[2].innerHTML +=  `<svg aria-hidden="true" class="fill-1 w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>`
            }
          }   
        }
    
      for (let i = 0; i < result.items.length; i++) {
        document.querySelectorAll('#show')[i].onclick = () => {
          if (window.scrollY >= 950) {
            anyFunction();
          }
          showProductToScreen(result.items[i].fields.image.fields.file.url, result.items[i].fields.title, result.items[i].fields.price);
          image = result.items[i].fields.image.fields.file.url;
          title = result.items[i].fields.title;
          pric = result.items[i].fields.price;

          if (anyProduct.innerHTML != '') {
            anyProduct.innerHTML = '';
          }

          for (let j = 0; j < result.items[i].fields.anyImage.length; j++) {    
              anyProduct.innerHTML += `
                <div class="any overflow-hidden rounded-md cursor-pointer">
                    <img class="w-20 h-12 object-cover" loading="lazy" src=${result.items[i].fields.anyImage[j]} alt="image description">
                </div>
              `
              getChildAny();
            }
              increaseingCountOfShoppingCartHidder();
            }
        }


    discountCodes();
    
    appendStar();

    getFetch();

    selectedBox();
});

window.onscroll = () => {
  if (this.scrollY >= 950) {
    document.querySelector('.totop').classList.remove('hidden');
  anyFunction =  function scrollingMobile() {
      for (let i = 0; i < parent_cards.children.length; i++) {
        window.scrollTo({
          top: 350,
          behavior: 'smooth'
        })
    }
  }
}else {
  document.querySelector('.totop').classList.add('hidden');
}

}

document.querySelector('.totop').onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

let menue = document.querySelector('#menue');
let nav = document.querySelector('#navIgation');

function toggle_hide() {
    menue.classList.toggle('menue');
    nav.classList.toggle('max-[768px]:left-full');
    if (menue.classList.contains('menue')) {
      menue.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>`
    }else {
        menue.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
      `
    }
}

menue.addEventListener("click", toggle_hide);

shoppingCartButton.onclick = () => {
  if (menue.classList.contains('menue') != true) {
    menue.classList.add('menue');
    nav.classList.add('max-[768px]:left-full');
    menue.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>`
  }
  shoppingCart.classList.add('right-0');
  shoppingCart.classList.remove('-right-full');
  overlay_1.classList.remove('hidden');
}

function closeShoppingCart() {
  shoppingCart.classList.add('-right-full');
  shoppingCart.classList.remove('right-0');
  overlay_1.classList.add('hidden');
}

close_1.addEventListener("click", closeShoppingCart);

function openPayForm() {
  if (arrShopping.length > 0) {
  paySection.classList.remove('hidden')
  paySection.innerHTML = ` 
  <svg id="close-pay-form" onclick=closePaySection() xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white absolute right-2 top-2 hover:text-red-600 cursor-pointer duration-0"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>              
  <div class="parent-pop">
      <form class="flex flex-col gap-4" onsubmit="return false">
      <h1 class="font-bold text-center text-gray-100 text-xl max-[768px]:text-lg">Payment Now!</h1>
          <div id="parent-input-1" class="flex gap-1 flex-col">
              <label for="card-number" class="text-gray-100  max-[768px]:text-sm">Card Number</label>
              <input id="card-number" oninput=switchInput_1() type="text" placeholder="xxxx xxxx xxxx xxxx" max="19" class="mt-1 py-1.5 px-2 rounded border border-gray-500 bg-gray-900 bg-opacity-10 text-white caret-gray-100 w-full">
          </div>
          <div id="parent-input-2" class="flex gap-1 flex-col">
              <label for="card-name" class="text-gray-100 max-[768px]:text-sm">Name On Card</label>
              <input id="card-name" type="text" placeholder="Name..." class="mt-1 py-1.5 px-2 rounded border border-gray-500 bg-gray-900 bg-opacity-10 text-white caret-gray-100 w-full">
          </div>
          <div id="parent-input-3" class="flex gap-2 items-center max-[768px]:gap-4 max-[768px]:flex-col ">
              <div class="flex gap-1 flex-col max-[768px]:w-full">
                  <label for="card-date" class="text-gray-100 max-[500px]:text-sm">date</label>
                  <input id="card-date" oninput=switchInput_2() type="text" placeholder="xx/xx" max="5" class="mt-1 py-1.5 px-2 rounded border border-gray-500 bg-gray-900 bg-opacity-10 text-white caret-gray-100 w-full">
              </div>
              <div id="parent-input-4" class="flex gap-1 flex-col max-[768px]:w-full">
                  <label for="card-security" class="text-gray-100 max-[500px]:text-sm">security code</label>
                  <input id="card-security" oninput=switchInput_2() type="text" placeholder="xxx" max="3" class="mt-1 py-1.5 px-2 rounded border border-gray-500 bg-gray-900 bg-opacity-10 text-white caret-gray-100 w-full">
              </div>
          </div>
          <div id="parent-input-5" class="acess flex gap-1 items-center max-[500px]:flex-col">
              <div>
                  <label for="check-1" class="cursor-pointer text-gray-100 max-[500px]:text-sm" style="text-transform: lowercase !important;">accept all rules</label>
                  <input type="checkbox" class="cursor-pointer" id="check-1">
              </div>
          </div>
          <div class="flex gap-1 max-[500px]:flex-col">
              <button id="buy" onclick=buyThis() class="text-white font-bold bg-green-600 px-2 py-2 rounded basis-4/5 hover:bg-green-500 border-none">Buy</button>
              <div class="total-1 rounded px-2 py-2 border border-gray-500 bg-opacity-40 text-green-500  text-center basis-2/4">${total_1.innerHTML}</div>
          </div>
      </form>
  </div>
`
}else {
  document.querySelector('#parent-scroll').innerHTML = `
    <span class="text-red-600 text-center w-full">please add any items</span>
  `
}
}

function closePaySection() {
  paySection.classList.add('hidden');
  paySection.innerHTML = '';
}

function checkInputs() {
  if (paySection.innerHTML != '') {
    if (document.querySelector('#card-number').value != '') {
      console.log('done');
    }else {
      console.log('not done');
    }
  }
}

function switchInput_1() {
  if (document.querySelector('#card-number').value.length == 19) {
     document.querySelector('#card-name').focus();
     input1 = true
    }else {
    input1 = false
    }
  }
  function switchInput_2() {
    if (document.querySelector('#card-date').value.length == 5) {
      document.querySelector('#card-security').focus();
      input2 = true
    }else {
      input2 = false
    }
    if (document.querySelector('#card-security').value.length == 3) {
      document.querySelector('#card-security').blur();
      input3 = true
  }else {
    input3 = false
  }
}

function buyThis() { 
    if (document.querySelector('#card-number').value !=  ''  && document.querySelector('#card-name').value != '' && document.querySelector('#card-date').value != '' && document.querySelector('#card-security').vlaue != '' && document.querySelector('#check-1').checked == true) {
      if (input1 == true && input2 == true && input3 == true) {
        paySection.innerHTML = ` 
        <svg id="close-pay-form" onclick=closePaySection() xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white absolute right-2 top-2 hover:text-red-600 cursor-pointer duration-0"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>              
        <div class="parent-pop w-96 h-96 flex flex-col items-center justify-center gap-4 animate-op max-[768px]:w-full">
                <h1 class="font-bold text-gray-100 text-2xl text-center">Payment is Done</h1>
              <span class="flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-green-500">
               <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>            
        </span>
    `
    deleteAll();
      }
    }
    if (document.querySelector('#card-name').value == '') {
        document.querySelector('#parent-input-2').innerHTML = `
        <label for="card-name" class="text-gray-100 max-[768px]:text-sm">Name On Card</label>
        <span class="text-red-600 text-sm">field this name please try again!</span>
        <input id="card-name" type="text" placeholder="Name..." class="mt-1 max-[768px]:py-1.5 py-3 px-2 rounded border border-gray-500 bg-gray-900 bg-opacity-10 text-white caret-gray-100 w-full border-red-600" value=${document.querySelector('#card-name').value}>
      `
    }else {
      document.querySelector('#parent-input-2').innerHTML = `
      <label for="card-name" class="text-gray-100 max-[768px]:text-sm">Name On Card</label>
      <input id="card-name" type="text" placeholder="Name..." class="mt-1 max-[768px]:py-1.5 py-3 px-2 rounded border border-gray-500 bg-gray-900 bg-opacity-10 text-white caret-gray-100 w-full" value=${document.querySelector('#card-name').value}>
    `
    }
    if (input1 == false){
        document.querySelector('#parent-input-1').innerHTML = `
          <label for="card-number" class="text-gray-100 max-[768px]:py-1.5">Card Number</label>
          <span class="text-red-600 text-sm">field this card please try again!</span>
          <input id="card-number" oninput=switchInput_1() type="text" placeholder="xxxx xxxx xxxx xxxx" max="19" class="mt-1 max-[768px]:py-1.5 py-3 px-2 rounded border border-gray-500 bg-gray-900 bg-opacity-10 text-white caret-gray-100 w-full border-red-600" value=${document.querySelector('#card-number').value}>
          `
    }
      if (input2 == false) {
        document.querySelector('#parent-input-3').innerHTML = `        
        <div class="flex gap-1 flex-col">
        <label for="card-date" class="text-gray-100 max-[768px]:text-sm">date</label>
        <input id="card-date" oninput=switchInput_2() type="text" placeholder="xx/xx" max="5" class="mt-1 max-[768px]:py-1.5 py-3 px-2 rounded border border-gray-500 bg-gray-900 bg-opacity-10 text-white caret-gray-100 w-full border-red-600">
    </div>
    <div id="parent-input-4" class="flex gap-1 flex-col">
        <label for="card-security" class="text-gray-100 max-[768px]:text-sm">security code</label>
        <input id="card-security" oninput=switchInput_2() type="text" placeholder="xxx" max="3" class="mt-1 py-3  max-[768px]:py-1.5 px-2 rounded border border-gray-500 bg-gray-900 bg-opacity-10 text-white caret-gray-100 w-full">
    </div>
        `
    }
      if (input3 == false ) {
        document.querySelector('#parent-input-3').innerHTML = `        
        <div class="flex gap-1 flex-col max-[768px]:w-full">
        <label for="card-date" class="text-gray-100 max-[768px]:text-sm">date</label>
        <input id="card-date" oninput=switchInput_2() type="text" placeholder="xx/xx" max="5" class="mt-1 max-[768px]:py-1.5 py-3 px-2 rounded border border-gray-500 bg-gray-900 bg-opacity-10 text-white caret-gray-100 w-full ">
    </div> 
    <div id="parent-input-4" class="flex gap-1 flex-col max-[768px]:w-full">
        <label for="card-security" class="text-gray-100 max-[768px]:text-sm">security code</label>
        <input id="card-security" oninput=switchInput_2() type="text" placeholder="xxx" max="3" class="mt-1 max-[768px]:py-1.5 py-3 px-2 rounded border border-gray-500 bg-gray-900 bg-opacity-10 text-white caret-gray-100 w-full border-red-600">
    </div>
    `
    }
    if (input2 == false && input3 == false) {
      document.querySelector('#parent-input-3').innerHTML = `        
      <div class="flex gap-1 flex-col max-[768px]:w-full">
      <label for="card-date" class="text-gray-100 max-[768px]:text-sm">date</label>
      <input id="card-date" oninput=switchInput_2() type="text" placeholder="xx/xx" max="5" class="mt-1 py-3 max-[768px]:py-1.5 px-2 rounded border border-gray-500 bg-gray-900 bg-opacity-10 text-white caret-gray-100 w-full border-red-600">
  </div>
  <div id="parent-input-4" class="flex gap-1 flex-col max-[768px]:w-full">
      <label for="card-security" class="text-gray-100 max-[768px]:text-sm">security code</label>
      <input id="card-security" oninput=switchInput_2() type="text" placeholder="xxx" max="3" class="mt-1 py-3 max-[768px]:py-1.5 px-2 rounded border border-gray-500 bg-gray-900 bg-opacity-10 text-white caret-gray-100 w-full border-red-600">
  </div>
  `
    }

    if (document.querySelector('#check-1').checked != true) {
      document.querySelector('#parent-input-5').innerHTML = `
      <div>
          <label for="check-1" class="cursor-pointer text-gray-100 max-[768px]:text-sm" style="text-transform: lowercase !important;">accept all rules</label>
          <input type="checkbox" class="cursor-pointer" id="check-1">
      </div>
      <span class="text-red-600 text-sm">check this to accept pay</span>
      `
    }
}

function deleteAll(btn) {
  arrPrices.splice(0);
  allPrices = `0$`;
  arrShopping.splice(0);
  localStorage.shoppingItem = JSON.stringify(arrShopping);
  addProductToShoppingCartLocalStorage();
  i = 0
  localStorage.setItem('i', i);
  countShoppingCart.innerHTML = localStorage.getItem('i');
  items.innerHTML = `items: ${localStorage.getItem('i')}`;
}

window.addEventListener('load', () => {
  document.querySelector('.parentLoad').style.display = 'none';
})


