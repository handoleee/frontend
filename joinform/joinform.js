function idCheck(){
    var exp = /^(?=.*[a-z])(?=.*\d)[a-z\d]{6,10}$/;
    var id = document.getElementById('id').value;
    var idResult = document.getElementById('id-check-result');
    
    if(id.length==0){
        idResult.style.color = 'red';
        idResult.innerHTML = '필수입력입니다.'
    }
    else if(!id.match(exp)){
        idResult.style.color = 'red';
        idResult.innerHTML = '형식에 맞지 않습니다.';
    }
}
function pwCheck(){
    var exp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!#$*])[A-Za-z\d$@!%*#?&]{8,16}$/;
    var pw = document.getElementById('pw').value;
    var pwCheck = document.getElementById('pw-check-result');
    if(pw.length==0){
        pwCheck.style.color = 'red';
        pwCheck.innerHTML = '필수입력입니다.';
    }
    else if(!pw.match(exp)){
        pwCheck.style.color = 'red';
        pwCheck.innerHTML = '형식에 맞지 않습니다.';
    }
}
function pwConfirm(){
    var pw = document.getElementById('pw').value;
    var pwConfirm = document.getElementById('pw-confirm').value;
    var confirmResult = document.getElementById('pw-confirm-result');
    
    if(pw==pwConfirm){
        confirmResult.style.color = 'green';
        confirmResult.innerHTML = '일치합니다.';
    }
    else{
        confirmResult.style.color = 'red';
        confirmResult.innerHTML = '일치하지 않습니다.';
    }
}
function nameCheck(){
    var name = document.getElementById('name').value;
    var nameResult = document.getElementById('name-check-result');
    if(name.length==0){
        nameResult.style.color = 'red';
        nameResult.innerHTML = '필수입력입니다.';
    }
}
function emailSelect(value){
    document.getElementById('domain').value = value;
}

function phoneCheck(){
    var exp = /^\d{3}-\d{4}-\d{4}$/;
    var phone = document.getElementById('phone');
    var phoneResult = document.getElementById('phone-check-result');
    if(phone.value.length==0){
        phoneResult.style.color = 'red';
        phoneResult.innerHTML = '필수입력입니다.'
    } 
}
