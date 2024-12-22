let count1 = 0;
let count2 = 0;
let arr1 = ["text1", "text2", "text3"];
let arr2 = ["longText1", "longText2", "longText3"]
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let selected = "dodgerblue";
let notselected = "rgba(0, 0, 0, 0.3)";

btn1.style.backgroundColor = selected;
btn2.style.backgroundColor = notselected;
btn3.style.backgroundColor = notselected;
btn4.style.backgroundColor = selected;
btn5.style.backgroundColor = notselected;
btn6.style.backgroundColor = selected;
btn7.style.backgroundColor = notselected;
btn8.style.backgroundColor = notselected;
img1.src = "../assets/img1.avif";
img2.src = "../assets/img4.png"
img3.src = "../assets/img6.png"

btn1.onclick = function(){
	btn1.style.backgroundColor = selected;
	btn2.style.backgroundColor = notselected;
	btn3.style.backgroundColor = notselected;
	img1.src = "../assets/img1.avif"
}

btn2.onclick = function(){
	btn1.style.backgroundColor = notselected;
	btn2.style.backgroundColor = selected;
	btn3.style.backgroundColor = notselected;
	img1.src = "../assets/img2.avif"
}

btn3.onclick = function(){
	btn1.style.backgroundColor = notselected;
	btn2.style.backgroundColor = notselected;
	btn3.style.backgroundColor = selected;
	img1.src = "../assets/img3.avif"
}

btn4.onclick = function(){
	btn4.style.backgroundColor = selected;
	btn5.style.backgroundColor = notselected;
	img2.src = "../assets/img4.png"
}

btn5.onclick = function(){
	btn4.style.backgroundColor = notselected;
	btn5.style.backgroundColor = selected;
	img2.src = "../assets/img5.png"
}

btn6.onclick = function(){
	btn6.style.backgroundColor = selected;
	btn7.style.backgroundColor = notselected;
	btn8.style.backgroundColor = notselected;
	img3.src = "../assets/img6.png"
}

btn7.onclick = function(){
	btn6.style.backgroundColor = notselected;
	btn7.style.backgroundColor = selected;
	btn8.style.backgroundColor = notselected;
	img3.src = "../assets/img7.png"
}

btn8.onclick = function(){
	btn6.style.backgroundColor = notselected;
	btn7.style.backgroundColor = notselected;
	btn8.style.backgroundColor = selected;
	img3.src = "../assets/img8.png"
}


class DynamicText1 extends HTMLElement{
	connectedCallback(){
		this.style.display = "inline-block";
		this.innerHTML = arr1[count1];
		count1++;
	}
}

class DynamicText2 extends HTMLElement{
	connectedCallback(){
		this.style.display = "inline-block";
		this.innerHTML = arr2[count2];
		count2++;
	}
} 
customElements.define("dynamic-text1", DynamicText1);
customElements.define("dynamic-text2", DynamicText2);
