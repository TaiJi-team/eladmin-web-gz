import request from '@/utils/request'

// export function login(username, password, code, uuid) {
export function login(username, password, deviceid) {
  return request({
    // url: 'auth/login',
    url: '/api-user/users-anon/login',
    method: 'post',
    data: {
      username,
      password,
      // code,
      // uuid
      deviceid
    }
  })
}

export function getInfo() {
  return request({
    url: 'auth/info',
    method: 'get'
  })
}

export function getCodeImg() {
  return request({
    url: 'auth/code',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: 'auth/logout',
    method: 'delete'
  })
}
