class Player {
    constructor(name) {
        this.name = name;
        this.position = 0;
        this.money = 1500;
        this.properties = [];
    }

    move(steps) {
        this.position = (this.position + steps) % 40; // Supondo 40 espaços no tabuleiro
    }

    buyProperty(property) {
        if (this.money >= property.price) {
            this.money -= property.price;
            this.properties.push(property);
            property.owner = this;
        } else {
            console.log(`${this.name} não tem dinheiro suficiente para comprar ${property.name}.`);
        }
    }
}

class Property {
    constructor(name, price, rent, houseRent, hotelRent) {
        this.name = name;
        this.price = price;
        this.rent = rent;
        this.houseRent = houseRent;
        this.hotelRent = hotelRent;
        this.owner = null;
    }

    chargeRent(player) {
        if (this.owner && this.owner !== player) {
            player.money -= this.rent;
            this.owner.money += this.rent;
        }
    }
}

class Game {
    constructor(players, properties) {
        this.players = players;
        this.properties = properties;
        this.currentPlayerIndex = 0;
    }

    playTurn() {
        const player = this.players[this.currentPlayerIndex];
        const steps = this.rollDice();
        player.move(steps);
        const currentProperty = this.properties[player.position];
        if (currentProperty.owner === null) {
            player.buyProperty(currentProperty);
        } else {
            currentProperty.chargeRent(player);
        }
        this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
    }

    rollDice() {
        return Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1;
    }
}

// Definindo as propriedades
const properties = [
    new Property("Templo de Afrodite", 220, 18, [90, 250, 700, 875], 1050),
    new Property("Templo de Ares", 220, 18, [90, 250, 700, 875], 1050),
    new Property("Palácio do Rei Gregor", 240, 20, [100, 300, 750, 925], 1100),
    new Property("Illusia", 260, 22, [110, 330, 800, 975], 1150),
    new Property("Floresta Amazona", 260, 22, [110, 330, 800, 975], 1150),
    new Property("Helicon", 280, 24, [120, 360, 850, 1025], 1200),
    new Property("Monge Mensageiro", 200, 25, [50, 100, 200], 0),
    new Property("Argo", 200, 25, [50, 100, 200], 0),
    new Property("Navio com olho", 200, 25, [50, 100, 200], 0),
    new Property("Carruagem de Hades", 200, 25, [50, 100, 200], 0),
    new Property("Taverna da Cyrene", 150, 0, [], 0), // Aluguel baseado nos dados
    new Property("Tenda do Salmoneous", 150, 0, [], 0), // Aluguel baseado nos dados
    new Property("Oferenda pros Deuses", 100, 0, [], 0), // Aluguel baseado nos dados
    new Property("Imposto", 200, 0, [], 0), // Não aplicável
    new Property("Laboratório dos Clones", 200, 16, [80, 220, 600, 800], 1000),
    new Property("Acampamento de Ares", 180, 14, [70, 200, 550, 750], 950),
    new Property("Loja de Pergaminhos", 180, 14, [70, 200, 550, 750], 950),
    new Property("Caverna das Pedras Cantoras", 160, 12, [60, 180, 500, 700], 900),
    new Property("Acampamento Centauro", 140, 10, [50, 150, 450, 625], 750),
    new Property("Vila Amazona", 140, 10, [50, 150, 450, 625], 750),
    new Property("Fortaleza de Gurkhan", 300, 26, [130, 390, 900, 1100], 1275),
    new Property("Palácio da Lao Ma", 300, 26, [130, 390, 900, 1100], 1275),
    new Property("Templo Sumério", 320, 28, [150, 450, 1000, 1200], 1400),
    new Property("Valhalla", 350, 35, [175, 500, 1100, 1300], 1500),
    new Property("Monte Olimpo", 400, 50, [200, 600, 1400, 1700], 2000),
    new Property("Caverna dos Bárbaros", 120, 8, [40, 100, 300, 450], 600),
    new Property("Taverna da Meg", 100, 6, [30, 90, 270, 400], 550),
    new Property("Navio Amaldiçoado de Cecrops", 100, 6, [30, 90, 270, 400], 550),
    new Property("Casa Assombrada de Amphipolis", 60, 2, [10, 30, 90, 160], 250),
    new Property("Fazenda do Velho Ares", 60, 2, [10, 30, 90, 160], 250)
];

// Exemplo de uso
const players = [new Player("Xena"), new Player("Gabrielle")];

const game = new Game(players, properties);

// Simulação de algumas rodadas
for (let i = 0; i < 10; i++) {
    game.playTurn();
}
