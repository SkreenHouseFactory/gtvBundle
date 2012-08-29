// -- Webview
var Webview;
Webview = {
  onMessage: function(args) {
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
        
        Couchmode.idle();

        var key = parseInt(args[1]);
        switch (key) {
          case 22: //right
            //console.warn(['Webview.keyCode', 'UI.goRight']);
			      UI.goRight();
          break;
          case 21: //left
            //console.warn(['Webview.keyCode', 'UI.goLeft']);
			      UI.goLeft();
          break;
          case 20: //down
            console.warn(['Webview.keyCode', 'UI.goDown']);
            //UI.goUp();
			      UI.goDown();
          break;
          case 19: //up
            console.warn(['Webview.keyCode', 'UI.goUp']);
			      UI.goUp();
          break;
          case 13: //enter : attention already binded by jquery
          case 23: //enter
          //case 66: //enter kb
			      UI.goEnter(key);
            console.warn(['Webview.keyCode', 'UI.goEnter', key]);
          break;
          case 4: //return
            //console.warn(['Webview.keyCode', 'UI.goReturn']);
			      UI.goReturn();
          break;
          case 89: //prev
            //console.warn(['Webview.keyCode', 'prev']);
            Couchmode.prev();
          break;
          case 90: //next
            //console.warn(['Webview.keyCode', 'next']);
            Couchmode.next();
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
            //console.warn(['Webview.keyCode', args[1]]);
          break;
        }
        return false;
      break;
      case 'log':
        console.warn(['Webview.log', args[1]]);
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

  //needed
  //Webview.postMessage(['fullscreen']);

  console.log('gtv loaded');
});