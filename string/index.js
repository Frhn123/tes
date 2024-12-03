//string

//mengakses karakter didalam string
// let str = "JavaScript";
// console.log(str[5]);

//property dan method dalam string

// console.log(str.length); //mengetahui panjang string

// console.log(str.toUpperCase()); // untuk mengubah hurufnya menjadi kapital

// console.log(str.toLowerCase()); // mengubah hurufnya menjadi huruf kecil semua

// let tesTrim = "   Java   scrip    ";
// console.log(tesTrim.trim()); //memperbaiki agar spasi awal dan akhirnya tidak kepanjangan

//manipulasi string

// //concat
// let firsName = "christiano";
// let lastName = "Ronaldo";
// let stringConcat = firsName + " " + lastName;
// console.log(stringConcat);

// //concat tempalate literal
// let stringLiteral = `${firsName} ${lastName}`;
// console.log(stringLiteral);

// //mengambil bagian dari string
// let string = "JavaScrip Mantap";
// console.log(string.slice(0, 10));
// console.log(string.substring(4));

// //mengganti bagian dari string
// let textReplace = "belajar  pemrograman";
// let Replacetext = textReplace.replace("pemrograman", "javascript");
// console.log(Replacetext);

// //menggabungkan array menjadi string
// const arr = ["ini", "adalah", "contoh", "dari", "array"];
// console.log(arr.join(" "));

// const tesstring = "test-struing-di";
// console.log(tesstring.split("-", 2));

//pencatian didalam string

//indexof untuk menentukan posisi indexnya
// let sentence =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, numquam. Ex dicta neque commodi vel nostrum, blanditiis eum!";
// let indexof = sentence.indexOf("dolor");
// console.log(indexof);
// //includes untuk mencari nilai yg ada didalam variabel
// let includes = sentence.includes("tidak");
// console.log(includes);

const stringasli = "javascript";
console.log(stringasli.toUpperCase());
