<template>
  <q-page>
    <div class="row q-gutter-lg">

      <div v-if="sensors === null">La liste de capteur est vide</div>

    <card-sensor
      v-for="sensor  in sensors"
      :key="sensor.id"
      :sensor="sensor"
    />
<!--    <q-table-->
<!--      title="Capteur"-->
<!--      :columns="columns"-->
<!--      :rows="sensors"-->
<!--    />-->
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

const columns = [
  { name: 'name', required: true, label: 'Nom', align: 'left', field: row => row.name, format: val => `${val}`, sortable: true },
  { name: 'nom', align: 'center', label: 'nom', field: 'nom', sortable: true },
  { name: 'logo', label: 'logo', field: 'logo', sortable: true },
  { name: 'code', label: 'Code', field: 'code' }
]
export default {
  name: 'sensorsPage',
  data () {
    return columns
  },
  methods: {
    ...mapActions('sensors', ['getAllSensors'])
  },
  computed: {
    ...mapGetters('sensors', ['sensors'])
  },
  components: {
    'card-sensor': require('components/sensor.vue').default
  },
  mounted () {
    // Exécute l'action getClientsApi() du magasin Client
    // qui va récupérer les données de l'API et les ajoute au magasin
    this.getAllSensors()
  }
}
</script>

<style scoped>

</style>
