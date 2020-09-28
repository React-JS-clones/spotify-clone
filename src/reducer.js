export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // remove it after finish developing
    // token:'BQDQYiCDEu37u5N5B4J-f_AfoutGc--yfngUbzZLYleqv8TCWTNEhx1rP3o0rZiRY_U_YrIymoP1z8BFRrnJRTD_EP1rZrpuW4P95SiNuO2vSt8K52AXNglqauEQwBD4FTR-U2xFbiVyfVElD0tKmTK3dZD0OwAohN96qsAgEV1aADUNWj06',

};

const reducer = (state, action) => {
    console.log(action);
    //Action -> type, [payload]
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
        default:
            return state;
    }
}

export default reducer;