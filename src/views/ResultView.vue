<script>
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImg, MDBCardGroup } from 'mdb-vue-ui-kit'

export default{
    props: {
        result: String
    },
    components: {
      MDBCard,
      MDBCardBody,
      MDBCardTitle,
      MDBCardText,
      MDBCardImg,
      MDBCardGroup
    },
    data: function(){
        return {
            hash: this.$route.hash
        }
    },
    mounted() {
        this.$nextTick(function () {
            if (this.hash) {
                const refName = this.hash.replace('#', '')
                this.scrollToAnchorPoint(refName)
            }
        })
    },
    methods: {
        scrollToAnchorPoint(refName) {
            const el = this.$refs[refName]
            el.scrollIntoView({ behavior: 'smooth' })
        }
    }
}
</script>

<template>
<div ref="result" id="result">
      <div class="d-flex full-height align-items-center">
        <div class="container-fluid">
            <div class="row p-1 justify-content-center">
                <MDBCard text="center" class="col-8">
                    <MDBCardBody>
                    <MDBCardTitle>Results</MDBCardTitle>
                    <MDBCardGroup>
                        <MDBCard>
                            <MDBCardImg src="src/assets/pie_chart.png" top alt="pie chart"/>
                            <MDBCardBody>
                                <MDBCardTitle>Pie chart of the result</MDBCardTitle>
                            </MDBCardBody>
                        </MDBCard>
                        <MDBCard>
                            <MDBCardImg src="src/assets/word_cloud3.jpg" top alt="word cloud"/>
                            <MDBCardBody>
                                <MDBCardTitle>Word cloud of the subject</MDBCardTitle>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCardGroup>
                    <MDBCardText>
                        It has a score of {{ result }}
                    </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </div>
        </div>
    </div>
</div>
</template>

<style>
button
{
    text-align: center;
}
#result
{
    height: 100vh;
    background-color: rgb(236, 236, 236);
}
</style>
