import P from 'prop-types';
import './styles.css';

export const TextInput = ({ inputValue, actionFn }) => {
  return (
    <input className="textInput" onChange={actionFn} value={inputValue} type="search" placeholder="Type your search" />
  );
};

TextInput.propTypes = {
  inputValue: P.string.isRequired,
  actionFn: P.func.isRequired,
};
