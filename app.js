document.getElementById('te').onclick = function te(){
    document.getElementById('opis1').style.display = 'none';
    document.getElementById('block-test').style.display = 'block';
    document.getElementById('block-zadach').style.display = 'none';
    document.getElementById('stats').style.display = 'none';
}
document.getElementById('te2').onclick = function te2(){
    document.getElementById('opis1').style.display = 'none';
    document.getElementById('block-test').style.display = 'block';
    document.getElementById('block-zadach').style.display = 'none';
    document.getElementById('stats').style.display = 'none';
}

document.getElementById('osn').onclick = function osn(){
    document.getElementById('opis1').style.display = 'block';
    document.getElementById('block-test').style.display = 'none';
    document.getElementById('block-zadach').style.display = 'none';
    document.getElementById('stats').style.display = 'none';
}

document.getElementById('testBth').onclick = function testBth(){
    document.getElementById('vop').style.display = 'block';
    document.getElementById('vop1').style.display = 'block';
    document.getElementById('naz').style.display = 'block';
    document.getElementById('reset').style.display = 'block';
    document.getElementById('rezult').style.display = 'none';
    document.getElementById('stats').style.display = 'none';
}

document.getElementById('ig').onclick = function ig(){
    document.getElementById('opis1').style.display = 'none';
    document.getElementById('block-test').style.display = 'none';
    document.getElementById('block-zadach').style.display = 'block';
    document.getElementById('stats').style.display = 'none';
}

document.getElementById('st').onclick = function st(){
    document.getElementById('opis1').style.display = 'none';
    document.getElementById('block-test').style.display = 'none';
    document.getElementById('block-zadach').style.display = 'none';
    document.getElementById('stats').style.display = 'block';
}

/*Переключение блоков*/

let p_o = 0; /*Кол-во правильных ответов*/
let age; /*Хронологический возраст*/
let iq = 0; /*Кол-во iq*/
let n = Math.floor(Math.random() * 3) + 8;




document.getElementById('o1_1').onclick = function o1_1(){
    document.getElementById('vop2').style.display = 'block';
    document.getElementById('vop1').style.display = 'none';
}
document.getElementById('o1_2').onclick = function o1_2(){
    document.getElementById('vop2').style.display = 'block';
    document.getElementById('vop1').style.display = 'none';
}
document.getElementById('o1_3').onclick = function o1_3(){
    document.getElementById('vop2').style.display = 'block';
    document.getElementById('vop1').style.display = 'none';
    p_o ++;
    iq = iq + n;
    console.log(iq);
    n = Math.floor(Math.random() * 3) + 8;
}

document.getElementById('o2_1').onclick = function o2_1(){
    document.getElementById('vop3').style.display = 'block';
    document.getElementById('vop2').style.display = 'none';
}
document.getElementById('o2_2').onclick = function o2_2(){
    document.getElementById('vop3').style.display = 'block';
    document.getElementById('vop2').style.display = 'none';
}
document.getElementById('o2_3').onclick = function o2_3(){
    document.getElementById('vop3').style.display = 'block';
    document.getElementById('vop2').style.display = 'none';
    p_o ++;
    iq = iq + n;
    console.log(iq);
    n = Math.floor(Math.random() * 3) + 8;
}

document.getElementById('o3_1').onclick = function o3_1(){
    document.getElementById('vop4').style.display = 'block';
    document.getElementById('vop3').style.display = 'none';
}
document.getElementById('o3_2').onclick = function o3_2(){
    document.getElementById('vop4').style.display = 'block';
    document.getElementById('vop3').style.display = 'none';
    p_o ++;
    iq = iq + n;
    console.log(iq);
    n = Math.floor(Math.random() * 3) + 8;
}
document.getElementById('o3_3').onclick = function o3_3(){
    document.getElementById('vop4').style.display = 'block';
    document.getElementById('vop3').style.display = 'none';
}

document.getElementById('o4_1').onclick = function o4_1(){
    document.getElementById('vop5').style.display = 'block';
    document.getElementById('vop4').style.display = 'none';
}
document.getElementById('o4_2').onclick = function o4_2(){
    document.getElementById('vop5').style.display = 'block';
    document.getElementById('vop4').style.display = 'none';
    p_o ++;
    iq = iq + n;
    console.log(iq);
    n = Math.floor(Math.random() * 3) + 8;
}
document.getElementById('o4_3').onclick = function o4_3(){
    document.getElementById('vop5').style.display = 'block';
    document.getElementById('vop4').style.display = 'none';
}

