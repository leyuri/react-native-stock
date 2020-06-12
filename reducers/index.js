import produce from "immer"

const baseState = {

    loading: false,
    error:"",
    symbolsList: { },

};

const reducer = produce((state, action) => {
    console.log(action);
    switch(action.type) {
        case "FETCH_COMPANIES":
            action.payload.symbolsList.forEach(e => {
                state.symbolsList[e.symbol] = e;
            })
            break;
        case 'ERROR':
            state.error = action.payload;
            break;
        case 'CREAR_ERRORS':
            state.error = null;
            break;
        case 'START_LOADING':
            state.loading = true;
            break;
        case 'END_LOADING':
            state.loading = false;
            break;
        default:
            break;
    }
}, baseState);

export default reducer;