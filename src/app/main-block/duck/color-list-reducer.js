const deleteColor = (colors, colorId) => {
    const newColors = [
        ...colors.slice(0, colorId),
        ...colors.slice(colorId + 1)
    ];

    localStorage.setItem('colors', JSON.stringify(newColors));

    return newColors;
};

const addColor = (colors, color) => {
    const newColors = [...colors, { color: color }];

    localStorage.setItem('colors', JSON.stringify(newColors));

    return newColors;
};

const setColorName = (colors, colorId, colorName) => {
    const newColors = [
        ...colors.slice(0, colorId),
        {
            name: colorName,
            color: colors[colorId].color
        },
        ...colors.slice(colorId + 1)
    ];

    localStorage.setItem('colors', JSON.stringify(newColors));

    return newColors;
};

const changeColor = (colors, colorId, newColor) => {
    const newColors = [
        ...colors.slice(0, colorId),
        {
          name: colors[colorId].name,
          color: newColor
        },
        ...colors.slice(colorId + 1)
    ];

    localStorage.setItem('colors', JSON.stringify(newColors));

    return newColors;
};

const moveUpColor = (colors, colorId) => {

    if (colorId <= 0 || colorId >= colors.length) {
        return colors;
    }
    const newColors = [
        ...colors.slice(0, colorId - 1),
        colors[colorId],
        colors[colorId - 1],
        ...colors.slice(colorId + 1)
    ];

    localStorage.setItem('colors', JSON.stringify(newColors));

    return newColors;
}

const initialState = {
    colors: [],
    selectedColorId: null
};

const colorListReducer = (state = initialState, { type, payload}) => {

    switch (type) {

        case 'COLOR_LIST_LOADED':
            return {
                colors: payload.colors,
                selectedColorId: null
            };

        case 'CHOOSE_COLOR':
            return {
                colors: state.colors,
                selectedColorId: payload.id
            };

        case 'DELETE_COLOR':
            return {
                colors: deleteColor(state.colors, payload.id),
                selectedColorId: state.selectedColorId === payload.id ? null : state.selectedColorId
            }

        case 'ADD_COLOR':
            return {
                colors: addColor(state.colors, payload.color),
                selectedColorId: null
            }

        case 'NEW_COLOR':
            return {
                colors: addColor(state.colors, '#ffffff'),
                selectedColorId: null
            }

        case 'CHANGE_COLOR':
            return  {
                colors: changeColor(state.colors, state.selectedColorId, payload.newColor),
                selectedColorId: state.selectedColorId
            }

        case 'SET_COLOR_NAME':
            return {
                colors: setColorName(state.colors, payload.colorId, payload.colorName),
                selectedColorId: state.selectedColorId
            }

        case 'MOVE_UP_COLOR':
            return {
                colors: moveUpColor(state.colors, payload.colorId),
                selectedColorId: state.selectedColorId
            }

        case 'MOVE_DOWN_COLOR':
            return {
                colors: moveUpColor(state.colors, payload.colorId + 1),
                selectedColorId: state.selectedColorId
            }
        default:
            return state;
    }
};

export default colorListReducer;