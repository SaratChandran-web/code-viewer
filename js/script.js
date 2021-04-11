var delay;
var htmlcode = CodeMirror.fromTextArea(document.getElementById("htmlcode"), {
mode: "text/html",
htmlMode: true,
theme: "codeviewer-light",
lineNumbers: true,
autoCloseTags: true,
autoCloseBrackets: true,
matchTags: true,
lineWrapping: true,
lint: true,
foldGutter : true,
gutters: ["CodeMirror-lint-markers", "CodeMirror-linenumbers", "CodeMirror-foldgutter"],
extraKeys: {"Ctrl-Space": "autocomplete", "Ctrl-Q": function(cm){ cm.foldCode(cm.getCursor()); }},
foldGutter: true,
gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
});
var csscode = CodeMirror.fromTextArea(document.getElementById("csscode"), {
mode: "css",
theme: "codeviewer-light",
lineNumbers: true,
autoCloseBrackets: true,
autoCloseBrackets: true,
matchTags: true,
lineWrapping: true,
lint: true,
foldGutter : true,
gutters: ["CodeMirror-lint-markers", "CodeMirror-linenumbers", "CodeMirror-foldgutter"],
extraKeys: {"Ctrl-Space": "autocomplete", "Ctrl-Q": function(cm){console.log("HEREEE"); cm.foldCode(cm.getCursor()); }}
});
var jscode = CodeMirror.fromTextArea(document.getElementById("jscode"), {
mode: {name: "javascript", globalVars: true},
theme: "codeviewer-light",
lineNumbers: true,
autoCloseBrackets: true,
autoCloseBrackets: true,
matchTags: true,
lineWrapping: true,
lint: true,
foldGutter : true,
gutters: ["CodeMirror-lint-markers", "CodeMirror-linenumbers", "CodeMirror-foldgutter"],
extraKeys: {"Ctrl-Space": "autocomplete", "Ctrl-Q": function(cm){console.log("HEREEE"); cm.foldCode(cm.getCursor()); }}
});	
CodeMirror.on(htmlcode, "change", function () {
clearTimeout(delay);
delay = setTimeout(codeupdatepreview, 300);
document.querySelector('#hs').style.color="#ED5E68";
});
CodeMirror.on(csscode, "change", function () {
clearTimeout(delay);
delay = setTimeout(codeupdatepreview, 300);
document.querySelector('#cs').style.color="#ED5E68";
});
CodeMirror.on(jscode, "change", function () {
clearTimeout(delay);
delay = setTimeout(codeupdatepreview, 300);
document.querySelector('#js').style.color="#ED5E68";
});
function run(){
	var ani = document.querySelector('.fa-redo');
	if(ani.style.animationName=="spin"){
		ani.style.animationName="respin";
	}
	else{
		ani.style.animationName="spin";
	}
	
clearTimeout(delay);
delay = setTimeout(codeupdatepreview, 300);
}
function codeupdatepreview(){
	var iframe = document.getElementById("viewer");
    iframe = (iframe.contentWindow) ? iframe.contentWindow : (iframe.contentDocument) ? iframe.contentDocument.document : iframe.contentDocument;
    iframe.document.open();
    iframe.document.writeln(htmlcode.getValue()+"<style>"+csscode.getValue()+"</style>"+"<script>"+jscode.getValue()+"</script>");
    iframe.document.close();
    return false;
    localStorage.setItem("savehtml", htmlcode.getValue());
    localStorage.setItem("savecss", csscode.getValue());
    localStorage.setItem("savejs", jscode.getValue());
}
clearTimeout(delay);
delay = setTimeout(codeupdatepreview, 300);
function clearall(){
	document.getElementsByClassName("popuptrash")[0].style.display="none";
	document.getElementById("popupwapper").style.display="none";
	document.getElementsByClassName("popupabout")[0].style.display="none";
	document.getElementsByClassName("popupfont")[0].style.display="none";
	htmlcode.setValue("");
	csscode.setValue("");
	jscode.setValue("");
	htmlcode.value="";
	csscode.value="";
	jscode.value="";
	iframe.src+="";
	CodeMirror.innerHTML="";
	htmlcode.focus();
	csscode.focus();
	jscode.focus();
}
function clearhtml(){
	document.getElementsByClassName("popuptrash")[0].style.display="none";
	document.getElementById("popupwapper").style.display="none";
	document.getElementsByClassName("popupabout")[0].style.display="none";
	document.getElementsByClassName("popupfont")[0].style.display="none";
	htmlcode.setValue("");
	htmlcode.value="";
	iframe.src+="";
	CodeMirror.innerHTML="";
	htmlcode.focus();
	csscode.focus();
	jscode.focus();
}
function clearcss(){
	document.getElementsByClassName("popuptrash")[0].style.display="none";
	document.getElementById("popupwapper").style.display="none";
	document.getElementsByClassName("popupabout")[0].style.display="none";
	document.getElementsByClassName("popupfont")[0].style.display="none";
	csscode.setValue("");
	csscode.value="";
	iframe.src+="";
	CodeMirror.innerHTML="";
	htmlcode.focus();
	csscode.focus();
	jscode.focus();
}
function clearjs(){
	document.getElementsByClassName("popuptrash")[0].style.display="none";
	document.getElementById("popupwapper").style.display="none";
	document.getElementsByClassName("popupabout")[0].style.display="none";
	document.getElementsByClassName("popupfont")[0].style.display="none";
	jscode.setValue("");
	jscode.value="";
	iframe.src+="";
	CodeMirror.innerHTML="";
	htmlcode.focus();
	csscode.focus();
	jscode.focus();
}
function htabopen(){
	document.getElementsByClassName("CodeMirror")[0].style.display="block";
	document.getElementsByClassName("CodeMirror")[1].style.display="none";
	document.getElementsByClassName("CodeMirror")[2].style.display="none";
	document.getElementById("htmltab").classList.add("active");
	document.getElementById("csstab").classList.remove("active");
	document.getElementById("jstab").classList.remove("active");
	htmlcode.focus();
}
function ctabopen(){
  document.getElementsByClassName("CodeMirror")[0].style.display="none";
	document.getElementsByClassName("CodeMirror")[1].style.display="block";
	document.getElementsByClassName("CodeMirror")[2].style.display="none";
	document.getElementById("csstab").classList.add("active");
	document.getElementById("htmltab").classList.remove("active");
	document.getElementById("jstab").classList.remove("active");
	csscode.focus();
}
function jtabopen(){
	document.getElementsByClassName("CodeMirror")[0].style.display="none";
	document.getElementsByClassName("CodeMirror")[1].style.display="none";
	document.getElementsByClassName("CodeMirror")[2].style.display="block";
	document.getElementById("jstab").classList.add("active");
	document.getElementById("htmltab").classList.remove("active");
	document.getElementById("csstab").classList.remove("active");
	jscode.focus();
}
var actKeyr="1";
var actKeyl="3";
var actKeyfs="1";
document.addEventListener('Keydown', function(event) {
  if (event.ctrlKey && event.keyCode == 37)   /*----Ctrl+Left-Arrow-Key*/
  {
   event.preventDefault();
    if(actKeyl=="3"){
    jtabopen(); 
    actKeyl="2";
    }
    else if(actKeyl=="2"){
    ctabopen();
    actKeyl="1";
    }
    else if(actKeyl=="1"){
   htabopen();
    actKeyl="3";
    }
  }
 if (event.altKey && event.keyCode == 107)   /*----Alt++-Key*/
  {
   event.preventDefault();
    if(actKeyfs=="1"){
   fsizes();
   actKeyfs="2";
    }
    else if(actKeyfs=="2"){
    fsizem();
   actKeyfs="3";
    }
    else if(actKeyfs=="3"){
   fsizel();
      actKeyfs="4";
    }
      else if(actKeyfs=="4"){
   fsizesxl();
     actKeyfs="1";
    }
  }
  if (event.altKey && event.shiftKey && event.keyCode == 61)   /*----Alt++-Key*/
  {
   event.preventDefault();
    if(actKeyfs=="1"){
   fsizes();
   actKeyfs="2";
    }
    else if(actKeyfs=="2"){
    fsizem();
   actKeyfs="3";
    }
    else if(actKeyfs=="3"){
   fsizel();
      actKeyfs="4";
    }
      else if(actKeyfs=="4"){
   fsizesxl();
     actKeyfs="1";
    }
  }
else  if (event.ctrlKey && event.keyCode == 39)  /*----Ctrl+Right-Arrow-Key*/
	{
	event.preventDefault();
	if(actKeyr=="1"){
    htabopen();
    actKeyr="2";
    }
    else if(actKeyr=="2"){
    ctabopen();
    actKeyr="3";
    }
    else if(actKeyr=="3"){
   jtabopen();
    actKeyr="1";
    }
 }
   else  if (event.altKey && event.keyCode == 82)  /*----Alt+R-Key*/
	{
		event.preventDefault();
    run();
    codeupdatepreview();
  }
  else  if (event.altKey && event.keyCode == 67) /*----Alt+C-Key*/
	{
		event.preventDefault();
    save();
  }
  else  if (event.altKey  && event.shiftKey && event.keyCode == 68)  /*----Alt+D-Key*/
	{
		event.preventDefault();
   download();
  }
else  if (event.altKey && event.keyCode == 78)  /*----Alt+N-Key*/
	{
   event.preventDefault();
   newfile();
  }
  else  if (event.altKey && event.keyCode == 73)  /*----Alt+I-Key*/
	{
		event.preventDefault();
   openabout();
  }
  else  if (event.altKey && event.keyCode == 46)  /*----Alt+Delete-Key*/
	{
		event.preventDefault();
   clearall();
  }
   else  if (event.ctrlKey && event.altKey && event.keyCode == 70)  /*----Ctrl+Alt+F--Key*/
	{
		event.preventDefault();
   fontsize();
  }
  else  if (event.keyCode == 27)  /*----escape*/
	{
		event.preventDefault();
  popupwincan();
  }
  else  if (event.altKey && event.keyCode == 76)  /*----Alt+L-Key*/
	{
		event.preventDefault();
   layout();
  }
  else  if (event.altKey && event.keyCode == 37)  /*----Alt+Left-Arrow-Key*/
	{
	event.preventDefault();
    htabopen();
 }
 else  if (event.altKey && event.keyCode == 40)  /*----Alt+Down-Arrow-Key*/
	{
	event.preventDefault();
	  ctabopen();
 }
 else  if (event.altKey && event.keyCode == 39)  /*----Alt+Right-Arrow-Key*/
	{
	event.preventDefault();
	 jtabopen();
}
 else  if (event.altKey && event.keyCode == 77)  /*----Alt+M*/
	{
	event.preventDefault();
	 fullscreen();
}
 else  if (event.altKey && event.keyCode == 85)  /*----Alt+U*/
	{
	event.preventDefault();
	 mylink();
}
});
function save() { 
	  localStorage.setItem("savehtml", htmlcode.getValue());
    localStorage.setItem("savecss", csscode.getValue());
    localStorage.setItem("savejs", jscode.getValue());
   document.querySelector('#hs').style.color="transparent";
   document.querySelector('#cs').style.color="transparent";
   document.querySelector('#js').style.color="transparent";
}
function download() {      
var htexttowrite = document.getElementById("htmlcode").value;
var ctexttowrite = document.getElementById("csscode").value;
var jtexttowrite = document.getElementById("jscode").value;
var htexttowrite = htexttowrite.replace(/\n/g, "\r\n");
var ctexttowrite = ctexttowrite.replace(/\n/g, "\r\n");
var htexttowrite = htmlcode.doc.getValue();
var ctexttowrite = csscode.doc.getValue();
var jtexttowrite = jscode.doc.getValue();
var filedownload  = "<!DOCTYPE html>\n<html>\n<head>\n<title>Code Viewer Download</title>\n<style>\n"+ctexttowrite+"\n</style>\n<script>\n"+jtexttowrite+"\n</script>\n</head>\n<body>\n"+htexttowrite+"\n</body>\n</html>";
var fileasblob = new Blob([filedownload], {type:'text/plain'});
var filenametosaveas = "code-view.html";
var downloadlink = document.createElement("a");
downloadlink.download = filenametosaveas;
downloadlink.innerHTML = "LINKTITLE";
window.URL = window.URL || window.webkitURL;
downloadlink.href = window.URL.createObjectURL(fileasblob);
downloadlink.onclick = destroyclickedelement;
downloadlink.style.display = "none";
document.body.appendChild(downloadlink);
downloadlink.click();
}
function destroyclickedelement(event) {
document.body.removeChild(event.target);
}
function newfile(){
	document.getElementById("popupwapper").style.display="flex";
	document.getElementsByClassName("popuptrash")[0].style.display="block";
	document.getElementsByClassName("popupabout")[0].style.display="none";
	document.getElementsByClassName("popupfont")[0].style.display="none";
	document.getElementsByClassName("popupinsert")[0].style.display="none";
}
function openabout(){
	document.getElementById("popupwapper").style.display="flex";
	document.getElementsByClassName("popuptrash")[0].style.display="none";
	document.getElementsByClassName("popupfont")[0].style.display="none";
	document.getElementsByClassName("popupinsert")[0].style.display="none";
	document.getElementsByClassName("popupabout")[0].style.display="block";
}
function popupwincan(){
	document.getElementById("popupwapper").style.display="none";
	document.getElementsByClassName("popuptrash")[0].style.display="none";
	document.getElementsByClassName("popupabout")[0].style.display="none";
	document.getElementsByClassName("popupfont")[0].style.display="none";
	document.getElementsByClassName("popupinsert")[0].style.display="none";
}
document.getElementById("popupwapper").addEventListener("mousedown", shak);
document.getElementById("popupwapper").addEventListener("mouseup", noshak);
function shak(){
	document.getElementsByClassName("popuptrash")[0].classList.add("shak");
	document.getElementsByClassName("popupfont")[0].classList.add("shak");
	document.getElementsByClassName("popupabout")[0].classList.add("shak");
	document.getElementsByClassName("popupinsert")[0].classList.add("shak");
}
function noshak(){
	document.getElementsByClassName("popuptrash")[0].classList.remove("shak");
	document.getElementsByClassName("popupfont")[0].classList.remove("shak");
	document.getElementsByClassName("popupabout")[0].classList.remove("shak");
	document.getElementsByClassName("popupinsert")[0].classList.remove("shak");
}
function fontsize(){
	document.getElementById("popupwapper").style.display="flex";
	document.getElementsByClassName("popuptrash")[0].style.display="none";
	document.getElementsByClassName("popupabout")[0].style.display="none";
	document.getElementsByClassName("popupinsert")[0].style.display="none";
	document.getElementsByClassName("popupfont")[0].style.display="block";
}
function mylink(){
	document.getElementById("popupwapper").style.display="flex";
	document.getElementsByClassName("popuptrash")[0].style.display="none";
	document.getElementsByClassName("popupabout")[0].style.display="none";
	document.getElementsByClassName("popupfont")[0].style.display="none";
	document.getElementsByClassName("popupinsert")[0].style.display="block";
}
function layout(){
var winsty = document.getElementById("window");
var codesty = document.getElementById("codearea");
var viewsty = document.getElementById("viewer");
if(document.getElementsByClassName("lay")[0].style.transform=="rotate(90deg)"){
	document.getElementsByClassName("lay")[0].style.transform="rotate(0deg)";
	winsty.style.width="100%";
	winsty.style.height="100%";
	winsty.style.display="flex";
	winsty.style.flexDirection="row";
	codesty.style.width="30%";
	codesty.style.height="97%";
	codesty.style.borderRightStyle="solid"; 
	codesty.style.borderRightWidth ="1px"; 
  var brstyles = getComputedStyle(document.documentElement);
  var colorvalue = brstyles.getPropertyValue('--brcolor');
  codesty.style.borderRightColor=brcolorvalue; 
	viewsty.style.width="70%";
	viewsty.style.height="97%";
}
else{
	document.getElementsByClassName("lay")[0].style.transform="rotate(90deg)";
	winsty.style.width="100%";
	winsty.style.height="100%";
	winsty.style.display="flex";
	winsty.style.flexDirection="column";
	codesty.style.width="100%";
	codesty.style.height="48.5%";
	codesty.style.borderBottomStyle="solid"; 
	codesty.style.borderBottomWidth ="1px"; 
	var brstyles = getComputedStyle(document.documentElement);
  var brcolorvalue = brstyles.getPropertyValue('--brcolor');
  codesty.style.borderBottomColor=brcolorvalue; 
	viewsty.style.width="100%";
	viewsty.style.height="48.5%";
}
}
function fullscreen(){
var editor = document.getElementById("editor");
if(document.getElementById("editor").style.width=="100%"){
	document.getElementById("editor").style.width="92%";
	document.getElementById("editor").style.height="92%";
	var brstyles = getComputedStyle(document.documentElement);
    var brcolorvalue = brstyles.getPropertyValue('--textcolor');
	document.getElementsByClassName("fnscr")[0].style.borderStyle="dashed";
	document.getElementsByClassName("fnscr")[0].style.borderWidth="2px";
	document.getElementsByClassName("fnscr")[0].style.borderColor=textcolor;
}
else{
	document.getElementById("editor").style.width="100%";
	document.getElementById("editor").style.height="100%";
		document.getElementsByClassName("fnscr")[0].style.borderStyle="solid";
	document.getElementsByClassName("fnscr")[0].style.borderWidth="2px";
	document.getElementsByClassName("fnscr")[0].style.borderColor=textcolor;
}
}
function insetlinka(containerid) {
if (document.selection) { 
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById(containerid));
    range.select().createTextRange();
    document.execCommand("Copy"); 
} else if (window.getSelection) {
    var range = document.createRange();
     range.selectNode(document.getElementById(containerid));
     window.getSelection().addRange(range);
     document.execCommand("Copy");
}
}
function insetlinkb(containerid) {
if (document.selection) { 
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById(containerid));
    range.select().createTextRange();
    document.execCommand("Copy"); 
} else if (window.getSelection) {
    var range = document.createRange();
     range.selectNode(document.getElementById(containerid));
     window.getSelection().addRange(range);
     document.execCommand("Copy");
}
}
function insetlinkf(containerid) {
if (document.selection) { 
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById(containerid));
    range.select().createTextRange();
    document.execCommand("Copy"); 
} else if (window.getSelection) {
    var range = document.createRange();
     range.selectNode(document.getElementById(containerid));
     window.getSelection().addRange(range);
     document.execCommand("Copy");
}
}
function insetlinkj(containerid) {
if (document.selection) { 
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById(containerid));
    range.select().createTextRange();
    document.execCommand("Copy"); 
} else if (window.getSelection) {
    var range = document.createRange();
     range.selectNode(document.getElementById(containerid));
     window.getSelection().addRange(range);
     document.execCommand("Copy");
}
}
const toggleSwitch = document.querySelector('#theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');
const icon = document.querySelector('.ch');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    var theme ="codeviewer-light";
  htmlcode.setOption("theme", theme);
