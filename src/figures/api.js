import axios from 'axios'

// get all figures
const getAllFigures = () => {
    let resp = axios.get(process.env.REACT_APP_EXPRESS_URL+'/api/figures')
    return resp
}

// delete by ID
const deleteFigureByID = (id) => {
    return axios.delete(process.env.REACT_APP_EXPRESS_URL+`/api/figures/${id}`)
}

// create new 
const createFigure = (figure) => {
    let resp = axios.post(process.env.REACT_APP_EXPRESS_URL+'/api/figures', figure)
    return resp
}

//edit existing by ID and body payload
const editFigure = (figureToEdit) => {
    return axios.patch(process.env.REACT_APP_EXPRESS_URL+`/api/figures/${figureToEdit.id}`, figureToEdit);
}


export { getAllFigures, deleteFigureByID, createFigure, editFigure }