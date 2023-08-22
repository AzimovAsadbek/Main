// If-else => Shart operatori
//? Vaziyatga qarab o'zgaradigan hodisalar uchun dasturlashda If-else ishlatiladi.

// let age = 18;
// if (typeof age === "number") {
//     if (18 <= age) console.log("Siz berish huquqiga egasiz!");
//     else console.log("Siz hali voyaga yetmagansiz!");
// }else console.log("Noto'g'ri malumot kiritilgan!");

// Combination => 2ta va undan ortiq shart bajarilishi va ichma-ich iflar
// let age = 17;
// if (typeof age == "number" ){
//     if (age < 18 && 16 <= age) { console.log("Siz faqat passport olishingiz mumkin!"); }
//     else if (age >= 18) { console.log("Siz passport va prava olishingiz mumkin!"); }
//     else { console.log("Siz hali voyaga yetnagansiz!"); }
// }else console.log("Noto'g'ri malumot kiritilgan!");

// Juft yoki toq ekanligini tekshirish
// let num = 7;
// if (num % 2 === 0){
//     console.log("Juft son");
// }else {
//     console.log("Toq son");
// }

// Baxolash tizimi
// let grade = 10;
// if (grade >= 95 && grade <= 100) console.log("a'lo");
// else if (grade < 95 && grade >= 75) console.log("Yaxshi");
// else if (grade < 75 && grade >= 60) console.log("Qoniqarli");
// else if (grade >= 0 && grade < 60)console.log("Siz imtihondan o'tolmadingiz!");
// else  console.log("Siz noto'g'ri malumot kiritdingiz");

// 2ta sondan kattasini aniqlash
// let a = 9, b = 9;
// if (a > b)console.log(`${a} soni katta ${b} sonidan`);
// else if (a < b)console.log(`${a} soni kichik ${b} sonidan`);
// else console.log(`${a} soni teng ${b} soniga`);

//! Ternary operators
// let age = 18;
// if (typeof age === "number") {
//     if (18 <= age) console.log("Siz berish huquqiga egasiz!");
//     else console.log("Siz hali voyaga yetmagansiz!");
// }else console.log("Noto'g'ri malumot kiritilgan!");

// 18 <= age ? console.log("Siz berish huquqiga egasiz!") : console.log("Siz hali voyaga yetmagansiz!");

// ! Nullish ( ?? )
//  ?? => Undefined va null shu qiymatlar kelsa keyingi qiymatga otib ketadi
// console.log(undefined ?? 0);
// console.log(null ?? 0);