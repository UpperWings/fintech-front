import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import OutPut from './OutPut';
import AddOutPut from './AddOutPut';
import EditOutPut from './EditOutPut';
import OutPutDasboard from './Dasboard';
import { getAll } from '../../services/api';

function OutPuts() {
  /* const [mensage, setMensage] = useState('');
  const [valueOutuput, setValueOutuput] = useState(''); */
  const [isEditing, setIsEditing] = useState(false);
  const [outPut, setOutPut] = useState({
    id: '',
    mensage: '',
    value: '',
  });

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    getAll().then((response) => {
      setDatas(response);
    });
  }, []);

  const refreshDatas = () => {
    getAll().then((responses) => {
      setDatas(responses);
    });
  };

  const handleEdit = (i) => {
    setIsEditing(!isEditing);
    setOutPut({
      ...outPut,
      id: i,
    });
  };

  return (
    <div className="pt-10">
      <OutPutDasboard />
      <div className="py-10 flex flex-col w-full items-center justify-center">
        <AddOutPut
          outPut={outPut}
          setOutPut={setOutPut}
          refreshDatas={refreshDatas}
        />
        {isEditing
          ? (
            <div>
              <EditOutPut
                id={outPut.id}
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                refreshDatas={refreshDatas}
              />
            </div>
          ) : null}
        <div className="bg-white p-6 rounded-lg shadow-md mt-5">
          <table className="table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">id</th>
                <th className="px-4 py-2">Mensagem</th>
                <th className="px-4 py-2">Valor</th>
                <th className="px-4 py-2">Ação</th>
              </tr>
            </thead>
            <tbody>
              {datas.map((data) => (
                <OutPut
                  key={data.id}
                  id={data.id}
                  msg={data.msg}
                  value={data.value}
                  refreshDatas={refreshDatas}
                  isEditing={isEditing}
                  handleEdit={handleEdit}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default OutPuts;

OutPuts.propTypes = {
  data: propTypes.array,
}.isRequired;
