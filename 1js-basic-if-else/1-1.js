/* 1.1 มี  ตัวแปร ให้อยู่ 2ตัว คือ  age และ  moneyInPocket 
จงเขียนเงื่อนไข  ว่าถ้า อายุน้อยกว่า 18 ให้ เพิ่ม monneyInPocket 2000
  ถ้าอายุมากกว่านั้น ให้เพิ่ม  1000 แล้วลอง console log ผลลัพออกมาดู*/

let age = prompt("ใส่อายุของคุณห้ามโกหกนะ");
let moneyInPocket = 3000;

if (age > 18) {
  moneyInPocket += 2000;
} else {
  moneyInPocket += 1000;
}

console.log(moneyInPocket);
