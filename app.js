// 1.Funksiya yasang, ushbu funksiya 2ta argument qabul qilsin
// va ularning yig’indisini qaytarib bersin.
// function sum(x, y) {
//   return x + y;
// }
// sum(2, 3);
// console.log(sum(2, 3));
// ====================================================================================================
// 2.Minutlarni butun son sifatida qabul qilib, uni sekundlarga
// o’girib beradigan funksiya yasang.
// function toSekunds(minutes) {
//   return minutes * 60;
// }
// console.log(toSekunds(5));
// ======================================================================================================
// 3.Funksiya butun son qabul qiladi. Funksiya ushbu butun
// sondan keyingi sonni qaytarsin.
// function nextInteger(int) {
//   return int + 1;
// }
// console.log(nextInteger(0));
// console.log(nextInteger(1));
// ======================================================================================================
// 4.Funskiya uchburchakning asosi va balandligini qabul qiladi.
// Funksiya uchburchakning yuzini hisoblab qaytarsin. Uchburchak yuzini topish formulasi: S = (asos * balandlik) / 2
// function uchburchakYuzi(asos, balandlik) {
// return (asos * balandlik) / 2;
// }

// console.log(uchburchakYuzi(3, 2));
// console.log(uchburchakYuzi(7, 10));
// console.log(uchburchakYuzi(10, 10));
// ======================================================================================================
// 5.Funksiya yoshni yil ko’rinishida qabul qiladi. ushbu funksiya
// yoshni kunlarda hisoblab natijani qaytarsin. Bir yil 365 kun deb
// oling.
// function ageToDays(age) {
//   return 365 * age;
// }
// console.log(ageToDays(20));
// console.log(ageToDays(0));
// console.log(ageToDays(20));
// =======================================================================================================
// 6.Quyidagi namunalarga muvofiq ravishda funksiyani tana
// qismini yozing.
// function kub(yoqlari) {
//   return yoqlari ** 3;
// }
// console.log(kub(3));
// console.log(kub(5));
// console.log(kub(10));
// ========================================================================================================
// 7.Massivni ichidan birinchi elementini qaytaradigan funksiya
// yasang.
// function firstElement(arr) {
//   return arr[0];
// }

// console.log(firstElement([1, 2, 3]));
// console.log(firstElement([80, 5, 100]));
// console.log(firstElement([-500, 0, 50]));
// ========================================================================================================
// 8.Funksiya 2ta argument qabul qilsin. Ushbu funksiya birinchi
// qiymatning ikkinchi qiymat bilan ko’paytmasini qaytarsin.
// function power(x, y) {
//   return x * y;
// }
// console.log(power(230, 10));
// console.log(power(110, 3));
// console.log(power(480, 20));
// ========================================================================================================
// 9.Soat ko’rinishida qiymat kiritilsa, sekundlarda qaytaradigan
// funksiya yasang.
// function hourToSekunds(hour) {
//   return hour * 3600;
// }

// console.log(hourToSekunds(2));
// console.log(hourToSekunds(10));
// console.log(hourToSekunds(24));
// =========================================================================================================
// 10.Uchburchakning uchinchi tomonining eng uzun qiymatini
// qaytaradigan funksiya yasang.
// Formula: Eng uzun uchinchi tomon = (tomon1 + tomon2) - 1
// function uchinchiTomon(tomon1, tomon2) {
//   return tomon1 + tomon2 - 1;
// }

// console.log(uchinchiTomon(8, 10));
// console.log(uchinchiTomon(5, 7));
// console.log(uchinchiTomon(9, 2));
// =========================================================================================================
// 11.Ikkita son argument sifatida kiritilsa, ushbu ikkala sonni birinchisini ikkinchisiga bo’lgandagi qoldiqni qaytarib beradigan
// funksiya yasang.
// function qoldiq(son1, son2) {
//   return son1 % son2;
// }
// console.log(qoldiq(1, 3));
// console.log(qoldiq(3, 4));
// console.log(qoldiq(-9, 45));
// console.log(qoldiq(5, 5));
// ===========================================================================================================
// 12.Turtburchakning bo’yi va eni berilsa uning yuzini hisoblab
// qaytaradigan funksiya yasang. Formula S = bo’yi * eni
// function turtburchakYuzi(boyi, eni) {
//   return boyi * eni;
// }

