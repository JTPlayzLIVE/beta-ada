!function(){"use strict";function e(e,n=!0){const a=document.getElementById("search-results").innerHTML;document.getElementById("search-results").innerHTML=n?a+e:e}const n=20;function a(e,n=null){const a=new URLSearchParams(window.location.search||n).get(e);return null!==a?a:""}function t(e,n,t){const s=a("offset");let i="",r="false";return s!==e&&e===t[t.length-1]?i="Last page; Page "+(n+1):s!==e&&(i="Page "+(n+1)),s===e&&(r="true"),`<li class="usa-pagination__item usa-pagination__page-no display-none tablet:display-block">\n      <a\n        href="?${function(e,n,a=null){const t=new URLSearchParams(window.location.search||a);return t.set(e,n),t.toString()}("offset",e)}"\n        class="usa-pagination__button bg-primary-darker"\n        aria-label="${i}""\n        aria-current=${r}\n        data-offset=${e}\n      >\n        ${n+1}\n      </a>\n    </li>`}function s(s,i,r){const l=s,o=l.text_best_bets,u=l.web.results;let c=l.web.total;if(o.length&&o.forEach((function(n){var a;e(`\n    <li class="padding-bottom-5 margin-top-4 usa-prose border-bottom-05 border-base-lightest">\n      <b class="title"><a href="${(a=n).url}">${a.title.replace(/\uE000/g,'<span class="bg-yellow">').replace(/\uE001/g,"</span>")}</a></b>\n      <div class="text-base"> ${a.url} </div>\n      <div> ${a.description.replace(/\uE000/g,'<span class="bg-yellow">').replace(/\uE001/g,"</span>")} </div>\n    </li>\n    `)})),u.length){null===i.get("offset")&&i.set("offset",0),c>1e3&&(c=1e3);const s=document.querySelectorAll("ol.usa-pagination__list")[0];u.forEach((function(n){var a;e(`\n        <li class="padding-bottom-5 margin-top-4 usa-prose border-bottom-05 border-base-lightest">\n        <b class="title"><a href="${(a=n).url}">${a.title.replace(/\uE000/g,'<span class="bg-yellow">').replace(/\uE001/g,"</span>")}</a></b>\n      <div class="text-base content-url"> ${a.url} </div>\n      <div> ${a.snippet.replace(/\uE000/g,'<span class="bg-yellow">').replace(/\uE001/g,"</span>")} </div>\n      </li>\n`)}));const o=function(e,s){const i=parseInt(s.get("offset"));return function(e){const n=parseInt(a("offset"));let t;t=e.indexOf(n)>=0?e.indexOf(n)+1:e.indexOf(n)+2;const s=`${t} of ${e.length}`,i=document.createElement("p"),r=document.createTextNode(s);i.appendChild(r),i.classList.add("margin-left-205"),document.getElementById("pagination-nav").append(i)}(e),e.length<=7?`\n        <li class="usa-pagination__item usa-pagination__arrow display-flex">\n    <a\n      href="javascript:void(0);"\n      class="usa-pagination__link usa-pagination__previous-page"\n      aria-label="Previous page"\n    >\n      <svg class="usa-icon" aria-hidden="true" role="img">\n        <use xlink:href="/assets/img/sprite.svg#navigate_before"></use>\n      </svg>\n\n      <span class="usa-pagination__link-text">Previous Page</span>\n    </a>\n  </li>\n        ${e.map((function(e,n,a){return t(e,n,a)})).join(" ")}\n        <li class="usa-pagination__item usa-pagination__arrow display-flex">\n          <a\n            href="javascript:void(0);"\n            class="usa-pagination__link usa-pagination__next-page"\n            aria-label="Next page"\n          >\n            <span class="usa-pagination__link-text"> Next Page </span>\n\n            <svg class="usa-icon" aria-hidden="true" role="img">\n              <use xlink:href="/assets/img/sprite.svg#navigate_next"></use>\n            </svg>\n          </a>\n          </li>`:`\n        <li class="usa-pagination__item usa-pagination__arrow display-flex">\n    <a\n      href="javascript:void(0);"\n      class="usa-pagination__link usa-pagination__previous-page"\n      aria-label="Previous page"\n    >\n      <svg class="usa-icon" aria-hidden="true" role="img">\n        <use xlink:href="/assets/img/sprite.svg#navigate_before"></use>\n      </svg>\n\n      <span class="usa-pagination__link-text">Previous Page</span>\n    </a>\n  </li>\n        ${t(e[0],0,e)}\n        ${0===i||20===i||40===i?"":'<li\n    class="usa-pagination__item usa-pagination__overflow display-none tablet:display-block"\n    role="none"\n    tabindex=\'-1\'\n  >\n    <span class="text-bold"> … </span>\n  </li>'}\n        ${e.map((function(a,r,l){if(0===r||r===e.indexOf(e[e.length-1]));else{if(o=a,0===(u=i)&&(o===u+n||o===u+40||o===u+60))return t(a,r,l);if(function(e,a){return a===n&&(e===a||e===a+n||e===a+40)}(a,i))return t(a,r,l);if(function(e,a,t){return a===t[t.length-2]&&(e===a||e===a-n||e===a-40)}(a,i,e))return t(a,r,l);if(function(e,a,t){return a===t[t.length-1]&&(e===a-n||e===a-40||e===a-60)}(a,i,e))return t(a,r,l);if(function(e,a,t){return e.get("offset")&&(a===t||a===t-n||a===t+n)}(s,a,i))return t(a,r,l)}var o,u})).join(" ")}\n        ${i===e[e.length-1]||i===e[e.length-2]||i===e[e.length-3]?"":'<li\n    class="usa-pagination__item usa-pagination__overflow display-none tablet:display-block"\n    role="none"\n    tabindex=\'-1\'\n  >\n    <span class="text-bold"> … </span>\n  </li>'}\n        ${t(e[e.length-1],e.indexOf(e[e.length-1]),e)}\n        <li class="usa-pagination__item usa-pagination__arrow display-flex">\n          <a\n            href="javascript:void(0);"\n            class="usa-pagination__link usa-pagination__next-page"\n            aria-label="Next page"\n          >\n            <span class="usa-pagination__link-text"> Next Page </span>\n\n            <svg class="usa-icon" aria-hidden="true" role="img">\n              <use xlink:href="/assets/img/sprite.svg#navigate_next"></use>\n            </svg>\n          </a>\n          </li>`}(function(e,n,a){const t=[];if(0===n)return t.push(0);n%a==0&&(n-=a);for(let e=0;e<=n;e+=a)t.push(e);return t}(0,c,r),i);s.innerHTML=o,function(){const e=document.querySelectorAll("a.usa-pagination__button"),n=Array.prototype.slice.call(e),t=a("offset");n.forEach((function(e){""===t&&"0"===e.dataset.offset&&(e.classList.add("usa-current"),e.setAttribute("aria-current","true")),e.dataset.offset===t&&(e.classList.add("usa-current"),e.setAttribute("aria-current","true"))}))}();const p=document.querySelector(".usa-pagination__previous-page"),g=document.querySelector(".usa-pagination__next-page"),d=i.get("offset");c>r&&(document.getElementById("pagination-nav").removeAttribute("hidden"),d>0?(i.set("offset",d-r),p.href=`?${i.toString()}`,p.ariaDisabled="false",p.tabIndex=0):(p.setAttribute("disabled","true"),p.ariaDisabled="true",p.tabIndex=-1),l.web.next_offset?(i.set("offset",l.web.next_offset),g.href=`?${i.toString()}`,g.ariaDisabled="false",g.tabIndex=0):(g.setAttribute("disabled","true"),g.ariaDisabled="true",g.tabIndex=-1))}if(0==document.getElementById("search-results").childNodes.length)e('<li role="status" class="h4" style="list-style: none">No results found</li>',!1);else{document.querySelector(".crt-landing--separator_small").insertAdjacentHTML("afterend",function(e=0,n="results"){const a=`<div markdown="0" role="status"><p class="total-results margin-y-0">${e} ${n}s found</p></div>`,t=`<div markdown="0" role="status"><p class="total-results margin-y-0">${e} ${n} found</p></div>`,s=`<div markdown="0" role="status"><p class="total-results margin-y-0">No ${n}s found</p></div>`;return null===n&&(n="results"),e>1?a:1===e?t:e<1||null===e?s:void 0}(c,"Result"));const e=document.querySelectorAll(".content-url");Array.prototype.forEach.call(e,(function(e){const n=function(e){return e.split("//").map((function(e){return e.replace(/(?<after>:)/giu,"$1<wbr>").replace(/(?<before>[/~.,_?#%-])/giu,"<wbr>$1").replace(/(?<equals>=)/giu,"<wbr>$1<wbr>").replace(/(?<ampersand>&amp;)/giu,"<wbr>&<wbr>")})).join("//<wbr>")}(e.innerHTML);return e.innerHTML=n}))}}let i=new URLSearchParams(window.location.search),r=new URL("https://search.usa.gov/api/v2/search/i14y"),l={affiliate:"justice-ada-beta",access_key:"R9JA5YunOBaTGydUNm-oJjGCqKQ-zXsulsNskJVe5-c=",query:i.get("query"),offset:i.get("offset")||0,limit:n};Object.keys(l).forEach((function(e){r.searchParams.append(e,l[e])}));let o=new XMLHttpRequest;o.addEventListener("load",(function(){200===this.status?s(JSON.parse(this.responseText),i,n):e(`${noResults()}`,!1)})),o.open("GET",r),o.timeout=5e3,o.addEventListener("timeout",(function(){e(`${noResults()}`,!1)})),o.send()}();

