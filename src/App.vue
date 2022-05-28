<script setup>
import { RouterView } from 'vue-router'
import FooterView from './views/FooterView.vue'
</script>

<script>
import { MDBInput, MDBBtn, MDBSpinner, MDBModal, MDBModalBody, MDBModalFooter } from 'mdb-vue-ui-kit';

export default {
  components: {
      MDBBtn,
      MDBInput,
      MDBSpinner,
      MDBModal,
      MDBModalBody,
      MDBModalFooter
    },
  data() {
    return {
      twitter_subject: "",
      show_spinner: false,
      result: "",
      show_error_modal: false
    }
  },
  methods: {
      async get_result() {
          this.show_spinner = true
          console.log(this.twitter_subject)
          
          const payload = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ twitter_subject: this.twitter_subject })
          };
          // try {
          //   let response = await fetch("https://api.chucknorris.io/jokes/random", payload);
          //   console.log("getting response json")
          //   response = await response.json();
          //   this.result = response.value;

          //   console.log(this.result)
          //   this.show_spinner = false
          //   this.clearForm();
          //   this.$router.push({ path: '/result' , hash: '#result'})
          // } catch (error) {
            // console.log(error);
            // this.show_spinner = false
          //   this.show_error_modal = true;
          // }

          await this.sleep(1000)
          try {
            throw "erreur";
            let response = await fetch("https://api.chucknorris.io/jokes/random");
            response = await response.json();
            this.result = response.value;

            console.log(this.result)
            this.show_spinner = false
            this.clearForm();
            this.$router.push({ path: '/result' , hash: '#result'})
          } catch (error) {
            console.log(error);
            this.show_spinner = false
            this.show_error_modal = true;
          }
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

<RouterView :result="result" />

<FooterView></FooterView>

<MDBModal
    id="error-modal"
    tabindex="-1"
    labelledby="errorModal"
    v-model="show_error_modal"
    size="sm"
  >
    <MDBModalBody>Oups, there was an error... Try later</MDBModalBody>
    <MDBModalFooter>
      <MDBBtn color="danger" @click="show_error_modal = false">Close</MDBBtn>
    </MDBModalFooter>
  </MDBModal>

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
.modal-content
{
  border: 1.3px solid #f93154 !important;
}

</style>
