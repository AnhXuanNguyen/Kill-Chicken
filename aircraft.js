class Aircraft{
	constructor(_game, _aircraft1, _aircraft2){
		this.images = [_aircraft1, _aircraft2];
		this.game = _game;
		this.x = 750;
		this.y = 600;
		this.count = 0;
		this.status = 0;
	}
	changeImages(){
		for(let i = 0; i < this.game.chickens.length; i++){
			for(let j = 0; j < this.game.chickens[i].length; j++){
				if (this.x+70 >= this.game.chickens[i][j].x && this.x <= this.game.chickens[i][j].x + 100) {
					if (this.y <= this.game.chickens[i][j].y + 100 && this.y + 100 >= this.game.chickens[i][j].y) {
						this.game.status = true;
						return;
					}
				}
			}
		}
		this.count++;
		if (this.count%20 == 0) {
			if (this.status == 0) {
				this.status = 1;
			}else this.status = 0;
			this.count = 0;
		}
		this.draw();
	}
	draw(){
		this.game.context.drawImage(this.images[this.status],this.x,this.y);
	}
}