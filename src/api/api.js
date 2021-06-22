import * as axios from 'axios'
//сунщность аксиос экзепляр может несколько апишек, легко будет подменять 
const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0',
  withCredentials: true,
  headers: {
    "API-KEY": "b78357c3-0753-4bd0-b470-22121b13c54f"
  }
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data //возвращает return then это promise почитать
      })
  },
  follow(userId) {
    return instance.post(`follow/${userId}`)
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`)
  }
}