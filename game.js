document.querySelectorAll('.player-select').forEach(select => {
    select.addEventListener('change', function() {
        const selectedValue = this.value;
        const playerImages = {
            amarelo: "https://i.ibb.co/mJz7BwG/amarelo.png",
            branco: "https://i.ibb.co/yPfjtzH/branco.png",
            coracao: "https://i.ibb.co/5LkCTCx/coracao.png",
            dalmata: "https://i.ibb.co/NL3pYxx/dalmata.png",
            roxo: "https://i.ibb.co/vchfq4k/roxo.png",
            salem: "https://i.ibb.co/s983Xpp/salem.png"
        };

        // Atualiza a imagem do jogador correspondente
        const playerImage = this.parentElement.querySelector('.player-image');
        if (playerImage) {
            playerImage.src = playerImages[selectedValue];
        }
    });
});
