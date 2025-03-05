// Title and Font importing:
var fontlink = document.createElement("link");
document.title = "Chess Game";
fontlink.href = "https://fonts.googleapis.com/css?family=JetBrains Mono";
document.head.appendChild(fontlink);

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
