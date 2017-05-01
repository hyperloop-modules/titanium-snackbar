# ti.snackbar
Use the Android Snackbar in Appcelerator Titanium.

## Example

```js
var Snackbar = require('ti.snackbar');

var window = Ti.UI.createWindow({
  backgroundColor: '#fff'
});

var btn = Ti.UI.createButton({
  title: 'Show message!'
});

btn.addEventListener('click', function() {
  Snackbar.show({
    message: 'Titanium rocks!',
    container: window
    length: Snackbar.SNACKBAR_LENGTH_SHORT
  });
});

window.add(btn);
window.open();
```

## License
MIT

## Copyright
&copy; 2017 by Appcelerator
