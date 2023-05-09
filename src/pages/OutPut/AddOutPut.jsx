import React, { useState } from 'react';
import propTypes from 'prop-types';
import { addOutput } from '../../services/api';
import Button from '../../components/Button';

function AddOutPut(props) {
  // const [isEditing, setisEditing] = useState(false);
  const { refreshDatas } = props;
  const [data, setData] = useState({
    mensage: '',
    value: '',
  });

  const { mensage, value } = data;

  const handleSubmit = (event) => {
    event.preventDefault();
    addOutput(mensage, value).then(() => {
      refreshDatas();
    });
  };

  return (
    <form className="flex flex-row items-center justify-center gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Mensagem"
        className="p-3 rounded-lg outline-none"
        value={mensage}
        onChange={({ target }) => setData({
          ...data,
          mensage: target.value,
        })}
      />
      <input
        type="float"
        placeholder="Valor"
        minLength="1"
        min="1"
        className="w-[100px] p-3 rounded-lg outline-none appearance-none"
        value={value}
        onChange={({ target }) => setData({
          ...data,
          value: target.value.replace(',', '.'),
        })}
      />
      <Button
        type="submit"
        partner="default"
        text="+"
      />
    </form>
  );
}

export default AddOutPut;

AddOutPut.propTypes = {
  mensage: propTypes.string,
  setMessage: propTypes.function,
}.isRequired;
