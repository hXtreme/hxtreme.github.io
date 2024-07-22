var body = document.getElementsByTagName('body')[0];


/**
 * Place a copy button on code-block
 *
 * @param {HTMLElement} elem
 */
function add_copy_button(elem) {
  var copy_button = document.createElement("i");
  copy_button.classList.add("fa", "fa-copy", "copy-button");
  copy_button.onclick = function() {
    navigator.clipboard.writeText(elem.innerText).then(function() {
      gen_toast("Snippet copied to clipboard", 2000);
    })
  }
  elem.appendChild(copy_button);
}

// Place copy button on all code-blocks
Array.from(document.getElementsByTagName("pre")).forEach(add_copy_button);