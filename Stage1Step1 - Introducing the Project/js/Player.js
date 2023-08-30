class Player{
    constructor(name, id, color, active = false) {
        this.name = name;
        this.id = id;
        this.color = color;
        this.active = active;
        this.token = this.createTokens(21);
    }
    // creates token object for player
    createTokens(num){
        let tokens = [];
        for (let i = 0; i < num; i++) {
            let token = new Token(i, this)
            tokens.push(token)
        }
        return tokens;
    }
    get unusedTokens(){
        return this.token.filter(token => !token.dropped);
    }
    get activeToken(){
        return this.unusedTokens[0];
    }
}

