import React from 'react';

export default ({ id, type, label, onChange, value }) => (
  <div>
    <label htmlFor={id}>{ label }</label>
    <input id={id} type={type} onChange={onChange} value={value} />
  </div>
);
