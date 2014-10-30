/* JS for Mobile First Horizontal Dropdown */
var navItems = document.getElementsByTagName('h3');

// for each navItem in navItems...
_.each(navItems, function(navItem){
  // attach the event handler...
  navItem.onclick = clickNavItem;
});
/**
 * If "this" `navItem` is "closed", make it "open"; if "this" `navItem` is "open"
 * make it "closed". If other `navItems` are "open" then close them, too.
 *
 * @todo FIX THIS FUNCTION!
 *
 * @param DOMEvent event
 * @return undefined
 */
function clickNavItem(event){
  // if "this" navItem is "closed"...
  if (this.parentElement.className !== 'open' ){
    makeEverythingClosed(navItems);
    makeItOpen(this.parentElement);
  // otherwise if "this" navItem is "open"
} else if ( this.parentElement.className === 'open' ){
    makeItClosed(this.parentElement);
  }
}; // END clickNavItem
/**
 * @param HTMLElement element
 * @return Boolean if `element` is "open"
 */
function isOpen(element){
  if(element.className === 'open'){
    return true;
  }
  else {
    return false;
  }
}
/**
 * @param HTMLElement element
 * @return Boolean if `element` is "closed"
 */
function isClosed(element){
  if(element.className !== 'open'){
    return true;
  }
  else {
    return false;
  }
}

function makeItOpen(element){
  if(isClosed(element)){
    return element.className = 'open';
  }
}

function makeItClosed(element){
  if(isOpen(element)) {
    return element.className = '';
  }

}

function makeEverythingClosed(elements){
  _.each(elements, function(element){
    element.parentElement.className = '';
  })
}
