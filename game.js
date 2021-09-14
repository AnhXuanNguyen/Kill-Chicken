class Game{
	constructor(){
		this.canvas = null;
		this.context = null;
		this.width = 1300;
		this.height = 700;

		this.aircraft = null;

		this.bullet = [];
		this.chickens = [];
		this.n = 0;
		this.heartChicken = 1;

		this.background = null;

		this.status = false;
		this.count = 0;
		this.check = true;
		this.round = 0;
		this.countroud = 0;
		this.score = 0;
		this.m = null;

		this.bestScore = 0;
	}
	init(){
		this.canvas = document.getElementById('myCanvas');
		this.canvas.width = this.width;
		this.canvas.height = this.height;
		this.context = this.canvas.getContext('2d');
		this.context.font = "50px Arial";
		this.context.fillStyle = "white";
		this.background = new Background(this,bg);
		this.aircraft = new Aircraft(this, aircraft1, aircraft2);
	}
	initChiken(){
		this.n++;
		this.m = Math.floor(1+Math.random()*2);
		let x = 1100;
		let y = -100;
		for(let i = 0; i < this.n; i++){
			this.chickens[i] = [];
			for(let j = 0; j < this.m; j++){
				this.chickens[i][j] = new Chicken(this, chicken1, chicken2, chicken3);
				if (this.n >= 5) {
					this.heartChicken+=2;
					this.n = 0;
				}
				this.chickens[i][j].x = x;
				this.chickens[i][j].y = y;
				this.chickenX+=100;
				this.count++;
				x-=100;
			}
			y-=100;
		}
	}
	runGame(){
		if (this.bestScore < this.score) {
			this.bestScore = this.score;
		}
		this.countroud++;
		this.background.playBackground();
		for(let i = 0; i < this.chickens.length; i++){
			for(let j = 0; j < this.chickens[i].length; j++){
				this.chickens[i][j].chickenFly(i,j);
			}
		}
		for(let i = 0; i < this.bullet.length; i++){
			this.bullet[i].fire(i);
		}
		this.aircraft.changeImages();
		this.context.fillText("Score: "+this.score,0,50);
		this.context.fillText("Best score: "+this.bestScore,950,50);
		if (this.countroud < 50) {
			this.context.fillText("Round "+this.round, 680,300);
		}
		
	}
}
let aircraft1 = document.getElementById('aircraft1');
let aircraft2 = document.getElementById('aircraft2');
let chicken1 = document.getElementById('chicken1');
let chicken2 = document.getElementById('chicken2');
let chicken3 = document.getElementById('chicken3');
let bullet = document.getElementById('bullet');
let bg = document.getElementById('bg');
let heart = document.getElementById('heart');

let sound1 = document.getElementById('sound1');
let sound2 = document.getElementById('sound2');
let game = new Game();
game.init();
function playGame(){
	if (game.status == false) {
		game.runGame();
		setTimeout(playGame,10);
	}
	
}
function playAirCraft(){
	if (game.status == false) {
		game.aircraft.x = event.clientX-30;
		game.aircraft.y = event.clientY-90;
		game.aircraft.changeImages();
	}
	
}
function shoot(){
	if (game.status == false) {
		sound1.play();
		if (game.round < 5) {
			let bul0 = new Bullet(game, bullet, heart, 30,0);
			bul0.x = game.aircraft.x+20;
			bul0.y = game.aircraft.y;
			game.bullet.push(bul0);
		}
		else if(game.round >= 5 && game.round < 20){
			let bul1 = new Bullet(game, bullet, heart, 30,0);
			bul1.x = game.aircraft.x+20+100;
			bul1.y = game.aircraft.y;
			game.bullet.push(bul1);
			let bul2 = new Bullet(game, bullet, heart, 30,0);
			bul2.x = game.aircraft.x+20;
			bul2.y = game.aircraft.y;
			game.bullet.push(bul2);
			let bul3 = new Bullet(game, bullet, heart, 30,0);
			bul3.x = game.aircraft.x+20-100;
			bul3.y = game.aircraft.y;
			game.bullet.push(bul3);
		}
		else{
			let bul1 = new Bullet(game, bullet, heart, 30,0);
			bul1.x = game.aircraft.x+20+100;
			bul1.y = game.aircraft.y;
			game.bullet.push(bul1);
			let bul2 = new Bullet(game, bullet, heart, 30,0);
			bul2.x = game.aircraft.x+20;
			bul2.y = game.aircraft.y;
			game.bullet.push(bul2);
			let bul3 = new Bullet(game, bullet, heart, 30,0);
			bul3.x = game.aircraft.x+20-100;
			bul3.y = game.aircraft.y;
			game.bullet.push(bul3);

			let bul4 = new Bullet(game, bullet, heart, -30,0);
			bul4.x = game.aircraft.x+20+100;
			bul4.y = game.aircraft.y;
			game.bullet.push(bul4);
			let bul5 = new Bullet(game, bullet, heart, -30,0);
			bul5.x = game.aircraft.x+20;
			bul5.y = game.aircraft.y;
			game.bullet.push(bul5);
			let bul6 = new Bullet(game, bullet, heart, -30,0);
			bul6.x = game.aircraft.x+20-100;
			bul6.y = game.aircraft.y;
			game.bullet.push(bul6);




			let bul7 = new Bullet(game, bullet, heart, 0,30);
			bul7.x = game.aircraft.x+20;
			bul7.y = game.aircraft.y-100;
			game.bullet.push(bul7);
			let bul8 = new Bullet(game, bullet, heart, 0,30);
			bul8.x = game.aircraft.x+20;
			bul8.y = game.aircraft.y;
			game.bullet.push(bul8);
			let bul9 = new Bullet(game, bullet, heart, 0,30);
			bul9.x = game.aircraft.x+20;
			bul9.y = game.aircraft.y+100;
			game.bullet.push(bul9);

			let bul10 = new Bullet(game, bullet, heart, 0,-30);
			bul10.x = game.aircraft.x+20;
			bul10.y = game.aircraft.y+100;
			game.bullet.push(bul10);
			let bul11 = new Bullet(game, bullet, heart, 0,-30);
			bul11.x = game.aircraft.x+20;
			bul11.y = game.aircraft.y;
			game.bullet.push(bul11);
			let bul12 = new Bullet(game, bullet, heart, 0,-30);
			bul12.x = game.aircraft.x+20;
			bul12.y = game.aircraft.y-100;
			game.bullet.push(bul12);
		}
		game.runGame();
	}
	
}
function initChicken(){
	if (game.count == 0) {
		game.countroud = 0;
		game.round++;
		game.initChiken();
	}
}
function rounds(){
	setTimeout(initChicken,5000);
}
function playAgain(){
	game.status = false;
	game.score = 0;
	game.n = 0;
	game.heartChicken = 1;
	game.check = true;
	game.round = 0;
	game.countroud = 0;
	game.chickens.length = 0;
	game.bullet.length = 0;
	game.count = 0;
	game.init();
	playGame();
}
setInterval(rounds,1000);
playGame();