import Api from "../../apis/index"

export default {
    login(credentials){
        return Api().post('users/mobile/api/login',{
            phoneNumber:credentials.phoneNumber,
            password:credentials.password,
        })
    }
}