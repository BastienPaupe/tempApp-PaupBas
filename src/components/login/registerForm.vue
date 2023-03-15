<template>
  <q-form @submit.prevent="submitForm">
    <q-input
      outlined
      v-model="form.name"
      label="Nom d'utilisateur"
      class="q-my-md"
      :rules="[ val => val.length >= 4 || 'Minimum 4 caractère']"
    />

    <q-input
      outlined
      v-model="form.email"
      label="E-mail"
      class="q-my-md"
      :rules="[val => validateEmail(val) || 'Email invalide']"
    />

    <q-input
      type="password"
      outlined
      v-model="form.password"
      label="Mot de passe"
      class="q-my-md"
      :rules="[ val => val.length >= 4 || 'Minimum 4 caractère']"
      lazy-rules
    />

    <q-input
      type="password"
      outlined
      v-model="form.password_confirmation"
      label="Confirmer le mot de passe"
      class="q-my-md"
      :rules="[ val => val === form.password || 'Les mots de passe sont différents']"
      lazy-rules
    />

    <q-btn
      type="submit"
      color="primary"
      label="Créer un compte"
    />
  </q-form>
</template>

<script>
export default {
  name: 'EnregistrementForm',
  data () {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
    }
  },
  methods: {
    submitForm () {
      alert('Formulaire envoyé !')
    },
    validateEmail (email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(email).toLowerCase())
    }
  }
}
</script>

<style>

</style>
