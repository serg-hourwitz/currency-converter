import Select from "./Select/Select";
import classes from "./Converter.module.css";
import { useState } from 'react';


const Converter = () => {

  const [firstValue, setFirstValueFunc] = useState("");
  const [secondValue, setSecondValueFunc] = useState("");

  function onFirstInputChange(event) {
    setFirstValueFunc(event.target.value);
  }
  function onSecondInputChange(event) {
    setSecondValueFunc(event.target.value);
  }
  return (
    <div className={classes.Converter}>
      <Select />
      <div>
        <input
          type="number"
          required
          value={firstValue}
          onChange={(event) => onFirstInputChange(event)}
        />
      </div>
      <div>
        <input
          className={classes.reset}
          type="reset"
          value="reset"
          onClick={() => {
            setFirstValueFunc("")
            setSecondValueFunc("")
          }}
        />
      </div>
      <Select />
      <div>
        <input
          type="number"
          required
          value={secondValue}
          onChange={(event) => onSecondInputChange(event)}
        />
      </div>
    </div>
  );
};

export default Converter;
