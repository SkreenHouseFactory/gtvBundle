$(document).ready(function() {

  var keyController = new gtv.jq.KeyController();

  /*
  // -- try row
  var styles = {
    row: 'skhf-scrolling-page',
    itemsDiv: 'skhf-scroll-items-div-style',
    itemDiv: 'skhf-scroll-div-style',
    item: 'skhf-scroll-item-style',
    hover: 'item-hover'
  };

  var createParams = {
    containerId: 'row-icons',
    styles: styles,
    keyController: keyController
  };
  rowControl = new gtv.jq.RowControl(createParams);

  var controlParams = {
    topParent: $('#icons'),
    contents: {
      items: $('#icons .icon')
    }
  };
  rowControl.showControl(controlParams);
  rowControl.enableNavigation();
  // -- end try
  */

  // -- try slide
  /*var createParams = {
    containerId: 'row-icons',
    styles: styleClasses,
    keyController: keyController
  };
  slidingControl = new gtv.jq.SlidingControl(createParams);

  var showParams = {
    topParent: $('#icons'),
    contents: {
      captionItems: $('#icons .icon')
    }
  };
  slidingControl.showControl(showParams);*/
  // -- end try

  /*var styles = {
    item: 'skhf-menu-option',
    itemDiv: 'skhf-menu-option-div',
    row: 'skhf-menu-row',
    chosen: 'skhf-menu-option-active',
    normal: 'skhf-menu-option-off',
    selected: 'menu-option-highlighted'
  };

  var navItems = $('#icons .icon');
  var behaviors = {
    orientation: 'horizontal',
    selectOnInit: true
  };

  var sidenavParms = {
    createParams: {
      containerId: 'mainMenu',
      styles: styles,
      keyController: keyController,
      choiceCallback: function(selectedItem) {
        //choiceCallback(selectedItem);
      },
      //layerNames: [gtv.jq.VideoControl.fullScreenLayer]
    },
    behaviors: behaviors
  };

  var sideNavControl = new gtv.jq.SideNavControl(sidenavParms);

  var showParams = {
    topParent: $('#icons'),
    contents: {
      items: navItems
    }
  };

  sideNavControl.showControl(showParams);
  */

  var zone_splash = new gtv.jq.KeyBehaviorZone({
    containerSelector: '#splash',
    navSelectors: {
      item: '.item',
      itemParent: '.item-parent',
      itemRow: '.item-row'
    },
    selectionClasses: {
      basic: 'item-selected'
    },
    keyMapping: {
      13: function(elmt){
        console.log('script', 'enter callback', elmt);
        UI.load(elmt.data('load-route'), elmt.data('load-view'));
        return false;
      }
    }
  });
  
  keyController.addBehaviorZone(zone_splash);
  keyController.start(zone_splash, true);

  //keyController.stop();
  //keyController.removeAllZones();

  console.log('gtv', 'loaded');

});