//comment
if(!document.querySelector('#partyTime')){
const image = document.createElement('img');
image.id = "partyTime";
image.src = chrome.runtime.getURL("icon_use.png"); 
console.log(image);
image.style = "position: absolute;top: 50%; left: 50%; margin-right: -50%; transform: translate(-50%, -50%);"
document.querySelector('body').appendChild(image);
}
else document.querySelector('#partyTime').remove();