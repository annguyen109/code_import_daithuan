function renderCustomHtml(){const e=window.location.pathname;"/shopping-cart"===e&&hideShoppingCartService(),"/checkout"===e&&queryFormCheckout()}
function hideShoppingCartService(){document.querySelectorAll(".container-summary .debt-amount").forEach(e=>e.style.display="none");const e=document.querySelectorAll(".product-or-service-shopping-cart-v2 .mytab-custom li")[1].style.display = 'none';}
function queryFormCheckout(){["#form-new-shipping-address > div:nth-child(2) > label","#form-new-shipping-address > div:nth-child(3) > div:nth-child(1) > label","#form-new-shipping-address > div:nth-child(4) > div:nth-child(1) > label","#form-new-shipping-address > div.shipping-address-inside.group-selection-wrapper > div:nth-child(1) > label","#form-new-shipping-address > div.shipping-address-inside.group-selection-wrapper > div:nth-child(2) > label","#form-new-shipping-address > div.shipping-address-inside.group-selection-wrapper > div:nth-child(3) > label"].forEach(appendAsterisk)}
function appendAsterisk(e){const t=document.querySelector(e);if(!t)return;const n=document.createElement("span");n.textContent=" *",n.style.color="red",t.appendChild(n)}
function removeLogoMenu(){const e=document.querySelector(".tm-header-menu-language-1 .gs-shop-logo-link"),t=document.querySelector(".tm-header-menu-language-1 .navbar.navbar-expand-lg"),f=document.querySelector('[id*="tm-footer-layout-2"] .payment-wrapper');return e&&(e.style.display="none"),t&&(t.style.padding="1.5rem"),f&&(f.style.display="none"),e&&t&&f}
function setSearchPlaceholder(){const e=document.querySelector(".gs-search-header-modal__search-input");return!!e&&(e.placeholder="Nhập thông tin cần tìm",!0)}
function runInterval(e,t=100){const n=setInterval(()=>{e=e.filter(r=>!r()),0===e.length&&clearInterval(n)},t)}
document.addEventListener("DOMContentLoaded",renderCustomHtml),
window.addEventListener("popstate",renderCustomHtml),
runInterval([setSearchPlaceholder,removeLogoMenu]);
