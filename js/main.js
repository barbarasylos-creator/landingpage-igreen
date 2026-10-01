// IGreen Energy Rio Pardo — comportamento da página

(function () {
  "use strict";

  var NUMERO_WHATSAPP = "5519993109339";

  function montarLinkWhatsapp(mensagem) {
    return "https://wa.me/" + NUMERO_WHATSAPP + "?text=" + encodeURIComponent(mensagem);
  }

  function preencherLinksWhatsapp() {
    var elementos = document.querySelectorAll("[data-wa-msg]");
    elementos.forEach(function (el) {
      el.href = montarLinkWhatsapp(el.getAttribute("data-wa-msg"));
    });
  }

  function configurarMenuMobile() {
    var botao = document.querySelector(".botao-menu");
    var nav = document.querySelector(".nav-principal");
    if (!botao || !nav) return;

    botao.addEventListener("click", function () {
      var aberto = nav.classList.toggle("aberto");
      botao.setAttribute("aria-expanded", aberto ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("aberto");
        botao.setAttribute("aria-expanded", "false");
      });
    });
  }

  function atualizarAnoRodape() {
    var el = document.querySelector("[data-ano-atual]");
    if (el) el.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", function () {
    preencherLinksWhatsapp();
    configurarMenuMobile();
    atualizarAnoRodape();
  });
})();
