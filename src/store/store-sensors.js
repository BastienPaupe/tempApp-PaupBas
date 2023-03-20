import { api } from 'boot/axios'
import { showErrorMessage } from 'src/functions/error-message'
import { Loading } from 'quasar'

// State : données du magasin
const state = {
  // sensors: [
  //   {
  //     id: 1,
  //     nom: 'capteur-5574',
  //     logo: 'null',
  //     code: 'nd_6430',
  //     salle: {
  //       id: 1,
  //       nom: 'C595-119'
  //     },
  //     mesures: [
  //       {
  //         id: 177,
  //         date: '2021-02-23',
  //         sequence: 7606,
  //         temperature: 29.66,
  //         humidite: 95.67,
  //         capteur_id: 1
  //       },
  //       {
  //         id: 137,
  //         date: '2017-12-16',
  //         sequence: 5094,
  //         temperature: 8.17,
  //         humidite: 3.62,
  //         capteur_id: 1
  //       },
  //       {
  //         id: 179,
  //         date: '2016-05-09',
  //         sequence: 7205,
  //         temperature: -6.76,
  //         humidite: 52.89,
  //         capteur_id: 1
  //       }
  //     ]
  //   },
  //   {
  //     id: 1,
  //     nom: 'capteur-5574',
  //     logo: 'null',
  //     code: 'nd_6430',
  //     salle: {
  //       id: 1,
  //       nom: 'C595-119'
  //     },
  //     mesures: [
  //       {
  //         id: 177,
  //         date: '2021-02-23',
  //         sequence: 7606,
  //         temperature: 29.66,
  //         humidite: 95.67,
  //         capteur_id: 1
  //       },
  //       {
  //         id: 137,
  //         date: '2017-12-16',
  //         sequence: 5094,
  //         temperature: 8.17,
  //         humidite: 3.62,
  //         capteur_id: 1
  //       },
  //       {
  //         id: 179,
  //         date: '2016-05-09',
  //         sequence: 7205,
  //         temperature: -6.76,
  //         humidite: 52.89,
  //         capteur_id: 1
  //       }
  //     ]
  //   }
  // ]
}

/*
Mutations : méthodes qui manipulent les données
Les mutations ne peuvent pas être asynchrones !!!
 */
const mutations = {
  /**
   * Définir les capteurs
   * @param state
   * @param sensors Les capteurs
   */
  SET_SENSORS (state, sensors) {
    state.sensors = sensors
  }
}

/*
Actions : méthodes du magasin qui font appel aux mutations.
Elles peuvent être asynchrones !
 */
const actions = {
  /**
   * Récupère tous les capteurs de l'API
   * @param commit
   * @param rootState
   */
  getAllSensors ({ commit, rootState }) {
    Loading.show()
    const config = {
      headers: { Authorization: 'Bearer ' + rootState.auth.token }
    }
    api.get('/capteurs', config)
      .then(function (response) {
        Loading.hide()
        commit('SET_SENSORS', response.data)
      })
      .catch(function (error) {
        Loading.hide()
        showErrorMessage('Erreur lors de la récupération des capteurs !', error)
        throw error
      })
  }
}

/*
Getters : retourne les données du magasin
Fonctionne comme les propriétés calculées
Sert à calculer, trier, filtrer ou formater les données
 */
const getters = {
  sensors: (state) => {
    return state.sensors
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
