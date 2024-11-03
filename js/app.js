//////////////////?/Majburiy masalalar.///////////////////

//!1-misol;

// function fullName(Name) {
//   let words = Name.split(" ");

//   let zedWords = words.map((word) => {
//     return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//   });

//   return zedWords.join(" ");
// }

// let name = "alisher akramjonov";
// let natija = fullName(name);
// console.log(natija);

//!2-misol;

// let str = "Alisher Qalesan";

// function reverseStr(str) {
//   let words = str.split(" ");

//   let Words = words.map((word) => {
//     return word.split("").reverse().join("");
//   });

//   return Words.join(" ");
// }

// let natija = reverseStr(str);
// console.log(natija);

//!3-misol;

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// let res = sum / numbers.length;
// console.log("O'rtacha qiymat:", res);

//!4-misol;

// let massiv = ["olma", "banan", "apelsin", "kakos"];

// function lengtMas(str) {
//   let lengths = str.map((word) => {
//     return word.length;
//   });

//   return lengths;
// }

// let natija = lengtMas(massiv);
// console.log(natija);

//!5-misol;

// let massiv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// let res = [];

// function toqSonlar(str) {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] % 2 == 1) {
//       let res1 = res.push(str[i]);
//     }
//   }
//   return res;
// }

// let natija = toqSonlar(massiv);
// console.log(natija);

//!6-misol;

// let obj1 = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// let obj2 = {
//   d: 4,
//   e: 5,
//   f: 6,
// };

// function birlashtirOby(str1, str2) {
//   return { ...str1, ...str2 };
// }
// let natija = birlashtirOby(obj1, obj2);
// console.log(natija);

//!7-misol;

// let str = prompt("Bron bir String kiriting:");
// let res = str.trim();
// console.log(res);

//!8-misol;

// let obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// let value = Object.values(obj);
// let massiv = [];
// massiv.push(value);
// console.log(massiv);

//!9-misol;

// let massiv = [2, 3, 4, 5, 6, 7, 8, 9, 10];

// let res = {
//   min: Math.min(...massiv),
//   max: Math.max(...massiv),
// };

// console.log(res);

//!10-misol;

// let str = "Salom Alisher";
// let res = str.split("");
// let counter = 0;

// for (let i = 0; i < res.length; i++) {
//   if (
//     res[i] === "a" ||
//     res[i] === "e" ||
//     res[i] === "i" ||
//     res[i] === "o" ||
//     res[i] === "u"
//   ) {
//     counter++;
//   }
// }

// console.log(counter);

//!11-misol;

// let massiv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function sonQosh(arg) {
//   for (let i = 0; i < arg.length; i++) {
//     massiv[i] += 2;
//   }
//   return arg;
// }

// let natija = sonQosh(massiv);
// console.log(natija);

//!12-misol;

// let massiv = ["Eng uzun string121212", "O'rtacha string", "Kichik string"];

// function engUzun(arg) {
//   let uzun = "";
//   for (let i = 0; i < arg.length; i++) {
//     if (arg[i].length > uzun.length) {
//       uzun = arg[i];
//     }
//   }
//   return uzun;
// }

// let natija = engUzun(massiv);
// console.log(natija);

//!14-misol;

// let str = "Salom Alisher";

// function delete1(arg) {
//   let res = str.slice(1, -1);
//   return res;
// }

// let natija = delete1(str);
// console.log(natija);

//!15-misol;

// let arr = [1, 2, 3, 4, 5];
// let res = [];
// let sum = 0;
// for (let i = 0; i <= arr.length - 1; i++) {
//     res.push(arr[i] ** 2);
// }
// for (let i = 0; i <= res.length - 1; i++) {
//     sum += res[i];
// }
// console.log(sum);

//!17-misol;

// let str = "salom alisher";

// function toUpper(arg) {
//   let res = str.toUpperCase();
//   return res;
// }

// let natija = toUpper(str);
// console.log(natija);

//!16-misol;

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function reverseMassiv(arg) {
//     let res = arg.slice().reverse();
//     return res;
// }
// console.log(reverseMassiv(numbers));

//!18-misol;
// let users = [
//     { name: "John", age: 25 },
//     { name: "Saidburxon", age: 14 },
//     { name: "Sardor", age: 16 },
//     { name: "Aziz", age: 18 },
//     { name: "Kala", age: 100 },
//     { name: "Hitler", age: 138 },
// ];

// function filterUsers(arg, age) {
//     let res = arg.filter((user) => user.age > age);
//     return res;
// }
// console.log(filterUsers(users, 16));

//!19-misol;
// let numbers = [ 6, 3, 10, 9, 9, 42, 1, ];
// let element = 3;
// let counter = 0;
// for (let i = 0; i <= numbers.length; i++) {
//     if (numbers[i] === element) {
//         counter++;
//     }
// }
// console.log(counter);

//!20-misol;
// function ajratilganLetters(str1, str2) {
//     let str1Letters = str1.split("").sort().join("");
//     let str2Letters = str2.split("").sort().join("");
//     let commonLetters = "";
//     for (let i = 0; i < str1Letters.length; i++) {
//         if (str2Letters.includes(str1Letters[i])) {
//             commonLetters += str1Letters[i];
//         }
//     }
//     return commonLetters;
// }
// console.log(ajratilganLetters("hello", "world"));
