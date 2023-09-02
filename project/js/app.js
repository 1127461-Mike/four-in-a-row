const game = new Game();
const beginGameButton = document.getElementById('begin-game');



beginGameButton.addEventListener('click', function (){
    game.startGame();

    this.style.display = 'none';
    document.getElementById('play-area').style.opacity = '1';

});
document.addEventListener('keydown',function(event){
    game.handleKeyDown(event);
})
