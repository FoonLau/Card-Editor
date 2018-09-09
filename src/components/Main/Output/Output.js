import React from 'react';
import { connect } from 'react-redux';
import Item from 'components/Item/Item';

export const Output = props => (
  <div className="app-output">
    <Item {...props} />
  </div>
);

const mapState = ({ edittingItem }) => edittingItem;

export default connect(mapState)(Output);
