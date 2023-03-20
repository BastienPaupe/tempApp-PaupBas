import { api } from 'boot/axios'
import { showErrorMessage } from 'src/functions/error-message'
import { Loading } from 'quasar'

// State : données du magasin
const state = {
  user: null,
  token: null
}

/*
Mutations : méthodes qui manipulent les données
Les mutations ne peuvent pas être asynchrones !!!
 */
const mutations = {
  /**
   * Définit l'utilisateur actuel
   * @param state
   * @param user L'utilisateur
   */
  SET_USER (state, user) {
    state.user = user
  },
  /**
   * Définit le token actuel
   * @param state
   * @param token Le token
   */
  SET_TOKEN (state, token) {
    state.token = token
  }
}

/*
Actions : méthodes du magasin qui font appel aux mutations
Elles peuvent être asynchrones !
 */
const actions = {
  /**
   * Enregistrer un utilisateur dans l'API
   * @param commit
   * @param dispatch
   * @param payload
   */
  saveUser ({ commit, dispatch }, payload) {
    Loading.show()
    api.post('/newuser', payload)
      .then(function (response) {
        Loading.hide()
        dispatch('setUser', response.data)
      })
      .catch(function (error) {
        Loading.hide()
        showErrorMessage('Création du compte impossible !', Object.values(error.response.data)
        )
        throw error
      })
  },
  /**
   * Connecter un utilisateur dans l'API
   * @param commit
   * @param dispatch
   * @param payload
   */
  loginUser ({ commit, dispatch }, payload) {
    Loading.show()
    api.post('/login', payload)
      .then(function (response) {
        Loading.hide()
        commit('SET_USER', response.data.user)
        commit('SET_TOKEN', response.data.access_token)

        // Redirige l'utilisateur vers la page d'accueil
        this.$router.push('/sensors')
      })
      .catch(function (error) {
        Loading.hide()
        showErrorMessage('Connexion impossible !', Object.values(error.response.data))
        throw error
      })
  },
  /**
   * Déconnecte l'utilisateur de l'api et surprime les données
   * @param commit
   * @param state
   */
  disconnectUser ({ commit, state }) {
    Loading.show()
    const config = {
      headers: { Authorization: 'Bearer ' + state.auth.token }
    }
    // Déconnexion de l'API
    api.post('/logout', config)
      .catch(function (error) {
        Loading.hide()
        showErrorMessage('Erreur lors de la déconnexion', error)
        throw error
      })
      .finally(function () {
        // Réinitialise user et token
        commit('setUser', null)
        commit('setToken', null)

        // Redirige l'utilisateur vers la page de connexion
        this.$router.push('/login')
        // location.reload() // recharge la page du navigateur
        Loading.hide()
      })
  }
}

/*
Getters : retourne les données du magasin
Fonctionne comme les propriétés calculées
Sert à calculer, trier, filtrer ou formater les données
 */
const getters = {
  token () {
    return state.token
  },
  user () {
    return state.user
  }
}

/*
Exporte les constantes, variables du fichier
On pourra ainsi les récupérer, les importer dans un autre fichier JS.

namespace: true, ajoute un namespace à notre objet retourné.
 */
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
