import Api from '@/services/middleware'

export default {
    getDiscipleList() {
        return Api().get('/disciples')
    },
    
    registerDisciple(data) {
        return Api().post('/register', data)
    }
}