var d = new Date();
var currentYear = d.getFullYear();
var slider = document.getElementById("slider");
slider.max = currentYear;

function listenForClicks() {
  document.addEventListener('click', (e) => {
    function applyAge(tabs) {
        var year = slider.value;
        browser.tabs.sendMessage(tabs[0].id, {
            command: 'applyAge', 
            year
        });
        document.getElementById("currentOldestYear").innerText = year;
    }
    browser.tabs.query({active: true, currentWindow: true}).then(applyAge);
  });
}



browser.tabs.executeScript({file: 'youtube.js'}).then(listenForClicks);