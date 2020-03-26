import MD5 from 'md5'

const getCookieLoggedName = () => {
  switch (process.env.REACT_APP_NODE_ENV) {
    case 'pull_request':
      return 'staging_shared_cookie'
    case 'development':
      return 'development_shared_cookie'
    case 'staging':
      return 'staging_shared_cookie'
    case 'production':
      return 'shared_cookie'
    default:
      return 'development_shared_cookie'
  }
}

const getToken = () => {
  const r = document.cookie.match(`\\b${getCookieLoggedName()}=([^;]*)\\b`)
  return r ? r[1] : undefined
}

function clearToken() {
  const cookies = document.cookie.split(';')
  for (let i = 0; i < cookies.length; i += 1) {
    const cookie = cookies[i]
    const eqPos = cookie.indexOf('=')
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=.teste.net`
  }
}

function setClient() {
  const client = MD5(`client-side-${new Date().getTime()}`)
  document.cookie = `user_agent=${client};path=/;domain=.teste.net`
  return client
}

const getClient = () => {
  const r = document.cookie.match('\\buser_agent=([^;]*)\\b')
  return r ? r[1] : setClient()
}

const setToken = token => {
  const sharedCookieName = getCookieLoggedName()
  document.cookie = `${sharedCookieName}=${token};path=/;domain=.teste.net`
}

export { getToken, setToken, clearToken, getClient }
