import AuthApi from "../apis/modules/auth";

export const login = async ({commit}, credentials) => {
     return new Promise(( (resolve, reject) => {
         AuthApi.login(credentials).then((response)=>{
             const token = response.data.data.token
             localStorage.setItem("access_token", token)
             commit("setToken", token)
             resolve(response)
         }).catch((error)=>{
             reject(error.response)
             commit("setToken", "token")
         })
    }))
}

export const logout = async ({commit}) => {
    return new Promise(( (resolve) => {
        console.log("logout")
        localStorage.removeItem("access_token")
        commit("removeToken")
        resolve()
    }))
}