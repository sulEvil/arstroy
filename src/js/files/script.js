// Подключение функционала
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// появление эффектов при скролле
function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.cooperation__point');
  
  for (let elm of elements) {
    observer.observe(elm);
  }
// появление эффектов при скролле

// маска
if(document.getElementById("number")){
  let selector = document.getElementById("number");
  let im = new Inputmask("+7 (999) 999-99-99");
  im.mask(selector);
}
// маска