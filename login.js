// Configurar a conexão com o Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDjKDSvcImbhwYbrXvB_AvctRbBuWAK_os",
    authDomain: "SEU_AUTH_DOMAIN",
    projectId: "1:588655940467:android:895ad608d7a1e1ec5dab06",
    appId: "1:588655940467:android:895ad608d7a1e1ec5dab06"
};

firebase.initializeApp(firebaseConfig);

// Capturar o formulário de login
var loginForm = document.getElementById('loginForm');

// Adicionar um evento de envio ao formulário
loginForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Impedir a ação padrão de envio do formulário

    // Capturar os valores digitados pelo usuário
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Autenticar o usuário com o Firebase
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(userCredential) {
            // Redirecionar para a página mines.html após a autenticação
            window.location.href = 'mines.html';
        })
        .catch(function(error) {
            // Exibir uma mensagem de erro, caso ocorra algum problema
            alert(error.message);
        });
});