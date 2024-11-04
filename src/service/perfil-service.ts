import axios from "axios";
import { BASE_URL } from '../utils/system';

export function getPerfil(perfil: string) {
    return axios.get(`${BASE_URL}/${perfil}`);
}