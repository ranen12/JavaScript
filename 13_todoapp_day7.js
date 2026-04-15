// id가 필요하다. 할일이 필요하다. 그걸 담을수있는text, completed
// todo를 추가하는 함수= todoapp
// id속성은 
// text전달받은 텍스트값
// completed 완료했는지 일단 디폴트상태는 fals

// 다햇다면 push해주기

// listtodo   목록 출력하기위해

// toggletodo완료처리에 관한것 fal
// (id는 왜 받아야하는거지?)

// 특수 체크 임티를 쓸거면 컨트롤 커맨스 스페이스 O 같은 형태로 

// 삭제 필터처리 


class TodoApp{
    
    todos=[];
    nextId = 1;//할일글 번호인가???
    
    addTodo(text){
        const todo ={
        id: this.nextId++,
        text,
        completed: false,}
        this.todos.push(todo);
    }

    listTodos(){
     console.log('🔥Todo List');
     this.todos.forEach((todo)=>{
        console.log(`[${todo.completed ? '✓':' '}](${todo.id})${todo.text}`);
    });
}

    toggleTodo(id){
    const todo = this.todos.find((t)=>t.id ===id);
    if(todo){
        todo.completed=!todo.completed;
    }
}

    removeTodo(id){
    this.todos = this.todos.filter((t)=> t.id !== id);
}
}


const app = new TodoApp()
app.addTodo('typescrpt 공부');//아 이해했다 addTodo는 class안에 있는 메서들이기때문에 app.addtodo형태로 써야한다
app.addTodo('운동');
app.listTodos();
app.toggleTodo(1);
app.listTodos();
app.toggleTodo(1);
app.listTodos();
