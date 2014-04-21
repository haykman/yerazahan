// JavaScript Document

 /* ՈՒՇԱԴՐՈՒԹՅՈՒՆ
Այս սկրիպտի հեղինակը Արշակ Ուլուբաբյանն է (Arshak.Ulubabyan@gmail.com)։ Բացառիկ իրավունքները պատկանում են www.akumb.am - ին։ Առանց www.akumb.am-ին հղում անելու և հեղինակային իրավունքի մասին այս գրառումը պահպանելու, այս սկրիպտն օգտագործել չի թույլատրվում: Սկրիպտի մեջ սխալներ գտնելու կամ կատարելագործելու դեպքում խնդրում ենք տեղեկացնել։ */

//version 1.11

var phonetic1 = null;
var typewriter = null;
var phonetic2 = null;
var layouts = null;
var layoutBox = null;
var selectedLayout = null;
var armFlag = null;
var textArea = null;
var isNumPadKey = false;

function keyDownHandler(e){
	var keyEvent=(e)?e : event;		
	var keyCode=keyEvent.keyCode;
	isNumPadKey = (keyCode>95 && keyCode<112) ? true : false;
	if(keyCode == 27){
		armFlag.checked = !armFlag.checked;
		armFlag.focus();     // not to delete already written text  in FireFox when Esc key is pressed.
		((keyEvent.target) ? keyEvent.target : keyEvent. srcElement).focus();
		return false;
	}
}


function keyUpHandler(e){
	var keyEvent=(e)?e : event;
	textarea =(keyEvent.target) ? keyEvent.target : keyEvent.srcElement;
	textarea.focus();
}

function keyPressHandler(e){
	if(!armFlag.checked || isNumPadKey){
		return true;
	}

	if (e) {                                                            //Mozila & Opera
	textArea =(e.target) ? e.target : e. srcElement;
		if(e.keyCode == 27){
			textArea.focus();
			return false;
		}
		if(e.altKey || e.ctrlKey) return true;
		if(e.which<32) return true;		
		var symb =  selectedLayout[ e.which];
		if('scrollTop' in textArea)
			var scrollTop=textArea.scrollTop;
		if(symb){
			var start=textArea.selectionStart;
			if(start != null){
				textArea.value=textArea.value.substring(0, start)+ symb +  textArea.value.substring(textArea.selectionEnd); 
				textArea.setSelectionRange(++start,start);
				if('scrollTop' in textArea)
					textArea.scrollTop=scrollTop;
				return false;
			}
		}
	}
	
	else{                                                      //IE
		var symb =  selectedLayout[window.event.keyCode];
		if(symb){
			window.event.keyCode =symb.charCodeAt(0);
		}
		window.event.srcElement.focus();
	}
}

function layoutChangeHandler(e){
	selectedLayout = layouts[layoutBox.selectedIndex];
}

