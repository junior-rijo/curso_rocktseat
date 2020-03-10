var inputElement = document.querySelector('input[name=nome]');
var btnElement = document.querySelector('button.botao');

//var inputElement = document.querySelector('body div#app input')//pode referenciar atributos também o query sempre retorna um elemento.
btnElement.onclick = function(){
    var text = inputElement.value;
    alert('text');
}
console.log(btnElement);
/*var inputElement = document.getElementById('nome')

console.log(inputElement);

/*function mostraAlerta() {
    alert('Botão clicado')
}*/