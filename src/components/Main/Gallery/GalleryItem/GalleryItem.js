import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Item from 'components/Item/Item';
import { deleteItem } from '../duck/duck';

export class GalleryItem extends Component {
  render() {
    const { onClick, ...rest } = this.props;
    return (
      <div className="app-gallery-item">
        <Item {...rest} />
        <button onClick={onClick}>X</button>
      </div>
    );
  }
}

const mapDispatch = (dispatch, ownProps) => bindActionCreators({
  onClick: () => deleteItem(ownProps.id)
}, dispatch)

export default connect(null, mapDispatch)(GalleryItem);