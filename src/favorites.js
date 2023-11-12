const { app, BrowserWindow } = require('electron');
const fs = require('fs');
const path = require('path');
var btnCreate = document.getElementById('btnCreate');
var btnRead = document.getElementById('btnRead');
var btnUpdate = document.getElementById('btnUpdate');
var btnDelete = document.getElementById('btnDelete');
var fileName = document.getElementById('fileName');
var fileContents = document.getElementById('fileContents');
let pathName = path.join(__dirname, 'Files');

btnCreate.addEventListener('click', function () {
  let file = path.join(pathName, fileName.value);
  let contents = fileContents.value;

  fs.writeFile(file, contents, function (err) {
    if (err) {
      return console.error('Error creating file:', err);
    }

    var txtfile = document.getElementById('fileName').value;
    alert('Hey ' + txtfile + ', your makeup list has been created!');
    console.log('Makeup List was Created!');
  });
});

btnRead.addEventListener('click', function () {
    let file = path.join(pathName, fileName.value);
  
    fs.readFile(file, 'utf8', function (err, data) {
      if (err) {
        return console.error('Error reading file:', err);
      }
      var txtfile = document.getElementById('fileName').value;
      alert(txtfile + "'s Top 5 Makeup List :\n\n" + data);
      console.log('Makeup List was Viewed!');
    });
  });

btnUpdate.addEventListener('click', function () {
  let file = path.join(pathName, fileName.value);
  let contents = fileContents.value;

  fs.writeFile(file, contents, function (err) {
    if (err) {
      return console.error('Error updating file:', err);
    }

    var txtfile = document.getElementById('fileName').value;
    alert('Hey ' + txtfile + ', your makeup list has been updated!');
    console.log('Makeup List was Updated!');
  });
});

btnDelete.addEventListener('click', function () {
  let file = path.join(pathName, fileName.value);

  fs.unlink(file, function (err) {
    if (err) {
      return console.error('Error deleting file:', err);
    }

    fileName.value = '';
    fileContents.value = '';
    console.log('Makeup List was Deleted!');
  });
});
