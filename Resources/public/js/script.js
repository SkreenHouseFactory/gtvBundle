$(document).ready(function() {

  // -- player android
  if (navigator.userAgent.match(/android/gi)) {
    Player.setType('android');
  }

  Webview.launchAndKill('http://v3.myskreen.com/gtv');
  //needed
  //if (typeof Webview != 'undefined') {
  //  Webview.postMessage(['fullscreen']);
  //}

  //console.warn('gtv loaded');
});