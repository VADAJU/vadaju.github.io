function copiaralportapapeles1(){
    let texto1 = document.getElementById('texto1');
    texto1.select();
    texto1.setSelectionRange(0, 99999);
    document.execCommand('copy');
}

function copiaralportapapeles2(){
    let texto2 = document.getElementById('texto2');
    texto2.select();
    texto2.setSelectionRange(0, 99999);
    document.execCommand('copy');
}

function copiaralportapapeles3(){
    let texto3 = document.getElementById('texto3');
    texto3.select();
    texto3.setSelectionRange(0, 99999);
    document.execCommand('copy');
}