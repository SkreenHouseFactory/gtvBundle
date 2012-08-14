$(document).ready(function() {

  //var keyController = new gtv.jq.KeyController();

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
  /*
  var navSelectors = {item: '.item',
                      itemParent: '.item-parent',
                      itemRow: '.item-row'};
  var selectionClasses = {basic: 'item-selected'};

  var zone_splash = new gtv.jq.KeyBehaviorZone({
    containerSelector: '#splash',
    navSelectors: navSelectors,
    selectionClasses: selectionClasses,
    keyMapping: {
      13: function(elmt){
        console.log('script', 'zone_splash callback', elmt);
        var args = {};
        if (elmt.data('slider-scroll')) {
          args.scroll = elmt.data('slider-scroll');
        }
        UI.load(elmt.data('load-route'), elmt.data('load-view'), args);
        //elmt.click();
        return false;
      }
    }
  });
  keyController.addBehaviorZone(zone_splash);
  keyController.start(zone_splash, true);


  var zone_couchmode_slider = new gtv.jq.KeyBehaviorZone({
    containerSelector: '.slider',
    navSelectors: navSelectors,
    selectionClasses: selectionClasses,
    keyMapping: {
      13: function(elmt){
        console.log('script', 'zone_couchmode_slider callback', elmt.parent());
        Couchmode.play(elmt.parent(), $('#couchmode-player'));
        //elmt.click();
        return false;
      }
    }
  });
  keyController.addBehaviorZone(zone_couchmode_slider);
  keyController.start(zone_couchmode_slider, true);
  */

  //window.location= 'http://gri.gs/tv/gtv2/';

  /*
  var zone_couchmode_topbar = new gtv.jq.KeyBehaviorZone({
    containerSelector: '#couchmode-topbar',
    navSelectors: navSelectors,
    selectionClasses: selectionClasses,
    keyMapping: {
      13: function(elmt){
        console.log('script', 'zone_couchmode_topbar callback', elmt);
        //elmt.click();
        return false;
      }
    }
  });
  keyController.addBehaviorZone(zone_couchmode_topbar);
  keyController.start(zone_couchmode_topbar, true);
  */

  /*var zone_couchmode_topbar_ul = new gtv.jq.KeyBehaviorZone({
    containerSelector: '#couchmode-topbar ul',
    navSelectors: navSelectors,
    selectionClasses: selectionClasses,
    keyMapping: {
      13: function(elmt){
        console.log('script', 'zone_couchmode_topbar_ul callback', elmt);
        //elmt.click();
        return false;
      }
    }
  });
  keyController.addBehaviorZone(zone_couchmode_topbar_ul);
  keyController.start(zone_couchmode_topbar_ul, true);
  */

  //keyController.stop();
  //keyController.removeAllZones();

  console.log('gtv', 'loaded');

  /*
  // Execute the decorator
  try {
    tv.ui.decorate($('#main'));
  } catch (e) {
    alert(e.message);
  }
  
  // Set focus on initial element
  var focusElement = $('.first-focus');
  var focusComponent = tv.ui.getComponentByElement(focusElement);
  focusComponent.tryFocus();
  */

  /*
  var elementToFocus = goog.dom.getElement('hello');
  var componentToFocus = tv.ui.getComponentByElement(elementToFocus);
  tv.ui.Document.getInstance().setFocusedComponent(componentToFocus);
  */



});