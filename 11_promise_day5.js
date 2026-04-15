// const promise = new Promise((resolve, reject) =>{
//     const success = true;
//     if (success){
//         resolve('작업성공');
//     } else {
//         reject('작업실패');
//     }
// });
// promise
// .then((result) => {
//     console.log('성공결과', result);
// })
// .catch((error) =>{
//     console.error('실패결과', error);
// });



// const p1 = new Promise((resolve) =>{
//     const result = 10;
//     resolve(result);
// });
 
// //반환값:11 => resolve(11)을 호출하는 Promise 생성
// const p2 = p1.then((num) => num + 1);
// p2.then((num) => console.log(num))

// p1.then((num) => num + 1).then((num)=> console.log(num));


//즉시성공 promise

// new Promise((resolve) =>{
//     resolve(10);
// });

// Promise.resolve(10);

// function getData(){
//     return Promise.resolve('데이터');

// }
// getData().then(console.log);
// Promise.resolve(1)
// .then((n)=> n + 1)
// .then(console.log);


//즉시실패
// Promise.reject('에러').catch(console.log);
// function checkAge(age) {
// if (age < 18) {
// return Promise.reject('미성년자');
// }
// return Promise.resolve('통과');
// }
// checkAge(14).then(console.log).catch(console.log);

// new Promise((reject)=> {
//     reject('에러');
// });
// Promise.reject('에러').catch(console.log);
// function checkAge(age) {
// if (age < 18) {
// return Promise.reject('미성년자');
// }
// return Promise.resolve('통과');
// }
// checkAge(14).then(console.log).catch(console.log);

//회원가입
//if(DB.length > oldDBLength)는 db가 추가가 되어 더 커졌다면
//성공한것이고 그렇지않다면 실패한것이다 라는 판단으로 성공 실패를 나누기위해
//들어간 조건
// const DB = [];


// //db에저장하는 코드 성공실패여부를 가리며 성공한경우push함
// function saveDB(user){
//     const oldDBLength =DB.length; //현 DB의 아이템 갯수를넣어줌
//     DB.push(user); //일단 들어온 유저 정보를 db에 push한것
//     console.log(`${user.uname} 저장 완료되었습니다`);
//     return new Promise((resolve,reject) => {
//         if(DB.length > oldDBLength){
//             resolve(user);
//         } else {
//             reject(new Error('저장 실패!'));
//         }
//     });
// }

// function sendEmail(user){
//     console.log(`${user.email}으로 이메일을 발송했습니다`);
//     return new Promise((resolve)=>{
//         resolve(user);
//     })
// }

// function getResult(user){
//     return new Promise((resolve) => {
//         resolve(`${user.uname}님 등록 성공했습니다`);
        
//     });
// }

// function registerByPromise(user){
//     const result = saveDB(user)//유저 정보가 들어간db를 결과에 저장한다음 메일보내기 결과알리기 등등에 일들을 수행함

//     .then(sendEmail)
//     .then(getResult)
//     .catch((error) => new Error(error));
//     return result;
// }


// const myUser ={uname: '호날두', email: 'Ho@naver.com'};
// const result =registerByPromise(myUser);
// result.then(console.log);


//위예시를 즉시성공 즉시실패 를 써서 간략화

// const DB = [];


// //db에저장하는 코드 성공실패여부를 가리며 성공한경우push함
// function saveDB(user){
//     const oldDBLength =DB.length; //현 DB의 아이템 갯수를넣어줌
//     DB.push(user); //일단 들어온 유저 정보를 db에 push한것
//     console.log(`${user.uname} 저장 완료되었습니다`);
    
//         if(DB.length > oldDBLength){
//             return Promise.resolve(user);
//         } else {
//            return Promise.reject(new Error('진짜실패함'));
//         }
//     };


// function sendEmail(user){
//     console.log(`${user.email}으로 이메일을 발송했습니다`);
//     return Promise.resolve(user);
//         resolve(user);
//     }


// function getResult(user){
//  return Promise.resolve(user);
        
//     };


// function registerByPromise(user){
//     const result = saveDB(user)//유저 정보가 들어간db를 결과에 저장한다음 메일보내기 결과알리기 등등에 일들을 수행함

//     .then(sendEmail)
//     .then(getResult)
//     .catch((error) => new Error(error));
//     return result;
// }


// const myUser ={uname: '호날두', email: 'Ho@naver.com'};
// const result =registerByPromise(myUser);
// result.then(console.log);




const url = 'http://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json';

fetch(url)
    .then((response) =>{
        return response.json();
    })
    .catch(() => {
        console.log('요청에 실패했습니다');
    })
    .then((data) => {
        if(!data){
            throw new Error('데이터가 없어');
        }
        if(!data.articleList || data.articleList.length === 0){
            throw new Error('데이터가 없습니다.');
        }
        return data.articleList;
    })
    .catch((error) => {
        console.error('에러발생',error.message);
    })
    .then((articles) =>{
        return articles.map((article, idx) => {
            return{ title: article.title, rank: idx + 1, time:article.createTime};
        });
    })
    .then((results) =>{
        for (let movie of results){
            console.log(`[${movie.rank}위] ${movie.title} ${movie.time}`);
        }
    })
    .catch((err) => {
        console.log('<<에러발생>>');
        console.log(err);
    });



// fetch(url)
// .then((res)=> res.json())
// .catch((e) => console.log(e.message));
// .then((data)=>{
//     if(!data){
//         throw new Error('데이터가 없습니다.')
//     }
//     if(!data.articleList || DataTransfer.articleList.length ===0){
//         throw new Error('데이터가 없습니다')
//     }
//     return data.articleList
// })//Promise.resolve(data.articleList)
// .then((articles)=>{
//     return articles.amp((article,index)=>{ return {title: article.title, rank:index +1 }
// });//만일 index를 안쓸걸면(article만 써도 되는데 쓸거면 index도 받아오긴해야함
// })
// .then((results)=>{
//     for(let movie of results){
//         console.log(`${}`)
//     }
// })