<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="left">
          Temp App
        </q-toolbar-title>

        <q-btn
          v-if="!user"
          to="/login"
          flat
          icon-right="account_circle"
          label="Se connecter"
          align="right"
        />
        <q-btn
          v-else
          @click="disconnectUser"
          flat
          icon-right="no_accounts"
          label="Se déconnecter"
          align="right"
        />

        <q-btn
          to="/admin"
          flat
          icon-right="manage_accounts"
          label="Admin"
          align="right"
        />

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item clickable to="/" exact>
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Accueil</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable to="/sensors" exact>
          <q-item-section avatar>
            <q-icon name="sensors" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Capteurs</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable to="/rooms" exact>
          <q-item-section avatar>
            <q-icon name="room" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Salles</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

import { mapActions, mapState } from 'vuex'

export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  computed: {
    ...mapState('auth', ['user'])
  },
  methods: {
    ...mapActions('auth', ['disconnectUser'])
  }
}
</script>
