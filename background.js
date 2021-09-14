class Background{
	constructor(_game, _image){
		this.game = _game;
		this.image = _image;
		this.x = 0;
		this.y = 0;
	}
	playBackground(){
		this.y++;
		if (this.y == 700) {
			this.y = 0;
		}
		this.draw();
	}
	draw(){
		this.game.context.drawImage(this.image,this.x,this.y);
		this.game.context.drawImage(this.image,this.x,this.y-700);
	}
}