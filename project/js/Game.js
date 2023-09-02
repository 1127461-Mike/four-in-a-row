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
    handleKeyDown(e){
        if(this.ready) {
            e = e || window.event;

            if (e.keyCode == '38') {
                // up arrow
            } else if (e.keyCode == '40') {
                // down arrow
                console.log('test')
            } else if (e.keyCode == '37') {
                // left arrow
            } else if (e.keyCode == '39') {
                // right arrow
            }
        }
    }

}