import React, { useCallback, useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { chooseColor, deleteColor, getColorList, newColor, setColorName } from "../../duck/color-list-actions";

import ColorList from "./color-list";

const mapStateToProps = ({ colorList: { colors, selectedColorId } }) => {
    return { colors, selectedColorId };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getColorList,
        deleteColor,
        chooseColor,
        setColorName,
        newColor
    }, dispatch);
};

const ColorListContainer = ({ getColorList, ...props}) => {
    const updateColorList = useCallback(getColorList, []);
    useEffect(() => updateColorList(), [ updateColorList ]);

    return <ColorList {...props} />
};

export default connect(mapStateToProps, mapDispatchToProps)(ColorListContainer);