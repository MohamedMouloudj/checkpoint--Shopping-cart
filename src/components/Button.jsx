/* eslint-disable react/prop-types */
export default function Button({ onHandler, children }) {
  return <button onClick={onHandler}>{children}</button>;
}
