let ls1=["Text1","Text2","Text3","Text4","Text5","Text6","Text7","Text8"];
let count1=0;
class DynamicText1 extends HTMLElement{
	connectedCallback(){
		this.textContent=ls1[count1];
		this.style.display="inline";
		count1++;
	}
}
customElements.define("dynamic-text1",DynamicText1)