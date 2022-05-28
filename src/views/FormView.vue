<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<script>
export default {
  data() {
    return {
      twitter_subject: ""
    }
  },
  methods: {
      get_result() {
          console.log(this.twitter_subject)
          const payload = {
              twitter_subject: this.twitter_subject
          }
        //   fetch("https://api.npms.io/v2/search?q=vue")
        //     .then(response => response.json())
        //     .then(data => (this.totalVuePackages = data.total));
          this.clearForm();
          $router.push({ path: '/result', hash: '' })
      },
      clearForm() {
          this.twitter_subject = "";
      }
  }
}
</script>

<template>
<header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <button @click="$router.push({ path: '/result', hash: '#result' })">Go to result page</button>
      </nav>
    </div>
  </header>
<div id="form-twitter-sentiments">
  <form>
    <p>
        <label for="twitter_subject">Twitter subject</label>
        <input
        id="twitter_subject"
        v-model="twitter_subject"
        type="text"
        name="twitter_subject"
        maxlength="40"
        >
    </p>

    <p>
        <button type="button" @click="get_result()">Get result</button>
    </p>

    </form>
</div>
</template>

<style>
#form-twitter-sentiments
{
    background-image: "@/assets/background.png";
}
button
{
    text-align: center;
}
</style>
