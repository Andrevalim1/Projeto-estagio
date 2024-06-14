
var botao = document.getElementById('btn_alimentar_modal');

botao.addEventListener('click', function () {
    var nome = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var tel = document.getElementById('tel').value;
    var message = document.getElementById('message').value;
    var horario = document.getElementById('horario').value;

    document.getElementById('nome_span').textContent = nome;
    document.getElementById('email_span').textContent = email;
    document.getElementById('numero_span').textContent = tel;
    document.getElementById('Mensagem_span').textContent = message;
    document.getElementById('horario_span').textContent = horario;
})
