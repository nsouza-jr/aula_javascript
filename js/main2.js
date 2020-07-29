//Array

//var lista = ["maça", "pera", "laranja"]

//lista.push("uva");
//console.log(lista);
//lista.pop("uva");
//console.log(lista[1]);
//console.log(lista.length);
//console.log(lista.reverse(lista));

//console.log(lista[0]);
//console.log(lista.toString()[0]);
//console.log(lista.join(" - "));
//console.log(lista.join(" | "));


//dicionario

//var fruta = {nome:"maçã", cor:"vermelha"}

//var frutas = [{nome:"maçã", cor:"vermelha"},{nome:"uva", cor:"roxa"}]
//console.log(fruta);
//console.log(fruta.cor);

//console.log(frutas);
//console.log(frutas[1].nome);

//condicional, laços repetição e date

//var idade = 18;

/*var idade = prompt("Informe sua Idade:");
if (idade >= 18) {
    alert("maior de idade");
}else{
    alert("menor de idade");
};*/

/*var count = 0;
while (count < 5){
    console.log(count);
    count = count +1;
  // alert(count++);
};
*/
/*var count;
for (count=0; count<=5; count++){
    console.log(count);
}
*/

/*
var d = new Date();
console.log(d);
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getUTCMinutes());

//alert(d.getDate());
//alert(d.getMinutes());
//alert(d.getDay());

console.log("Hoje é " + d.getDate() + "/" + (d.getMonth()+1));

var var1 = "Simplicity is the ultimate sophistication.";
var var2 = "Leonardo da Vinci:";
console.log(var1 + var2 + "1425" + "-" + "1519");
*/

/*function clicou(){
    console.log("Obrigado por clicar");
    return alert("Obrigado por clicar");
};*/

function clicou(){
    //document.getElementById("agradecimento");
    //console.log(document.getElementById("agradecimento"));
    document.getElementById("agradecimento").innerHTML = "<i>Obrigado por clicar</i>";
    
};

function redirecionar(){
    window.open("https://www.globo.com/"); // abre a pagina em outra aba do navegador
    //window.location.href = "https://www.globo.com/"; // abre a pagina na mesma aba do navegador
};

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "<i>Obrigado por passar o mouse</i>";
    //alert("trocar texto");
    elemento.innerHTML = "Obrigado por passar o mouse"
};

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui"    
};

function load(){
    alert("pagina carregada");
};

function funcaoChange(elemento){
    console.log(elemento.value);
};



/*function soma(n1,n2){
    return n1+n2;
};
*/
/*function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
};

function validaIdade(idade){
  var validar;
  if (idade >= 18){
      validar = true;
  }else {
      validar = false;
  }
  return validar;
};
*/

//var idade = prompt("Informe sua Idade:");
//console.log(validaIdade(idade));

//alert(soma(5,10));
//alert(setReplace("Vai Japão", "Japão", "Brasil"));

//console.log(soma(5,10));
//console.log(setReplace("Vai Japão", "Japão", "Brasil"));

