'use strict'

const crypto = require('crypto')

const utils = {
  // extractTags: extractTags
  extractTags,
  normalize,
  encrypt
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

function encrypt (password) {
  let shasum = crypto.createHash('sha256')
  shasum.update(password)
  return shasum.digest('hex')
}

module.exports = utils
