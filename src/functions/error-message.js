// Importation du plugin Dialog de Quasar
import { Dialog } from 'quasar'

// Exporte notre fonction
export function showErrorMessage (message, errors) {
  // Si un tableau d'errors est envoyé, crée une liste <ul> avec les errors
  if (Array.isArray(errors) && errors.length) {
    message += '<ul><li>' + errors.join('</li><li>') + '</li></ul>'
  }
  // Crée et affiche la boite de dialogue
  Dialog.create({
    title: errors, // Titre de la dialog
    message, // Message de la dialog
    html: true // Html utilisable dans le message
  })
}
