import { showErrorMessage } from 'src/functions/error-message'

// Récupère l'objet router représentant Vue router
export default ({ router }) => {
  // Avant de rediriger le visiteur
  router.beforeEach((to, from, next) => {
    // Récupère
    const user = this.$store.state.auth.user
    alert(user)
    // Si PAS connecté et ne vas par vers /connexion on force la redirection
    if (!user && to.path !== '/login') {
      // Affiche un message d'erreur uniquement si utilisateur tente d'accéder
      // à une autre page après avoir été redirigé vers la connexion une 1re fois.
      if (from.path === '/login') {
        showErrorMessage('Page protégée, accès admin requise !')
      }
      next('/login') // Redirige vers /login
    } else {
      next() // Continue la navigation normalement
    }
  })
}
