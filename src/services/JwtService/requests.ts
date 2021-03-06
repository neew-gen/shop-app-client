import {
  clearAuthTokens,
  // getAccessToken,
  getRefreshToken,
  // isLoggedIn,
  setAuthTokens,
} from 'axios-jwt'

import { jwtAxiosInstance } from '@/services/JwtService/JwtService'
import {
  removeLocalItems,
  setLocalItem,
} from '@/services/LocalStorageService/LocalStorageService'
import { LoginInput } from '@/types/jwt-api/login-input'
import { RegisterInput } from '@/types/jwt-api/register-input'

export const getUser = (): Promise<any> => {
  return jwtAxiosInstance.get('/auth/user')
}

export const setUserRole = (): Promise<any> => {
  return jwtAxiosInstance.get('/auth/user').then((res) => {
    setLocalItem('userRoles', res.data.roles)
  })
}

export const login = async (loginInput: LoginInput): Promise<void | string> => {
  try {
    const response = await jwtAxiosInstance.post('/auth/login', loginInput)
    if (response) {
      setAuthTokens({
        accessToken: response.data.access_token,
        refreshToken: response.data.refresh_token,
      })
      await setUserRole()
      return 'Logged.'
    }
  } catch (e) {
    return e.response.data.message
  }
}

export const adminLogin = async (
  loginInput: LoginInput,
): Promise<void | string> => {
  try {
    const response = await jwtAxiosInstance.post(
      '/auth/admin-login',
      loginInput,
    )
    if (response) {
      setAuthTokens({
        accessToken: response.data.access_token,
        refreshToken: response.data.refresh_token,
      })
      await setUserRole()
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
      '/auth/register',
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
    const response = await jwtAxiosInstance.post('/auth/logout', {
      refresh_token: getRefreshToken(),
    })
    if (response.status !== 201) return false
    clearAuthTokens()
    removeLocalItems(['userRoles'])
    return true
  } catch (e) {
    console.log(e)
    return false
  }
}
