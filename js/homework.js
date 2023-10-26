// 1) Ism va tugilgan kun sorab Hurmatli {Ism}, siz {yil}yil {oy}oy {kun}kun {soat}soat yashabsiz
//  Namuna:
//  10 yil, 8oy, 22kun ✅
//  10 yil, 128oy, 3862kun ❌
// 2) console ga mevalar meva oxiriga qoshish console ga mevalar mevalar boshidan bittasin ochirish console ga mevalar github link: https://github.com/egamberdiyevalisherjon/n2-3-6



// 1-masala
let user_name = prompt("Salom!👋\nIsmingiz nima?");
let user_birthday = prompt(
  "Tug'ilgan kuningizni mm/dd/yyyy ko'rinishida kiriting. "
);

let month = parseInt(user_birthday.slice(0,2));
let day = parseInt(user_birthday.slice(3, 5));
let year = parseInt(user_birthday.slice(6,10));

let user_date = new Date(year, month, day).getTime();
let date = new Date(Date.now() - user_date);

let years = parseInt(date.getTime() / 1000 / 60 / 60 / 24 / 365.25);
let months = parseInt(date.getTime() / 1000 / 60 / 60 / 24 % 365.25 / 30);
let days = parseInt(date.getTime() / 1000 / 60 / 60 / 24 % 365.25 % 30);

alert(
  "Hurmatli " +
		user_name +
    ",  siz " +
    years +
    " yil  " +
    months +
    " oy, " +
    days +
    " kun yashabsiz"
);



// 2-masala
let fruits = ["Olma", "Mandarin", "Nok", "Apelsin", "Kivi", "Uzum"];
console.log(fruits);
fruits.push("Mango");
console.log(fruits);
fruits.shift();
console.log(fruits);