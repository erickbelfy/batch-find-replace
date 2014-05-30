'use strict';

var fs = require('fs');
var file = process.argv[2];

fs.readFile(file, 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }

  var path = '';
  var entry = data.split(';');
  for (var x =0, l = entry.length; x < l; x++) {
    path += clearEntry(entry[x]) + '\n';
  }

  onClearEntry(path);
});

function onClearEntry(entry) {
  fs.writeFile('output.txt', entry, function (err) {
    if (err) throw err;
    console.log(entry);
    console.log('Finished!');
  });
}

function clearEntry(input) {
  var name = input.split('<')[0];
  var email = input.split('<')[1];
  return email + ' ' + name.trim().split(' ')[0] + ' ' +  name.trim().split(' ')[1];
}
