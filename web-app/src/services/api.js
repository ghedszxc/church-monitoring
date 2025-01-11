import Api from '@/services/middleware'

export default {
    getDiscipleList() {
        return Api().get('/disciples')
    },
    getDisciple(id) {
        return Api().get(`/disciple/${id}`)
    },
    
    registerDisciple(data) {
        return Api().post('/register', data)
    },

    populateSuynl(data) {
        return Api().post('/suynl', data)
    }
}