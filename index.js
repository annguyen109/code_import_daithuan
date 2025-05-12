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
  const logo = document.querySelector(".tm-header-menu-language-1 .gs-shop-logo-link");
  const header = document.querySelector(".tm-header-menu-language-1 .navbar.navbar-expand-lg");

  if (logo) logo.style.display = "none";
  if (header) header.style.padding = "1.5rem";

  return logo && header;
}

function customHtmlFooter() {
  const paymentWrapper = document.querySelector("#tm-footer-layout-2__MT0XSUDv_tm-footer-layout-2 .payment-wrapper");

  console.log(paymentWrapper, 'footer')

  if (paymentWrapper) {
    paymentWrapper.style.display = "none";
  }

  return paymentWrapper;
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
runInterval([setSearchPlaceholder, customHtmlMenu, customHtmlFooter]);
