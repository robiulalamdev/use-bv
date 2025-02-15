# usebv

A simple React hook to detect browser visibility changes.

## Installation

Install the package using npm:

```sh
npm install usebv
```

or using yarn:

```sh
yarn add usebv
```

## Usage

Import the hook and use it in your React component:

```tsx
import React from "react";
import useBv from "usebv";

const App = () => {
  const visibility = useBv();

  return (
    <div>
      <h1>Browser Visibility</h1>
      <p>Status: {visibility.status ? "Visible" : "Hidden"}</p>
      <p>Message: {visibility.message}</p>
    </div>
  );
};

export default App;
```

## API

### `usebv()`

Returns an object with the following properties:

- **`status`** (`boolean`): `true` if the browser window is visible, `false` otherwise.
- **`message`** (`string`): A message describing the visibility state.

## Example Output

```json
{
  "status": true,
  "message": "The browser window is currently open and visible."
}
```

## License

MIT © robiulalamdev
