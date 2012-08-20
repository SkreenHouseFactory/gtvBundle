// -- Webview
var Webview;
Webview = {
  onMessage: function(args) {
    //console.warn(['Webview.onMessage', args[0], args[1]]);
    switch (args[0]) {
      case 'init':
        Player.setType('android');
      break;
      case 'videoInfo':
      case 'videoError':
        console.error(['Android error', args[1], args[2]]);
      case 'videoStart':
      case 'videoEnd':
        Couchmode.next();
      break;
      case 'keyCode':
        if (UI.currentView == 'couchmode') {
          Couchmode.idle();
        }
        switch (parseInt(args[1])) {
          case 22: //right
           //console.warn('UI.goRight');
			     UI.goRight();
          break;
          case 21: //left
           //console.warn('UI.goLeft');
			     UI.goLeft();
          break;
          case 20: //down
           //console.warn('UI.goDown');
			     UI.goDown();
          break;
          case 19: //up
           //console.warn('UI.goUp');
			     UI.goUp();
          break;
          //case 13: //enter : attention already binded by jquery
          case 23: //enter
            if (UI.getFocusedElmt().hasClass('tv-input') || UI.getFocusedElmt().hasClass('btn')) {
              console.warn(['Webview.keyCode', 'tv-input', 'enter=23']);
              UI.getFocusedElmt().click();
            }
          break;
          case 66: //enter kb
           console.warn(['Webview.keyCode', 'enter']);
			     UI.goEnter();
          break;
          case 4: //return
           //console.warn('UI.goReturn');
			     UI.goReturn();
          break;
          case 126: //play
           //console.warn('play');
			     Webview.postMessage(['player', 'play']);
          break;
          case 127: //pause
           //console.warn('pause');
			     Webview.postMessage(['player', 'pause']);
          break;
          default:
           console.warn(['Webview.keyCode', args[1]]);
          break;
        }
        return false;
      break;   
    }
  },
  postMessage: function(args) {
    if (typeof App != 'undefined') {

      //console.warn(['Webview.postMessage', args[0], args[1], args[2]]);
      switch (args[0]) {
        case 'player':
        
          switch (args[1]) {
            case 'launch':
              //launch video
              App.playerSetUrl(args[2]);
            break;
            case 'start':
              //start
              App.playerStart();
            break;
            case 'pause':
              //pause
              App.playerPause();
            break;
            case 'play':
              //play
              App.playerPlay();
            break;
            case 'stop':
              //pause
              App.playerStop();
            break;
          }
  
        break;
        case 'browser':
          App.webOpenUrl(args[1]);
        break;
        case 'fullscreen':
          App.setWebFullScreen();
        break;
      }
    } else {
      console.warn(['Webview.postMessage UNDEFINED !!', args[0], args[1], args[2]]);
    }
  }
}

$(document).ready(function() {

  // -- player android
  if (navigator.userAgent.match(/android/gi)) {
    Player.setType('android');
  }

  console.log('gtv loaded');
});