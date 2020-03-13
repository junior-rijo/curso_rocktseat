var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')

var todos = [
    'Fazer Café',
    'Estudar Javascript',
    'Acessar comunidade da Rocketseat'
];

function renderTodos() {
    listElement.innerHTML = '';

    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);

    }
}

renderTodos();

function addTodo() {
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
}

buttonElement.onclick = addTodo;

//var inputElement = document.querySelector('input[name=nome]');
//var btnElement = document.querySelector('button.botao');

//var inputElement = document.querySelector('body div#app input')//pode referenciar atributos também o query sempre retorna um elemento.
//btnElement.onclick = function (ae) {
    //alert('botao')
//}

/*var inputElement = document.getElementById('nome')

console.log(inputElement);

/*function mostraAlerta() {
    alert('Botão clicado')
}*/