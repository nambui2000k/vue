import Api from "../index";

export default {
    getTypePet(){return Api().get('pets/mobile/api/pet/typePet')}
}