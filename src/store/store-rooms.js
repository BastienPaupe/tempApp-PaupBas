import { api } from 'boot/axios'
import { showErrorMessage } from 'src/functions/error-message'

// State : données du magasin
const state = {
  rooms: []
}

/*
Mutations : méthodes qui manipulent les données
Les mutations ne peuvent pas être asynchrones !!!
 */
const mutations = {
  /**
   * Définit les salles
   * @param state
   * @param rooms Les alles
   */
  SET_ROOMS (state, rooms) {
    state.rooms = rooms
  }
}

/*
Actions : méthodes du magasin qui font appel aux mutations.
Elles peuvent être asynchrones !
 */
const actions = {
  /**
   * Récupère toutes les salles de l'api
   * @param commit
   * @param rootState
   */
  getAllRooms ({ commit, rootState }) {
    api.get('/salles')
      .then(function (response) {
        commit('SET_ROOMS', response.data)
      })
      .catch(function (error) {
        showErrorMessage(
          'Erreur lors de la récupération des tâches !'
        )
        throw error
      })
  }
}

/*
Getters : retourne les données du magasin
Fonctionne comme les propriétés calculées
Sert à calculer, trier, filtrer ou formater les donneés
 */
const getters = {

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
