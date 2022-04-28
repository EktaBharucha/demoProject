import './App.css';
import React, { useState } from 'react';

function App() {
  const [current, setCurrent] = useState("add");
  const [val1, setVal1] = useState(60.20);
  const [val2, setVal2] = useState(30);
  const [backUpArray, setBackUpArray] = useState([]);
  const [valueData, setValueData] = useState("");

  // to change dropdown value
  const handleChange = (e) => { setCurrent(e);}

  // perform operation
  const submitOperation = (e) => {

    e.preventDefault();

    let finalResult = "";
    let dataArray = backUpArray;

    let value = parseFloat(val1);
    let value2 = parseFloat(val2);

    switch (current) {

      case "add":
        finalResult = value + value2;
        break;
      case "sub":
        finalResult = value - value2;
        break;
      case "mul":
        finalResult = value * value2;
        break;
      case "div":
        finalResult = value / value2;
        break;
      default:

    }
    let obj = {
      "value1": "",
      "value2": "",
      "result": ""
    };
    obj.value1 = value;
    obj.value2 = value2;
    obj.result = finalResult;
    obj.operator = current;

    dataArray.push(obj);

    setBackUpArray(dataArray);

    let valueData = dataArray.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.value1}</td>
          <td>{item.operator}</td>
          <td>{item.value2}</td>
          <td>{item.result}</td>
        </tr>
      );
    })

    setValueData(valueData);

  }

  return (
    <div className="App">
      <h3 className='text-center'>Simple Math Operations</h3>
      <form className="formData" id="submitData" onSubmit={(event) => submitOperation(event)}>
        <div className='row'>
          <div className='col-md-6 col-md-offset-3'>
            <div className='col-md-12'>
              <div className='padding'>
                <label className="col-sm-5">Enter First Value</label>
                <div className="col-sm-6 col-md-6">
                  <input type="number" id="number" name="number" onChange={(e) => setVal1(e.target.value)} value={val1} />
                </div>
              </div>
            </div>
            <div className='col-md-12'>
              <div className='padding'>
                <label className="col-sm-5">Enter Second Value</label>
                <div className="col-sm-6 col-md-6">
                  <input type="number" id="number2" name="number2" onChange={(e) => setVal2(e.target.value)} value={val2} />
                </div>
              </div>
            </div>
            <div className='col-md-12'>
              <div className='padding'>
                <label className="col-sm-5">Please select Mathamatical Operation</label>
                <div className="col-sm-6 col-md-6">
                  <select value={current} required onChange={(e) => handleChange(e.target.value)}>
                    <option key="add" value="add">ADD (+) </option>
                    <option key="sub" value="sub">Sub (-) </option>
                    <option key="div" value="div">Div (/) </option>
                    <option key="mul" value="mul">Mul (*) </option>
                  </select>
                </div>
              </div>
            </div>

            <div className="submit-btn">
              <button type="submit" className='btn btn-success'>
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className='tableData'>
        <div className='row'>
          <div className='col-md-8 col-md-offset-2'>
            <h4>Calculated Data History</h4>
            <table border="1">
              <thead>
                <tr>
                  <th>Value 1</th>
                  <th>Operator</th>
                  <th>Value 2</th>
                  <th>FinalResult</th>
                </tr>
              </thead>
              <tbody>
              {valueData}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
