import React from 'react';
import './EditorItem.css'

export default ({ id, type, label, onChange, value }) => (
  <div className="app-editor-item">
    <label htmlFor={id}>{ label }</label>
    <input id={id} type={type} onChange={onChange} value={value} />
  </div>
);
