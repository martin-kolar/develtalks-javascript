// polyfill pro closest

export default function() {
  if (typeof window.Element.prototype.matches !== 'function') {
    window.Element.prototype.matches = window.Element.prototype.msMatchesSelector || window.Element.prototype.mozMatchesSelector || window.Element.prototype.webkitMatchesSelector || function matches(selector) {
      var element = this;
      var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
      var index = 0;

      while (elements[index] && elements[index] !== element) {
        ++index;
      }

      return Boolean(elements[index]);
    };
  }

  if (typeof window.Element.prototype.closest !== 'function') {
    window.Element.prototype.closest = function closest(selector) {
      var element = this;

      while (element && element.nodeType === 1) {
        if (element.matches(selector)) {
          return element;
        }

        element = element.parentNode;
      }

      return null;
    };
  }
}
