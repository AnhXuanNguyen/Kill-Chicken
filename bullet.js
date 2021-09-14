class Bullet{
	constructor(_game, _image, _heart,_speedY,_speedX){
		this.game = _game;
		this.image = _image;
		this.heart = _heart;
		this.x = null;
		this.y = null;
		this.speedY = _speedY;
		this.speedX = _speedX;
	}
	fire(a){
		for(let i = 0; i < this.game.chickens.length; i++){
			for(let j = 0; j < this.game.chickens[i].length; j++){
				if (this.x >= this.game.chickens[i][j].x && this.x+25 <= this.game.chickens[i][j].x + 100) {
					if (this.y <= this.game.chickens[i][j].y+100) {
						this.game.chickens[i][j].heart--;
						sound2.play();
						this.game.context.drawImage(this.heart,this.x+20,this.y-200);
						this.game.bullet.splice(a,1);
						if (this.game.chickens[i][j].heart <= 0) {
							this.game.score++;
							this.game.chickens[i].splice(j,1);
							this.game.count--;
							return;
						}
					}
				}
			}
		}
		this.draw();
		this.y-=this.speedY;
		this.x+=this.speedX;
		if (this.y < 0 || this.y > 700 || this.x <0 || this.x > 1300) {
			this.game.bullet.splice(a,1);
		}
	}
	draw(){
		this.game.context.drawImage(this.image, this.x, this.y);
	}
}