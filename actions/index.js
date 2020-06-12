import axios from "axios";

export const API_URL = 'https://financialmodelingprep.com/api/v3/'
export const API_KEY = 'd810ca5ac3a0619c23826fa0eaee53b4'
export const SECOND_URL = 'https://finnhub.io/api/v1/'
export const SECOND_KEY = 'bqbdflvrh5r8t7qng0fg'


export function fetchCompanyList() {
    return async (dispatch) => {
        const url = `${API_URL}company/stock/list?apikey=${API_KEY}`;
        try {
        const result = await axios(url)
        dispatch({
            type: 'FETCH_COMPANIES',
            payload: result.data

        })
        } catch (error) {
            console.error(error);
        }
    }
}