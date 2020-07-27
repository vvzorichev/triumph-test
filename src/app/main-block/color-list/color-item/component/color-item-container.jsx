import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { chooseColor, deleteColor, setColorName } from "../../../duck/color-list-actions";

import ColorItem from "./color-item";

const mapStateToProps = ({ colorList: { selectedColorId } }) => {
    return { selectedColorId };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        deleteColor,
        chooseColor,
        setColorName
    }, dispatch);
};

const ColorItemContainer = (props) => {
    return <ColorItem {...props} />
};

export default connect(mapStateToProps, mapDispatchToProps)(ColorItemContainer);