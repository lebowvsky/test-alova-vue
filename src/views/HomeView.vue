<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p v-if="error">Une erreur s'est produite :(</p>
    <p v-if="loading">Loading...</p>
    <div v-else class="ctnr">
      <div class="item-wrapper" v-for="(item, index) in data" :key="index">
        <p>{{ item.firstname }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { fetchAllUsers } from "@/utils/users";
import { useRequest } from "alova";
import { watchEffect } from "vue";

const { data, loading, error } = useRequest(fetchAllUsers, {
  initialData: [],
});

watchEffect(() => {
  console.log(loading.value);
  if (!loading.value) console.log(data);
});
</script>