document.getElementById('o5_1').onclick = function o5_1(){
    document.getElementById('vop6').style.display = 'block';
    document.getElementById('vop5').style.display = 'none';
}
document.getElementById('o5_2').onclick = function o5_2(){
    document.getElementById('vop6').style.display = 'block';
    document.getElementById('vop5').style.display = 'none';
}
document.getElementById('o5_3').onclick = function o5_3(){
    document.getElementById('vop6').style.display = 'block';
    document.getElementById('vop5').style.display = 'none';
    p_o ++;;
    iq = iq + n;
    console.log(iq);
    n = Math.floor(Math.random() * 3) + 8;
}

document.getElementById('o6_1').onclick = function o6_1(){
    document.getElementById('vop7').style.display = 'block';
    document.getElementById('vop6').style.display = 'none';
    p_o ++;
    iq = iq + n;
    console.log(iq);
    n = Math.floor(Math.random() * 3) + 8;
}
document.getElementById('o6_2').onclick = function o6_2(){
    document.getElementById('vop7').style.display = 'block';
    document.getElementById('vop6').style.display = 'none';
}
document.getElementById('o6_3').onclick = function o6_3(){
    document.getElementById('vop7').style.display = 'block';
    document.getElementById('vop6').style.display = 'none';
}

document.getElementById('o7_1').onclick = function o7_1(){
    document.getElementById('vop8').style.display = 'block';
    document.getElementById('vop7').style.display = 'none';
    p_o ++;
    iq = iq + n;
    console.log(iq);
    n = Math.floor(Math.random() * 3) + 8;
}
document.getElementById('o7_2').onclick = function o7_2(){
    document.getElementById('vop8').style.display = 'block';
    document.getElementById('vop7').style.display = 'none';
}
document.getElementById('o7_3').onclick = function o7_3(){
    document.getElementById('vop8').style.display = 'block';
    document.getElementById('vop7').style.display = 'none';
}

document.getElementById('o8_1').onclick = function o8_1(){
    document.getElementById('vop9').style.display = 'block';
    document.getElementById('vop8').style.display = 'none';
}
document.getElementById('o8_2').onclick = function o8_2(){
    document.getElementById('vop9').style.display = 'block';
    document.getElementById('vop8').style.display = 'none';
    p_o ++;
    iq = iq + n;
    console.log(iq);
    n = Math.floor(Math.random() * 3) + 8;
}
document.getElementById('o8_3').onclick = function o8_3(){
    document.getElementById('vop9').style.display = 'block';
    document.getElementById('vop8').style.display = 'none';
}

document.getElementById('o9_1').onclick = function o9_1(){
    document.getElementById('vop10').style.display = 'block';
    document.getElementById('vop9').style.display = 'none';
}
document.getElementById('o9_2').onclick = function o9_2(){
    document.getElementById('vop10').style.display = 'block';
    document.getElementById('vop9').style.display = 'none';
    p_o ++;
    iq = iq + n;
    console.log(iq);
    n = Math.floor(Math.random() * 3) + 8;
}
document.getElementById('o9_3').onclick = function o9_3(){
    document.getElementById('vop10').style.display = 'block';
    document.getElementById('vop9').style.display = 'none';
}

document.getElementById('o10_1').onclick = function o10_1(){
    document.getElementById('vop11').style.display = 'block';
    document.getElementById('vop10').style.display = 'none';
}
document.getElementById('o10_2').onclick = function o10_2(){
    document.getElementById('vop11').style.display = 'block';
    document.getElementById('vop10').style.display = 'none';
    p_o ++;
    iq = iq + n;
    console.log(iq);
    n = Math.floor(Math.random() * 3) + 8;
}
document.getElementById('o10_3').onclick = function o10_3(){
    document.getElementById('vop11').style.display = 'block';
    document.getElementById('vop10').style.display = 'none';
}

document.getElementById('o11_1').onclick = function o11_1(){
    document.getElementById('vop12').style.display = 'block';
    document.getElementById('vop11').style.display = 'none';
    p_o ++;
    iq = iq + n;
    console.log(iq);
    n = Math.floor(Math.random() * 3) + 8;
}
document.getElementById('o11_2').onclick = function o11_2(){
    document.getElementById('vop12').style.display = 'block';
    document.getElementById('vop11').style.display = 'none';
}
document.getElementById('o11_3').onclick = function o11_3(){
    document.getElementById('vop12').style.display = 'block';
    document.getElementById('vop11').style.display = 'none';
}

