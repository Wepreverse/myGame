var GO={
	rbtn:null,
	preload:function(){

	},
	create:function(){
this.game.stage.backgroundColor="#2C3539"
this.rbtn = game.add.sprite(400,300,"rbtn")
this.rbtn.inputEnabled=true
this.rbtn.scale.setTo(0.1)
this.rbtn.events.onInputDown.add(this.reslev)
	},
	update:function(){

	},
	reslev:function(){

	}
}