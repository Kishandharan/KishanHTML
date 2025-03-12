// Title and Font importing:
var fontlink = document.createElement("link");
document.title = "Chess Game";
fontlink.href = "https://fonts.googleapis.com/css?family=JetBrains Mono";
document.head.appendChild(fontlink);

// Chess icons
var chess_icons_black = {
	king    :   "&#9818;",
	queen   :   "&#9819;",
	rook    :   "&#9820;",
	bishop  :   "&#9821",
	knight  :   "&#9822",
	pawn    :   "&#9823"
}

var chess_icons_white = {
	king    :   "&#9812;",
	queen   :   "&#9813;",
	rook    :   "&#9814;",
	bishop  :   "&#9815",
	knight  :   "&#9816",
	pawn    :   "&#9817"
}

var board = document.createElement("table");
board.id = "chessboard";
	  
var set_JetBrainsMono_fontc = `
	<style>
	    *{
			font-family: "JetBrains Mono"
	    }
	</style>
`;
document.head.innerHTML += set_JetBrainsMono_fontc;
