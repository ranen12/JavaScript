

// //set 시작
// const set = new Set([1, 2, 3, 4, 5]);
// console.log(set);


// set.add(6);
// console.log(set);
// set.add(6);
// console.log(set);


// const set1 = new Set([]);
// console.log(set1);

// console.log(set.has(3));
// console.log(set.has(6));
// //set이 has 가지고 있는가 3을 만일 있다면 true/없다면false

// set.delete(6); //6이란 숫자를 지우겠음
// console.log(set);
// set.clear(); //전부지우겠음
// console.log(set)


// //set 순회
// //forEach
// set.forEach((item)=>console.log(item));

// //for of
// for(const value of set.values()){
//     console.log(value);
// }


// console.log(Math.abs(-10))
// console.log(Math.ceil(1.5));
// console.log(Math.floor(1.8))
// console.log(Math.round(1.5))//
// console.log(Math.trunc(1.565465))//
// console.log(Math.random()*10);
// console.log(Math.floor(Math.random()*10)+1)

//실습예제 로또 발생기 만들기
//Math.random()함수를 사용하여 로또 발생기를 만드시오
//Math.random()함수는 0이상1미만의 난수를 생성
//로또는 중복되면 안된다. 루프문?

// while 같은거 써서 6번 반복하고
// 정수값 랜덤 범위는 1에서 45까지
// 중복인지 체크하고 중복이 아닌경우에만 넣어주고?
// 6번이 될때까지 반복하고 
//while을 써야하는 이유는 중복이 몇번 걸릴지 모르기 때문에 for loop가 아닌
//while을 쓰는게 낫다




// 랜덤 발생함수 Math.random() 함수를 사용해서 로또 발생기
// 를 만드시오. 
// ※ Math.random()함수는 0이상 1미만의 난수를 생성


//array로 만드는 로또발생기

// function genLotto(){
//     let numbers = [];
//    while(numbers.length<6){
//     // Math.random()//0~1까지 난수 그러나 1은 포함되지않는다

//         const num = Math.floor(Math.random()*45)+1 //0.xxx~44.xx정도의 난수값이 나오기 때문에 정수로 만들어주기 위해 floor를 넣어주어야한다

//         if(!numbers.includes(num))
//         numbers.push(num);

//     }
//     return numbers;
// }

// let result = setLotto().sort((n1,n2)=>n1-n2);
// console.log(result);


// set 으로 로또발생김 ㅏㄴ들기
function setLotto(){
    let numbers = new Set();
   while(numbers.size< 6){

        const num = Math.floor(Math.random()*45)+1;
        numbers.add(num);
    }
    const result =[...numbers].sort((n1,n2)=>n1- n2);
    return result;

    //const result = [...numbers]
    //resurn result.sort((n1,n2)=>n1-n2)

    //형태로 쓸수있음 한번에 쓰기를 하든 나눠서하든은 똑같음
 
}
console.log(setLotto());


// 위 코드들은 다시 한번 봐야함
