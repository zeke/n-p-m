#!/usr/bin/env node

var fs = require("fs")
var profanity = require('badwords-list').regex
var words = require("an-array-of-english-words").filter(function(w){ return !w.match(profanity) })

fs.writeFileSync("./npm.json", JSON.stringify({
  n: words.filter(function(w){return w.match(/^n/)}),
  p: words.filter(function(w){return w.match(/^p/)}),
  m: words.filter(function(w){return w.match(/^m/)}),
}, null, 2))
