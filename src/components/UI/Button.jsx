const Button = ({ value, title, onClickHandler }) => {
  return (
    <button onClick={onClickHandler} value={value} className="btns">
      {title}
    </button>
  );
};

export default Button;
