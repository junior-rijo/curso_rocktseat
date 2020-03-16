var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];
function renderTodos() {
    listElement.innerHTML = '';

    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');

        linkElement.setAttribute('href', '#')

        var pos = todos.indexOf(todo);//(indexOf)procura a posição do array

        linkElement.setAttribute('onclick', 'deleTodo('+ pos +')')

        var linkText = document.createTextNode('Excluir')

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement)

    }
}

renderTodos();

function addTodo() {//adcionando novo item
    var todoText = inputElement.value;//recupando o valor do elemento

    todos.push(todoText);//função do array para adcionar um array
    inputElement.value = '';//
    renderTodos();//chama ela novamente para renderizar todos os elementos 
    saveToStorage
}

buttonElement.onclick = addTodo;//função do botão

function deleTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage
}

//salvando no localstorage e usando conceitos de JSON
//permiti armaz. informações não relacionais
function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos))
}




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