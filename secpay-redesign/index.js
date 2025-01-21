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
		this.floatingCards("Main Wallet")
	}

	floatingCards(text1, text2, text3){
		this.innerHTML += `
			<div style="
				box-shadow: 0px 0px 10px rgba(0,0,0,0.2); 
				background-color: white; 
				width: 400px; 
				height: 100px;
				border-radius: 15px;
			    padding: 10px;
			"> 
				<p style="margin:0;">${text1}</p>
			</div>
		`;
	}
}

customElements.define("top-bar", TopBar);
customElements.define("side-bar", SideBar);
customElements.define("main-content", Main);
