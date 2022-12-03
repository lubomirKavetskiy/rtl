import { useCallback, useMemo, useState } from 'react';

export const replaceCamelWithSpace = (colorName) =>
  colorName.replace(/\B([A-Z]\B)/g, ' $1');

export const colors = Object.freeze({
  init: 'MediumVioletRed',
  changed: 'MidnightBlue',
  disabled: 'gray',
});

function App() {
  const [backgroundColor, setBackgroundColor] = useState(colors.init);
  const [isChecked, setIsChecked] = useState(false);

  const newBtnColor = useMemo(
    () => (backgroundColor === colors.init ? colors.changed : colors.init),
    [backgroundColor]
  );

  const label = useMemo(
    () => `Change to ${replaceCamelWithSpace(newBtnColor)}`,
    [newBtnColor]
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
        style={{
          backgroundColor: isChecked ? colors.disabled : backgroundColor,
        }}
        onClick={handleBtnClick}
        disabled={isChecked}
      >
        {label}
      </button>

      <input
        id="disable-btn-checkbox-id"
        type="checkbox"
        defaultChecked={isChecked}
        onChange={handleCheckboxClick}
      />
      <label htmlFor="disable-btn-checkbox-id">Disable btn</label>
    </div>
  );
}

export default App;
