window.onload = function (){
    /*로그인박스등 어떤 node라도 클릭하면 cover씌우고 다시 클릭시 cover벗기는 script*/
/*사용방법은 주석처리 해놓았음*/
var html = document.querySelector("html") ;
var loginbox = document.querySelector("header > .loginbox");
var listbox = document.querySelector("header > .list_box");
/*여기에 var x = document.querySelector("tag or classname");*/
sizeCheck();/*resize가 일어나기 위해서는 window가 한번 움직여야 addEventListener가 반응하므로 처음에 반드시 실행한다.*/
window.addEventListener("resize", sizeCheck);/* css의 미디어 쿼리와 같은 일을 해준다.*/

function sizeCheck() {
	var widowSize = window.innerWidth;
	if (widowSize > 1023) {
		html.removeEventListener("click",makeCover );
	} else {
		html.addEventListener("click",makeCover );
	}
}

var a ; /*처음 e.target의 className을 저장하기 위해 할당한 변수*/

function makeCover(e){
	var newdiv = document.querySelector(".cover");
	if (newdiv){
		if(a !== e.target.className){ /*직전 e.target과 다시한번 클릭한 e.target을 구분하기 위해 if문을 넣었다.*/
		return;
		}
		newdiv.remove();
		html.style.overflow = "";
		return;
	}
	if(e.target.className !== "list_box" && e.target.className !== "loginbox" 
	/* e.target.className !== "tag or classname" */){ 
		return;
	}
	html.style.overflow = "hidden";
	var newdiv = document.createElement("div");
	newdiv.setAttribute("class", "cover");
	html.appendChild(newdiv);
	a = e.target.className;/* a가 밖에 있으므로 할당만 해야한다 var 사용하면 새로운 a 에 덮어씌우는 것이다.*/
}


/*nav메뉴 hover시 script*/
var headerel = document.querySelector(".warp > header");
var liels = document.querySelectorAll("nav > ul > li");

for (var i = 0; i < liels.length; i++){
	liels[i].addEventListener("mouseenter", function(e){
		headerel.className = "on";
		e.target.querySelector("ul").style.backgroundColor = "#3b66cf";
	});
	liels[i].addEventListener("mouseleave", function(e){
		headerel.className = "";
		e.target.querySelector("ul").style.backgroundColor = "white";
	});
}



/*footer familysit click시 script*/
var sitbtn = document.querySelector(".family");
var sub = document.querySelector(".family > ul");
(function clickToggle(){
	sitbtn.addEventListener("click", function(e){
		e.preventDefault();
		if(sub.className === ""){
			sub.className = "on";
		} else {
			sub.className = "";
		}
	})
})();







} /*window onload close*/

