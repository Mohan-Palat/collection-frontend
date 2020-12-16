import axios from 'axios'

// get all figures
const getAllFigures = () => {
    let resp = axios.get('http://localhost:8000/api/figures')
    // let resp = axios.get(`${process.env.REACT_APP_BASE_URL}/api/figures`)
    // console.log('resp: ', resp)
    // return axios.get(`${process.env.REACT_APP_BASE_URL}/api/figures`);
    return resp
}

const deleteFigureByID = (id) => {
    return axios.delete(`http://localhost:8000/api/figures/${id}`)
}

const createFigure = (figure) => {
    let resp = axios.post('http://localhost:8000/api/figures', figure)

    // let resp = axios.get(`${process.env.REACT_APP_BASE_URL}/api/figures`)
    // console.log('resp: ', resp)
    // return axios.get(`${process.env.REACT_APP_BASE_URL}/api/figures`);
    return resp
}

export { getAllFigures, deleteFigureByID, createFigure }