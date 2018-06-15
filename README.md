# ripple-fx



Material design like click-effect on any element.

#### 1. Download zip.
#### 2. Add asset and script

```html
<head>
...
  <link rel="stylesheet" href="./css/ripple-fx.css">
</head>
```
```html
...
  <script src="./js/ripple-fx.min.js"></script>
</body>
```
#### 3. Init from your js file or in new <script> tag:

```js
// new Ripple('jquery-like-selector': string, 'color': string, duration: number);
// 3-rd argument not required, by default it sets by 0.77s, but if you want ... 
let btn = new Ripple('.some-class', '#999', 0.5),
```

##### Methods: 
```js
btn.color // returns current color of wave
```
```js
btn.color = 'color' // sets new color of wave
```
Example:
```js
if(error){
  btn.color = 'red'
}
```
