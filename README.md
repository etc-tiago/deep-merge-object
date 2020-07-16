# Deep Merge Object for Javascript/TypeScript

Lightweight Javascript deep merge object without pain

## Install

```sh
npm install deep-merge-object --save-dev
```

or

```sh
yarn add deep-merge-object
```

## Import / Require

```js
const { objectMerge } = require('deep-merge-object');
```

or

```js
import { objectMerge } from 'deep-merge-object';
```

## Merge any size of objects

Simple:

```js
const objA = { a: true };
const objB = { b: 0 };
console.log(objectMerge(objA, objB));
// { a: true, b: 0 }
```

With basic deep level:

```js
const objA = { a: true, c: { zoom: 12 } };
const objB = { b: 0 };
console.log(objectMerge(objA, objB));
// { a: true, c: { zoom: 12 }, b: 0 }
```

With objects like "style" deep level:

```js
const objA = {
  position: 'relative',
  padding: '8px 12px 6px 30px',
  fontSize: 17,
  lineHeight: '20px',
  height: 34,
  borderRadius: '0',
  selectors: {
    '&:before': {
      content: "''",
      width: 22,
      height: 22,
      border: '2px solid #707c90',
      position: 'absolute',
      top: '50%',
      left: 0,
      transform: 'translateY(-50%)',
    },
  },
};
const objB = { selectors: { '&:before': { borderRadius: '50%' } } };
console.log(objectMerge(objA, objB));
/*
{
  position: 'relative',
  padding: '8px 12px 6px 30px',
  fontSize: 17,
  lineHeight: '20px',
  height: 34,
  borderRadius: '0',
  selectors: {
    '&:before': {
      content: "''",
      width: 22,
      height: 22,
      border: '2px solid #707c90',
      position: 'absolute',
      top: '50%',
      left: 0,
      transform: 'translateY(-50%)',
      borderRadius: '50%',
    },
  },
}
*/
```

And here's the real reason why the package was created, in another words, if you try make the same process with Object.assign or object spreading the last object `{ selectors: { '&:before': { borderRadius: '50%' } } }` will replace the object `objA.selectors`.
