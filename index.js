function renderCustomHtml() {
  const e = window.location.pathname;
  if (e === "/shopping-cart") hideShoppingCartService();
  if (e === "/checkout") queryFormCheckout();
}

function hideShoppingCartService() {
  document.querySelectorAll(".container-summary .debt-amount").forEach(el => {
    el.style.display = "none";
  });

  const tab = document.querySelectorAll(".product-or-service-shopping-cart-v2 .mytab-custom li")[1];
  if (tab) tab.style.display = "none";
}

function queryFormCheckout() {
  const selectors = [
    "#form-new-shipping-address > div:nth-child(2) > label",
    "#form-new-shipping-address > div:nth-child(3) > div:nth-child(1) > label",
    "#form-new-shipping-address > div:nth-child(4) > div:nth-child(1) > label",
    "#form-new-shipping-address > div.shipping-address-inside.group-selection-wrapper > div:nth-child(1) > label",
    "#form-new-shipping-address > div.shipping-address-inside.group-selection-wrapper > div:nth-child(2) > label",
    "#form-new-shipping-address > div.shipping-address-inside.group-selection-wrapper > div:nth-child(3) > label"
  ];

  selectors.forEach(appendAsterisk);
}

function appendAsterisk(selector) {
  const label = document.querySelector(selector);
  if (!label) return;

  const asterisk = document.createElement("span");
  asterisk.textContent = " *";
  asterisk.style.color = "red";
  label.appendChild(asterisk);
}

function customHtmlMenu() {
  let updated = false;

  const logo = document.querySelector(".tm-header-menu-language-1 .gs-shop-logo-link");
  alert('Kiếm đc logo')
  if (logo) {
    logo.style.display = "none";
    updated = true;
  }
   
  const header = document.querySelector(".tm-header-menu-language-1 .navbar.navbar-expand-lg");
  alert('Kiếm đc header')
  if (header) {
    header.style.padding = "1.5rem";
    updated = true;
  }

  const paymentWrapper = document.querySelector('[id*="tm-footer-layout-2"] .payment-wrapper');
  alert('Kiếm đc paymentWrapper')
  if (paymentWrapper) {
    paymentWrapper.style.display = "none";
    updated = true;
  }

  const smHeads = document.querySelectorAll('[id*="tm-footer-layout-2"] .contact .sm-head');
  alert('Kiếm đc smHeads')
  
  if (smHeads.length > 0) {
    smHeads[0].innerHTML = '<span class="fa fa-phone"></span>Số điện thoại';
    updated = true;
  }

  const iconWrapper = document.querySelectorAll('[id*="tm-footer-layout-2"] .icon-wrapper');
  alert('Kiếm đc iconWrapper')
  if(iconWrapper.length > 0) {
    iconWrapper.forEach(wrapper => {
        wrapper.insertAdjacentHTML('beforeend', `
          <a href="https://www.tiktok.com/@thuysandaithuan" target="_blank" rel="noopener noreferrer">
            <img class="icon" src="https://d3a0f2zusjbf7r.cloudfront.net/30a93659-a27f-411d-a07c-a88d6de76749.png" alt="tiktok">
          </a>
        `);
      });
    updated = true;
  }

  return updated;
}

function customHtmlFooter() {
  let updated = false;

  const paymentWrapper = document.querySelector('[id*="tm-footer-layout-2"] .payment-wrapper');
  if (paymentWrapper) {
    paymentWrapper.style.display = "none";
    updated = true;
  }

  const smHeads = document.querySelectorAll('[id*="tm-footer-layout-2"] .contact .sm-head');
  if (smHeads.length > 0) {
    smHeads[0].innerHTML = '<span class="fa fa-phone"></span>Số điện thoại';
    updated = true;
  }

  const iconWrapper = document.querySelectorAll('[id*="tm-footer-layout-2"] .icon-wrapper')

  if(iconWrapper.length > 0) {
    iconWrapper.forEach(wrapper => {
        wrapper.insertAdjacentHTML('beforeend', `
          <a href="https://www.tiktok.com/@thuysandaithuan" target="_blank" rel="noopener noreferrer">
            <img class="icon" src="https://d3a0f2zusjbf7r.cloudfront.net/30a93659-a27f-411d-a07c-a88d6de76749.png" alt="tiktok">
          </a>
        `);
      });
    updated = true;
  }
  

  return updated;
}

function setSearchPlaceholder() {
  const input = document.querySelector(".gs-search-header-modal__search-input");
  
  if (!input) return false;

  input.placeholder = "Nhập thông tin cần tìm";
  return true;
}

function runInterval(fns, t = 100) {
  const interval = setInterval(() => {
    fns = fns.filter(fn => !fn());
    if (fns.length === 0) clearInterval(interval);
  }, t);
}

document.addEventListener("DOMContentLoaded", renderCustomHtml);
window.addEventListener("popstate", renderCustomHtml);
runInterval([setSearchPlaceholder, customHtmlMenu]);