// console.log(turtburchakYuzi(6, 7));
// console.log(turtburchakYuzi(20, 10));
// console.log(turtburchakYuzi(2, 9));
// ===========================================================================================================
// 13.Funksiya “a” argument sifatida string ma’lumot qabul qiladi.
// ushbu funksiya “Something” stringiga ” ” bo’sh joy va “a”
// stringini birlashtirib qaytarsin.

// function stringQoshish(a) {
//   return "Something" + " " + a;
// }

// console.log(stringQoshish("is better than nothing"));
// console.log(stringQoshish("Bob Jane"));
// console.log(stringQoshish("something"));
// =========================================================================================================
// 14.Quyidagi namunalarga qaragan holatda funksiya yasang.
// function kvadrat(son) {
//   return son ** 2;
// }

// console.log(kvadrat(5));
// console.log(kvadrat(9));
// console.log(kvadrat(100));
// =========================================================================================================
// 15.Funksiya raqam qabul qiladi. Agar ushbu raqam 0dan kichik
// yoki teng bo’lsa funksiya rost qaytarsin aks holda yolg’on.
// function noldan(raqam) {
//   if (raqam <= 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(noldan(5));
// console.log(noldan(0));
// console.log(noldan(-2));
// ========================================================================================================
// 16.Funksiya ko’p burchakli shaklning burchaklar sonini qabul
// qiladi. Natijada funksiya ushbu shaklning ichki burchaklar
// yig’indisini qaytarsin. Formula (n - 2) x 180
// function ichkiBurchaklar(n) {
//   return (n - 2) * 180;
// }
// console.log(ichkiBurchaklar(3));
// console.log(ichkiBurchaklar(4));
// console.log(ichkiBurchaklar(6));
// =========================================================================================================
// 17.Basketbol o’yinida ikki ochkolik va uch ochkolik gollar
// mavjud. Agar funksiya 1-argument sifatida ikki ochkolik gollar
// sonini va 2-argument sifatida uch ochkolik gollar sonini qabul
// qilsa, jamoaning jami ochkosini qaytaradigan funksiya yasang.
// function ochkolar(x, y) {
//   return x * 2 + y * 3;
// }

// console.log(ochkolar(1, 1));
// console.log(ochkolar(7, 5));
// console.log(ochkolar(38, 8));
// =========================================================================================================
// 18.Quyidagi namunalarni kuzatgan holda unga muvofiq
// funksiya yasang.
// function nameString(name) {
//   return  name + "Edabit";
// }
// console.log(nameString("Mubashir"));
// console.log(nameString("Matt"));
// console.log(nameString("javaScript"));
// ========================================================================================================
// 19.Ikkita son kiritilsa, agar ularning yig’indisi 100dan kichkina
// bo’lsa rost, katta bo’lsa yolg’on qiymat qaytaradigan funksiya
// yasang.
// function ikkitaSon(x, y) {
//   if (x + y < 100) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(ikkitaSon(22, 15));
// console.log(ikkitaSon(83, 34));
// console.log(ikkitaSon(3, 77));
// =======================================================================================================
// 20.Quyidagi namunalarni kuzatgan holda unga muvofiq keladigan funksiya yasang.
// function printArray(son) {
//   let arr = [];
//   for (let i = 1; i <= son; i++) {
//     arr.push(i);
//   }
//   return arr;
// }
// console.log(printArray(1));
// console.log(printArray(3));
// console.log(printArray(6));
// =======================================================================================================
// 21.Fermada turli xildagi hayvonlar mavjud. Shunday funksiya
// yasangki, ushbu funksiya jami fermadagi hayvonlar oyoqlari
// nechta ekanligini hisoblab qaytarsin. Bunda funksiya birinchi
// argument sifatida tovuqlar sonini, ikkinchi argument sifatida
// qo’ylarni va uchinchi argument sifatida sigirlarning sonini
// qabul qiladi.
// function oyoqlar(tovuq, qoy, sigir) {
//   return tovuq * 2 + qoy * 4 + sigir * 4;
// }

