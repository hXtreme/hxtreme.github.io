var body = document.getElementsByTagName('body')[0];


/**
 * Copy code-blocks on click
 *
 * @param {HTMLElement} elem
 */
function copy_code_block_onclick(elem) {
  elem.onclick = function() {
    navigator.clipboard.writeText(elem.innerText).then(function() {
      gen_toast("Snippet copied to clipboard", 2000);
    })
  }
}

// Add copy-onclick to all code-blocks
Array.from(document.getElementsByTagName("pre")).forEach(copy_code_block_onclick);