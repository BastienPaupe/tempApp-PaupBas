<template>
  <q-card class="form-card">
    <q-card-section>
      <div class="text-h6 heading">Connexion {{ target }}</div>
    </q-card-section>

    <q-card-section>
      <q-input
        ref="email"
        outlined
        v-model="form.email"
        label="E-mail"
        class="q-my-md"
        :rules="[val => validateEmail(val) || 'Email invalide']"
        lazy-rules
      />

      <q-input
        type="password"
        ref="password"
        outlined
        v-model="form.password"
        label="Mot de passe"
        class="q-my-md"
        :rules="[ val => val.length >= 4 || 'Minimum 4 caractère']"
        lazy-rules
      />

      <q-btn
        @click="submitForm"
        type="submit"
        color="primary"
        label="Se connecter"
      />
    </q-card-section>
  </q-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['target'],
  name: 'ConnectionForm',
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions('auth', ['loginUser']),
    submitForm () {
      this.$refs.email.validate()
      this.$refs.password.validate()

      if (!this.$refs.email.hasError && !this.$refs.password.hasError) {
        this.loginUser(this.form)
      }
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
