/*
3.3 โจทย์ข้อนี้จะลองให้เพื่อนๆออกแบบตัวแปร และโฟลของโคดกันเอง
 ธนาคารต้องการโปรแกรมสำหรับเอาไว้ให้ลูกค้า จ่ายหนี้สินที่ค้างไว้อยู่
โดยในระบบมีคนที่ยืมเงินไป 3 คนคือ
   นาย A  idใบชำระหนี้ 01  ยอดค้างชำระ 2000
   นาย B idใบชำระหนี้ 02  ยอดค้างชำระ 3000
   นาย C idใบชำระหนี้ 03  ยอดค้างชำระ 4000

   ธนาคารต้องการโปรแกรมที่ถามหาidชำระหนี้ และต้องรอให้ลูกค้ายืนยันก่อนว่าเค้าเป็นเจ้าของธุรกรรมโดยแจ้งชื่อเจ้าของไอดีที่กรอกมา
   ถ้ายืนยันว่าเป็นเจ้าของ ระบบจะโชว์ยอดค้างชำระ และ มีการถามถึงยอดที่ต้องการชำระ มีการรอการยืนยีนว่าจะชำระ ถ้ายืนยันการชำระ จะมีการแจ้งยอดหนี้คงเหลือ แล้วกร่าวขอบคุณกับเจ้าของ
   บัญชี

*/

let id = +prompt("Your id");
let invoice = 0;
if (id == 01) {
  let check = confirm("นาย A");
  if (check == true) {
    invoice = 2000;
    payment();
  } else {
    alert("Name incorrect");
  }
} else if (id == 02) {
  let check = confirm("นาย B");
  if (check == true) {
    invoice = 3000;
    payment();
  } else {
    alert("Name incorrect");
  }
} else if (id == 03) {
  let check = confirm("นาย C");
  if (check == true) {
    invoice = 4000;
    payment();
  } else {
    alert("Name incorrect");
  }
}

function payment() {
  let pay = prompt("How much do you want pay invoice?");
  let submit = confirm(`You want to pay ${pay}`);
  if (submit == true) {
    let total = invoice - pay;
    alert(`Balance ${total}`);
    alert(`Thank you`);
  } else {
    alert("log out");
  }
}
