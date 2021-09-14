class Chicken{
	constructor(_game, _image1,_image2,_image3,_bullet){
		this.game = _game;
		this.bullet = this.game.bullet;
		this.images = [_image1,_image2,_image3];
		this.x = null;
		this.y = null;
		this.status = 0;
		this.check = true;
		this.count = 0;
		this.check2 = true;
		this.heart = this.game.heartChicken;
	}
	chickenFly(i,j){
		if (this.check2) {
			if (this.y <= 600) {
				this.y+=4;
				if (this.y >= 600) {
					this.check2 = false;
				}
			}
		}else{
			if (this.y >= 0) {
				this.y-=4;
				if (this.y <= 0) {
					this.check2 = true;
				}
			}
		}
		if (this.check) {
			if(this.x >= 100){
				this.status = 1;
				this.x-=4;
				if (this.x <= 100) {
					this.check = false;
				}
			}
		}else{
			if (this.x <= 1200) {
				this.status = 0;
				this.x+=4;
				if (this.x >= 1200) {
					this.check = true;
				}
			}
		}
		this.draw();
	}
	draw(){
		this.game.context.drawImage(this.images[this.status],this.x,this.y);
	}
}