// // while loop
let num = 0;
while(num < 3){
    console.log(num);
    num++;
};

// // printing odd numbers
let m = 0;
while(m < 10){
    if(m % 2 !== 0){
        console.log(m);
    }
m++;
  
}

// //printing even numbers 
let k = 0;
while (k < 20){
    if(k % 2 == 0){
        console.log(k);
    }
    k++;
}

//printing patterns 
let c = 1;
while(c <= 5) {
    let d = 1;
    let rowTwo = '';
    while(d <= c) {
    rowTwo += '*';
    d++;
    }
    console.log(rowTwo);
    c++;
}

let x = 5;
while (x >= 1){
    let y = 1;
    let z = '';
    while(y<=x){
        z += ' * ';
        y++;
    }
    console.log(z)
    x--;
}

let n = 1;
while(n <= 5){
    let space = 1;
    let pattern = 1;
    let rows = '';
    while(space <= 5 - n){
        rows += ' ';
        space++;
        
    }
    while(pattern <= n){
        rows += '*';
        pattern++;
    }
    console.log(rows);
    n++;
}



for(let b = 1; b <= 5; b++){
    let rows = ''
    for(let j=1;j<=b;j++){
        rows += '*';

    }
    console.log(rows);
    
}

for(let a=1; a <= 5; a++){
    let row = '';
    for(let space = 1; space <= 5-a;space++){
        row += ' ';
    }
    for(let j = 1 ; j <= a ; j++){
        row += '*';
    }
    console.log(row);
}

for(let i = 5 ; i >= 1 ; i--){
    let row = ' ';
    for(let space = 1 ; space <= 5-i; space++){
        row += ' ';
    }
    for(let j = 1 ; j <= i ; j++){
        row += '*';
    }
    console.log(row);
}

//do while loop
let h = 1;
do{
    let g = 1;
    let rowThree = '';
    do{
    rowThree += '*';
    g++;
 }while(g <= h);
console.log(rowThree);
h++;
}while(h<=5);

//break statement
// let d = 0;
for(d=0;d<=10;d++){
    if(d==5) {
        break;
    }; 
    console.log(d);
}

//continue statement
for(c=0;c<=5;c++){
    if(c==3){
        continue;
    }
    console.log(c);
}




