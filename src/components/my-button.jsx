import "./my-button.css";
import PropTypes from "prop-types";

MyButton.propTypes = {
  count: PropTypes.number,
  handleChangeCount: PropTypes.func,
};

export function MyButton({ count, handleChangeCount }) {
  const yyh = {
    name: "yyh",
    style: "yyh-style",
  };
  return (
    <button className={yyh.style} onClick={handleChangeCount}>
      Name: {yyh.name}
      Count:{count}
    </button>
  );
}
