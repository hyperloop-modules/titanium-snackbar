# Ti.Snackbar
Use the Android Snackbar in Appcelerator Titanium.

## Run the Sample

1. Copy the `ti.snackbar` folder to your `lib/` (Alloy) or your Resources (Classic) directory
2. Copy the `design-23.1.1.aar` to `app/platform/android/` (Alloy) or `platform/android` (Classic)
3. Copy the example code to your Titanium app
4. Go for it!

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
    container: window,
    length: Snackbar.SNACKBAR_LENGTH_SHORT,
    action: 'Press me!',
    onActionClicked: function() {
      alert('Action clicked!');
    }
  });
});

window.add(btn);
window.open();
```

## License
MIT

## Copyright
&copy; 2017 by Appcelerator
