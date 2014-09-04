#!/usr/bin/env node

var fs = require("fs")
var words = require("an-array-of-english-words")

fs.writeFileSync("./npm.json", JSON.stringify({
  n: words.filter(function(w){return w.match(/^n/)}),
  p: words.filter(function(w){return w.match(/^p/)}),
  m: words.filter(function(w){return w.match(/^m/)}),
}, null, 2))
