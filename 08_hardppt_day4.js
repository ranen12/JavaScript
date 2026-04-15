// console.log(true && 'hello');
// console.log(false && 'hello');

//사용자가 이름을 입력하지 않았을때(null undefined) 기본값 할당
// let userName=''; //falsy
// let displayName = userName || 'Guest';

// console.log(displayName);



// // ||은 or인데 앞에꺼가 true이면 (값이 있다면) 앞에꺼가 실행된다(뒤에꺼는 보지않음)
// //공백으로 두었을때 true가 된 셈이니 guest가 나오지 않는다.
// userName = '강장';
// displayName = userName || 'Guest';

// console.log(displayName);

// let isLoggedIn = true;
// let userProfile = {name: 'Alice' };

// //사용자가 로그인했을 때만 이름을 출력
// isLoggedIn && console.log(userProfile.name); //Alice

// //반대로 false가 되면 안된다



// //null 병합 연산자

// const name1 = null ?? 'Guest';
// console.log(name1); //Guest

// const name2 = undefined ?? "Guest";
// console.log(name2); //Guest

// const name3 = "RM" ?? "Guest";
// console.log(name3); //RM

// const name4 =
// "" || "Guest";
// console.log(name4);
// const name5 =
// "" ?? "Guest";
// console.log(name5);


// const user1 = {
//     name: 'RM',
//     age: 30
// };

// const {name: userName, age:userAge}=user1;

// console.log(userName);
// console.log(userAge);


//객체매개변수 객체분해 쉽게쓰는애
// function userInfo(user) {
// console.log(`${user.name} - ${user.age}`);
// }
// userInfo({ name: 'RM', age: 30 });
// function printUser({ name, age }) {
// console.log(`${name} - ${age}`);
// }
// printUser({ name: 'RM', age: 30 });

// const arr1 = [1,2,3];
// const arr2 = [...arr1];
// console.log(arr2);

// const person = {name : 'RM', age:30};
// const copy = {...person};
// console.log(copy);
// const user = {name: '손흥민',age:40};
// const newUser={...user,age:21};
// console.log(newUser)


// //rest 매개변수 모아주고 펼쳐주는 매개변수
// function sum(...nums){
//     console.log(nums);
// }

// sum(1,2,3,4,5);

// function sum1(num1,num2, ...nums){
//     console.log(num1);
//     console.log(num2);
//     console.log(nums);

// }
// sum1(1,2,3,4,5);



// //문자열을 조작하기
// const str = 'javaScript';

// console.log(str.length);//길이
// console.log(str.toUpperCase()); //대문자로
// console.log(str.toLowerCase());//소문자로
// console.log(str.includes('script'))// 해당 문자가 존재하는가? 대소문자 구분
// console.log(str.includes('java'));
// console.log(str.startsWith('java'));
// console.log(str.endsWith('Script'));//끝부분에 이 단어가 있음?
// console.log(str.indexOf('p')); //이 단어가 몇번째 인덱스에 있어?
// console.log(str.indexOf('z'));
// console.log(str.replace('Script', 'script'));//Script부분을 script로 바꿔줘


// const str1 = 'a,b,c'
// const arr = str1.split(',')
// console.log(arr);
// const str2 = ' hello ';
// console.log(str2.trim());
// const str3 = 'ha';
// console.log(str3.repeat(3));
// const str4 = 'hello';
// console.log(str4.charAt(1));


//try catc finally 예외처리


// try {
// // 실행할 코드
// } catch (error) {
// // 에러 발생 시 실행
// }
// try {
// console.log(a); // a는 정의되지 않음
// } catch (error) {
// console.log('에러 발생!');
// }
// try {
// console.log('실행');
// } catch (e) {
// console.log('에러');
// } finally {
// console.log('무조건 실행');
// }

//throw 예외를 발생시켜서, 사용자 임의로 예외처리를 할 수 있게 만듬
//(아직 개념이 명확하지가 않음)

try{
    throw new Error('문제발생');
} catch(error){
    console.log(error.message);
}
function constheckAge(age){
    if(age<18){
        throw new Error('미성년자');
    }
    return '통과';

}
try{
    checkAge(15);
}catch(error){
    
}