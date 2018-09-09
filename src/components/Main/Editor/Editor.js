import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { 
  save,
  update 
} from './duck/duck'
import EditorItem from './EditorItem/EditorItem';

export class Editor extends Component {
  onBackgroundColourChange = (e) => {
    this.props.update({
      backgroundColor: e.currentTarget.value
    });
  }

  onWidthChange = (e) => {
    this.props.update({
      width: Number(e.currentTarget.value)
    });
  }

  onHeightChange = (e) => {
    this.props.update({
      height: Number(e.currentTarget.value)
    });
  }

  onBorderRadiusChange = (e) => {
    this.props.update({
      borderRadius: Number(e.currentTarget.value)
    });
  }

  onSaveButtonClick = () => {
    this.props.save(this.props);
  }

  render() {
    const { backgroundColor, width, height, borderRadius } = this.props;
    return (
      <div className="app-editor">
        <EditorItem 
          type="color" 
          id="app-editor-background" 
          label="background colour" 
          onChange={this.onBackgroundColourChange}
          value={backgroundColor}/>
        <EditorItem type="number" id="app-editor-width" label="width" onChange={this.onWidthChange} value={width} />
        <EditorItem type="number" id="app-editor-height" label="height" onChange={this.onHeightChange} value={height} />
        <EditorItem type="range" id="app-editor-border-radius" label="border radius" onChange={this.onBorderRadiusChange} value={borderRadius} />
        <button className="app-editor-save" onClick={this.onSaveButtonClick}>Save</button>
      </div>
    );
  }
}

const mapState = ({ edittingItem: {
  backgroundColor,
  width,
  height,
  borderRadius
} }) => ({
  backgroundColor,
  width,
  height,
  borderRadius
});

const mapDispatch = dispatch => bindActionCreators({
  save,
  update
}, dispatch);

export default connect(mapState, mapDispatch)(Editor);
