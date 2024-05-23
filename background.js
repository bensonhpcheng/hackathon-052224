var start = true;

chrome.action.onClicked.addListener(function(activeTab) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.scripting.executeScript({
        target : {tabId : tabs[0].id},
        files : [ "content.js" ],
    });


    if(start){
        chrome.scripting.insertCSS({
        target : {tabId : tabs[0].id},
        files : [ "mycss.css" ],
    });
    start = false;
}else{
        chrome.scripting.removeCSS({
        target : {tabId : tabs[0].id},
        files : [ "mycss.css" ],
    });
    start = true;
}

    });
});
//.executeScript(null, {file: "content.js"});

// chrome.runtime.onInstalled.addListener(() => {
//     chrome.action.setBadgeText({
//       text: "OFF",
//     });

//     console.warn("INSTALLED, .warn");
//     console.error("INSTALLED .error");
//   });
