export const state = () => ({
  username: {
    id_user: 0,
    email: '',
    password: '',
  },
  accessToken: '',
  is_access: false,
})

export const mutations = {
  LOGIN_API(state, payload) {},
  SET_ACCESS(state, data) {
    state.is_access = data
    console.log("is_access:",state.is_access);

  },
  SET_TOKEN(state,data){
    state.access_token = data
  }
}

export const actions = {
  async loginApi(state, payload) {
    console.log('payload: ', payload)
    let res = await this.$axios.post(
      'http://localhost:8080/api/login',
      payload,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    if (res) {
      console.log('res', res.data)
      localStorage.setItem('accessToken', res.data.token)
      state.commit('SET_ACCESS', true)
    }
  },
  set_Token(state,payload){
    const access_token = localStorage.getItem('accessToken')
    console.log("access_token",access_token);
    state.commit("SET_TOKEN",access_token)
  }
}

export const getters = {
    gettersAccessToken: state => state.access_Token,
    gettersUsername : state => state.username,
    gettersIs_Access : state => state.is_access
}
