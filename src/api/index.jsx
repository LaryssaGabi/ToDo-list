import axios from 'axios'

const apiTodoList = axios.create({
    baseURL: 'https://todo-api-production-ba55.up.railway.app/',
})

export default apiTodoList