// const DB = []; //db 흉내를 위해 만들었다.

// function save2DB(user, callback){
//     DB.push(user);
//     console.log(`${user.name}님 데이터베이스에 저장 완료 되었습니다`);
//     return callback(user);
// }

// function sendEmail(user, callback){
//     console.log(`${user.email}으로 이메일 전송 완료`);
//     return callback(user);
// }

// function getResult(user){
//     return `${user.name}님 회원 가입 성공했습니다.`;
// }

// function register(user){
//     return save2DB(user, (user) => {
//         return sendEmail(user, (user) =>{
//             return getResult(user);
//         });
//     });
// }
// //함수에 행동을 다하면 다음행동으로 이걸하고 그걸 다 하면 이행동을 하고 끊임없이 물려있다
// //가독성이 매우나쁨
// const result = 
// register({name: '손흥민', email: 'son@naver.com'});
// console.log(result);



//30p promise
// const promise = new Promise((resolve, reject) => {
// const success = true;
// if (success) {
// resolve('작업 성공!');
// } else {
// reject('작업 실패!');
// }
// });
// promise
// .then((result) => {
// console.log('성공 결과:', result);
// })
// .catch((error) => {
// console.error('실패 결과:', error);
// });

// const p = new Promise((resolve) =>{
//      resolve(10);
//      console.log('1. Promise실행');
   
// })
// console.log('2. 코드 게속 실행');
// p.then((num)=>{
//     console.log('3.then 실행,num')
// })

// const p1 =new Promise((resolve)=> {
//     const result = 10;
//     resolve (result);
// })
// const p2 = p1.then((num)=>num + 1);
// p2.then((num))=>console.log(num));
// p1.then => num+1).then((num)=>console.log(num))