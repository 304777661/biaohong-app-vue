<template>
    <div>

    </div>
</template>
<script>
export default {
    data(){
        return {
            aboutNewsDetail:""
        }
    },
    created(){
        console.log(this.$route.query.aboutNewsDetail,24);
        this.aboutNewsDetail = this.$route.query.aboutNewsDetail;
    }
}
</script>
<style lang="scss" scope>
    
</style>