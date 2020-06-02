/* 2.2 
จงเขียนเงื่อนไข  โดยใช้ if else ต่อจาก ข้อ 2.1 นำโค๊ด if else จาก 2.1 มาใช้ต่อ     

  1)ถ้าผู้ใช้งานตอบกลับมาว่า learning ให้ questionที่ 2 promt ไปถามต่อว่า   what are you learn ? 
        ถ้าตอบกลับมาว่า javascrpit  ให้ alert ว่า cool

2) ถ้าผู้ใช้งานตอบกลับมาว่า eating ให้ ให้ questionที่ 2 promt ไปถามต่อว่า  what are you eat ?
     ถ้าตอบกลับมาว่า food ให้ alert ว่า yummy

3)ถ้าผู้ใช้งานตอบกลับมาว่า playing ให้ ให้ questionที่ 2 promt ไปถามต่อว่า what are you play ?
    ถ้าตอบกลับมาว่า game ให้ alrert ว่า ohh 

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

if (question2 == "javascript") {
  alert("cool");
} else if (question2 == "food") {
  alert("yummy");
} else if (question2 == "game") {
  alert("ohh");
} else {
  alert("error");
}