csscode.setOption("theme", theme);
jscode.setOption("theme", theme);
icon.innerHTML="&#xf185";
if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
var themel ="codeviewer-dark";
htmlcode.setOption("theme", themel);
csscode.setOption("theme", themel);
jscode.setOption("theme", themel);
icon.innerHTML="&#xf186";
    }
}
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        var themel ="codeviewer-dark";
htmlcode.setOption("theme", themel);
csscode.setOption("theme", themel);
jscode.setOption("theme", themel);
icon.innerHTML="&#xf186";
    }
    else {document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
          var theme ="codeviewer-light";
  htmlcode.setOption("theme", theme);
csscode.setOption("theme", theme);
jscode.setOption("theme", theme);
icon.innerHTML="&#xf185";
    }    
}
toggleSwitch.addEventListener('change', switchTheme, false);
function fsizes(){
 var fsizenew = "13";
  htmlcode.getWrapperElement().style["font-size"]= fsizenew+ "px";
  csscode.getWrapperElement().style["font-size"]= fsizenew+ "px";
  jscode.getWrapperElement().style["font-size"]= fsizenew+ "px";
  localStorage.setItem("font-size", fsizenew); 
}
function fsizem(){
 var fsizenew = "16";
  htmlcode.getWrapperElement().style["font-size"]= fsizenew+ "px";
  csscode.getWrapperElement().style["font-size"]= fsizenew+ "px";
  jscode.getWrapperElement().style["font-size"]= fsizenew+ "px";
  localStorage.setItem("font-size", fsizenew); 
}
function fsizel(){
 var fsizenew = "19";
  htmlcode.getWrapperElement().style["font-size"]= fsizenew+ "px";
  csscode.getWrapperElement().style["font-size"]= fsizenew+ "px";
  jscode.getWrapperElement().style["font-size"]= fsizenew+ "px";
  localStorage.setItem("font-size", fsizenew); 
}
function fsizesxl(){
 var fsizenew = "19";
  htmlcode.getWrapperElement().style["font-size"]= fsizenew+ "px";
  csscode.getWrapperElement().style["font-size"]= fsizenew+ "px";
  jscode.getWrapperElement().style["font-size"]= fsizenew+ "px";
  localStorage.setItem("font-size", fsizenew); 
}
function fontsizech() {
  var select = document.getElementById("selectsize");
  var sizevalue = select.value;
  htmlcode.getWrapperElement().style["font-size"]= sizevalue+ "px";
  csscode.getWrapperElement().style["font-size"]= sizevalue+ "px";
  jscode.getWrapperElement().style["font-size"]= sizevalue+ "px";
  localStorage.setItem("font-size", sizevalue);
}
function getFontSize() {
 var select = document.getElementById("selectsize");
 var sizevalue = select.value;
 select.value = localStorage.getItem("font-size");
 htmlcode.getWrapperElement().style["font-size"]= sizevalue+ "px";
 csscode.getWrapperElement().style["font-size"]= sizevalue+ "px";
 jscode.getWrapperElement().style["font-size"]= sizevalue+ "px";
 htmlcode.setValue(localStorage.getItem("savehtml"));
 csscode.setValue(localStorage.getItem("savecss"));
 jscode.setValue(localStorage.getItem("savejs"));
 document.querySelector('#hs').style.color="transparent";
   document.querySelector('#cs').style.color="transparent";
   document.querySelector('#js').style.color="transparent";
}
window.onload = getFontSize();



