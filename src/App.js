import { useCallback, useMemo, useState } from 'react';

const INIT_COLOR = 'red';

function App() {
  const [backgroundColor, setBackgroundColor] = useState(INIT_COLOR);
  const [isChecked, setIsChecked] = useState(false);

  const newBtnColor = useMemo(
    () => (backgroundColor === INIT_COLOR ? 'blue' : 'red'),
    [backgroundColor]
  );

  const handleBtnClick = useCallback(() => {
    setBackgroundColor(newBtnColor);
  }, [setBackgroundColor, newBtnColor]);

  const handleCheckboxClick = useCallback(
    (event) => {
      setIsChecked(event.target.checked);
    },
    [setIsChecked]
  );

  return (
    <div className="App">
      <button
        style={{ backgroundColor }}
        onClick={handleBtnClick}
        disabled={isChecked}
      >
        Change to {newBtnColor}
      </button>

      <input
        type="checkbox"
        defaultChecked={isChecked}
        onChange={handleCheckboxClick}
      />
    </div>
  );
}

export default App;
