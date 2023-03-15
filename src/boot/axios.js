import { boot } from 'quasar/wrappers'
import axios from 'axios'

// Initialisation de l'API
const api = axios.create({
  baseURL: 'http://tempapi.divtec.me/api',
  timeout: 30000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

/**
 * Test si l'expiration du token et plus petite que la limite fixée
 * par rapport à l'heure actuelle.
 *
 * Retourne vrais si token en dessous de la limite
 *
 * @param dateExpiration - Date d'expiration
 * @param limiteEnMinutes - Limite en minutes
 * @returns {boolean}
 */
/* function tokenLimite (dateExpiration, limiteEnMinutes) {
  const dateActuelle = parseInt(Date.now() / 1000)
  const dateLimite = dateExpiration - 60 * limiteEnMinutes
  return (dateActuelle - dateLimite) > 0
} */

export default boot(({ app, store }) => {
  // Interception de toutes les requêtes AXIOS
  /* api.interceptors.request.use(function (config) {
    // Récupère le token de l'utilisateur actuel
    // const token = store.getters['auth/token']
    const token = store.getters['auth/token']

    // alert(token)

    // Si un token existe, alors on l'ajoute aux headers
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    // Récupère l'utilisateur actuel
    const user = store.getters['auth/user'] || null

    // alert(user)

    // Rafraichit le token si validité inférieure à 5 jours
    if (
      user &&
      config.url !== '/auth/refresh' &&
      tokenLimite(user.tokenExpiration, 9600)
    ) {
      store.dispatch('auth/refresh')
    }
    return config
  }, function (error) {
    // Traitement des erreurs
    return Promise.reject(error)
  }) */

  // Interception de toutes les réponses AXIOS
  // Déconnecte automatiquement l'utilisateur si erreur 401
  /* api.interceptors.response.use(function (response) {
    return response
  }, function (error) {
    if (
      error.response.status === 401 &&
      error.response.config.url !== '/auth/logout' &&
      error.response.config.url !== '/auth/login'
    ) {
      store.dispatch('auth/logout')
    }
    return Promise.reject(error)
  }) */

  // Permet d'utiliser les raccourcis suivant dans les fichiers Vue this.$axios and this.$api
  app.config.globalProperties.$axios = axios
  app.config.globalProperties.$api = api
})

export { api }
