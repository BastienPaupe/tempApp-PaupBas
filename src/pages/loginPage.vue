<template>
    <q-page padding>
      <connect-form
        class="connexion"
        target="utilisateur"/>
    </q-page>

</template>

<script>
export default {
  name: 'loginpage',
  components: {
    'connect-form': require('components/login/connectionForm.vue').default
  }
}
</script>

<style scoped>
.connexion {
  max-width: 500px;
  width: auto;
  margin: 0 auto;
}
</style>
