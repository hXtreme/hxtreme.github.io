
/**
 * This function generates a message toast.
 *
 * @param {string} msg - Message to display.
 * @param {number} expire - Time in ms for which Toast is visible (default=4000).
 */
function gen_toast(msg, expire = 4000) {
  var body = document.getElementsByTagName('body')[0];
  var toast = document.createElement('div');
  toast.id = 'toast';
  toast.classList.add('highlight');
  toast.innerText = msg;
  body.appendChild(toast);
  setTimeout(function () { body.removeChild(toast); }, expire);
}

