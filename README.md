# @jsjoeio/react-use-the-things

> a package that gives you custom React things

[![NPM](https://img.shields.io/npm/v/@jsjoeio/react-use-the-things.svg)](https://www.npmjs.com/package/@jsjoeio/react-use-the-things) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @jsjoeio/react-use-the-things
```

## Usage

```jsx
import React from 'react'

import { TwilioLogo, useCounter, useDocumentTitle } from '@jsjoeio/react-use-the-things'

const App = () => {
  const [count, setCount] = useCounter(4)
  useDocumentTitle(count)
  return (
    <div>
      <TwilioLogo
        height='240px'
        width='520px'
        customStyles={{ border: '1px solid black' }}
    />
    <p>Currently, the count is: {count}</p>
    <button onClick={() => setCount(count + 1)}>Add 1</button>
    <button onClick={() => setCount(count - 1)}>Subtract 1</button>
    </div>
  )
}
```

## License

MIT © [jsjoeio](https://github.com/jsjoeio)
