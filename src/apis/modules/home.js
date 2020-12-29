import Api from "../../apis/index"

export default {
    getName(){return Api().get('users/mobile/api/getProfile')}
}