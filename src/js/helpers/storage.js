export const setAdminToken = (adminToken) => {
    return localStorage.setItem('adminToken', adminToken);
}

export const setToken = (token) => {
    return localStorage.setItem('token', token);
}

export const getAdminToken = () => {
    return localStorage.getItem('adminToken');
}

export const getToken = () => {
    return localStorage.getItem('token');
}

export const clearToken = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('adminToken');
}

export default {
    setAdminToken,
    setToken,
    getAdminToken,
    getToken,
    clearToken
}