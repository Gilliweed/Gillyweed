import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDY5NWE2ZmE2NTYwMTk4N2UwYWJiNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTg5NDI2NiwiZXhwIjoxNjQzMTkwMjY2fQ.KdUDpg1BzbTWzsx3348Pdj5rPqIKZ7EcPVfrZgsMX-I";
export const publicRequest = axios.create({
    baseURL : BASE_URL,
})

export const USERRequest = axios.create({
    baseURL : BASE_URL,
    header: {token : `Bearer ${TOKEN}` }
})