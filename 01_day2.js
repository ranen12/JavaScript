// let num1= 5;
// let num2 = 3;
// let num3 = 2;
// console.log(num1+num2);
// console.log(123 == 123)
// console.log(123=='123')
// console.log(123==='123')
// console.log(123 != '123')
// console.log('논리연산자 우선순위')
// console.log(num1> num2 && num2 > num3); //true
// console.log(num1 == num2 && num1 > num2);
// console.log(대입증감연산자)
// let num;
// num = 1;
// console.log(num++);
// num = 1;
// console.log(++num);
// let num1 = num++;
// console.log(num1);
// console.log(num);

// const age = 20;
// const result = age >19 ? '당신은 성인입니다' : '당신은 미성년자입니다'
// console.log(result)


// const adult = 19;
// let age = 15;

// if(age < adult){
//     console.log('당신은 미성년자 입니다');
// }
// else{
//     console.log('당신은 성인이에요');
// }
// let gender = 'male';

// if(age < adult){
//     if(gender == 'male'){
//         console.log('당신은 미성년 남성이네요');
//      } else{
//             console.log('당신은 미성년 여성 입니다');
//         };
//     }


    // let isLoggedIn = true;
    // let token = 0;

    // if (isLoggedIn && token) {
    // console.log('로그인 상태입니다');
    // } else if (isLoggedIn && !token) {
    // console.log('토큰이 없습니다');
    // } else {
    // console.log('로그인이 필요합니다');
    // }

    // let age = 15;
    // let isMember = false;

    // if (age < 18 || isMember){
    //     console.log('할인 대상 입니다') //18살보다 어리거나 imMember 가false거나
    // } else {
    //     console.log('할인 대상이 아닙니다');
    // }


//     const browser = '크롬';
//     let browserName;

//     if(browser === '오페라'){
//         browserName = '오페라';
//     } else if(browser ==='safari'){
//         browserName ='사파리';
//     } else if(browser === '크롬'){
//         browserName = '크롬';
//     }
//     else {
// browserName = '알려지지 않은 브라우저';
// }
// console.log(`브라우저명은 ${browserName}`);


// let menu = 2;
// switch (menu){
//     case 1:
//         console.log("아메리카노");
//         break;
    
//     case 2:
//         console.log("쥬스")
//         break;
//     default:
//         console.log("다시 선택해주세요");
        
// }

// let browser1 = 'Chrome';
// let browserName1;

// switch (browser1){
//     case 'Edge':
//         browserName1 = '엣지';
//         break;
//     case 'FF':
//         browserName1 = '파이어폭스';
//         break;
//     case 'Opera':
//         browserName1 = '오페라';
//         break;
//     default:
//         browserName1 = '알려지지 않은 브라우저';

// }


// console.log(`true is ${Boolean(true)}`);
// console.log(`false is ${!!false}`);
// console.log(`0 is ${Boolean(0)}`);
// console.log(`-0 is ${Boolean(-0)}`);
// console.log(`1 is ${Boolean(1)}`);
// console.log(`-1 is ${Boolean(-1)}`);
// console.log(`'' is ${Boolean('')}`);
// console.log(`'0' is ${Boolean('0')}`);
// console.log(`'false' is ${Boolean('false')}`);
// console.log(`null is ${Boolean(null)}`);
// console.log(`undefined is ${Boolean(undefined)}`);
// console.log(`NaN is ${Boolean(NaN)}`);
// console.log(`[] is ${Boolean([])}`);
// console.log(`{} is ${Boolean({})}`);

// let score = 96;

// if(score >= 95){
//     console.log("95점이상 A입니다");}
//     else if(score >= 80){
//         console.log("B학점 입니다");
//     }
//     else if(score >= 60){
//         console.log("C학점 입니다");
//     }
//     else{
//         console.log("F 학점 다시 수강하시오");
//     }


// if(score >= 60){
//     console.log("C학점 입니다");}
//     else if(score >= 80){
//         console.log("B학점 입니다");
//     }
//     else if(score >= 90){
//         console.log("90점 이상 A 입니다");
//     }
//     else{
//         console.log("F 학점 다시 수강하시오");
//     } 
// 역시나 순서를 바꿔버리니까 97점도 먼저온 c학점이 되어버렸다.


// let day = 8;


// switch (day) {
//     case 0:
//         console.log("일요일좋아")
//         break;

//     case 1:
//         console.log("월요일좋아")
//         break;

//     case 2:
//         console.log("화요일좋아")
//         break;

//     case 3:
//         console.log("수요일좋아")
//         break;

//     case 4:
//         console.log("목요일좋아")
//         break;

//     case 5:
//         console.log("금요일좋아")
//         break;

//     case 6:
//         console.log("토요일좋아")
//         break;
    
        

//     default: 
//         console.log("종료하겠습니다")
//         break;
// }




// for (let i = 1; i <= 9; i++) {
//     console.log(`======${i}단=====\n`);
//     for(let j = 1; j <= 9; j++){
// console.log(`${i}x${j}=${i*j}`);
// }

// console.log("--------------\n")
//     }



// let age = 0;

// while (age < 5){
//     console.log(`${age}살입니다.`);
//     age+=1;

// }


// let age = 0;
// let num = 0;

// while (age < 5){
//     while(num<10){
//         console.log(`${age}살 입니다`);
//         num+=1;
//     }
//     age += 1;
//     num=0; //이 초기화를 해 줘야 0살입니다10번 1살입니다 10번...이런 형태로 간다. 중첩 while 문 주의
// }

// let num = 0;

// do{
//     num = num + 1;
//     console.log(num);
// }
// while (num < 10);





// for(let i = 0; i < 10; i++){
//     if (i === 2){
//         break;
//     }
//     console.log(`${i}살입니다`);
// }


// for (let i = 0; i < 10; i ++){

//     if(i === 2){
//         continue;
//     }
//     console.log(`${i}살 입니다`)
// }



for(let i = 0; i<=10; i++){
    if(i%2 === 0){
       break;
    }
console.log(`${i}는 짝수`);

}

//만일 break를 썼다면 쭈욱 나열된느게 아닌 조건에 맞는순간 