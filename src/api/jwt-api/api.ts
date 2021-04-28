import axios from 'axios'
import {
  applyAuthTokenInterceptor,
  IAuthTokens,
  TokenRefreshRequest,
} from 'axios-jwt'

const BASE_URL = 'http://localhost:3000/'

export const jwtAxiosInstance = axios.create({ baseURL: BASE_URL })

const requestRefresh: TokenRefreshRequest = async (
  refreshToken: string,
): Promise<IAuthTokens | string> => {
  const response = await axios.post(`${BASE_URL}api/auth/refresh`, {
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
