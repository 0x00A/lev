
var blessed = require('blessed')
var Editor = require('./editor')

function Values(screen) {

  var width = '30%'

  var main = blessed.scrollabletext({
    parent: screen,
    mouse: true,
    keys: false,
    vi: true,
    detached: true,
    scrollbar: {
      ch: ' '
    },
    style: {
      scrollbar: {
        inverse: true
      }
    },
    tags: true,
    left: width,
    top: 0,
    padding: {
      left: 2,
      top: 2,
      right: 1,
      bottom: 1
    },
    height: '70%',
    right: 0,
  });

  var sep = blessed.line({
    parent: screen,
    orientation: 'vertical',
    left: width,
    top: 0,
    height: '70%'
  })

  var cap = blessed.element({
    parent: screen,
    content: '┴',
    left: width,
    top: '70%',
    width: 1
  })

  var editor = Editor(screen, main)

  return main
}

module.exports = Values
