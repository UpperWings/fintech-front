import React, { useState } from 'react';
import Modal from 'react-modal';
import propTypes from 'prop-types';
import { editOutPut } from '../../services/api';
import Button from '../../components/Button';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function EditOutPut(props) {
  // let subtitle;
  // const classDefault = 'bg-white w-[400px] h-[250px] relative';
  const {
    id, isEditing, setIsEditing, refreshDatas,
  } = props;

  const handleOpen = () => {
    setIsEditing(!isEditing);
  };

  const closeModal = () => {
    setIsEditing(false);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  };

  const [data, setData] = useState({
    mensage: '',
    value: '',
  });

  const { mensage, value } = data;

  const handleSubmit = (event) => {
    event.preventDefault();
    editOutPut(id, mensage, value).then(() => {
      refreshDatas();
      closeModal();
    });
  };

  return (
    <div className="flex items-center justify-center">
      <Button
        type="submit"
        partner="default"
        onClick={handleOpen}
      />
      <Modal
        isOpen={isEditing}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <h1>EAEEEEE</h1>
          <form className="flex flex-row items-center" onSubmit={handleSubmit}>
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
              className="w-[100px] p-3 rounded-lg outline-none ml-3 appearance-none"
              value={value}
              onChange={({ target }) => setData({
                ...data,
                value: target.value.replace(',', '.'),
              })}
            />
            <Button
              type="submit"
              partner="default"
              text="Editar"
            />
          </form>
        </div>
      </Modal>
    </div>
  );
}

EditOutPut.propTypes = {
  isEditing: propTypes.string,
  setIsEditing: propTypes.fuction,
  refreshDatas: propTypes.fuction,
}.isRequired;

export default EditOutPut;
