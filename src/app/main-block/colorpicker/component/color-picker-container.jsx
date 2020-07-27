import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { addColor, changeColor } from "../../duck/color-list-actions";

import ColorPicker from "./color-picker";

const mapStateToProps = ({ colorList: {colors, selectedColorId} }) => {
    return { colors, selectedColorId };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addColor,
        changeColor
    }, dispatch)
}

const ColorPickerContainer = ({ selectedColorId, colors, ...props}) => {

    if (selectedColorId === null || selectedColorId === undefined) {
        return null;
    }

    return <ColorPicker selectedColor={colors[selectedColorId]} {...props} />
};

export default connect(mapStateToProps, mapDispatchToProps)(ColorPickerContainer);