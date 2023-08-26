// Aylana uzunligini topish?
// let n = 1;
// function uzunligi(n) {
//   if (n <= 0)  console.log("Noto'gri malumot kiritildi!");
//   n = 2*3.14*n
//   console.log(n);
// }
// uzunligi(2)

// Doir yuzini topish?
// let n = 1;
// function uzunligi(n) {
//   if (n <= 0) console.log("Noto'gri malumot kiritildi!");
//   n = 3.14 * n ** 2;
//   console.log(n);
// }
// uzunligi(10);

// Murakkab sonni topish
// let m = 0;
// const murakkab = (m) => {
//   for (let i = 2; i <= m; i++) {
//     let son = 0;
//     for (let n = 1; n <= i; n++) {
//       if (i % n === 0) son++;
//     }
//     if (son > 2) console.log(i, "Murakkab son");
//   }
// };
// murakkab(15);

// Uchburchak yuzini topish
// let a = 0,
//   b = 0,
//   c = 0;
// const yuza = (a, b, c) => {
//   let p = (a + b + c) / 2;
//   S = p * (p - a) * (p - b) * (p - c);
//   p = Math.sqrt(S);
//   console.log(Math.sqrt(S), "~~", Math.round(p), "Uchburchak Yuzasi");
// };
// yuza(5, 6, 2);

// const fizbuz = (n) => {
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("Fiz Buz");
//     } else if (i % 3 === 0) {
//       console.log("Fiz");
//     } else if (i % 5 === 0) {
//       console.log("Buz");
//     } else console.log(i);
//   }
// };

// fizbuz(50);
