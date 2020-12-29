
export const setToken= (state, payload)=>{
  state.token=payload;
}

export const removeToken= (state)=>{
  state.token= null;
}
