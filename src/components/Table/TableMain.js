import React, { useCallback, useEffect, useState } from "react";
import "./table.css";

const TableMain = () => {
  const [matrix, setMatrix] = useState([[]]);
  const [form, setForm] = useState({ rows: 0, cols: 0 });

  const createArray = useCallback((row, col) => {
    if (row == 0 || col == 0) {
      setMatrix([[]]);
      return;
    }
    const array = new Array(row);
    for (let index = 0; index < row; index++) {
      array[index] = new Array(col);
    }
    console.log(array);
    let currentNo = 1;
    let turn = "down";
    for (let c = 0; c < col; c++) {
      if (turn === "down") {
        for (let r = 0; r < row; r++) {
          array[r][c] = currentNo++;
        }
        turn = "up";
      } else {
        for (let r = row - 1; r >= 0; r--) {
          array[r][c] = currentNo++;
        }
        turn = "down";
      }
    }
    setMatrix(array);
    console.log(array);
  }, []);

  useEffect(() => {
    // createArray(4, 3);
  }, []);

  const handleChange = (e) => {
    const l = e.target.id;
    const value = e.target.value;
    setForm((prev) => {
      return { ...prev, [l]: value };
    });
  };

  return (
    <div>
      <label htmlFor="row">Row</label>
      <input
        type="number"
        id="rows"
        value={form.rows}
        onChange={handleChange}
      />

      <label htmlFor="col">Col</label>
      <input
        type="number"
        id="cols"
        value={form.cols}
        onChange={handleChange}
      />

      <button onClick={() => createArray(form.rows, form.cols)}>Submit</button>

      {matrix.length > 0 && matrix[0].length > 0 && (
        <table>
          <tbody>
            {matrix.map((item, index) => {
              return (
                <tr key={index}>
                  {matrix[index].map((item) => (
                    <td key={item}>{item}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TableMain;
