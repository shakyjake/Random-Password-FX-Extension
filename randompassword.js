
function GeneratePassword(event){
	event.stopImmediatePropagation();
	
	var sChars, aChars, Result, Emotions, Rando, iChars, Input, i;
	
	Input = event.target.previousSibling;
	i = 64;
	sChars = '123456789qwertyuipasdfghjukilzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!"£$%&*( o_0)~^`+-=[]{};\\\'#:¬,./<>?|@';
	Emotions = [[9986, 10160], [128513, 128591], [128640, 128704]];
	iChars = sChars.length;
	iChars += (Emotions[0][1] - Emotions[0][0]);
	iChars += (Emotions[1][1] - Emotions[1][0]);
	iChars += (Emotions[2][1] - Emotions[2][0]);
	aChars = sChars.split('');
	Result = '';
	while(!!i){
		i -= 1;
		Rando = Math.floor(Math.random() * iChars);
		if(Rando < sChars.length){
			Result += aChars[Rando];
		} else if(Rando < sChars.length + (Emotions[0][1] - Emotions[0][0])){
			Rando = Emotions[0][0] + Math.floor(Math.random() * (Emotions[0][1] - Emotions[0][0]));
			Result += String.fromCodePoint(Rando);
		} else if(Rando < sChars.length + (Emotions[0][1] - Emotions[0][0]) + (Emotions[1][1] - Emotions[1][0])){
			Rando = Emotions[1][0] + Math.floor(Math.random() * (Emotions[1][1] - Emotions[1][0]));
			Result += String.fromCodePoint(Rando);
		} else {
			Rando = Emotions[2][0] + Math.floor(Math.random() * (Emotions[2][1] - Emotions[2][0]));
			Result += String.fromCodePoint(Rando);
		}
	}
	Input.value = Result;
}

function AddRandomPasswordButton(Field){
	var Button = document.createElement('button');
	Button.type = 'button';
	Button.addEventListener('click', GeneratePassword);
	Button.addEventListener('tap', GeneratePassword);
	Button.appendChild(document.createTextNode('🎲'));
	Field.parentNode.insertBefore(Button, Field.nextSibling);
}

function FindPasswordFields(){
	var Fields = document.querySelectorAll('[autocomplete="new-password"]');
	if(!Fields.length){
		Fields = document.querySelectorAll('[type="password"]');
	}
	if(!!Fields.length){
		Fields.forEach(AddRandomPasswordButton);
	}
}

(function(){
	
	FindPasswordFields();
	
})();