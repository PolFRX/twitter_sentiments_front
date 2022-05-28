<script setup>
import { RouterView } from 'vue-router'
import FooterView from './views/FooterView.vue'
</script>

<script>
import { MDBInput, MDBBtn, MDBSpinner } from 'mdb-vue-ui-kit';

export default {
  components: {
      MDBBtn,
      MDBInput,
      MDBSpinner
    },
  data() {
    return {
      twitter_subject: "",
      show_spinner: false
    }
  },
  methods: {
      async get_result() {
          this.show_spinner = true
          console.log(this.twitter_subject)
          const payload = {
              twitter_subject: this.twitter_subject
          }
        //   fetch("https://api.npms.io/v2/search?q=vue")
        //     .then(response => response.json())
        //     .then(data => (this.totalVuePackages = data.total));
          await this.sleep(2000)
          this.show_spinner = false
          this.clearForm();
          this.$router.push({ path: '/result' , hash: '#result'})
      },
      clearForm() {
          this.twitter_subject = "";
      },
      sleep(ms) {
          return new Promise(resolve => setTimeout(resolve, ms));
      }
  }
}
</script>

<template>
<div id="form-twitter-sentiments">
  <div class="d-flex full-height align-items-center">
  <form class="container-fluid">
    <div class="row p-1 justify-content-center">
      <div class="col-4">
          <MDBInput label="Twitter subject" v-model="twitter_subject" style="background-color: #0a4275" size="lg" white/>
      </div>
    </div>
    <div class="row pt-2 justify-content-center">
      <div class="col-2 offset-4">
          <MDBBtn class="col-8" v-if="!show_spinner" color="info" rounded @click="get_result">Get result</MDBBtn>
          <MDBBtn class="col-8" v-if="show_spinner" color="info" rounded disabled>
            <MDBSpinner tag="span" size="sm" />
            Loading...
          </MDBBtn>
      </div>
    </div>
    <div class="row p-1">
      <div class="col-2">
          <MDBBtn color="primary" @click="$router.push({ path: '/'})">Go to home page</MDBBtn>
      </div>
    </div>
  </form>
  </div>
</div>

<RouterView />

<FooterView></FooterView>

</template>

<style>
@import '@/assets/base.css';

#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}
#form-twitter-sentiments
{
    background-image: url('@/assets/background.png');
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    margin: 0px;
    position: relative;
}
.full-height {
  height: 100vh;
}

</style>
