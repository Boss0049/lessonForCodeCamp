/*1.3 ทดสอบการแก้ปัญหาเวลาเจอบัคด้วยตัวเอง จงหาเหตุผลและแก้ไขปัญหาต่อไปนี้
  ธนาคารแห่งหนึ่ง พบว่าระบบของ online banking มีปัญหา ลูกค้าใส่รหัสแล้ว บัคเงินไม่โอนออกมาจากแบงค์
  โดยมีตัวแปลมาให้ คือ 
  
  bankAccount เงินในธนาคาร
  moneyInYourPocket เงินในกระเป๋าลูกค้า
  inputYourPassword ให้ลูกค้าใส่รหัส
  passwordBankAccount รหัสถอนเงินของลูกค้า

  */
let bankAccount = 3000;
let moneyInYourPocket = 0;
let inputYourPassword = +prompt("Enter your password to take your money");
let passwordBankAccount = 7789;

if (inputYourPassword === passwordBankAccount) {
  moneyInYourPocket += bankAccount; //กดเงินออกจากแบงค์เข้ากระเป๋า
  bankAccount -= moneyInYourPocket; //เงินในแบงค์ก็ต้องลดเท่ากับที่กดออกไป
}

alert("this is money in bank now" + bankAccount); //จะเห็นได้ว่า ตังเท่าเดิม
alert("this is money in pocket now" + moneyInYourPocket); //จะเห็นได้ว่าเงินในกระเป๋า ไม่เพิ่ม
