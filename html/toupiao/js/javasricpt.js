window.onload=function(){
	var musics=document.getElementById("music");
	var btn=document.getElementById("btn");
	btn.onclick=function(){
		if(musics.paused){
			musics.play();
			btn.src="img/9.png";
		}else{
			musics.pause();
			btn.src="img/8.png";
		}
	}
}