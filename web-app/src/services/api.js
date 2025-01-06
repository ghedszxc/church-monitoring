import Api from '@/services/middleware'

export default {
    getDiscipleList() {
        return Api().get('/disciples')
    }
}