import http from './base-api.services.js'

const login = (email, password) => http.post('/login', {email, password});

const service = {
    login
}

export default service