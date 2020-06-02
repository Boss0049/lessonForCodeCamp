/* 3.2 หลังจากทำระบบฝากเงินให้ธนาคารแล้ว ทางธนาคารจึงอยากให้เรา
ช่วยทำระบบสำหรับถอนตังด้วย โดยมีลักษณะดังนี้ 

ในระบบธนาคาร จะมี บัญชีเงินฝากอยู่ 3บัญชี

บัญชีแรก  เจ้าของชื่อ A id 01 password 123 มีเงิน อยู่ 2000
บัญชีที่สอง เจ้าของชื่อ b id 02 password 456 มีเงินอยู่ 3000
บัญชีที่สาม เจ้าของชื่อ c id 03 password 789 มีเงินอยู่ 4000 

 ผู้ใช้ต้องกรอก id กับ password ให้ถูกต้อง จึงจะสามารถกดตังได้
 กดตังแล้วเงินใน บัญชีต้องลด เงินใน กระเป๋าต้องเพิ่ม

 อัตราค่าบริการ ต่อการกดตัง1ครั้งคือ 50 บาท สำหรับ กดน้อยกว่า 1000 และ 70บาท สำหรับกดมากกว่า 1000

 กำหนดตัวแปรมาให้คือ
 id (prompt)
 password (prompt)
 name
 moneyInBank
 moneyInPocket = 0
 feeRate

 
 โฟลของการทำงาน

 

*/
let id = prompt("Your id");
let password = prompt("Your Password");
let moneyInPocket = 0;
let moneyInBank;
let name;
if (id == 01 && password == 123) {
  name = "A";
  moneyInBank = 2000;
  moneyInPocket = +prompt("กดเงิน");
  moneyInPocket < 1000
    ? (feeRate = 50)
    : moneyInPocket > 1000
    ? (feeRate = 70)
    : "error";
  moneyInBank = moneyInBank - (moneyInPocket + feeRate);
} else if (id == 02 && password == 456) {
  name = "B";
  moneyInBank = 3000;
  moneyInPocket = +prompt("กดเงิน");
  moneyInPocket < 1000
    ? alert((feeRate = 50))
    : moneyInPocket > 1000
    ? (feeRate = 70)
    : "error";
  moneyInBank = moneyInBank - (moneyInPocket + feeRate);
} else if (id == 03 && password == 789) {
  name = "C";
  moneyInBank = 4000;
  moneyInPocket = +prompt("กดเงิน");
  moneyInPocket < 1000
    ? (feeRate = 50)
    : moneyInPocket > 1000
    ? (feeRate = 70)
    : "error";
  moneyInBank = moneyInBank - (moneyInPocket + feeRate);
} else {
  alert("รหัสผิด");
}
alert(`Your name ${name}`);
alert(`Your moneyInBank ${moneyInBank}`);
alert(`Your moneyInPocket ${moneyInPocket}`);
alert(`Your feeRate ${feeRate}`);
