$(document).ready(function() {

  // -- player android
  if (navigator.userAgent.match(/android/gi)) {
    Player.setType('android');
  }

  //needed
  //if (typeof Webview != 'undefined') {
  //  Webview.postMessage(['fullscreen']);
  //}

  //console.warn('gtv loaded');
});