function e(e){document.body.insertAdjacentHTML("beforeend",'<div class="message">'.concat(e,"</div>"))}function n(e){document.body.insertAdjacentHTML("beforeend",'<div class="message error-message">'.concat(e,"</div>"))}//# sourceMappingURL=index.2e176b23.js.map
document.querySelector(".logo").addEventListener("click",function(){var o=new Promise(function(e){e("Promise was resolved!")}),c=new Promise(function(e,n){n(Error("Promise was rejected!"))});o.then(e).catch(n),c.then(e).catch(function(e){setTimeout(function(){n(e)},3e3)})});
//# sourceMappingURL=index.2e176b23.js.map
