import React, { useState } from 'react';
import { getAll } from '../../services/api';
import parseToCurrent from '../../helpers/formats';

function OutPutDasboard() {
  const [totals, setTotals] = useState([]);

  getAll().then((datas) => {
    let i = 0;
    datas.map((data) => {
      i += parseFloat(data.value);
      return i;
    });
    setTotals(i);
  });

  return (
    <div className="flex items-center justify-center h-[90%]">
      <div className="w-[10%] h-[70%] bg-blue-600 rounded-lg flex items-center justify-center">
        <span>{`Saldo Total: ${parseToCurrent(totals)}`}</span>
      </div>
    </div>
  );
}

export default OutPutDasboard;
