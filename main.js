const todoApp = document.querySelector('.todo-app');
const todoBtn = document.querySelector('.todo-app-btn');
const todoList = document.querySelector('.todo-app-list');
const todoInput = document.querySelector('.todo-app-input')
//click event Listener

todoBtn.addEventListener('click' , addTodoList);
todoList.addEventListener('click',toDoAction);

//function to adding todo list 

function addTodoList(event){

    //adding div under todo-app-list

    const todoNewDiv = document.createElement('div');
    todoNewDiv.classList.add('todo-app-item-list');

    const todoNewInput = document.createElement('span');

                   
    todoNewInput.innerHTML = `<input type="checkbox" class='checked' > `;
     todoNewDiv.appendChild(todoNewInput);
    
     todoNewInput.addEventListener("click",() =>{
        todoNewDiv.classList.toggle('brown');
            todoNewP.classList.toggle('remove-p');
     })
     
     const todoNewP = document.createElement('p');
    todoNewP.innerHTML = todoInput.value;
    todoNewDiv.appendChild(todoNewP);
    saveTodolocal(todoInput.value);
    const todoNewAction = document.createElement('span');

    todoNewAction.innerHTML = '<i class="fas fa-trash close"></i>';
    todoNewDiv.appendChild(todoNewAction);
    todoList.appendChild(todoNewDiv);
    todoInput.value = "";
}


// Adding todo action

function toDoAction(e){
    
    //console.log(e.target)
    const todoItem = e.target;
   //console.log(todoItem.classList[1]);

    //task completed

    if(todoItem.classList[1] === 'checked'){
        todoItem.classList.toggle('fa-check-square');
        const  todoComplete = todoItem.parentElement;
        const todoCompleted = todoComplete.parentElement;
        todoCompleted.classList.toggle('completed')
    }

    //deleting todo task

    if(todoItem.classList[2] === 'close'){
        const todoDeleteElement = todoItem.parentElement;
        const todoDeleteElementTask = todoDeleteElement.parentElement;
        console.log(todoDeleteElementTask);
        todoDeleteElementTask.remove();
    }
}


//saving data in browser using local storage

function saveTodolocal (todoItem){
    let todo;
    if(localStorage.getItem('todo') === null){
        todo =[];
    }
    else{
        todo = JSON.parse(localStorage.getItem('todo'));
    }
    todo.push(todoItem);
    localStorage.setItem('todo',JSON.stringify(todo));
}