<template>
<q-card class="card">
  <q-card-section>
    <div class="text-h5">{{sensor.nom}}</div>
    <div> N° {{sensor.code}}</div>
    <q-img
      :src="'./assets/sensor.png'"
    />
  </q-card-section>
  <q-card-section>
    <div class="text-h6">Salle : {{sensor.salle.nom}}</div>
  </q-card-section>
  <q-separator dark insert />
  <q-rating
    :icon="favorite"
    size="2em"
    :max="1"
    color="primary"
  />

  <q-card-actions
    class="absolute-bottom"
    align="right">
    <q-btn
      icon="edit"
      color="blue"
      flat>Modifier</q-btn>
    <q-btn
      icon="like"
      color="yellow"
      flat>Favoris</q-btn>
  </q-card-actions>

</q-card>
</template>

<script>
export default {
  name: 'sensor',
  props: ['sensor']
}
</script>

<style scoped>
.card {
  min-height: 100px;
  max-width: 200px;
  width: 200px;
  transition: background 0.3s;
}
</style>
