import axios from 'axios'

// get all figures
const getAllFigures = () => {
    let resp = axios.get('http://localhost:8000/api/figures')
    return resp
}

// delete by ID
const deleteFigureByID = (id) => {
    return axios.delete(`http://localhost:8000/api/figures/${id}`)
}

// create new 
const createFigure = (figure) => {
    let resp = axios.post('http://localhost:8000/api/figures', figure)
    return resp
}

//edit existing by ID and body payload
const editFigure = (figureToEdit) => {
    return axios.patch(`http://localhost:8000/api/figures/${figureToEdit.id}`, figureToEdit);
}


export { getAllFigures, deleteFigureByID, createFigure, editFigure }