function change_1(){
    let radio_1 = document.querySelector('#bordered-radio-1');
    let radio_2 = document.querySelector('#bordered-radio-2');
    radio_1.addEventListener('change', (e) => {
        if (e.target.checked) {
            document.querySelector('#parent-male').classList.add('border-sky-400');
            document.querySelector('#parent-male-2').classList.remove('border-sky-400');
        }
    })
    radio_2.addEventListener('change', (e) => {
        if (e.target.checked) {
            document.querySelector('#parent-male-2').classList.add('border-sky-400');
            document.querySelector('#parent-male').classList.remove('border-sky-400');
        }
    })
}

change_1();