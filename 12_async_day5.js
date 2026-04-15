// async function func1(){
//     return 'hello'
// };

// func1().then(console.log);



// function func2(){
//     return new Promise((resolve)=> {
//         resolve('hello');
//     });
// }

// func2().then(console.log);



//async/await을 이용한 회원가입하기
// const DB = [];

// function saveDB(user) {
// const oldDBLength = DB.length;
// DB.push(user);
// console.log(`${user.uname} 저장 완료되었습니다.`);
// return new Promise((resolve, reject) => {
// if (DB.length > oldDBLength) {
// resolve(user);
// } else {
// reject(new Error('저장에 실패했습니다.!'));
// }
// });
// }

// function sendEmail(user) {
// console.log(`${user.email}으로 이메일을 발송했습니다.`);
// return new Promise((resolve) => {
// resolve(user);
// });
// }
// function getResult(user) {
// return new Promise((resolve) => {
// resolve(`${user.uname}님 등록 성공했습니다.`);
// });
// }

// async function registerByAsync(user) {


// try {
//     const savedUser= await saveDB(user);
//     const emailedUser = await sendEmail(savedUser);
//     const result = await getResult(emailedUser);
//     return result;
// } catch (error) {
//     return new Error(error);
// }
// }



// const myUser = { uname: '손흥민', email: 'son@naver.com' };
// registerByAsync(myUser).then(console.log);










//데이터 가져오기(기존 fetch를 await을 이용하여 함)
async function fetchMovieData(url){
    const response = await fetch(url);
    if(!response.ok){
        throw new Error('요청실패. 상태코드:'+response.status);
    }
    const data = await response.json()
;
return data;   
}

//2. 데이터 검증
function validateMovieData(data){
    if(!data.articleList || data.articleList.length === 0){
        throw new Error('데이터가 없습니다');
    }
}

function extractMovieInfos(articleList){
    return articleList.map((article,idx)=>({
        title: article.title,
        rank: idx + 1,
    }));
}

function displayMovies(movieInfos){
    for(const movie of movieInfos){
        console.log(`[${movie.rank}위]${movie.title}`);
        }
}


const url = 'http://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json';

async function movies() {
    try {
        const data = await fetchMovieData(url);
        validateMovieData(data);
        const movieInfos = extractMovieInfos(data.articleList);
        displayMovies(movieInfos);
        
    } catch (error) {
        console.error('에러발생:',error.message);
    }
        
    }
    movies();