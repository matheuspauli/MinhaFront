// Ocultar Div de criação de usuário / mostra apenas o login
document.getElementById('conta').style.display = 'none';
let a = localStorage.getItem('userLogado'); // recupera nome do usuario LOGADO
let lista = [];
let indiceUpdate = undefined;
const alerta = document.getElementById('userCriado');
// Home - login
function entrar() {
    const userInput = document.getElementById('user').value;
    const password = document.getElementById('password').value;
    const localUser = localStorage.getItem('listaUsuarios');

    const local = JSON.parse(localUser);
    let logou = false;
    // if(userInput == ''|| password == ''){
    //     alert('Usuario ou senha em branco!');
    //     logou = false;
    // }
    for (const a of local) {
        if (a.user === userInput && a.pass === password) {
            logou = true;
            localStorage.setItem('userLogado', JSON.stringify(userInput));
            abrirModal('Sucesso','Login Efetuado','Fechar');
            //window.location.href = 'recados.html';

        }
        //window.location.href = 'recados.html';


    }
    if (!logou) {

        abrirModal('Alerta','usuario e/ou senha invalidos','Fechar');
    }
    
}
// Ocultar Div Login e mostrar DIV Criação de usuário
function criarconta() {
    document.getElementById('login').style.display = 'none';
    document.getElementById('conta').style.display = 'flex';
    document.getElementById('user00').value = "";
    document.getElementById('password00').value = "";
    document.getElementById('passwordCheck').value = "";
}

//Criando usuário
const listUserLocalStorage = JSON.parse(localStorage.getItem('listaUsuarios')) || []; 

function userCreator(){
    const user0 = document.getElementById('user00').value;
    const pass0 = document.getElementById('password00').value;
    const check = document.getElementById('passwordCheck').value;
if (user0.length >= 2 ){
        
    if( pass0.length >= 6 && pass0===check){
    
        /* Adiciona um novo valor no array criado */
        listUserLocalStorage.push({user:user0,pass:pass0});

        /* Salva o item */
        localStorage.setItem('listaUsuarios', JSON.stringify(listUserLocalStorage));
        localStorage.setItem('userLogado', JSON.stringify(user0));  
        abrirModal('Sucesso','Login Criado','Fechar');
        window.location.href = "recados.html";

    } else if(pass0.length < 6 && pass0===check){
        alert('senha invalida');
        criarconta();
    }else{
        alert('senha diferentes');
        criarconta();
    };

}else{
    alert('Senha em branco');
    criarconta();
}
}
//     let deucerto = false;   
// function entradaValida(){
//     const listUserLocalStorage = JSON.parse(localStorage.getItem('listaUsuarios')) || [];
//     const user0 = document.getElementById('user00').value;
//     const pass0 = document.getElementById('password00').value;
//     const check = document.getElementById('passwordCheck').value;       
//     if (user0 == '' || pass0 == '' || check == '') {
//         abrirModal('Atenção!', 'Usuário/Senha não podem estar em branco!', 'Fechar', null);
//         console.log('deu errado1');
//         return false;
//     }else if (pass0 != check){
//         abrirModal('Atenção!!', 'As senhas não coincedem, tente novamente!', 'Fechar', null);
//         console.log('deu errado2');
//         return false;
//     }else for (let i of listUserLocalStorage){
//         if (i.user === user0){
//             abrirModal('Atenção!', 'Usuário existente, tente novamente', 'Fechar', null);
//             console.log('deu errado3');            
//             return false;            
//         } else {
//             console.log('deu certo');
//             deucerto = true;
//         }      
//     }
// };
// function userCreator(){
//     entradaValida()
//     const user0 = document.getElementById('user00').value;
//     const pass0 = document.getElementById('password00').value;
    // if (deucerto == true){
    //     console.log(user0);
    //     console.log(pass0);
    //     listUserLocalStorage.push({user:user0,pass:pass0});
    //     localStorage.setItem('listaUsuarios', JSON.stringify(listUserLocalStorage));
    //     localStorage.setItem('userLogado', JSON.stringify(user0));
    //     abrirModal('Parabens!', 'Usuário criado!', 'Ir para Recados', 'onclick="abriRecados(a)"');        
    // };
//}

// for (let i of listUserLocalStorage) {
//     if (i.user === user0) {
//         console.log(i.user)
//         alert('Usuário existente, tente novamente');
//     }

