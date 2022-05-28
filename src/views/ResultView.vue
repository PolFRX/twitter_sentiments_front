<script>
export default{
    data: function(){
        return {
            hash: this.$route.hash,
            count: 0
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
  <button class="result" @click="count++">You clicked me {{ count }} times.</button>
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
    background-color: blue;
}
</style>
