import axios from "axios";
const API = 'http://localhost:3000/api/'

export async function insertRegister(body) {
    try {
        const response = await axios.post(API + '/saveRegister', body);
        return response.data;
    } catch (error) {
        console.log('error', error);
        return error;
    }
}

export async function login(body) {
    try {
        const response = await axios.post(API + 'login', body);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

export async function getRegisterAll(body) {
    try {
        const response = await axios.get(API + 'getRegisterAll', body);
        return response.data.data;
    } catch (error) {
        return error.response.data;
    }
}
export async function getRegisterByUser(body) {
    try {
        const response = await axios.post(API + 'getRegisterByUser', body);
        return response.data.data;
    } catch (error) {
        return error.response.data;
    }
}

export async function updateEnable(body) {
    try {
        const response = await axios.post(API + 'enableUpdate', body);
        return response.data.data;
    } catch (error) {
        return error.response.data;
    }
}

export async function getEnable() {
    try {
        const response = await axios.get(API + 'getEnable');
        return response.data.data;
    } catch (error) {
        return error.response.data;
    }
}