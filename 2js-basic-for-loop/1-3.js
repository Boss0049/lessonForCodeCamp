// /* 1-3
// ฝึกการแก้ไขบัคด้วยตัวเอง ในโค๊ดต่อไปนี้
//  ร้านอาหารแห่งหนึ่งมีจานอยู่ทั้งหมด 20 ใบ แต่ละใบมีจะหมายเลขกำกับอยู่
//   ที่ร้านอาหารแห่งนี้มีโปรแกรมสำหรับช่วยนับจาน

//  โดยขั้นตอนการทำงานของโปรแกรมจะเป็นแบบนี้
//  1.หลังจากเลิกงานแล้วจะมีการ promptถามว่าเลิกงานรึยัง
//  2.ถ้าตอบว่าใช่ โปรแกรมจะถามต่อว่ามีจานแตกใช่หรือไม่ ถ้าตอบว่าใช่โปรแกรมจะุถามว่ามีแตกกี่ใบ
//  3. สมมุติ ตอบว่าแตก 7ใบ  ตัวโปรแกรม จะ prompt ถามหมายเลขจานที่แตกทั้งหมด7ที
//   4.  และ alert โชว์หมายเลข ที่แตกทั้งหมดในครั้งเดียวโดยใช้ลูกน้ำขั้นแต่ละหมายเลข  แบบนี้ 10,11,15,14,13,12,11
//   5.  สุดท้ายจะมีการ alert บอกจานที่ยังเหลืออยู่

//     โดยบัคมีดังต่อไปนี้
//    1) ตอน ถามว่ามีจานแตกทั้งหมดกี่ใบ ใส่ไป 5 แต่เวลาถามหาหมายเลข ถามแค่ 4ครั้ง
//    2) ตอนถามว่าทำจานแตกหรือป่าว ถ้าตอบว่าไม่ สมควรที่โปรแกรมจะหยุดทำงาน แต่ดันกับ มีการ alert โชหมายเลขที่แตก ที่ไม่มีค่าอะไร
//    3) ตอน alert ที่ต้องโชว์หมายเลขทั้งหมด  แต่กลับออกแสดงค่าออกมาแค่หมายเลขเดียว
//    4) ตอน alert ถามหาจานที่อยู่ในร้าน กลับตอบกลับมาว่า NaN

// */
// let totalDish = 20;
// let loseDishOrNot;
// let totalCountLose;
// let listOfLoseDish = "";

// let finishWork = prompt("เลิกงานรึยัง โปรดตอบ ใช่ หรือ ไม่ใช่");

// if (finishWork === "ใช่") {
//   loseDishOrNot = prompt("วันนี้จานแตกรึป่าว โปรดตอบ ใช่ หรือ ไม่ใช่");
//   if (loseDishOrNot === "ใช่") {
//     let totalCountLose = +prompt("แตกทั้งหมดกี่ใบ");
//     for (let i = 1; i <= totalCountLose; i++) {
//       let eachNumberOfLose = prompt("บอกหมายเลขที่จานแตก");

//       listOfLoseDish += "," + eachNumberOfLose;
//     }
//   }
//   alert("หมายเลขจานที่แตกทั้งหมด" + listOfLoseDish);
//   alert("มีจานเหลือภายในร้าน" + (totalDish - totalCountLose));
// }
