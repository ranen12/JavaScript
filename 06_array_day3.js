// const numbers=[1,2,3,4,5];
// // console.log(numbers[3])

// let array = new Array(2);
// // console.log(array)

// array = new Array(1, 2, 3, 4, 5);
// // console.log(array);

// //item의 갯수
// console.log(numbers.length);
// numbers[3] = -4;
// numbers[5] = 6; //추가
// console.log(numbers.length, numbers);
// numbers[8] = 7;
// console.log(numbers.length, numbers);
// //item 삭제
// delete numbers[1];
// console.log(numbers.length, numbers);



// let bts1 = ['진','슈가','제이홉','rm']; //배열생성하는방법임 
// console.log(bts1);
// let bts2 = new Array('지민','뷔','정국');


// bts1.push('박보검'); //맨뒤에 추가
// console.log(bts1);
// console.log(bts1.length);
// bts1.unshift('이도현');
// console.log(bts1)
// console.log(bts1.length)

//이외에도 팝 푸쉬 스택 쉬프트 언쉬프트 개념등이있다. 



// let bts1 = ['진','슈가','제이홉','rm']; //배열생성하는방법임 
// console.log(bts1);
// let bts2 = new Array('지민','뷔','정국');
// console.log(bts2);

// //특정한 index에서 count만큼 삭제 splice(index, count)
// // const deleted = bts1.splice(1, 2);
// // console.log(bts1);
// // console.log(deleted); //지운 값이 반환됩니다. 뒤에가 같이 다 날아감


// //특정한 index에서 추가 splice(index, 0, item, item,...)
// bts1.splice(0, 0,'박보검','이도현');
// console.log(bts1);

//일부분으로 새로운 배열을 만듬





//정렬
// const fruits =['banana','orange','apple','mango'];
// console.log(fruits);
// fruits.sort();
// console.log(fruits);
//문자는 멀쩡하게 정렬을 함 아스키코드 기준으로
// const numbers = [40, 100, 1, 5, 25, 10];
// numbers.sort();
// console.log(numbers);

// numbers.sort(function(n1,n2){return n1-n2});
// console.log(numbers);

// numbers.sort((n1,n2)=>n2-n1); //화살표방식으로 리턴도 중괄호도 생략하였다.
// console.log(numbers);






// const fruits =['banana','orange','apple','mango'];
// console.log(fruits);
// const numbers = [40, 100, 1, 5, 25, 10];
// console.log(numbers)

// const items = [ //const item = [{},{},{}] 구조와 같다
//     {name: 'apple', price: 50},
//     {name: 'banana', price: 10},
//     {name: 'mango', price: 30}
// ]

// items.sort((a,b)=>a.price-b.price);
// console.log(items);






//array순회돌기


// const contury = ['한국','미국','일본','중국','러시아','프랑스','독일']
//for loop 사용
// for(let i=0; i< contury.length; i++){
//     console.log(contury[i]);
// }

//for ~of사용
// for (let con of contury){
//     console.log(con) 
//}

//forEach문
// contury.forEach((con,index,array)=>{
//     console.log(`전체 ${array.length}명중에 ${index}번째 나라 ${con}입니다`)


// })



//실습
// list array 의 item 중에 bts멤버만 골라 배열을 만들고 하나의 문자열로 만들어서 출력하라
// const list = ['슈가','차은우','박서준','이도현','제이홉','주우재','지민'];
// const bts = ['진','슈가','제이홉','rm','지민','뷔','정국']

// //list 값을 돌아서 bts랑 비교해야 한다.
// // lncludes로 list 와bts 가 true인경우를 찾아야한다.

// const result = [];
// //배열을 만들어준다.

// for(const name of list){
//     if(bts.includes(name)){
//         result.push(name)

//     }
// }
// console.log(result);
// console.log(result.join(', '));


// const nums = [1,2,3,4,5];

// //고차원 함수인 map은 함수를 인자로 받음
// const doubled = nums.map((num)=>{
//     return num * 2;

// });

// console.log(doubled);





// //filter()함수
// const nums = [1,2,3,4,5,6];

// const evenNumbers = nums.filter((num)=>{
//     return num % 3 === 0;   //3의배수의 경우
// })

// console.log(evenNumbers);



//실습예제 list array item 중 bts 멤버만 filter 를 사용 하여 배열을 만들고 하나의 문자열로 만들어 출력하라

// const list = ['슈가','차은우','박서준','이도현','제이홉','주우재','지민'];
// const bts = ['진','슈가','제이홉','rm','지민','뷔','정국']

// const btsmem = list.filter((mem)=>bts.includes(mem)).join(', ')

// console.log(btsmem);

// //Reduce예제
// const nums=[1,2,3,4,5];
// const sum = nums.reduce((accumulator, currentValue)=>{
//     return accumulator + currentValue;
// },0);
    

// console.log(sum)

//실습예제
//1~10까지의 숫자중에 3의 배수만 골라서 2 배한 후 합을 구하시오
// const list =[1,2,3,4,5,6,7,8,9,10]
// const result= list.filter((num)=>num % 3 ===0).map((n)=>n*2).reduce((n1,n2)=>n1+n2,0);
// console.log(result)
//굳이 3의배수만 골라내는 코드를 변수에 넣고, 그 변수를 다시 2의 배수에 넣고, 그걸 다시합산하는 또다른 변수에 넣을필요업이 그냥 . 로 계속 이어가면서 조건을 붙일수있다.


// const result = nums2.reduce((acc, cur) => {
//     return acc + cur
// },0);

const total = [1,2,3,4,5,6,7,8,9,10]
.filter((num)=>num % 3===0)
.map((num)=>num * 2)
.reduce((acc, cur)=> acc + cur, 0);
console.log(total);

//total배열내에 수 중에서 3배수인 숫자를 고르고, 해당 되는 숫자를 2 배 하며, 전부 합산하는 수