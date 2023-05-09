import React from 'react';
import propTypes from 'prop-types';
import { deleteOutPut } from '../../services/api';
import parseToCurrent from '../../helpers/formats';
import Button from '../../components/Button';

function OutPut(props) {
  const {
    id, msg, value, refreshDatas, handleEdit,
  } = props;

  const deleteData = (i) => {
    deleteOutPut(i).then(() => {
      refreshDatas();
    });
  };

  const editData = (i) => {
    handleEdit(i);
  };

  return (
    <tr key={id}>
      <td className="border px-4 py-2">
        {id}
      </td>
      <td className="border px-4 py-2">
        {msg}
      </td>
      <td className="border px-4 py-2">
        {parseToCurrent(value)}
      </td>
      <td className="border px-4 py-2">
        <div className="flex flex-row gap-2">
          <Button
            type="submit"
            onClick={() => editData(id)}
            partner="edit"
          />
          <Button
            type="submit"
            onClick={() => deleteData(id)}
            partner="delete"
          />
        </div>
      </td>
    </tr>
  );
}

export default OutPut;

OutPut.propTypes = {
  id: propTypes.number,
  msg: propTypes.string,
  value: propTypes.number,
  deleteData: propTypes.function,
  isEditing: propTypes.string,
  handleEdit: propTypes.function,
}.isRequired;