// }
// }

// } if (pass0 === check){
//     listUserLocalStorage.push({user:user0,pass:pass0});
//     localStorage.setItem('listaUsuarios', JSON.stringify(listUserLocalStorage));
//     localStorage.setItem('userLogado', JSON.stringify(user0));
//     alert('Usuário criado! redirecionando..');
//     window.location.href='recados.html'
// }else {
//     alert('As senhas não coincedem, tente novamente!')
// }

//Pagina dos recados -------------------------------------------------------------
const recupera = localStorage.getItem(a);
if (recupera) {
    lista = JSON.parse(recupera);

    mostrar();
}
function alertar() {
    alerta.innerHTML = '<div class="alert alert-success" role="alert">Recado editado</div>';
    document.getElementById('userCriado').style.display = 'block';

}
// function fechar(){
//    document.getElementById('userCriado').style.display ='none';

// }
//Criando recados
function CriarRecados() {
    const descri = document.getElementById('inputDescri').value;
    const detalhes = document.getElementById('inputDetalha').value;
    if (indiceUpdate != undefined) {
        const objeto = lista[indiceUpdate];
        objeto.des = descri;
        objeto.deta = detalhes;

        // setTimeout(alertar(), 1000);
        // setTimeout(function () {
        //     //alert('3');
        //     document.getElementById('userCriado').style.display = 'none';
        // }, 3000);

        alerta.innerHTML += '<div class="alert alert-warning alert-dismissible fade show" role="alert"><strong>Recado editado</strong><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';


    } else {
        lista.push({
            des: descri, deta: detalhes
        });
        alerta.innerHTML += '<div class="alert alert-success alert-dismissible fade show" role="alert"><strong>Recado adicionado</strong><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
    }
    salvar();
    mostrar();
    indiceUpdate = undefined;
    document.getElementById("inputDescri").value = ""; //deixa campos limpos
    document.getElementById("inputDetalha").value = ""; //deixa campos limpos
}

//mentor
function mostrar() {
    const divTabela = document.getElementById("tabela");

    let conteudo = "<table border='1'>";
    let indice = 0;
    let contador = 1;
    for (const valor of lista) {
        conteudo += `
        <tr>
            <td>${contador}</td>
            <td>${valor.des}</td>
            <td>${valor.deta}</td>            
            <td><button onclick='editar(${indice})' type="button" class="btn btn-dark" onclick="criarconta()">Editar</button>
                <button onclick='apagar(${indice})' type="button" class="btn btn-primary" onclick="entrar()">Apagar</button></td>                  
        </tr>       
        `;
        indice++;
        contador++;
    }
    conteudo += "</table>"

    divTabela.innerHTML = conteudo;

}

function salvar() {
    const recadosSalvos = JSON.stringify(lista);
    localStorage.setItem(a, recadosSalvos);
}

function apagar(indice) {
    // Apaguei do Array local
    lista.splice(indice, 1);
    // Substituir no localStorage
    salvar();
    // Re imprimir a lista atualizada
    mostrar();
    alerta.innerHTML += '<div class="alert alert-danger alert-dismissible fade show" role="alert"><strong>Recado Excluido</strong><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
}

function editar(indice) {
    // Busco o objeto selecionado
    const objetoSelecionado = lista[indice];
    // atribuir os valores no text
    document.getElementById("inputDescri").value = objetoSelecionado.des;
    document.getElementById("inputDetalha").value = objetoSelecionado.deta;
    indiceUpdate = indice;

}
// function abrirModal(id){
//     var myModal = new bootstrap.Modal(document.getElementById(id), {});
//     myModal.show();
// }
function abrirModal(titulo, conteudo, btn, link) {
    var myModal = new bootstrap.Modal(document.getElementById('testemodal'), {});
    let a = document.getElementById("tituloModal");
    let b = document.getElementById("conteudoModal");
    let c = document.getElementById("btnModal");
    a.innerHTML = `<h5 class="modal-title">${titulo}</h5>`
    b.innerHTML = `<p>${conteudo}</p>`
    c.innerHTML = `<button type="button" class="btn btn-secondary" '${link}' data-bs-dismiss="modal">${btn}</button>`
    myModal.show();
}

function sairRecados() {
    window.location.href = 'index.html';
}

function abriRecados(){
    window.location.href = 'recados.html';    
}