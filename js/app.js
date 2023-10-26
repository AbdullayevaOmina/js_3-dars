// ================= string metods =======================

// let str = "22548";
let str = "         Lorem ipsum dolor sit amet.         ";
console.log(str.length); // string uzunligini aniqlash
console.log(str.charAt(3));  //  stringdagi kirtitilgan raqam indexida joylashgan elementni aniqlab beradi
console.log(str.charCodeAt(22));  // stringdagi kirtitilgan raqam indexida joylashgan elementning ascii tabledagi decimal qiymatini aniqlab beradi
console.log(str.concat("eee","toshmat")); // ikkita stringni qoshib beradi
console.log(str.endsWith("?")); // string ohiri kiritilgan elemnt bilan tugaganligini tekshiradi. bool qaytaradi
console.log(str.includes("@"));  // kiritilgan element string ichida bor yoqligini tekshiradi. bool qaytaradi
console.log(str.indexOf("i"));   // berilgan elementni qaysi indexda ekanligini aniqlab beradi. chapdan onga qarab qidiradi va birinchi uchragan elementning indexini qaytaradi
console.log(str.lastIndexOf("i"));  // berilgan elementni qaysi indexda ekanligini aniqlab berad. ongdan chapga qarab qidiradi
console.log(str.indexOf("i", 22));  // kiritilgan sondan keyingi index boshlab element indexini qidiradi
console.log(str.padEnd(10, "."));  // agar string leni kiritilgan sondan kichik bolsa yetishmagan joylariga biz kiritgan belgini joylab chiqadi yoqsa stringni ozini chiqaradi
console.log(str.padStart(10, "."));
console.log(str.repeat(5));   // textni bir necha martda takrorlash uchun ishlatiladi
console.log(str.search("sit"));  // ichidan qidirish. bool qaytaradi
console.log(str.replace(" ",","));   // birinchi kelganini almashtiradi
console.log(str.replaceAll(" ",","));    // hammasini almashtiradi
console.log(str.trim());   // boshi va ohiridan bo'sh joylani optashidi
console.log(str.trimStart()); // boshidan bo'sh joylani optashidi
console.log(str.trimEnd()); // ohiridan bo'sh joylani optashidi
console.log(str.slice(10, 20))

// ================= array metods =======================

// let fruits = ["Apple", "Cherry", ["kiwi", "mango"], "Banana"];

// console.log(fruits.length);
// console.log(fruits.concat(["pear", "lime"], ["sdsd", "asdsd"]));
// console.log(fruits.copyWithin(1, 0));
// console.log(fruits.flat());
// console.log(fruits.indexOf("Apple"));
// console.log(fruits.lastindexOf("Apple"));

// console.log(fruits.join(" -> "));
// console.log(fruits.reverse());
// console.log(fruits.split("").reverse().join(""));
// console.log(fruits.slice(1,2));
// console.log(fruits.sort());
// console.log(fruits.sort().reverse());

// console.log(fruits.splice(fruits.length - fruits.indexOf("Cherry"), 1));


// fruits.push("Apple"); // element qo'shish. ohiridan qo'shadi
// fruits.unshift("App");  // element qo'shish. boshidan qo'shadi
// fruits.pop(); // elementni ochirish. ohiridan ochiradi
// fruits.shift();   // elementni ochirish. boshidan ochiradi

// fruits.splice(2, 0, "Pear", "Pineapple");
// fruits.splice(fruits.length, 0, "Pear");   // push
// fruits.splice(0, 0, "Pear");   // unshift
// fruits.splice(fruits.length - 1, 1); // pop
// fruits.splice(0, 1);  // shift

// console.log(fruits);

// =================  Date =======================

// let hozir = new Date(); // new date() hozirgi vaqtni korsatadi

// console.log(hozir.getDate());  // kunini oladi
// console.log(hozir.getDay());  // kunini oladi
// console.log(hozir.getMonth());  // kunini oladi
// console.log(hozir.getFullYear());  // kunini oladi
// console.log("");
