import classNames from "classnames";
import "./ToggleSwitch.scss";

export const ToggleSwitch = ({ handleToggle, title, id, value }) => (
  <div className="toggleSwitch">
    {title}
    <input
      checked={value}
      onChange={handleToggle}
      className="switchCheckbox"
      id={id}
      type="checkbox"
    />
    <label
      className={classNames("switchLabel", value && "active")}
      htmlFor={id}
      title={title}
    >
      <span className="switchButton" />
    </label>
  </div>
);
