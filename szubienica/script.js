var haslo = "Bez pracy nie ma kołaczy";
haslo = haslo.toUpperCase();

var haslo1 = "";

for (i=0; i<haslo.length; i++)
{
	if(haslo.charAt(i) == " ") haslo1 = haslo1 + " ";
	else haslo1 = haslo1 + "-";
}

function wypisz()
{
	document.getElementById("plansza").innerHTML = haslo1;
}

window.onload = start;

var litery = new Array(35);
litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";

function start()
{
	var alpha = "";
	
	for (i=0; i<35; i++)
	{
		var element = "lit" + i;
		alpha = alpha + '<div class ="litera" onclick = "sprawdz('+i+')" id = "'+element+'">' + litery[i] + '</div>';
		if((i+1)%7 == 0) alpha = alpha + '<div style = "clear:both;"</div>'
	}
	
	document.getElementById("alfabet").innerHTML = alpha;
	
	wypisz();
}

String.prototype.ustaw = function(miejsce,znak)
{
	if(miejsce > this.length - 1) return this.toString();
	else return this.substr(0,miejsce) + znak + this.substr(miejsce + 1);
}

var fail = 0;

function sprawdz(nr)
{
	var trafiona = false;
	for (i=0; i<haslo.length; i++)
	{
		if(haslo.charAt(i) == litery[nr])
		{
			haslo1 = haslo1.ustaw(i,litery[nr]);
			trafiona = true;
		}
	}
	
	if(trafiona == true)
	{
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#003300";
		document.getElementById(element).style.color = "#00C000";
		document.getElementById(element).style.border = "3px solid #00C000";
		document.getElementById(element).style.cursor = "default";
		wypisz();
	}
	else
	{
		fail++;
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#330000";
		document.getElementById(element).style.color = "#C00000";
		document.getElementById(element).style.border = "3px solid #C00000";
		document.getElementById(element).style.cursor = "default";
		document.getElementById(element).setAttribute("onclick",";");
		
		
		if(fail < 10) document.getElementById("szubienica").innerHTML = "<img src=\"img/s" + fail + ".jpg\" />";
		
	}
	
	if(haslo1 == haslo)
	{
		document.getElementById("alfabet").innerHTML = "Brawo typie! " + '<br/><br/><span class = "reset" onclick = "location.reload()"> JESZCZE RAZ?</span>';	
	}
	
	if(fail == 9) document.getElementById("alfabet").innerHTML = "Warzywo! " + '<br/><br/><span class = "reset2" onclick = "location.reload()"> JESZCZE RAZ?</span>';	
}