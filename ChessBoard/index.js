// --------------- Declarations ----
var fontlink = document.createElement("link");
var board = document.createElement("table");
var chess_icons_black = {
	king    :   "&#9818;",
	queen   :   "&#9819;",
	rook    :   "&#9820;",
	bishop  :   "&#9821",
	knight  :   "&#9822",
	pawn    :   "&#9823"}
var chess_icons_white = {
	king    :   "&#9812;",
	queen   :   "&#9813;",
	rook    :   "&#9814;",
	bishop  :   "&#9815",
	knight  :   "&#9816",
	pawn    :   "&#9817"}	  
var set_JetBrainsMono_fontc = `
	<style>
	    *{
			font-family: "JetBrains Mono"
	    }
	</style>`;

// ---------------- Settings and Main Code ----------------------
fontlink.href = "https://fonts.googleapis.com/css?family=JetBrains Mono";
document.title = "Chess Game";
document.head.appendChild(fontlink);
document.body.appendChild(board);

board.innerHTML += `
	<tr>
		<td>&#9818;</td>
		<td>2</td>
		<td>3</td>
		<td>4</td>
		<td>5</td>
		<td>6</td>
		<td>7</td>
		<td>8</td>
	</tr>	
`