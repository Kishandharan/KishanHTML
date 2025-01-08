var texts = ["Text1", "Text2", "Text3", "Text4", "Text5", "Text6", "Text7"];

class TopBar extends HTMLElement{
	connectedCallback(){
		this.style.backgroundColor = "darkblue";
		this.style.padding = "10px";
		this.style.width = "100%";
		this.style.height = "50px";
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
        	<div class="sidebarbuttons">
        	`+texts[i]+
            `
            	</div>
            `	
        }	
    }
}

customElements.define("top-bar", TopBar);
customElements.define("side-bar", SideBar);
