import "./Button.scss";

export const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    <div>{text}</div>
  </button>
);
