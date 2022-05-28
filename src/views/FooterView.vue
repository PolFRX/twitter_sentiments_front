<script>
  import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdb-vue-ui-kit';
  export default {
    components: {
      MDBFooter,
      MDBContainer,
      MDBRow,
      MDBCol,
      MDBBtn,
      MDBIcon
    },
  };
</script>

<template>
  <MDBFooter bg="dark" :text="['center', 'white']" class="fixed-bottom p-2">
    <!-- Grid container -->
    <MDBContainer>
      <!-- Section: Social media -->
      <section>
        <!-- Linkedin -->
        <MDBBtn
          tag="a"
          outline="light"
          href="#!"
          floating
          class="m-3 mt-0 mb-0"
        >
          <MDBIcon iconStyle="fab" icon="linkedin-in"></MDBIcon>
        </MDBBtn>
        <!-- Github -->
        <MDBBtn
          tag="a"
          outline="light"
          href="#!"
          floating
          class="m-3 mt-0 mb-0"
        >
          <MDBIcon iconStyle="fab" icon="github"></MDBIcon>
        </MDBBtn>
      </section>
      <!-- Section: Social media -->
    </MDBContainer>
    <!-- Grid container -->
  </MDBFooter>
</template>