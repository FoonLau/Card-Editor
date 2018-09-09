import React from 'react';

export default (props) => (
  <div className="app-item" style={{
    ...props,
    borderRadius: props.borderRadius + '%'
  }} />
);
