import{i as a,S as m}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const d="41813550-341719f2cbf02751aeba3ddbd",l=document.querySelector(".gallery"),f=document.querySelector(".form"),c=document.querySelector(".loader");f.addEventListener("submit",async o=>{o.preventDefault();const r=o.currentTarget.elements.query.value.trim();try{if(r.length<1)a.info({timeout:5e3,title:"Info",message:"Insufficient number of characters. The minimum number of characters is 1",position:"topRight"});else{o.target.reset(),h(),c.classList.add("is-hidden");const i=await fetch(`https://pixabay.com/api/?key=${d}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`),{hits:s}=await i.json();c.classList.remove("is-hidden"),s.length===0?a.info({timeout:5e3,title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):y(s)}}catch{a.error({timeout:5e3,title:"Error",message:"An error occurred during processing. Please try again ",position:"topRight"})}});let g=new m(".gallery a",{captionDelay:250,captionsData:"alt"});const y=o=>{l.innerHTML=o.reduce((r,{webformatURL:i,largeImageURL:s,tags:e,likes:t,views:n,comments:u,downloads:p})=>r+`

      <li class="gallery-item">
        <a href="${s}">
          <img class="gallery-image" src="${i}" alt="${e}"/>
        </a>

      <div class="info-container">
        <p class="p-item">Like <span class="span-item">${t}</span></p>
        <p>Views <span class="span-item">${n}</span></p>
        <p>Comments <span class="span-item">${u}</span></p>
        <p>Downloads <span class="span-item">${p}</span></p>
      </div>
            </li>
    `,""),g.refresh()},h=()=>{l.innerHTML=""};
//# sourceMappingURL=commonHelpers.js.map
