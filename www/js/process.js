var process = function() {
	   "use strict";
        return {



sound : function(){
    game.state.start("sound");
    console.log("x");
    },
about : function(){
    game.state.start("about");
    console.log("x");
    },
play : function(){
    game.state.start("playGame");
    console.log("x");
    },
 
start : function(){
    game.state.start("level2");
    console.log("2");
    },
    
start1 : function(){
    game.state.start("level3");
    console.log("3");
    },
	
start2 : function(){
    game.state.start("level4");
    console.log("4");
    },

start4 : function(){
    game.state.start("level5");
    console.log("5");
    },
    
}
}();