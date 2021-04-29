import axios from 'axios'
import {
  applyAuthTokenInterceptor,
  IAuthTokens,
  TokenRefreshRequest,
} from 'axios-jwt'

let uri = ''
if (process.env.NODE_ENV === 'development') {
  uri = 'http://localhost:3000/api'
}
if (process.env.NODE_ENV === 'production') {
  uri = '/api'
}

export const jwtAxiosInstance = axios.create({ baseURL: uri })

const requestRefresh: TokenRefreshRequest = async (
  refreshToken: string,
): Promise<IAuthTokens | string> => {
  const response = await axios.post(`${uri}/auth/refresh`, {
    refresh_token: refreshToken,
  })

  // If your backend supports rotating refresh tokens, you may also choose to return an object containing both tokens:
  // return {
  //  accessToken: response.data.access_token,
  //  refreshToken: response.data.refresh_token
  //}
  return response.data.access_token
}

applyAuthTokenInterceptor(jwtAxiosInstance, { requestRefresh })
