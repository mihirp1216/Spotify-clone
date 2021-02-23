import { act } from "react-dom/test-utils";
import { findAllByDisplayValue } from "@testing-library/react";


export const initialState = {
    user: null,
    playlists: [],
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    playing: false,
    item: null,
    // token: "BQAR868Ho4ZUhYpjoLtVuiaP1ewaK64qYSZaJKevMR4c_NRorZiW6WURY5DTLMw6JOEDlpjWy61yFqGdunHEULc5hszyNIAXPJgCPnIwO7Rz-qWhOee8KleVD6cYOkSxzVBK2RPDaXuokSdbDeZViF1T-zITpRIS95X8Vf0iYAl702wu",
}

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };

        case 'SET_PLAYING':
            return {
                ...state,
                playing: action.playing,
            };

        case 'SET_ITEM':
            return {
                ...state,
                item: action.item,
            };

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };

        case 'SET_TOP_ARTISTS':
            return {
                ...state,
                top_artists: action.top_artists,
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };

        case 'SET_SPOTIFY':
            return {
                ...state,
                spotify: action.spotify,
            };

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };
        
        default:
            return state;    
    }
}

export default reducer;
