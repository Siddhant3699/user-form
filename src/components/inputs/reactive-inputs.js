import { useState } from "react";

export function ReactiveText({ inputLabel, onChange }) {
  return (
    <>
      <label>{inputLabel}:</label>
      <input
        type="text"
        onChange={(event) => {
          onChange(event.target.value);
        }}
      />
    </>
  );
}

export function ReactiveEmail({ inputLabel, onChange }) {
  return (
    <>
      <label>{inputLabel}:</label>
      <input
        type="email"
        onChange={(event) => {
          onChange(event.target.value);
        }}
      />
    </>
  );
}

export function ReactiveDatepicker({ inputLabel, onChange }) {
  return (
    <>
      <label>{inputLabel}:</label>
      <input
        type="date"
        onChange={(event) => {
          onChange(event.target.value);
        }}
      />
    </>
  );
}

export function ReactiveSelect({ inputLabel, options, onChange }) {
  const [value, setValue] = useState(options[0].value);
  return (
    <>
      <label>{inputLabel}:</label>
      <select
        onChange={(event) => {
          setValue(event.target.value);
          onChange(event.target.value);
        }}
        value={value}
      >
        {options.map((option) => {
          return (
            <option key={option.key} disabled={option.disabled}>
              {option.value}
            </option>
          );
        })}
      </select>
    </>
  );
}

export function ReactiveRadioButtons({
  inputLabel,
  options,
  defaultValue,
  onChange,
}) {
  const [value, setValue] = useState(defaultValue);
  return (
    <>
      <label>{inputLabel}:</label>
      <div className="radio-buttons">
        {options.map((option) => {
          return (
            <div key={option.key}>
              <input
                type="radio"
                id={option.key}
                name="gender"
                value={option.value}
                checked={value === option.value}
                onChange={(e) => {
                  setValue(e.target.value);
                  onChange(e.target.value);
                }}
              />
              <label>{option.value}</label>
            </div>
          );
        })}
      </div>
    </>
  );
}

export function ReactiveFile({ inputLabel, onChange }) {
  return (
    <>
      <label>{inputLabel}:</label>
      <input
        type="file"
        onChange={(event) => {
          onChange(event.target.value);
        }}
      />
    </>
  );
}
