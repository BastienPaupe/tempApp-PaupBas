<template>
<q-card class="card">
  <q-card-section>
    <q-img
      src="https://placehold.jp/80x80.png"
      width="40%"
      class="absolute-right"
    />
    <div class="text-h5">{{sensor.nom}}</div>
    <div> N° {{sensor.code}}</div>
    <div class="text-h5">Salle {{sensor.salle.nom}}</div>
  </q-card-section>

  <div v-if="sensor.mesures === null">Aucune mesures</div>
  <q-table
    v-else
    title="Mesures"
    :rows="sensor.mesures"
    :columns="columns"
    hide-bottom
  />
</q-card>
</template>

<script>

const columns = [
  { name: 'Date', label: 'Date et heures', field: 'date', align: 'left', sortable: true },
  { name: 'sequence', align: 'center', label: 'Séquence', field: 'sequence', sortable: true },
  { name: 'temperature', label: 'Température (°)', field: 'temperature', sortable: true },
  { name: 'humidite', label: 'Humidité (%)', field: 'humidite' }
]

export default {
  name: 'sensor',
  props: ['sensor'],
  data () {
    return {
      columns
    }
  }
}
</script>

<style scoped>
.card {
  min-height: 15%;
  max-width: 50%;
  transition: background 0.3s;
  padding: 15px;
  margin: 20px;
}
</style>
