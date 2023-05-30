const textWriter = document.querySelector('#writer-effect');
let typeWriterBefore = document.querySelector('#writer-effect');

function typingEffect() {
  setTimeout(() => {
    textWriter.textContent = 'Freelancer'
  }, 0);
  setTimeout(() => {
      textWriter.textContent = 'Web Developer'  
    }, 3950);
    setTimeout(() => {
      textWriter.textContent = 'Frontend'; 
    }, 7950);
}

typingEffect();

setInterval(typingEffect, 12000)

let progress = document.querySelectorAll('#progress');
let spanCount = document.querySelectorAll('#count-width');

progress.forEach((ele) => {
  ele.style.width = ele.dataset.width;
})
for (let i = 0; i < spanCount.length; i++) {
 let cle = setInterval(() => {
    spanCount[i].innerHTML++
    if(parseInt(spanCount[i].innerHTML) == parseInt(progress[i].dataset.width)) {
      clearInterval(cle)
    }
    // = progress[i].dataset.width
  }, 10);
}
