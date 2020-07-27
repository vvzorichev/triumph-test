const colorListLoaded = (colors) => {
    return {
        type: 'COLOR_LIST_LOADED',
        payload: { colors }
    };
};

const getColorList = () => (dispatch) => {
    const colors = JSON.parse(localStorage.getItem('colors'));
    dispatch(colorListLoaded(colors));
};

const chooseColor = (id) => {
    return {
        type: 'CHOOSE_COLOR',
        payload: { id }
    }
};

const deleteColor = (id) => {
    return {
        type: 'DELETE_COLOR',
        payload: { id }
    }
};

const addColor = (color) => {
    return {
        type: 'ADD_COLOR',
        payload: { color }
    }
};


const newColor = () => {
    return {
        type: 'NEW_COLOR'
    }
};

const changeColor = (newColor) => {
    return {
        type: 'CHANGE_COLOR',
        payload: { newColor }
    }
};

const setColorName = (colorId, colorName) => {
    return {
        type: 'SET_COLOR_NAME',
        payload: { colorId, colorName }
    }
};

const moveUpColor = (colorId) => {
    return {
        type: 'MOVE_UP_COLOR',
        payload: { colorId }
    }
};

const moveDownColor = (colorId) => {
    return {
        type: 'MOVE_DOWN_COLOR',
        payload: { colorId }
    }
};


export {
    getColorList,
    chooseColor,
    deleteColor,
    addColor,
    newColor,
    changeColor,
    setColorName,
    moveUpColor,
    moveDownColor
};