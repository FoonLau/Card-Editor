import React from 'react';
import { connect } from 'react-redux';

export const Output = (props) => (
  <div className="app-output">
    <div className="app-output-item" style={props} />
  </div>
);

const mapState = ({ edittingItem }) => edittingItem;

export default connect(mapState)(Output);
