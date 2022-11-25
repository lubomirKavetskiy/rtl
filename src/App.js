import { useCallback, useMemo, useState } from 'react';

const INIT_COLOR = 'red';

function App() {
  const [backgroundColor, setBackgroundColor] = useState(INIT_COLOR);

  const newBtnColor = useMemo(
    () => (backgroundColor === INIT_COLOR ? 'blue' : 'red'),
    [backgroundColor]
  );

  const handleBtnClick = useCallback(
    () => setBackgroundColor(newBtnColor),
    [setBackgroundColor, newBtnColor]
  );

  return (
    <div className="App">
      <button style={{ backgroundColor }} onClick={handleBtnClick}>
        Change to {newBtnColor}
      </button>
    </div>
  );
}

export default App;
