// const human = {
//     name: '오유진',
//     age:30,
// }
// //객체내부에 속성에 접근할댄 .을 쓰거나 [속성명] 을 쓴다 그냥 .이 편한듯
// human.age=20;
// human.name='오유진';
// console.log(human['name'],human.age);




//예제
// const friend = {
//  name:'광광',
//  age:50,
//  greet: function(){
//     console.log(`안녕 나는 ${this.name}이다`); 
// },
// goodbye(){
//     console.log('goodbye');
// },
// }

// friend.greet();
// friend.goodbye();
// console.log(friend.name)




//객체에 속성 추가 삭제

// human.job = 'teacher';
// console.log(human.job);

// human.info=function(){
//     console.log(`이름은 ${this.name}이고 
//         직업은 ${this.job}이다`);
// };

// human.info();
// delete human.age;
// console.log(human.age);





//매번 만들기 귀찮으니까 객체를 만들어주는 함수인 생성자함수라는걸 그냥 만들자
//관례적으로 이런 객체를 만들어주는 생성자 함수는 대문자를 쓰시오
//이 함수를 호출할때마다 객체가 하나씩 만들어진다
//this는 대충 지금 만들 객체라고 생각하자 지금만들객체에 name에 name을 넣겟다 그냥 만들겟다는 뜻

/*
function Person(name, age){ 
    this.name = name;  
    this.age = age;
    this.greet = function(){
        console.log(`안녕 나는 ${this.name}`);
    }
}

const person1 = new Person('양관식',20); //new를 넣어줘야 합니다.
const person2 = new Person('오애순',40);
console.log(person1);
console.log(person2);
console.log(person1.name,person1.age);
person2.greet();


function Student(name,grade,gender){
    this.name=name;
    this.grade=grade;
    this.gender=gender;
    this.info= function(){
        console.log(`학생명:${this.name},학년:${this.grade},성별:${this.gender} 입니다`);
    }
}

const student1 = new Student('광짱이',2,'여');
const student2 = new Student('인자강',1,'남');
    console.log(student1.name,student2.name);
    student1.info();

    */