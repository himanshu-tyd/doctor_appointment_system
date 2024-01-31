// CustomInputForm.jsx
import { useState } from "react";
import "./custom-input-form.styles.scss";

const CustomInputForm = (props) => {
  const [isInputPopulated, setIsInputPopulated] = useState(false);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setIsInputPopulated(inputValue.length > 0);
  };

  return (
    <div className="group">
      <form className="box-container">
        {props.type == "text" && (
          <input
            className="input-form"
            type="text"
            placeholder={props.placeholder}
            value={props.value}
            name={props.name}
            onChange={handleInputChange}
          />
        )}

        {props.type == "label" && (
          <label className="form-label">{props.value}</label>
        )}
      </form>
    </div>
  );
};

export default CustomInputForm;
