

// // function greet1(name,callback){
// //     return callback(name);;

// // }


// // let result;
// // result = greet1('선생님',(name)=>{
// //     return `Hello' ${name}`;    
// // })


// // result = greet1('깐부', (name) => `Hello ${name}`);
// // console.log(result);
// // //위에 꺼를 return 을 생략가능




// //화살표함수를 이용한 
// /*
// function calc2(n1, n2, fn){
// return fn(n1,n2);
// }

// let result;
// result = calc2(1,2, (n1,n2)=>n1+n2);
// */

// /*  수업내용
function add(a,b){
    return a+b;
}

function calc2(n1,n2,callback){
    return callback(n1,n2);
}


let result = calc2(5,4,add) //첫번째 방법 result를 콘솔찍어볼수있음



result=calc(5,4,(n1,n2)=>{
    console.log(n1+n2)
    return n1+n2}) //두번째 방법 add를 안넣고 기능을 바로 넣었음


result=calc2(5,3,(n1,n2)=>n+1); //3번째방법 살짝 생략함


result = clac2(1,2,function(n1,n2){return n1+n2}); //4번재 방법 에로우 함수도 안쓰고 그냥 함수를 깡으론 ㅓㅎ어부렸음