document.getElementById('o12_1').onclick = function o12_1(){
    document.getElementById('vop13').style.display = 'block';
    document.getElementById('vop12').style.display = 'none';
    p_o ++;
    iq = iq + n;
    console.log(iq);
    n = Math.floor(Math.random() * 3) + 8;
}
document.getElementById('o12_2').onclick = function o12_2(){
    document.getElementById('vop13').style.display = 'block';
    document.getElementById('vop12').style.display = 'none';
}
document.getElementById('o12_3').onclick = function o12_3(){
    document.getElementById('vop13').style.display = 'block';
    document.getElementById('vop12').style.display = 'none';
}

document.getElementById('o13_1').onclick = function o13_1(){
    document.getElementById('vop14').style.display = 'block';
    document.getElementById('vop13').style.display = 'none';
}
document.getElementById('o13_2').onclick = function o13_2(){
    document.getElementById('vop14').style.display = 'block';
    document.getElementById('vop13').style.display = 'none';
}
document.getElementById('o13_3').onclick = function o13_3(){
    document.getElementById('vop14').style.display = 'block';
    document.getElementById('vop13').style.display = 'none';
    p_o ++;
    iq = iq + n;
    console.log(iq);
    n = Math.floor(Math.random() * 3) + 8;
}

document.getElementById('o14_1').onclick = function o14_1(){
    document.getElementById('vop15').style.display = 'block';
    document.getElementById('vop14').style.display = 'none';
    p_o ++;
    iq = iq + n;
    console.log(iq);
    n = Math.floor(Math.random() * 3) + 8;
}
document.getElementById('o14_2').onclick = function o14_2(){
    document.getElementById('vop15').style.display = 'block';
    document.getElementById('vop14').style.display = 'none';
}
document.getElementById('o14_3').onclick = function o14_3(){
    document.getElementById('vop15').style.display = 'block';
    document.getElementById('vop14').style.display = 'none';
}


document.getElementById('o15_1').onclick = function o15_1(){
    document.getElementById('rezult').style.display = 'block';
    document.getElementById('vop15').style.display = 'none';
    document.getElementById('naz').style.display = 'none';
    document.getElementById("iq").innerHTML = iq;
    document.getElementById("p_o").innerHTML = p_o;
    
}
document.getElementById('o15_2').onclick = function o15_2(){
    document.getElementById('rezult').style.display = 'block';
    document.getElementById('vop15').style.display = 'none';
    document.getElementById('naz').style.display = 'none';
    p_o ++;
    iq = iq + n;
    console.log(iq);
    document.getElementById("iq").innerHTML = iq;
    document.getElementById("p_o").innerHTML = p_o;
    n = Math.floor(Math.random() * 3) + 8;
}
document.getElementById('o15_3').onclick = function o15_3(){
    document.getElementById('rezult').style.display = 'block';
    document.getElementById('vop15').style.display = 'none';
    document.getElementById('naz').style.display = 'none';
    document.getElementById("iq").innerHTML = iq;
    document.getElementById("p_o").innerHTML = p_o;
}
/*Переключение теста*/

document.getElementById('reset').onclick = function reset(){
    document.getElementById('naz').style.display = 'block';
    document.getElementById('vop1').style.display = 'block';
    document.getElementById('vop2').style.display = 'none';
    document.getElementById('vop3').style.display = 'none';
    document.getElementById('vop4').style.display = 'none';
    document.getElementById('vop5').style.display = 'none';
    document.getElementById('vop6').style.display = 'none';
    document.getElementById('vop7').style.display = 'none';
    document.getElementById('vop8').style.display = 'none';
    document.getElementById('vop9').style.display = 'none';
    document.getElementById('vop10').style.display = 'none';
    document.getElementById('vop11').style.display = 'none';
    document.getElementById('vop12').style.display = 'none';
    document.getElementById('vop13').style.display = 'none';
    document.getElementById('vop14').style.display = 'none';
    document.getElementById('vop15').style.display = 'none';
    document.getElementById('rezult').style.display = 'none';
    iq = 0;
    p_o = 0;
}

document.getElementById('z1').onclick = function z1(){
    window.location = 'NP/index.html';
}

document.getElementById('rezfIQ').onclick = function rezfIQ(){
    document.getElementById('rezfIQ-block').style.display = 'block';
    document.getElementById('rezfGame-block').style.display = 'none';
}

document.getElementById('rezfGame').onclick = function rezfGame(){
    document.getElementById('rezfIQ-block').style.display = 'none';
    document.getElementById('rezfGame-block').style.display = 'block';
}