// console.log(oyoqlar(2, 3, 5));
// console.log(oyoqlar(1, 2, 3));
// console.log(oyoqlar(5, 2, 8));
// =======================================================================================================
// 22.Javascriptda “&&” mantiqiy operatori mavjud. Ushbu operator ikkita mantiqiy ifoda
// qabul qiladi. Quyidagi namunaga
// muvofiq keladigan funskiya yasang. Ushbu operatordan foydalangan holda!
// function and(x, y) {
// return x && y;
// }
// console.log(and(true, false));
// console.log(and(true, true));
// console.log(and(false, true));
// console.log(and(false, false));
// ======================================================================================================
// 23.Funksiya 2ta son qiymat qabul qiladi. Agar 1-son 2-songa
// teng bo’lsa rost, aks holda yolg’on qiymat qaytsin. Bunda ikkala
// qiymatning ma’lumot turi bir xil bo’lsin.
// function tengMi(x, y) {
//   if (x === y) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(tengMi(4, 8));
// console.log(tengMi(2, 2));
// console.log(tengMi(2, "2"));
// ======================================================================================================
// 24.Futbolda ochkoni hisoblaydigan funksiya yasang. Bunda
// funksiya yutishlar soni, duranglar soni va mag’lubiyatlar sonini
// qabul qiladi. 1ta yutish = 3 ochko, 1ta durang = 1 ochko, 1ta
// mag’lubiyat = 0 ochko hisoblanadi.
// function futbolOchko(yutishlar, duranglar, maglubiyatlar) {
//   return yutishlar * 3 + duranglar * 1 + maglubiyatlar * 0;
// }

// console.log(futbolOchko(3, 4, 2));
// console.log(futbolOchko(5, 0, 2));
// console.log(futbolOchko(0, 0, 1));
// ========================================================================================================
// 25.Funskiya soatlar va minutlarni argument sifatida qabul
// qiladi. Ushbu funkisya soatlar va minutlarni sekundga o’girib
// ularning yig’indisini qaytarsin.
// function sekundlar(soat, minut) {
//   return soat * 3600 + minut * 60;
// }

// console.log(sekundlar(1, 3));
// console.log(sekundlar(2, 0));
// console.log(sekundlar(0, 0));
// =======================================================================================================
// 26.Quyidagi namunalarni kuzatgan holda funksiya yasang.
// function fun(x) {
//   if (x % 2 !== 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(fun(4));
// console.log(fun(9));
// console.log(fun(7));
// ========================================================================================================
// 27.Funksiya 2ta istalgan turdagi qiymatlar qabul qiladi. Agar
// ushbu 2ta qiymat ham qiymat jihatidan ham ma’lumot turi
// jihatidan teng bo’lsa rost, aks holda funkisya yolg’on qiymat
// qaytarsin.
// function checkEquality(x, y) {
//   return x === y;
// }

// console.log(checkEquality(1, true));
// console.log(checkEquality(0, "0"));
// console.log(checkEquality(5, 5));
// ==========================================================================================================
// 28.Funksiya boolean qiymat qabul qiladi. Ushbu funksiya
// boolean qiymatni stringga o’girib qaytarib bersin.

// function booleanToString(bool) {
//   return String(bool);
// }

// console.log(booleanToString(true));
// console.log(booleanToString(false));
// =========================================================================================================
// 29.Arrow funksiyasini yarating ushbu funksiya shunchaki
// berilgan qiymatni qaytarsin.
// const arrowFunc = (x) => {
//   return x;
// };

// console.log(arrowFunc(3));
// console.log(arrowFunc("3"));
// console.log(arrowFunc(true));
// ========================================================================================================
// 30.Framelar sonini hisoblaydigan funksiya yarating. Frame bu
// 1 sekundda necha marta ko’rinishlar soni aylanishi. Funksiya
// minutlar va 1 sekundda nechta framelar soni aylanishini argument sifatida qabul
// qiladi. Funksiya jami framelar sonini
// qaytarsin.
// function frameSoni(minut, frame) {
//   return minut * 60 * frame;
// }

// console.log(frameSoni(1, 1));
// console.log(frameSoni(10, 1));
// console.log(frameSoni(10, 25));
// ========================================================================================================
