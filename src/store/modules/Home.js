import HomeApi from "../../apis/modules/home";

const state = {
    name: ""
};

const getters = {
    getName: (state) => {
        return state.name;
    },
};

const mutations = {
    setName(state, name) {
        state.name = name;
    }
};

const actions = {
    async getDataHome({commit}) {
        return new Promise(((resolve, reject) => {
            HomeApi.getName()
                .then((response) => {
                    commit("setName", response.data.data.account.fullName)
                    commit("setAvatar", "http://doublep.tk/avatarUser/avt115887563388.102IMG_20201210_201549.jpg")
                    resolve(response)
                }).catch((error) => {
                reject(error.response)
            })
        }))
    },
};

export default {state, getters, mutations, actions};
  