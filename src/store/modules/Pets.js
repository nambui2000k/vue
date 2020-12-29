import PetsApi from "../../apis/modules/pets";

const state = {
    listTypePet: []
};

const getters = {
    getListTypePet: (state) => {
        return state.listTypePet;
    },
};

const mutations = {
    setListTypePet(state, typePetList) {
        state.listTypePet = typePetList;
    }
};

const actions = {
    async getTypePet({commit}) {
        return new Promise(((resolve, reject) => {
            PetsApi.getTypePet()
                .then((response) => {
                    console.log(response.data.data.typePet)
                    commit("setListTypePet",response.data.data.typePet)
                    resolve(response)
                }).catch((error) => {
                console.log(error)
                reject(error.response)
            })
        }))
    },
};

export default {state, getters, mutations, actions};
