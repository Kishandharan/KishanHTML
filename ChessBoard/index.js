// --------------- Declarations
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
var rows = [
	document.createElement("tr"),
	document.createElement("tr"),
	document.createElement("tr"),
	document.createElement("tr"),
	document.createElement("tr"),
	document.createElement("tr"),
	document.createElement("tr"),
	document.createElement("tr")]
var tableData = [
	document.createElement("td"),
	document.createElement("td"),
	document.createElement("td"),
	document.createElement("td"),
	document.createElement("td"),
	document.createElement("td"),
	document.createElement("td"),
	document.createElement("td"),]

// ---------------- Settings and Main Code ----------------------
fontlink.href = "https://fonts.googleapis.com/css?family=JetBrains Mono";
document.title = "Chess Game";
document.head.appendChild(fontlink);
document.body.appendChild(board);
for(var i = 0; i < rows.length; i++){
	board.appendChild(rows[i]);

    for(var j = 0; j < tableData.length; j++){
		rows[i].appendChild(tableData[j]);
	}
}