import "./FormControls.css";

export const ReactiveInput = ({ inputLabel, type, fieldValue, onChange }) => {
  return (
    <>
      <label className="field-label">{inputLabel}:</label>
      <input
        type={type}
        value={fieldValue}
        onChange={(event) => onChange(event.target.value)}
      ></input>
    </>
  );
};

export const ReactiveSelect = ({
  inputLabel,
  fieldValue,
  options,
  onChange,
  placeholder,
}) => {
  return (
    <>
      <label className="field-label">{inputLabel}:</label>
      <select
        value={fieldValue}
        onChange={(event) => onChange(event.target.value)}
      >
        {options.map((option, index) => {
          return (
            <option key={index} disabled={option.disabled}>
              {!option.value ? placeholder : option.value}
            </option>
          );
        })}
      </select>
    </>
  );
};

export const ReactiveRadioButtons = ({
  inputLabel,
  name,
  fieldValue,
  options,
  onChange,
}) => {
  return (
    <>
      <label className="field-label">{inputLabel}:</label>
      <div className="radio-buttons">
        {options.map((option, index) => {
          return (
            <div key={index} className="radio-button">
              <input
                type="radio"
                name={name}
                value={option}
                checked={option === fieldValue}
                onChange={(event) => onChange(event.target.value)}
              ></input>
              <label>{option}</label>
            </div>
          );
        })}
      </div>
    </>
  );
};

export const ReactiveFile = ({ inputLabel, onChange }) => {
  return (
    <>
      <label className="field-label">{inputLabel}:</label>
      <input
        type="file"
        onChange={(event) => onChange(event.target.files[0])}
      ></input>
    </>
  );
};
