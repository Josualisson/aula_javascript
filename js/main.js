
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>"; //permite colocar qualquer coisa em html
    //console.log(document.getElementById("agradecimento"));   
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://josualisson.github.io/meuprimeirosite/"); //abre essa página em uma aba diferente no botão "clique aqui"
   // window.location.href = "https://josualisson.github.io/meuprimeirosite/"; //Abre essa página na mesma janela
}

function trocar(){
    document.getElementById("mouseover").innerHTML = "Obrigado por passar o mouse"; //quando passar o mouse o texto mudará
    //alert("trocar texto");

}

function voltar(){
    document.getElementById("mouseover").innerHTML = "passe o mouse aqui"; //quando passar o mouse o texto alternará
}

function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){  //faz com que abra uma barra de opções
    console.log(elemento.value)
}


/*
function soma (n1, n2){
    return n1 + n2;
    alert(soma(5, 10));
}
*/
/*
function validaidade(idade){
    var validar = true;
    if(idade >= 18){
            validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade");
console.log(validaidade(idade));
//faz com que abra um pop-up na web perguntando sua idade e dizendo na pasta console no inspecionar elementos se ele é maior ou menor de idade
*/

/*
var d = new Date();
alert(d);
// Faz com quê o site me diga a hora, a data e o dia em pop-up
*/



/*
var count;
for(count = 0; count <= 5; count++){ // count que = 0(quer dizer de onde a contagem vai iniciar)                                    
    alert(count);                    // count <= 5 = quer dizer onde a contagem vai terminar
};                                   // count++ = quer dizer que a contagem vai ser sempre de 1 por 1
//faz com quê abra uma contagem em pop-up
*/




/*
var count = 0;
while(count <= 5){
    console.log(count);
    alert(count);
    count = count + 1; //ou pode usar o count++
}
//faz com quê a página conte de 1 a 5 em pop-up
*/


/*var idade = prompt("Qual sua idade?");
var idade = 18;

if (idade >= 18) {
    alert("maior de idade");
} else {
    alert("menor de idade")
};
// esse comando faz com quê crie um pop-up na web perguntando sua idade e o resultado mostrando se é maior ou menor de idade
*/




/*
var frutas = [{nome:"maçã", cor:"vermelho"}, {nome:"uva", cor:"roxa"}];
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta = {nome:"maçã", cor:"vermelho"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["Maçã", "Pêra", "Laranja"];
//lista.push("uva");  //Adciona elemento a lista
//lista.pop(); // Faz com quê tire o ultimo elemento na lista
//console.log(lista);
//console.log(lista.join(" - ")); //Faz com que os Itens fiquem separados por traços(ou qualquer caractere que quiser colocar) e não por vírgulas
//console.log(lista.toString());  //trás os elementos pra uma string
//alert(lista[1]); // Faz com que somente o primeiro item da lista apareça na caixa pop-up


[]
//var nome = "Josué Alisson"; //usar nomes com aspas
//var idade = 21; //usar sempre números sem aspas
//var idade2 = 10;
//var n1 = 5;
//var n2 = 3;
//var frase = "Japão é o melhor time do mundo.";
//alert(nome +" tem "+ idade + " anos "); // faz com quê ao abrir a página uma mensagem apareça em poup pout
//alert(idade + idade2);
//console.log(nome); //faz com quê o var nome aparece no console em inspecionar elementos na web
//console.log(n1 * n2);
//console.log(frase.replace("Japão", "Brasil")); // Faz com quê mude uma palavra da frase ao invés de "Japão é o melhor time do mundo." Ficará: "Brasil é o melhor time do mundo."
//alert(frase.replace("Japão", "Brasil")); // também pode ser usado no alert
//alert(frase.toUpperCase("Japão", "Brasil")); // Faz com quê toda a frase fique MAIÚSCUCLA
//alert(frase.toLowerCase("Japão", "Brasil")); // Faz com quê toda a frase fique Minúscula 
