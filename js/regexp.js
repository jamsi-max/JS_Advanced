document.querySelector('.btn-replace-1').addEventListener('click', () => {
    let str = document.querySelector('.text').innerHTML;
    document.querySelector('.text-replace-1').innerHTML = str.replace(/'/g, '<span>"</span>');
})

document.querySelector('.btn-replace-2').addEventListener('click', () => {
    let str = document.querySelector('.text').innerHTML;
    document.querySelector('.text-replace-2').innerHTML = str.replace(/\B'|'\B/g, '<span>"</span>');
})

class FormValid {
    constructor() {
        this.name = '';
        this.tel = '';
        this.mail = ''; 
    }

    _valid(str, rex) {
        if (rex.test(str)) {
            return str;
        } else {
            return;
        }
    }

    _errorMess(val, tar){
        if (val) {
            document.querySelector(`.err-${tar}`).classList.add('visible');
            document.querySelector(`#${tar}`).classList.remove('err-border');
        } else {
            document.querySelector(`.err-${tar}`).classList.remove('visible');
            document.querySelector(`#${tar}`).classList.add('err-border');
        };
    }

    init(){
        this.name = this._valid(document.querySelector('#name').value, /\b[a-zA-Z]{3,}$/ig);
        this._errorMess(this.name, 'name');
        
        this.name = this._valid(document.querySelector('#tel').value, /^\+7\(\d{3}\)\d{3}-\d{4}$/g);
        this._errorMess(this.name, 'tel');

        this.name = this._valid(document.querySelector('#mail').value, /^[a-z]+\.?-?[a-z]+@[a-z]{2,}\.[a-z]{2,3}$/ig)
        this._errorMess(this.name, 'mail');
    }
}


const formValid = new FormValid();