//* 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

// let edad = parseInt(prompt('Escriba su edad'));

// if(!isNaN(edad) && edad>=18){
//     alert('Puede conducir')
// }else{
//     alert('No puede conducir')
// }

//* 2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

//* 0-2: Muy deficiente
//* 3-4: Insuficiente
//* 5-6: Suficiente
//* 7: Bien
//* 8-9: Notable
//* 10: Sobresaliente

//* Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.


// let nota;

// do {
//     let nota = parseInt(prompt('Ingrese la nota'))
//     console.log(nota)
//     //vemos si es un numero
//     if(!isNaN(nota) && nota <= 10 && nota >0){
//         switch (nota) {
//             case 0:
//             case 1:
//             case 2: 
//                     alert('Su nota es muy deficiente');
//                 break;
//             case 3:
//             case 4:
//                     alert('Su nota es deficiente');
//                 break;
//             case 5:
//             case 6:
//                     alert('Su nota es suficiente')
//                 break;
//             case 7:
//                     alert('Su nota esta bien') 
//                 break;
//             case 8:
//             case 9:
//                     alert('Su nota es notable')
//                 break;
//             case 10:
//                     alert('Su nota es sobresaliente')
//                     break;
//             default:
//                 break;
//         }
    
//     }
//     //Si es no es un numero mandamos un alert
//     else{
//         alert('Los datos ingresados no son correctos')
//     }
//     //Hacemos un confirm para ver si el usuario desea continuar
// }while(confirm('Desea continuar'))


//*3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
// let text='';
// do{
//     let palabra = prompt('Escriba un texto')
//     if(text == ''){ 
//         text = palabra
        
        
// }else{
        
//     text = text + '-' + palabra
//     }
// }while(confirm('Desea continuar'))

// document.write(text)


//* 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

// let suma = 0;
// let numero = 0;

// do {
//     numero = prompt('Escriba un numero');
//     if(!isNaN(parseInt(numero)) && numero !=null){
//         suma = suma + parseInt(numero);
//     }
//     else{
//         if(numero != null){
//             alert('Debe escribir un numero');
//         }
//     }
// } while (numero != null);

// document.write('Total: '+ suma);


//*5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).
//*El algoritmo para calcular la letra del dni es el siguiente :

//* El número debe ser entre 0 y 99999999
//* Debemos calcular el resto de la división entera entre el número y el número 23.
//* Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
//* Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
//* Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

// let resto = 0;
// let letra = '';

// do{
//     let numero = prompt('Ingrese su DNI')
//     if(!isNaN(numero) && numero != null){
//         numero =  parseInt(numero)
//         if(numero >= 0 && numero <= 99999999){
//             resto = numero % 23;
//             console.log(resto)
//             switch(resto){
//                 case 0:
//                     letra = "T";
//                     break;
//                 case 1:
//                     letra = "R";
//                     break;
//                 case 2:
//                     letra = "W";
//                     break;
//                 case 3:
//                     letra = "A";
//                     break;
//                 case 4:
//                     letra = "G";
//                     break;
//                 case 5:
//                     letra = "M";
//                     break;
//                 case 6:
//                     letra = "Y";
//                     break;
//                 case 7:
//                     letra = "F";
//                     break;
//                 case 8:
//                     letra = "P";
//                     break;
//                 case 9:
//                     letra = "D";
//                     break;
//                 case 10:
//                     letra = "X";
//                     break;
//                 case 11:
//                     letra = "B";
//                     break;
//                 case 12:
//                     letra = "N";
//                     break;
//                 case 13:
//                     letra = "J";
//                     break;
//                 case 14:
//                     letra = "Z";
//                     break;
//                 case 15:
//                     letra = "S";
//                     break;
//                 case 16:
//                     letra = "Q";
//                     break;
//                 case 17:
//                     letra = "V";
//                     break;
//                 case 18:
//                     letra = "H";
//                     break;
//                 case 19:
//                     letra = "L";
//                     break;
//                 case 20:
//                     letra = "C";
//                     break;
//                 case 21:
//                     letra = "K";
//                     break;
//                 case 22:
//                     letra = "E";
//                     break;
//                 default:    
//                 alert('Ingrese un numero valido ')
//             }
//             alert("Numero: " + numero + ", Letra: " + letra);
//         }else{
//             alert('Ingrese un DNI valido')
//         }
//     }else{
//         alert('Ingrese un numero valdio')
//     }
// }while(confirm('Desea continuar'))

//*6- Realiza un script que escriba una pirámide del 1 al 30.

// for (let num = 1; num <= 30; num++) {
//     for(numeroRep = 1; numeroRep <=num; numeroRep++) document.write(num)
//     document.write(`<br>`)
//     }

//*7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

// let numero  = parseInt(prompt('Ingrese un numero entre 1 y 50'));


// if(!isNaN(numero)){

//     if(numero > 0 && numero <= 50){
        
//         for (i = numero; i >=1; i--){
//             for(iRep = i; iRep >= 1; iRep-- ) document.write(i)
//             document.write(`<br>`)
//         }
            
//     }else{
//         alert('Debe ingresar un numero entre 1 y 50')
//     }
// }else{
//     alert('No puede introducir letras')
// }



