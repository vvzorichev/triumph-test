import colorListReducer from "../../main-block/duck/color-list-reducer";

const reducer = (state, action) => {
    console.log(state);
    return {
        colorList: colorListReducer(state?.colorList, action)
    }
};

export default reducer;