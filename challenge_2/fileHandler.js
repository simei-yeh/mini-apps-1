const fs = require('fs')
const path = require('path')

var readFile = (path, callback) => {
  fs.readFile (path, (err, data) => {
    if (err) {
      callback(err)
    } else {
      callback(null, data)
    }
  })
}

var writeFile = (path, callback) => {
  fs.writeFile (path, (err, data) => {
    if (err) {
      callback(err)
    } else {
      callback(null, data)
    }
  })
}

module.exports = {
  readFile,
  writeFile
}