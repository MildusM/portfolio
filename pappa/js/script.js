let parserInput = document.querySelector('#parserInput');
let parserBtn = document.querySelector('#parserBtn');

let successDiv = document.querySelector('.success');
let errorDiv = document.querySelector('.error');
let errorText = document.querySelector('.errorText');

function run(type, symbol){

    // Error handling
    if(parserInput.value == '' && type == 1){
        error('Need To Input Value');
        return;
    }

    if((parserInput.value == 'grad' && type == 1) || (type == 2 && symbol == 'grad')){
        navigator.clipboard.writeText('°');
        parserInput.value = '';
        success();
        return;
    }

    if((parserInput.value == 'diameter' && type == 1) || (type == 2 && symbol == 'diameter')){
        navigator.clipboard.writeText('ø');
        parserInput.value = '';
        success();
        return;
    }
    if((parserInput.value == 'Diameter' && type == 1) || (type == 2 && symbol == 'Diameter')){
        navigator.clipboard.writeText('Ø');
        parserInput.value = '';
        success();
        return;
    }
    else if(type == 1){
        error('No such existing command ');
        return;
    }
}

function success(){
    successDiv.style.display = 'block';
    setTimeout(function(){
        successDiv.style.display = 'none';
    }, 2000);
}

function error(text){
    errorDiv.style.display = 'block';
    errorText.innerHTML = text;
    setTimeout(function(){
        errorDiv.style.display = 'none';
    }, 2000);
}