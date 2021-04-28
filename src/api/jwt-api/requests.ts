import {
  clearAuthTokens,
  // getAccessToken,
  getRefreshToken,
  // isLoggedIn,
  setAuthTokens,
} from 'axios-jwt'
import { useRouter } from 'vue-router'
import { bool } from 'yup'

import { jwtAxiosInstance } from '@/api/jwt-api/api'
import { LoginInput } from '@/types/jwt-api/login-input'
import { RegisterInput } from '@/types/jwt-api/register-input'

export const getUser = (): Promise<any> => {
  return jwtAxiosInstance.get('/api/auth/user')
}

export const login = async (loginInput: LoginInput): Promise<void | string> => {
  try {
    const response = await jwtAxiosInstance.post('/api/auth/login', loginInput)
    // if (!response) {
    //   const router = useRouter()
    //   await router.push('auth')
    //   return
    // }
    if (response) {
      setAuthTokens({
        accessToken: response.data.access_token,
        refreshToken: response.data.refresh_token,
      })
      return 'Logged.'
    }
  } catch (e) {
    return e.response.data.message
  }
}

export const register = async (
  registerInput: RegisterInput,
): Promise<void | string> => {
  try {
    const response = await jwtAxiosInstance.post(
      '/api/auth/register',
      registerInput,
    )
    if (!response) return
    setAuthTokens({
      accessToken: response.data.access_token,
      refreshToken: response.data.refresh_token,
    })
    return 'Registered.'
  } catch (e) {
    return e.response.data.message
  }
}

export const logout = async (): Promise<boolean> => {
  try {
    const response = await jwtAxiosInstance.post('api/auth/logout', {
      refresh_token: getRefreshToken(),
    })
    if (response.status !== 201) return false
    clearAuthTokens()
    return true
  } catch (e) {
    console.log(e)
    return false
  }
}
