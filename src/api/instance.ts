import axios from "axios";
// import { store } from '@/store'
// import Endpoints from '@/api/endpoints'

const BASE_URL = "https://camp-courses.api.kreosoft.space";

export const axiosInstance = axios.create({ baseURL: BASE_URL });
