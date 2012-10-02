$(document).ready(function() {

  // -- player android
  if (navigator.userAgent.match(/android/gi)) {
    Player.setType('android');
  }

  Webview.launchAndKill('http://v3.benoit.myskreen.typhon.net/app_dev.php/gtv');
  //needed
  //if (typeof Webview != 'undefined') {
  //  Webview.postMessage(['fullscreen']);
  //}

  //console.warn('gtv loaded');
});