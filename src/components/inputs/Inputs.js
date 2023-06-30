export function Text({ label, id }) {
  return (
    <>
      <label>{label}:</label>
      <input type="text" id={id} />
    </>
  );
}

export function Email({ label, id }) {
  return (
    <>
      <label>{label}:</label>
      <input type="email" id={id} />
    </>
  );
}

export function Date({ label, id }) {
  return (
    <>
      <label>{label}:</label>
      <input type="date" id={id} />
    </>
  );
}

export function Select({ label, options }) {
  return (
    <>
      <label>{label}:</label>
      <select>
        {options.map((option) => {
          return <option key={option.key}>{option.value}</option>;
        })}
      </select>
    </>
  );
}

export function RadioButtons({ label, options }) {
  return (
    <>
      <label>{label}:</label>
      <div className="radio-buttons">
        {options.map((option) => {
          return (
            <div key={option.key}>
              <input
                type="radio"
                id={option.key}
                name="gender"
                value={option.value}
              />
              <label>{option.value}</label>
            </div>
          );
        })}
      </div>
    </>
  );
}

export function File({ label, id }) {
  return (
    <>
      <label>{label}:</label>
      <input type="file" id={id} />
    </>
  );
}
