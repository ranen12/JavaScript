// console.log('1번');
// setTimeout(()=> {console.log('2번');},3000);
// console.log('3번');


function asyncTest(name, callback){
    console.log('타이머 시작');
    setTimeout(() => {
        callback(name);
    },3000);
}

function doOtherthing() {
    for(let i = 0; i < 300; i++){
        console.log(`${i}번째 처리`);
    }
}

function sayHello(name){
    console.log(`반갑다 ${name} 님아 `);
}
//함수표현식과 이것저것으로도 만들어보라는듯?

asyncTest('뷔',sayHello);
doOtherthing();