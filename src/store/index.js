import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

// import example from './module-example'
import auth from './store-auth'
import rooms from './store-rooms'
import sensors from './store-sensors'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      auth,
      rooms,
      sensors
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})
