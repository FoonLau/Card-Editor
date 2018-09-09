import React from 'react';
import Editor from './Editor/Editor';
import Gallery from './Gallery/Gallery';
import Output from './Output/Output';

export default () => (
  <div className="app-main">
    <div className="app-main-editor">
      <Editor />
    </div>
    <div className="app-main-output">
      <Output />
    </div>
    <div className="app-main-gallery">
      <Gallery />
    </div>
  </div>
);
