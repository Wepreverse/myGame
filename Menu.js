var Menu = {
	preload: function(){

	},
	create: function(){
		game.stage.backgroundColor = "#2C3539"
		var btn = game.add.sprite(400,300,"startbtn")
		btn.scale.setTo(0.5);
		btn.inputEnabled = true;
		btn.events.onInputDown.add(this.nextLevel) 
	},
	update: function(){

	},
	nextLevel: function(){
		game.state.start("lev1")
	}
}