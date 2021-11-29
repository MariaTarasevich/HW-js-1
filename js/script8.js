// Задание 8

let a = 8,
b = 3;

let x = (16 - a + 2 * b) / 2;

// ур. 2

let y = (a - 15 * b) / (b - 6);

// Ур. 3

let z = 23780 / (1 + 2 + a + b)

console.log(x);
console.log(y);
console.log(z);

/* 
// parser

let uravn=prompt("Ввведите уравнение").slice();
let variables={};
let x;
if(uravn!=undefined){
    for(let i=0;i<uravn.length;i++){
        if(uravn[i]!='+' && uravn[i]!='-' && uravn[i]!='*'  &&  uravn[i]!='/'   &&uravn[i]!='=' && !Number.parseInt(uravn[i]) && uravn[i]!='('&&uravn[i]!=')'&&uravn[i]!='x'){
            variables[uravn[i]]=prompt(`Введите ${uravn[i]}`);
        }
    }
    for(let i=0;i<uravn.length;i++){
        for(key of variables){
            if(uravn[i]==key){
                uravn[i]
            }
        }
    }
    
}
 */