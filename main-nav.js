let menue = document.querySelector('#menue');
let nav = document.querySelector('#navIgation');

function toggle_hide() {
    menue.classList.toggle('menue');
    nav.classList.toggle('max-[768px]:left-full');
    if (menue.classList.contains('menue')) {
        menue.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>`
    }else {
        menue.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
      `
    }
}

menue.addEventListener("click", toggle_hide);