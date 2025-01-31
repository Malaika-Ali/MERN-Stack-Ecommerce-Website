import axios from 'axios'

const api=axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}/api/v1/auth`
})

export const googleAuth=(code)=>api.get(`/google?code=${code}`)