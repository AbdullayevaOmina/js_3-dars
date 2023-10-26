let fruits = ["Apple", "Cherry", ["kiwi", "mango"], "Banana"];

let = del_fruit = prompt("Qaysi mevani ochirmoqchisan?");

if (del_fruit in fruits) {
	fruits.splice(fruits.indexOf(del_fruit), 1);
	alert("vazifa bajarildi\n" + fruits);
} else {
	alert("Kechirasz bunday meva ro'yxatda yoq!");
}

