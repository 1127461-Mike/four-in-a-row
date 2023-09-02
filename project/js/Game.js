class Game {
    constructor() {
        this.board = new Board();
        this.players = this.createPlayers();
        this.ready = false;
    }

    createPlayers(){
        const player1 = new Player("Player 1",1, "#e15258", true );
        const player2 = new Player("Player 2", 2, "#e59a13");
        return [player1, player2]
    }

    startGame(){
        this.board.drawHTMLBoard();
        this.activePlayer.activeToken.drawHTMLToken();
        this.ready = true;
    }

    get activePlayer(){
        return this.players.find((player) => player.active = true);
    }

    handleKeyDown(event){
        if(this.ready) {
            let movableToken = this.activePlayer.activeToken;;
            switch (event.key) {
                case "ArrowLeft":
                    // Left pressed
                    movableToken.moveLeft();
                    break;
                case "ArrowRight":
                    // Right pressed
                    movableToken.moveRight(this.board.columns);
                    break;
                case "ArrowUp":
                    // Up pressed
                    break;
                case "ArrowDown":
                    // Down pressed
                    console.log('test')
                    break;
            }
        }
    }

}