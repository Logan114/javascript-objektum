// A lista azonos tipusu változók tárolására
let lista = ["elso", "masodik"]
console.log(lista[0])
lista[0] = "🦀"
console.log(lista[0])
lista[10] = "kukorica"
console.log(lista)
lista.push("Kecske")
console.log(lista)
const lista2=[12,13,15]
lista2[0]= "kecske"
console.log(lista2)
//A konstans egyszeru adatszerkezet esetén const-al való deklarációnál a konstans értékét nem lehet megváltoztatni

//egyszerű adatszerkezet a szöveg, szám, logikai eljárás
// összetett szerkezet esetén const használatával az összetett adatszerkezez memóriacme lesz állando
// Az nem változtatható meg de az egyes értékek megváltoztathatók
//összetett adatszerkezet a lista és az ojektum
// A listákat mindig koknst ként definiáljuk, kivéve ha nem
//ojjektumok

// let jomunkasember = true;
// object{ 
    //var ved_from_atomtamadas = false
//}

// az objektum olyan osszetett adatszerkezet amely kulcs értékpárokbol áll, egységként tududnk vele kezelni adathalmazokat
// többnyire constans ként deklaráljunk, a  vízbű veszi ki a zokszigént
