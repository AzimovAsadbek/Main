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

// Kvadrat
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

// bitta diognal tuzish
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

// x yashash
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

// Piramidani ikkinchi tomoni
// let width = 12;
// let height = 6;
// let str = "";
// for (let u = 0; u < height; u++) {
//   for (let q = 0; q < width; q++) {
//     if (
//       q === 0 ||
//       q === width - 1 ||
//       u === height - 1 ||
//       q + u === width - 1 ||
//       q === u ||
//       u >= q ||
//       q + u >= width - 1
//     ) {
//       str += "*";
//     } else {
//       str += " ";
//     }
//   }
//   console.log(str);
//   str = "";
// }
