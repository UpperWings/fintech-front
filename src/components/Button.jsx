/* eslint-disable max-len */
import React from 'react';
import propTypes from 'prop-types';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

const partnes = {
  default: {
    icon: '',
    class: 'bg-blue-600 p-2 px-3 rounded-full text-white front-bold',
  },
  edit: {
    icon: <AiFillEdit />,
    class: 'bg-blue-500 hover:bg-blue-900 text-white font-bold py-1 px-2 rounded-full',
  },
  delete: {
    icon: <AiFillDelete />,
    class: 'bg-red-500 hover:bg-red-900 text-white font-bold py-1 px-2 rounded-full',
  },
};

function Button(props) {
  const {
    type, onClick, text, partner,
  } = props;

  return (
    <button
      className={partnes[partner].class}
      // eslint-disable-next-line react/button-has-type
      type={type}
      onClick={onClick}
      placeholder={text}
    >
      {text}
      {partnes[partner].icon}
    </button>
  );
}

export default Button;

Button.propTypes = {
  type: propTypes.string,
  text: propTypes.string,
  partner: propTypes.string,
  onClick: propTypes.function,
}.isRequired;
