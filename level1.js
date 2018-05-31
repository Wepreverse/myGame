var Level1={
	krblk: null,
	aU:null,
	aD:null,
	aR:null,
	aL:null,
	laser:null,
	weapon:null,
	sBtn:null,
	eK:null,
	rocket:null,
	enemy:null,
	enemies:null,
	kill:null,
	health:3,
	texty:null,
	score:null,
	scoreText:null,
	healthy1:null,
	healthy2:null,
	healthy3:null,
	preload: function(){

	},
	create: function(){

		var bg = game.add.sprite(0,0,"bg")
		bg.scale.setTo(1.21,1.21)
		bg.fixedToCamera = true;

		this.sBtn= game.add.sprite(800,450,'sBtn')
		this.sBtn.inputEnabled= true
		this.sBtn.scale.setTo(0.2)
		this.sBtn.fixedToCamera = true;

		game.physics.startSystem(Phaser.Physics.ARCADE)
		
		this.krblk= game.add.sprite(200,150,"krblk")
		this.krblk.scale.setTo(0.3)
		game.physics.arcade.enable(this.krblk)
		this.krblk.body.collideWorldBounds = true;
		this.krblk.anchor.y = 0.6
		this.krblk.anchor.x = 1
		this.krblk.body.velocity.x= 200

		game.world.setBounds(0, 0, 19200, 600)
		game.camera.follow(this.krblk);

		this.weapon = game.add.weapon(100,'laser');
		this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS
		this.weapon.bulletSpeed = 900;
		this.weapon.enableBody= true
		this.weapon.trackSprite(this.krblk, 50, 50);
		this.sBtn.events.onInputDown.add(this.SS)


		this.enemies = game.add.group()
		this.enemies.enableBody=true;
		
		setInterval(this.createEnemies,1500)


		aU=game.add.sprite(100,385,"aU")
		aD=game.add.sprite(100,515,"aD")

		aU.fixedToCamera = true;
		aD.fixedToCamera = true;

		aU.inputEnabled = true;
		aD.inputEnabled = true;

		aU.events.onInputDown.add(this.moveU)
		aU.events.onInputUp.add(this.smoveU)
		aD.events.onInputDown.add(this.moveD)
		aD.events.onInputUp.add(this.smoveD)

		scoreText = game.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' });
		scoreText.fixedToCamera= true
		texty = game.add.text(400,300,"",{fontSize:"40px",fill:"white"})
		texty.fixedToCamera=true
		healthy1 = game.add.image(800,56,"heart")
		healthy1.fixedToCamera=true
		healthy2 = game.add.image(860,56,"heart")
		healthy2.fixedToCamera=true
		healthy3 = game.add.image(920,56,"heart")
		healthy3.fixedToCamera=true

	},
	update: function(){
		this.game.physics.arcade.overlap(this.weapon.bullets,this.enemies,Level1.killEnemy, null,this)
		this.game.physics.arcade.overlap(this.krblk,this.enemies,Level1.killSS, null,this)
	},
	moveU:function(){
		Level1.krblk.body.velocity.y=-300
	},
		smoveU:function(){
		Level1.krblk.body.velocity.y=0;
	},
	moveD: function(){
		Level1.krblk.body.velocity.y=300
	},
		smoveD: function(){
		Level1.krblk.body.velocity.y=0;
	},
	SS: function(){
			Level1.weapon.fire(Level1.krblk,100000,Level1.krblk.body.position.y)
			console.log(Level1.krblk.body.position.x,Level1.krblk.body.position.y)
	},
	createEnemies: function(){
		Level1.eK = Level1.enemies.create(Level1.krblk.body.position.x + Math.round(Math.random()*250)+ 650,Math.round(Math.random()*600),"eK")
		Level1.eK.scale.setTo(0.3)
	},
	killEnemy: function(arg1,arg2){
	arg1.kill()
	arg2.kill()
	},
	killSS:function(arg1,arg2){
	Level1.health-=1
	if(Level1.health==0){
	arg1.kill()
	Level1.score -= 1000;
	Level1.scoreText.text = 'Score: ' + Level1.score;
	Level1.healthy1.kill()
	game.state.start("gameover")
}arg2.kill()
if(Level1.health==2){
	Level1.healthy3.kill()
}
if(Level1.health==1){
	Level1.healthy2.kill()
}
	}
}