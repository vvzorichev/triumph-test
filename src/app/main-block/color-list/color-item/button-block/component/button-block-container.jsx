import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { deleteColor, moveDownColor, moveUpColor } from "../../../../duck/color-list-actions";

import ButtonBlockList from "./button-block";


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        deleteColor,
        moveUpColor,
        moveDownColor
    }, dispatch)
}

const ButtonBlockListContainer = (props) => {
    return <ButtonBlockList {...props}/>
};

export default connect(null, mapDispatchToProps)(ButtonBlockListContainer);