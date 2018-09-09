import React from 'react';
import { connect } from 'react-redux';
import GalleryItem from './GalleryItem/GalleryItem';
import './Gallery.css';

export const Gallery = (props) => (
  <div className="app-gallery">
    {
      props.items && props.items.map(item => <GalleryItem key={item.id} {...item} />)
    }
  </div>
);

const mapState = ({ items }) => ({ items });

export default connect(mapState)(Gallery);
