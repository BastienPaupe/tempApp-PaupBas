<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
    <q-btn
      @click="getAllSensors"
      label="test"
    />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { mapActions } from 'vuex'

export default defineComponent({
  name: 'IndexPage',
  components: {
  },
  methods: {
    ...mapActions('sensors', ['getAllSensors'])
  }
})
</script>
