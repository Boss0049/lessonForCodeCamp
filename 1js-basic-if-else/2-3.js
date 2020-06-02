/* 2.3  ลองตรวจสอบว่าข้อ  2.2มีบัครึป่าว 
ให้เพื่อนๆลอง ก๊อปโค๊ดจากข้อที่ 2.2มา แล้วทดสอบดังนี้

นำโค๊ดไปรันบนเบาเซอร์ 
question 1 ให้ตอบกลับไปว่า learning
question 2 ให้ตอบกลับไปว่า food
 สมมุติ เว็บไซต์ตอบกลับมาว่า yummy คงแปลกน่าดู
 เพราะมันไม่เกี่ยวเนื่องกัน   จงแก้ไขบัคที่เกิดขึ้นนี้
*/

let question1 = prompt(
  "What are you doing. Please enter learning, eating or playing  "
);
let question2;
let question =
  question1 == "learning"
    ? "what are you learn ? "
    : question1 == "eating"
    ? "what are you eat ?"
    : question1 == "playing"
    ? "what are you play ?"
    : "error";
question2 = prompt(question);

if (question1 == "learning" && question2 == "javascript") {
  alert("cool");
} else if (question1 == "eating" && question2 == "food") {
  alert("yummy");
} else if (question1 == "playing" && question2 == "game") {
  alert("ohh");
} else {
  alert("error");
}