function initLayouts(){

	phonetic1 = new Array(127);
	phonetic2 = new Array(127);
	typewriter = new Array(127);
	oldTpWrt = new Array(127);
	layouts =  new Array(4);

	layouts[0] = phonetic1;
	layouts[1] = phonetic2;
	layouts[2] = typewriter;
	layouts[3] = oldTpWrt;
	
	layoutBox = document.getElementById('layout');
	if(layoutBox != null){
		selectedLayout = layouts[layoutBox.selectedIndex];
		layoutBox.onchange=layoutChangeHandler;
	}
	else{
		selectedLayout = layouts[0];
	}

phonetic2 [96] = '՝';
phonetic2 [49] = 'է';
phonetic2 [50] = 'թ';
phonetic2 [51] = 'փ';
phonetic2 [52] = 'ձ';
phonetic2 [53] = 'ջ';
phonetic2 [54] = ')';
phonetic2 [55] = 'և';
phonetic2 [56] = 'ռ';
phonetic2 [57] = 'չ';
phonetic2 [48] = 'ճ';
phonetic2 [45] = '-';
phonetic2 [61] = 'ժ';
phonetic2 [113] = 'ք';
phonetic2 [119] = 'ո';
phonetic2 [101] = 'ե';
phonetic2 [114] = 'ր';
phonetic2 [116] = 'տ';
phonetic2 [121] = 'ը';
phonetic2 [117] = 'ւ';
phonetic2 [105] = 'ի';
phonetic2 [111] = 'օ';
phonetic2 [112] = 'պ';
phonetic2 [91] = 'խ';
phonetic2 [93] = 'ծ';
phonetic2 [92] = 'շ';
phonetic2 [ 97] = 'ա';
phonetic2 [115] = 'ս';
phonetic2 [100] = 'դ';
phonetic2 [102] = 'ֆ';
phonetic2 [103] = 'գ';
phonetic2 [104] = 'հ';
phonetic2 [106] = 'յ';
phonetic2 [107] = 'կ';
phonetic2 [108] = 'լ';
phonetic2 [59] = ':';
phonetic2 [39] = '՛';
phonetic2 [122] = 'զ';
phonetic2 [120] = 'ղ';
phonetic2 [99] = 'ց';
phonetic2 [118] = 'վ';
phonetic2 [98] = 'բ';
phonetic2 [110] = 'ն';
phonetic2 [109] = 'մ';
phonetic2 [44] = ',';
phonetic2 [46] = '.';
phonetic2 [47] = '/';
phonetic2 [126] = '՜';
phonetic2 [33] = 'Է';
phonetic2 [64] = 'Թ';
phonetic2 [35] = 'Փ';
phonetic2 [36] = 'Ձ';
phonetic2 [37] = 'Ջ';
phonetic2 [94] = '(';
phonetic2 [38] = '%';
phonetic2 [42] = 'Ռ';
phonetic2 [40] = 'Չ';
phonetic2 [41] = 'Ճ';
phonetic2 [95] = '–';
phonetic2 [43] = 'Ժ';
phonetic2 [81] = 'Ք';
phonetic2 [87] = 'Ո';
phonetic2 [69] = 'Ե';
phonetic2 [82] = 'Ր';
phonetic2 [84] = 'Տ';
phonetic2 [89] = 'Ը';
phonetic2 [85] = 'Ւ';
phonetic2 [73] = 'Ի';
phonetic2 [79] = 'Օ';
phonetic2 [80] = 'Պ';
phonetic2 [123] = 'Խ';
phonetic2 [125] = 'Ծ';
phonetic2 [124] = 'Շ';
phonetic2 [65] = 'Ա';
phonetic2 [83] = 'Ս';
phonetic2 [68] = 'Դ';
phonetic2 [70] = 'Ֆ';
phonetic2 [71] = 'Գ';
phonetic2 [72] = 'Հ';
phonetic2 [74] = 'Յ';
phonetic2 [75] = 'Կ';
phonetic2 [76] = 'Լ';
phonetic2 [58] = '…';
phonetic2 [34] = '\"';
phonetic2 [90] = 'Զ';
phonetic2 [88] = 'Ղ';
phonetic2 [67] = 'Ց';
phonetic2 [86] = 'Վ';
phonetic2 [66] = 'Բ';
phonetic2 [78] = 'Ն';
phonetic2 [77] = 'Մ';
phonetic2 [60] = '«';
phonetic2 [62] = '»';
phonetic2 [63] = '՞';

phonetic1 [96] = '՝';
phonetic1 [49] = 'է';
phonetic1 [50] = 'թ';
phonetic1 [51] = 'փ';
phonetic1 [52] = 'ձ';
phonetic1 [53] = 'ջ';
phonetic1 [54] = ')';
phonetic1 [55] = 'և';
phonetic1 [56] = 'ր';
phonetic1 [57] = 'չ';
phonetic1 [48] = 'ճ';
phonetic1 [45] = '-';
phonetic1 [61] = 'ժ';
phonetic1 [113] = 'ք';
phonetic1 [119] = 'ո';
phonetic1 [101] = 'ե';
phonetic1 [114] = 'ռ';
phonetic1 [116] = 'տ';
phonetic1 [121] = 'ը';
phonetic1 [117] = 'ւ';
phonetic1 [105] = 'ի';
phonetic1 [111] = 'օ';
phonetic1 [112] = 'պ';
phonetic1 [91] = 'խ';
phonetic1 [93] = 'ծ';
phonetic1 [92] = 'շ';
phonetic1 [ 97] = 'ա';
phonetic1 [115] = 'ս';
phonetic1 [100] = 'դ';
phonetic1 [102] = 'ֆ';
phonetic1 [103] = 'գ';
phonetic1 [104] = 'հ';
phonetic1 [106] = 'յ';
phonetic1 [107] = 'կ';
phonetic1 [108] = 'լ';
phonetic1 [59] = ':';
phonetic1 [39] = '՛';
phonetic1 [122] = 'զ';
phonetic1 [120] = 'ղ';
phonetic1 [99] = 'ց';
phonetic1 [118] = 'վ';
phonetic1 [98] = 'բ';
phonetic1 [110] = 'ն';
phonetic1 [109] = 'մ';
phonetic1 [44] = ',';
phonetic1 [46] = '.';
phonetic1 [47] = '/';
phonetic1 [126] = '՜';
phonetic1 [33] = 'Է';
phonetic1 [64] = 'Թ';
phonetic1 [35] = 'Փ';
phonetic1 [36] = 'Ձ';
phonetic1 [37] = 'Ջ';
phonetic1 [94] = '(';
phonetic1 [38] = '%';
phonetic1 [42] = 'Ր';
phonetic1 [40] = 'Չ';
phonetic1 [41] = 'Ճ';
phonetic1 [95] = '–';
phonetic1 [43] = 'Ժ';
phonetic1 [81] = 'Ք';
phonetic1 [87] = 'Ո';
phonetic1 [69] = 'Ե';
phonetic1 [82] = 'Ռ';
phonetic1 [84] = 'Տ';
phonetic1 [89] = 'Ը';
phonetic1 [85] = 'Ւ';
phonetic1 [73] = 'Ի';
phonetic1 [79] = 'Օ';
phonetic1 [80] = 'Պ';
phonetic1 [123] = 'Խ';
phonetic1 [125] = 'Ծ';
phonetic1 [124] = 'Շ';
phonetic1 [65] = 'Ա';
phonetic1 [83] = 'Ս';
phonetic1 [68] = 'Դ';
phonetic1 [70] = 'Ֆ';
phonetic1 [71] = 'Գ';
phonetic1 [72] = 'Հ';
phonetic1 [74] = 'Յ';
phonetic1 [75] = 'Կ';
phonetic1 [76] = 'Լ';
phonetic1 [58] = '…';
phonetic1 [34] = '\"';
phonetic1 [90] = 'Զ';
phonetic1 [88] = 'Ղ';
phonetic1 [67] = 'Ց';
phonetic1 [86] = 'Վ';
phonetic1 [66] = 'Բ';
phonetic1 [78] = 'Ն';
phonetic1 [77] = 'Մ';
phonetic1 [60] = '«';
phonetic1 [62] = '»';
phonetic1 [63] = '՞';

typewriter [96] = '՝';
typewriter [49] = 'ֆ';
typewriter [50] = 'ձ';
typewriter [51] = '՛';
typewriter [52] = '՜';
typewriter [53] = '։';
typewriter [54] = '՞';
typewriter [55] = 'և';
typewriter [56] = '՜';
typewriter [57] = ')';
typewriter [48] = 'օ';
typewriter [45] = 'է';
typewriter [61] = 'ղ';
typewriter [113] = 'ճ';
typewriter [119] = 'փ';
typewriter [101] = 'բ';
typewriter [114] = 'ս';
typewriter [116] = 'մ';
typewriter [121] = 'ո';
typewriter [117] = 'ւ';
typewriter [105] = 'կ';
typewriter [111] = 'ը';
typewriter [112] = 'թ';
typewriter [91] = 'ծ';
typewriter [93] = 'ց';
typewriter [92] = '՚';
typewriter [ 97] = 'ջ';
typewriter [115] = 'վ';
typewriter [100] = 'գ';
typewriter [102] = 'ե';
typewriter [103] = 'ա';
typewriter [104] = 'ն';
typewriter [106] = 'ի';
typewriter [107] = 'տ';
typewriter [108] = 'հ';
typewriter [59] = 'պ';
typewriter [39] = 'ր';
typewriter [122] = 'ժ';
typewriter [120] = 'դ';
typewriter [99] = 'չ';
typewriter [118] = 'յ';
typewriter [98] = 'զ';
typewriter [110] = 'լ';
typewriter [109] = 'ք';
typewriter [44] = 'խ';
typewriter [46] = 'շ';
typewriter [47] = 'ռ';
typewriter [126] = '՛';
typewriter [33] = 'Ֆ';
typewriter [64] = 'Ձ';
typewriter [35] = '#';
typewriter [36] = '$';
typewriter [37] = '%';
typewriter [94] = '^';
typewriter [38] = '&amp;';
typewriter [42] = '*';
typewriter [40] = '(';
typewriter [41] = 'Օ';
typewriter [95] = 'Է';
typewriter [43] = 'Ղ';
typewriter [81] = 'Ճ';
typewriter [87] = 'Փ';
typewriter [69] = 'Բ';
typewriter [82] = 'Ս';
typewriter [84] = 'Մ';
typewriter [89] = 'Ո';
typewriter [85] = 'Ւ';
typewriter [73] = 'Կ';
typewriter [79] = 'Ը';
typewriter [80] = 'Թ';
typewriter [123] = 'Ծ';
typewriter [125] = 'Ց';
typewriter [124] = 'ՙ';
typewriter [65] = 'Ջ';
typewriter [83] = 'Վ';
typewriter [68] = 'Գ';
typewriter [70] = 'Դ';
typewriter [71] = 'Ա';
typewriter [72] = 'Ն';
typewriter [74] = 'Ի';
typewriter [75] = 'Տ';
typewriter [76] = 'Հ';
typewriter [58] = 'Պ';
typewriter [34] = 'Ր';
typewriter [90] = 'Ժ';
typewriter [88] = 'Դ';
typewriter [67] = 'Չ';
typewriter [86] = 'Յ';
typewriter [66] = 'Զ';
typewriter [78] = 'Լ';
typewriter [77] = 'Ք';
typewriter [60] = 'Խ';
typewriter [62] = 'Շ';
typewriter [63] = 'Ռ';


oldTpWrt [96] = '՝';
oldTpWrt [49] = 'ճ';
oldTpWrt [50] = 'ջ';
oldTpWrt [51] = 'ժ';
oldTpWrt [52] = 'ձ';
oldTpWrt [53] = 'յ';
oldTpWrt [54] = 'ռ';
oldTpWrt [55] = 'ր';
oldTpWrt [56] = 'ց';
oldTpWrt [57] = 'է';
oldTpWrt [48] = 'ղ';
oldTpWrt [45] = '-';
oldTpWrt [61] = '_';
oldTpWrt [113] = 'փ';
oldTpWrt [119] = 'բ';
oldTpWrt [101] = 'ս';
oldTpWrt [114] = 'մ';
oldTpWrt [116] = 'ո';
oldTpWrt [121] = 'ւ';
oldTpWrt [117] = 'կ';
oldTpWrt [105] = 'ը';
oldTpWrt [111] = 'թ';
oldTpWrt [112] = 'ծ';
oldTpWrt [91] = 'օ';
oldTpWrt [93] = 'ֆ';
oldTpWrt [92] = 'շ';
oldTpWrt [ 97] = 'վ';
oldTpWrt [115] = 'գ';
oldTpWrt [100] = 'ե';
oldTpWrt [102] = 'ա';
oldTpWrt [103] = 'ն';
oldTpWrt [104] = 'ի';
oldTpWrt [106] = 'տ';
oldTpWrt [107] = 'հ';
oldTpWrt [108] = 'պ';
oldTpWrt [59] = ';';
oldTpWrt [39] = 'և';
oldTpWrt [122] = 'դ';
oldTpWrt [120] = 'չ';
oldTpWrt [99] = 'զ';
oldTpWrt [118] = 'լ';
oldTpWrt [98] = 'ք';
oldTpWrt [110] = 'խ';
oldTpWrt [109] = 'շ';
oldTpWrt [44] = ',';
oldTpWrt [46] = '.';
oldTpWrt [47] = '՞';
oldTpWrt [126] = '՛';
oldTpWrt [33] = 'Ճ';
oldTpWrt [64] = 'Ջ';
oldTpWrt [35] = 'Ժ';
oldTpWrt [36] = 'Ձ';
oldTpWrt [37] = 'Յ';
oldTpWrt [94] = 'Ռ';
oldTpWrt [38] = 'Ր';
oldTpWrt [42] = 'Ց';
oldTpWrt [40] = 'Է';
oldTpWrt [41] = 'Ղ';
oldTpWrt [95] = '(';
oldTpWrt [43] = ')';
oldTpWrt [81] = 'Փ';
oldTpWrt [87] = 'Բ';
oldTpWrt [69] = 'Ս';
oldTpWrt [82] = 'Մ';
oldTpWrt [84] = 'Ո';
oldTpWrt [89] = 'Ւ';
oldTpWrt [85] = 'Կ';
oldTpWrt [73] = 'Ը';
oldTpWrt [79] = 'Թ';
oldTpWrt [80] = 'Ծ';
oldTpWrt [123] = 'Օ';
oldTpWrt [125] = 'Ֆ';
oldTpWrt [124] = 'Շ';
oldTpWrt [65] = 'Վ';
oldTpWrt [83] = 'Գ';
oldTpWrt [68] = 'Ե';
oldTpWrt [70] = 'Ա';
oldTpWrt [71] = 'Ն';
oldTpWrt [72] = 'Ի';
oldTpWrt [74] = 'Տ';
oldTpWrt [75] = 'Հ';
oldTpWrt [76] = 'Պ';
oldTpWrt [58] = ':';
oldTpWrt [34] = '՜';
oldTpWrt [90] = 'Դ';
oldTpWrt [88] = 'Չ';
oldTpWrt [67] = 'Զ';
oldTpWrt [86] = 'Լ';
oldTpWrt [66] = 'Ք';
oldTpWrt [78] = 'Խ';
oldTpWrt [77] = 'Շ';
oldTpWrt [60] = '«';
oldTpWrt [62] = '»';
oldTpWrt [63] = '՞';
}

function initKeyboard(){
	armFlag = document.getElementById('armFlag');
	initLayouts();
	
	var textareas = document.getElementsByTagName("TEXTAREA");
	for(i=0; i<textareas.length; i++){
		
		textareas[i].onkeydown=keyDownHandler;
		textareas[i].onkeypress=keyPressHandler;
		textareas[i].onkeyup=keyUpHandler;
	}
	
	var textFields = document.getElementsByTagName("INPUT");
	for(i=0; i<textFields.length; i++){
		if(textFields[i].type == "text"){
			textFields[i].onkeydown=keyDownHandler;
			textFields[i].onkeypress=keyPressHandler;
			textFields[i].onkeyup=keyUpHandler;
		}
	}
}