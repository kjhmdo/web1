/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/
/*eslint-env browser*/

function viewCurrDate() { // eslint-disable-line no-unused-vars
    document.getElementById('demo').innerHTML = Date();
    //    alert("안녕하세요");
    var name = prompt("이름을 입력하세요");
    alert("입력한 이름은 " + name);

    var ret = confirm("다시 입력하시겠습니까?");
    alert(ret); //true or false 리턴
}
