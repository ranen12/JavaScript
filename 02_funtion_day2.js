




// function sayHello(){
//     console.log('hello');
// }
// //여기까진 정의

// sayHello();
// //호출 시행하라




// //매개변수가 있는 함수

// function sayHello1(name){
//     console.log(`Hello ${name}`);

// }

// sayHello1('WorlD');
// // sayHello1(1);


// let dan = 0;

// function guguDan(dan){
    
//     for(let i = 1; i<10; i++){
//       const result = `${dan} x ${i} = ${dan * i}`;
//         console.log(result)
//     }
// }

// guguDan(5);


// function sayHello2(name) {
// return `Hello ${name}`
// ;
// //함수가 처리한 연산의 결과값을 반환하고 함수 실행을 종료
// }
// let greeting = sayHello2('RM');
// console.log(greeting);
// console.log(sayHello2('morning'));

// function add(num1, num2) {
// return num1 + num2;
// }
// let result = add(5, 4);
// console.log(result);


// function testScore(score){
//     if(score> 90){
//         let result = 'a';}
// }

// testScore(90);

// function calc(num1, op, num2) {
//   let result;
//   switch (op) {
//     case '+':
//       result = num1 + num2;
//       break;
//     case '-':
//       result = num1 - num2;
//       break;
//     case '*':
//       result = num1 * num2;
//       break;
//     case '/':
//       result = num1 / num2;
//       break;
//     default:
//       result = undefined;
//   }
//   // 1. 결과값을 외부로 보내주려면 return이 필요합니다.
//   return result; 
// }

// // 2. 함수 이름(calc)을 쓰고 인자값을 전달해서 호출해야 합니다.
// console.log(calc(1, '+', 2)); // 결과: 3
// console.log(calc(10, '*', 5)); // 결과: 50


// const sayHello4 = sayHello;

// sayHello4();
// sayHello();

// const calculator = calc;
// console.log(calculator(2, '+', 3));



// function sayHello(name){
//     console.log('`hello ${name}');

// }
// function sayHi(name){
//     console.log(`Hi ${name}`);

// }
// function greet(name,callback){
//     //dosomething
// console.log(name);
// callback(name);
// }
// greet('깐부', sayHi);
// greet('선생님', sayHello);




function add(num1,num2){
    return num1+num2

}

function calc2(n1,n2,fn){ //fn은 그냥 지정한 이름
return fn(n1,n2) //콜백함수 함수를 매개변수에 받아서 할거 다 하고 받은 매개변수 기반으로 다른 함수를 실행함

}


let result = calc2(4,5,add)
console.log(result);


// let add3 = (n1, n2) =>{
//     return n1 + n2;
// }
// console.log(add3(5,1)); //화살표 함수 호출
