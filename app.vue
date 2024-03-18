<script setup lang="ts">
console.time('No route rule')
const response = await useFetch('http://localhost:3001/delayed-response', {
  timeout: 1000,
});
console.log(response.error.value)
console.timeEnd('No route rule')

console.time('With route rule')
const response2 = await useFetch('/delayed-response', {
  timeout: 1000,
});
console.log(response2.error.value)
console.timeEnd('With route rule')

</script>

<template>
  <div>
    <NuxtWelcome />
  </div>
</template>
