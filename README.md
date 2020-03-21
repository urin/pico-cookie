pico-cookie - Cookie mapper in browser
===

## Overview

[pico\-cookie](//github.com/urin/pico-cookie) provides the cookie object mapping to `document.cookie`.

Note that any direct operations to `document.cookie` are not reflected to the object `cookie`.

## Requirement

- Chrome 73+
- Edge 79+
- Firefox 63+
- Safari 12.1+
- Opera 60+
- Internet Explorer is not supported
- Node.js 12.0.0+

## Usage

- Using npm

```shell
npm install pico-cookie
```

- Using ES6 modules on browser

```html
<script type="module">
import cookie from './pico-cookie.mjs'

// ...

</script>
```

- On browser

```html
<script type="module">
import cookie from './pico-cookie.mjs'

// ...

</script>
```

then

```js
// document.cookie is mapped to cookie
document.cookie  // "SESSIONID=04ecb3d1b; APISID=ed724274d"
cookie           // { SESSIONID: "04ecb3d1b", APISID: "ed724274d" }

// Read
cookie.SESSIONID // "04ecb3d1b"
cookie.APISID    // "ed724274d"

// Update
cookie.SESSIONID = 'abcd'
cookie           // { SESSIONID: "abcd", APISID: "ed724274d" }
document.cookie  // "SESSIONID=abcd; APISID=ed724274d"

// Add
cookie.NEWKEY = 'NEWVALUE'
cookie           // { SESSIONID: "abcd", APISID: "ed724274d", NEWKEY: "NEWVALUE" }
document.cookie  // "SESSIONID=abcd; APISID=ed724274d; NEWKEY=NEWVALUE"

// Delete
delete cookie.NEWKEY
cookie           // { SESSIONID: "abcd", APISID: "ed724274d" }
document.cookie  // "SESSIONID=abcd; APISID=ed724274d"

// Attributes
cookie.put('KEY', 'VALUE', { samesite: 'strict' }) // returns cookie itself

// You can apply any methods same as plain object...
Object.keys(cookie) // ["SESSIONID", "APISID", "NEWKEY"]

for (const [key, value] of Object.entries(cookie)) {
  console.log(key, value)
}
```

## License

[MIT](/LICENSE)

## Author

[urin](//github.com/urin)

