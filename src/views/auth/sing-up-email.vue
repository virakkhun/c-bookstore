<script setup lang="ts">
import axios from "axios";

const submit = (): void => {
  axios({
    method: "POST",
    headers: {
      authorization: "base64:aA9bSoCOgw2VE9tpg8TWznyzAqlP5wV2ZngTgPx2WDM=",
    },
    data: {
      username: "virakkhun.rupp@gmail.com",
      language: "kh",
      country_code: "+855",
    },
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
</script>

<template>
  <div>
    <button @click="submit">submit</button>
  </div>
</template>
