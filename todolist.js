function show(){
    if(document.getElementById('list').style.display == 'none'){
        document.getElementById('list').style.display = 'block'
    }else{
        document.getElementById('list').style.display = 'none'
    }
}

var todoList = document.getElementById('list')
var inputTodo = document.getElementById('typeTodo')
var buttonTodo = document.getElementById('addTodo')

var todos = JSON.parse(localStorage.getItem('list_todos')) || []

function renderTodo() {
    
    todoList.innerHTML = ''
    
    for(todo of todos) {

        
        var todoEl = document.createElement('li')
        var todoText = document.createTextNode(todo)
        
        todoEl.appendChild(todoText)
        todoList.appendChild(todoEl)
        
        var excludeTodo = document.createElement('a')
        var excludeText = document.createTextNode('excluir')
        
        var pos = todos.indexOf(todo)
        excludeTodo.setAttribute('onclick', 'excludeTodo(' + pos + ')')
        
        excludeTodo.setAttribute('href', '#')

        excludeTodo.appendChild(excludeText)
        todoList.appendChild(excludeTodo)
        
    }
}
renderTodo()

function addTodo() {
    var inputTextTodo = inputTodo.value

    todos.push(inputTextTodo)
    inputTextTodo = ' '
    renderTodo()
    saveTodo()
}

buttonTodo.addEventListener('click', addTodo)

function excludeTodo(pos){
    todos.splice(pos, 1)
    renderTodo()
    saveTodo()
}

function saveTodo() {
    localStorage.setItem('list_todos', JSON.stringify(todos))
}


