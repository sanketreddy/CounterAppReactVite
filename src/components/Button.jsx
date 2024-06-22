/* eslint-disable react/prop-types */
function Button({ count, setCount }) {
  function onButtonClick() {
    setCount(count + 1);
  }

  return <button onClick={onButtonClick}>Counter: {count}</button>;
}

export default Button;
