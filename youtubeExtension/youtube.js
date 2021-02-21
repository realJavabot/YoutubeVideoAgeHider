var d = new Date();
var currentYear = d.getFullYear();
window.year = 2004;

browser.runtime.onMessage.addListener((message) => {
  if (message.command === 'applyAge') {
    window.year = Number(message.year);
  }
});

setInterval(() => {
  document.querySelectorAll('[id=content]').forEach(element => {
    if (element.className.includes('ytd-app'))
      return element.style.visibility = 'visible';
    if (element.innerHTML.includes('year')) {
      const firstHalf = element.innerHTML.split('year')[0];
      const yearVideo = Number(firstHalf.slice(-3, -1));
      if (yearVideo > currentYear - window.year) {
        element.style.visibility = 'hidden';
      }
    }
  });
}, 1000);