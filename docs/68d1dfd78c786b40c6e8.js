import"./main.scss";import"./reset.scss";import"./views/home/home.scss";import"./views/detail/detail.scss";import{router}from"./router/index.routes";const init=()=>{router(window.location.hash),window.addEventListener("hashchange",(()=>{router(window.location.hash)})),"/"===document.location.href.substr(21)&&(location.href="#/")};window.addEventListener("load",init);