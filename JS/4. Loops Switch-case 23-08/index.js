
//! Switch-case
//? Hafta kunlari (Mon => Monday)
// let day = "Friday";
// switch(day) {
// 	case "Monday": console.log("Mon"); break;
// 	case "Tuesday": console.log("Tue"); break;
// 	case "Wednesday": console.log("Wed"); break;
// 	case "Thursday": console.log("Thu"); break;
// 	case "Friday": console.log("Fri"); break;
// 	case "Saturday": console.log("Sat"); break;
// 	case "Sunday": console.log("Sun"); break;
// 	default: console.log("Noto'g'ri ma'lumot kiritildi!");
// }

//? Simple calculator
// let operator = "/";
// let a = 2, b = 5;
// switch(operator) {
// 	case "+": console.log(a + b); break;
// 	case "-": console.log(a - b); break;
// 	case "*": console.log(a * b); break;
// 	case "/": console.log(a / b); break;
// 	default: console.log("Noto'g'ri ma'lumot kiritildi!");
// }
// console.log(select);



// !Loops
// Biz qandaydir takrorlanadigan hodisalarni qayta-qayta yozmasligimiz uchun biz loop dan foydalanamiz!

// ==========
//  ! While
// ? Juft sonlarni yigindisini topish
// let i = 1, sum = 0;
// while (i <= 100) {
//     if (i % 2 === 0) {sum += i
//         console.log(i);}
//     i++;
// }
// console.log(sum);

// ! Toq sonlarni yigindisini topish
// let n = 1, k = 0;
// while (n <= 50) {
//     if (n % 2 === 1) {
//         k += n
//         console.log(n, "Son") ;
//         // console.log(k, "Yigindi");
//     }
//     if (n === 25)continue
//         n++;
//     }
//     console.log(k);

// ===========
// ! Do-while
// Juft sonlarni topish
// let i = 0;
// do{
//     console.log(i);
//     i++;
// }while (i <= 50)
// console.log(i, "qiymati" );

// Factorial(5! = 1 * 2 * 3 * 4 * 5)
// let n = 5
// factorial = 1;
// do {
//     if (n === 2)break
//     n--;
//     factorial *= n
//     console.log(factorial);

// } while (n > 0)

// ===========
// ! For
// for (boshlanish; manzil ; step){
//    ......
// }
// let k = 0
// for (let i = 1; i <= 50; i++) {
//     if (i % 2 === 0)console.log(i);
//     k += i
// }
// console.log(k);

//  1 - 50, 16
// for (let n = 1; n <= 50; n++){
//     if(n != 16) console.log(n);
// }

//! Continue => Navbatini otkazib yuboradi
//! Break => Circle ni to'xtatadi
// for (let n = 1; n <= 50; n++){
//     if(n === 16)continue
//     console.log(n);
// }

// let n = 50;
// for (let i = 2; i <= n; i++) {
//     let bson = 0;
//     for (let k = 1; k <= i; k++) {
//         if (i % k === 0) bson++
//     }
//     if (bson === 2) console.log(i, "tub son");
//     else console.log(i, "Murakkab son");
// }

// ==============
// Homework

// 2
// let b = 100
// for (let a = 1; a <= b; a++){
//     if(a % 2 === 0)console.log(a, "Bu juft son");
// }

// 3
// let a = 1, b = 100;
// for (b; a < b; b--) {
//     if (b % 2 === 0) console.log(b, "Bu juft son");
// }

// 4
// let n = 300
// for (let sum = 1; sum <= 10; sum++) {
//     console.log( `${sum}kg kanfet narxi` , (n * sum));
// }

// 5
// let n = 100
// for (let sum = 0.1; sum <= 1; sum += 0.1) {
//     console.log(  (n * sum));
// }

// 6
// let n = 100
// let k = 1.2
// for (k; k <= 2; k += 0.2){
//     console.log(n*k);
// }

// 7
// let b = 50
// let a = 1
// let sum = 0
// for (a; a <= b; a++) {
//     if (a % 2 === 0) sum += a
// }
// console.log(sum);

// 8
// let b = 5
// let a = 1
// let sum = 1
// for (a; a <= b; a++) {
//     if (a % 2 === 0) sum *= a
// }
// console.log(sum);

// 9
// let b = 10;
// let a = 1;
// let k = 1;
// let y = 0;
// for (a; a <= b; a++) {
//   if (a % 2 === 0) {
//     k = a ** 2;
//     y += k
// }
// }
// console.log(y);

// 10
// let m = 50;
// let n = 1;
// let sum = 0;
// for (n; n <= m; n++) {
//     sum += n
// }
// console.log(sum);
// ===============
// let n = 10;
// let str = "";
// for (let m = 1; m <= n; m++) {
//     str += "*"
//     console.log(str);
// }

// let height = 5,
//   width = 11;
// for (let q = 1; q <= height; q++) {
//   str = "";
//   for (let u = 1; u <= width; u++) {
//     if (q === 1 || q === height) {
//         str += "*";
//     } else {
//         if (u === 1 || u === width  ) {
//             str += "*";
//         } else {
//             str += " ";
//         }
//     }
//   }
//   console.log(str);
//   str = "";
// }

// let width= 10;
// let height= 10;
// let str = "";
// for (let u = 0 ; u < height ; u++){
//   for ( let q = 0 ; q<width ; q++ ){
//     if (q === 0 || q === width - 1){
//       str += "*"
//     }else if (u === 0 || u === height - 1){
//       str += "*"
//     } else if(q + u === width -1 ){
//       str += "*"
//     }
//     else{
//       str += " "
//     }
//   }
//   console.log(str);
//   str = ""
// }

// let width = 11;
// let height = 11;
// let str = "";
// for (let u = 0; u < height; u++) {
//   for (let q = 0; q < width; q++) {
//     if (
//       q === 0 ||
//       q === width - 1 ||
//       u === 0 ||
//       u === height - 1 ||
//       q + u === width - 1 ||
//       q === u
//     ) {
//       str += "*";
//     } else if (q > 3 && u > 3 && q < 7 && u < 7) {
//       str += "*";
//     } else {
//       str += " ";
//     }
//   }
//   console.log(str);
//   str = "";
// }

// let width = 12;
// let height = 6;
// let str = "";
// for (let q = 0; q < height; q++) {
//   for (let u = 0; u < width; u++) {
//     if (u === width - (width / 2)  ) {
//       str += "*";
//     }
//     //  else if ((u + q === width / 2 )) {
//     //   str = "*"
//     // }
//     else if (u === width /2 || q + u === width / 2) {
//       str += "*";
//     }
    
    

//      else {
//       str += " ";
//     }
//   }
//   console.log(str);
//   str = "";
// }
