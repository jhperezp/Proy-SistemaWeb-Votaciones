import axios from 'axios';

export async function getUsers() {
    try {
        const response = await axios.get('http://52.9.205.239/apirest/registrados.php');
        return response.data;
    } catch (error) {
        console.log('error', error);
        return error;
    }
}

export async function getCandidatos() {
    try {
        const response = await axios.get('http://52.9.205.239/apirest/candidatos.php');
        return response.data;
    } catch (error) {
        console.log('error', error);
        return error;
    }
}
