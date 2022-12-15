import memoizeOne from 'memoize-one';

export const isDev = process.env.NODE_ENV !== 'production'
export const isServer = typeof window === 'undefined' && typeof document === 'undefined'
export const getPort = memoizeOne(() => process.env.PUBLIC_PORT || 3000)
export const getBackendUrl = () => {
  const backendUrl = process.env.PUBLIC_BACKEND_URL || ''
  if(isDev) {
    return 'http://localhost:' + getPort()
  }else {
    return backendUrl + ':' + getPort()
  }
}

export const getToken = () => {
  if(!isServer) {
    return window.localStorage.getItem('token') || ''
  }
}
