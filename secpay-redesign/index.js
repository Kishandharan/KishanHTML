var texts = ["Text1", "Text2", "Text3", "Text4", "Text5", "Text6", "Text7"];


class TopBar extends HTMLElement{
	connectedCallback(){
		this.style.backgroundColor = "darkblue";
		this.style.padding = "10px";
		this.style.width = "100%";
		this.style.height = "40px";
        this.style.position = "fixed";
	}
}

class SideBar extends HTMLElement{
	connectedCallback(){
		this.style.backgroundColor = "darkblue";
		this.style.padding = "10px";
		this.style.width = "250px";
		this.style.height = "100%";
        this.style.position = "fixed";
        for (var i = 0; i < texts.length; i++) {
        	this.innerHTML += `
        	<div class="sidebarbuttons" id="sidebarbuttons">
        	`+`<p style="font-size: 30px; margin: 10px; font-family: arial; color: #e1f6ff;">${texts[i]}</p>`+
            `
            	</div>
            `	
        }		
        document.getElementById("sidebarbuttons").style.marginTop = "40px";
    }
}

class Main extends HTMLElement{	
	connectedCallback(){
		this.innerHTML += `
			<h1 style="font-family:arial;">Dashboard</h1>
		`
		this.style.position = "absolute";
		this.style.marginLeft = "300px";
		this.style.marginTop = "60px";
		this.floatingCards("Main Wallet","RS 100","Topup", true);
		this.floatingCards("AePS Wallet","RS 0","Withdrawal", true);
		this.floatingCards("Todays Earnings", "RS 0", "", false);
		this.innerHTML += `
			<h1 style="font-family:arial; font-weight: bold; margin-top: 30px;">Quick Service Access</h1>
		`;
		this.floatingButton("Banking", "blue");
		this.floatingButton("Utility", "grey");
		this.floatingButton("E-goverence", "lightgreen");
		this.floatingButton("Insurance", "Orange");
		this.floatingButton("Travel", "red");
		this.floatingButton("Neo Banking", "lightblue");
	}

	floatingCards(text1, text2, text3, optbtn){
		if (optbtn === true) {
			this.innerHTML += `
			<div style="
				box-shadow: 0px 0px 10px rgba(0,0,0,0.2); 
				background-color: white; 
				width: 400px; 
				height: 100px;
				border-radius: 15px;
			    padding: 10px;
				display: inline-block;
				margin-bottom: 10px;
				margin-right: 10px;
			"> 
			    <button style="
					position:absolute;
					border: 2px solid rgba(0,0,0,0.2);
					border-radius: 5px;
					padding: 10px;
					margin-top: 10px;
					margin-left: 300px;
					font-weight: bold;
			    ">${text3}</button>
				<p style="
					margin-top:5px; 
					font-family: Arial; 
					font-size: 15px;"
					margin-left: 0;
					margin-bottom: 0;
					margin-right: 0;
				>${text1}</p>
			    <p style="
				    font-weight: bold; 
				    font-family: arial; 
				    font-size: 20px;
				    margin-top:4px;"
			    >${text2}</p>
			</div>
		`;
		}else{
			this.innerHTML += `
				<div style="
					box-shadow: 0px 0px 10px rgba(0,0,0,0.2); 
					background-color: white; 
					width: 400px; 
					height: 100px;
					border-radius: 15px;
				    padding: 10px;
					display: inline-block;
				"> 
				    
					<p style="
						margin-top:5px; 
						font-family: Arial; 
						font-size: 15px;"
						margin-left: 0;
						margin-bottom: 0;
						margin-right: 0;
					>${text1}</p>
				    <p style="
					    font-weight: bold; 
					    font-family: arial; 
					    font-size: 20px;
					    margin-top:4px;"
				    >${text2}</p>
				</div>
			`;	
		}
		
	}

	floatingButton(content, color){
		this.innerHTML += `
			<button style="
				font-family: arial;
			 	background-color: white;
				border: 2px solid ${color};
				border-radius: 10px;
				padding: 10px;
				font-size: 20px;
				width: 250px;
				display: inline-block;	
				color: ${color};
			    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
				margin: 3px;
			">${content}</button>
		`;
	}
}

customElements.define("top-bar", TopBar);
customElements.define("side-bar", SideBar);
customElements.define("main-content", Main);
