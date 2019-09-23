import axios from 'axios';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { notificationServerError } from '../js/utils/libraries';

const baseURL = 'http://localhost:3000/notes';

export const getNotes = async () => {
    try {
        const response = await axios.get(baseURL);
        const data = await response.data;
        return data;
    }
    catch(notificationServerError) {
        throw new Error(`${response.statusText}`);
    }
};

export const getNotesById = (id) => {
    return axios(baseURL + `/${id}`)
    .then(response => response.data)
    .catch((err) => {
        console.log(err);
    }) ;
}

export const delNote = async (id) => {
    try {
        const response = await axios.delete(baseURL + `/${id}`);
        const data = await response.data;
        return data;
    }
    catch(err) {
        throw new Error(`${err}${response.statusText}`);
    }
    // return axios
    // .delete(baseURL + `/${id}`)
    // .then(response => response.data)
    // .catch((err) => {
    //     console.log(err);
    // }) ;
}

export const saveNote = async (note) => {
    try {
        const response = await axios.post(baseURL, note);
        const data = await response.data;
        return data;
    }
    catch(err) {
        throw new Error(`${err}${response.statusText}`);
    }
}

export const updateNote = async (id, note) => {
    try {
        const response = await axios.patch(baseURL + `/${id}`, note);
        const data = await response.data;
        return data;
    }
    catch(err) {
        throw new Error(`${err}${response.statusText}`);
    }
}

export const updatePriority = async (id, note) => {
    try {
        const response = await axios.patch(baseURL + `/${id}`, note);
        const data = await response.data;
        return data;
    }
    catch(err) {
        throw new Error(`${err}${response.statusText}`);
    }
};
