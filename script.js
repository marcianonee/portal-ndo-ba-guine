// Função para adicionar comentários na tela
document.getElementById('form-comentario').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede a página de recarregar

    // Pega os valores digitados
    const nome = document.getElementById('nome-comentario').value;
    const texto = document.getElementById('texto-comentario').value;
    const lista = document.getElementById('lista-comentarios');

    // Remove a mensagem de "Nenhum comentário" se ela existir
    const semComentario = document.querySelector('.sem-comentario');
    if (semComentario) {
        semComentario.style.display = 'none';
    }

    // Cria o elemento do novo comentário
    const divComentario = document.createElement('div');
    divComentario.style.borderBottom = '1px solid #eee';
    divComentario.style.padding = '10px 0';
    divComentario.style.marginBottom = '10px';
    
    divComentario.innerHTML = `
        <strong style="color: #1a5c37;">${nome}</strong>
        <p style="margin-top: 5px;">${texto}</p>
    `;

    // Adiciona o comentário na lista
    lista.appendChild(divComentario);

    // Limpa o formulário para o próximo comentário
    document.getElementById('form-comentario').reset();

    alert('Obrigado pelo seu comentário!');
});