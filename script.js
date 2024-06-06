function playRockPaperScissor(player1, player2) {
    //empate
    if((player1 === "Pedra") && (player2 === "Pedra")) {
        return "Empate!"
    }
    else if ((player1 === "Tesoura") && (player2 === "Tesoura")) {
        return "Empate!"
    }
    else if ((player1 === "Papel") && (player2 === "Papel")) {
        return "Empate!"
    }

    //jogador1 ganha
    else if ((player1 === "Pedra") && (player2 === "Tesoura")) {
        return "Jogador 1 venceu!"
    }
    else if ((player1 === "Tesoura") && (player2 === "Papel")) {
        return "Jogador 1 venceu!"
    }
    else if ((player1 === "Papel") && (player2 === "Pedra")) {
        return "Jogador 1 venceu!"
    }
    
    //jogador2 ganha
    else if ((player1 === "Pedra") && (player2 === "Papel")) {
        return "Jogador 2 venceu!"
    }
    else if ((player1 === "Papel") && (player2 === "Tesoura")) {
        return "Jogador 2 venceu!"
    }
    else if ((player1 === "Tesoura") && (player2 === "Pedra")) {
        return "Jogador 2 venceu!"
    }
}