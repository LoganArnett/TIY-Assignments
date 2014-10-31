/* JS for Mobile First Horizontal Dropdown */
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
  var parents = this.parentElement
  // if "this" navItem is "closed"...
  if (isClosed(parents)){
    makeEverythingClosed(navItems);
    makeItOpen(parents);
  // otherwise if "this" navItem is "open"
} else if (isOpen(parents)){
    makeItClosed(parents);
  }
}; // END clickNavItem
/**
 * @param HTMLElement element
 * @return Boolean if `element` is "open"
 */
function isOpen(element){
  return (element.className === 'open')
}
/**
 * @param HTMLElement element
 * @return Boolean if `element` is "closed"
 */
function isClosed(element){
  return (!isOpen(element))
}

function makeItOpen(element){
  if(isClosed(element)){
    return element.className = 'open';
  };
}

function makeItClosed(element){
  if(isOpen(element)){
    return element.className = ' ';
  };
}

function makeEverythingClosed(elements){
  _.each(elements, function(element){
    element.parentElement.className = '';
  })
}
