// 1._
console.log("\n1.-todas las palabras que tengan longitud de 7 o mas letras ");
let mensaje2 = "el 26 de noviembre  del 2019 cumplo los 18 años de vida ";
let newMensaje2 = mensaje2.replace(/[a-z]{7,}/g, "");
console.log(newMensaje2);

// 2._
console.log("\n2.-expresiones que no finalicen con vocal.");
let le = /[aeiou]/;
console.log(le.test("black"));
let p = /[^aeiou]$/g;
console.log(p.test("while"));

//3._
console.log("\n3.-inicia con m y la 2da no sea vocal.")
let x1 = /[m,M][^aeiou]/;
console.log(x1.test("mochila"));
console.log(x1.test("\mhochila"));


//4._
console.log("\n4.-deteccion de comillas");
let p2 = /['""']/;
let cum = 'el 26 de noviembre  del 2019 "cumplo" los 18 años de vida ';
console.log(cum);
console.log(p2.test(cum));
cum = '\nel 26 de noviembre  del 2019 cumplo los 18 años de vida ';
console.log(cum);
console.log(p2.test(cum));

//5._
console.log("\n5.-Deteccion de ip:\n");
let p3 = /[(192\.168\.1\.100)]/;
let ipss = "estos son los formatos de la direccion ip";
console.log(ipss);
console.log(p3.test(ipss));
ipss = "\nestos son los formatos de la direccion ip";
console.log(ipss);
console.log(p3.test(ipss));

//6._
console.log("\n6.- deteccion de hora\n");
let p4 = /["H:MM:SS"]/;
let hora = "la salida es a las 2:10";
console.log(hora);
console.log(p4.test(hora));
hora = "\nla salida ";
console.log(hora);
console.log(p4.test(hora));

//7._
console.log("\n7.- deteccion de correo.\n");
let p5 = /[a-z][@][a-z][a-z]/;
let correo = "esta linea tiene un correo felipe.lopez@itsva.edu.mx";
console.log(correo);
console.log(p5.test(correo));
correo = "esta linea tiene un correo  felipe.lopezitsva.edu.mx";
console.log(correo);
console.log(p5.test(correo));

// 8._
console.log("\n8.- deteccion de numero telefonico.\n");
let p6 = /\d\d\d+[-|" "]\d\d\d+[-|" "]\d\d+[-|" "]\d\d/;
let telefono = "cual podria un numero valido esto 985 146 57 60";
console.log(telefono);
console.log(p6.test(telefono));
telefono = "\ncual podria un numero valido esto ";
console.log(telefono);
console.log(p6.test(telefono));


//9._
console.log("\n9.- deteccion de url.\n");
let p7 = /http|htpps|tps(:)(\/)(\/)[a-z]/g;
let urlss = "url valido  http://www.node.js.com";
console.log(urlss);
console.log(p7.test(urlss));
urlss = "\nurl valido  ";
console.log(urlss);
console.log(p7.test(urlss));

//10._
console.log("\n10.-Deteccion de codigo postal");
let p8 = /[0-9]{5,}/;
let postal = "valido  97780";
console.log(postal);
console.log(p8.test(postal));
postal = "\nvalido ";
console.log(postal);
console.log(p8.test(postal));

//nombre : felipe lopez mendez