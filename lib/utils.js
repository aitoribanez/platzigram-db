'use strict'

const utils = {
  // extractTags: extractTags
  extractTags
}

function extractTags (text) {
  // tanto null como undefined
  if (text == null) return []

  let matches = text.match(/#(\w+)/g)

  if (matches === null) return []

  matches = matches.map(normalize)

  return matches
}

function normalize (text) {
  text = text.toLowerCase()
  // reemplaza # por '' (vacio)
  text = text.replace(/#/g, '')
  return text
}

module.exports = utils
