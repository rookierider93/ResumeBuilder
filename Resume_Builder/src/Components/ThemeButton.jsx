import { ThemeContext } from "../App";
const ThemeButton = () => {
  return (
    <>
      <ThemeContext.Consumer>
        {(ToggleTheme) => {
          return (
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="mySwitch"
                name="darkmode"
                onChange={ToggleTheme}
              />
              <label className="form-check-label" for="mySwitch">
                Dark Mode
              </label>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    </>
  );
};

export default ThemeButton;
