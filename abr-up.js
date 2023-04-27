let domain = document.querySelector("meta[property='og:site_name']").getAttribute("content");
let url = window.location.href.split('/themes/')[0];
let verificaShopify = (url.includes('myshopify') || !domain.includes('.myshopify.com'));

// Adicione aqui os domÃ­nios permitidos, sem o https:// e o .myshopify.com
let dominiosPermitidos = [

  '3910cf',


  
];

if (verificaShopify === true) {
  let dominioShopify = window.Shopify.shop;
  let nomeDominioShopify = dominioShopify.replace('.myshopify.com', '');
  if (!dominiosPermitidos.includes(nomeDominioShopify)) {  
    window.location.href = "https://rawart.com.br/";
  }
}
