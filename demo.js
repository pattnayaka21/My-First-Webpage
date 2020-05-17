
alert(" Welcome To My WebPage.. Press OK To Continue..");
/*window.onload = function() {
var el = document.getElementById("DP");
	el.src = "intro.jpg";
}*/
window.onload = function() {
     var pos = 0,pos1=0; 
    //our box element
    var box3 = document.getElementById('Green');
    var t = setInterval(move, 10);
  
    function move() {
        if(pos >= 1100) {
            clearInterval(t);
        }
        else {
            pos += 1;
            box3.style.left = pos+'px';
        }
    }
	var box2 = document.getElementById('Yellow');
	var t1 = setInterval(mov, 25);
	function mov() {
        if(pos1 >= 50) {
            clearInterval(t1);
        }
        else {
            pos1 += 1;
            box2.style.left = pos1+'px';
        }
    }
};
