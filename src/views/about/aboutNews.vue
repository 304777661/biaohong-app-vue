<template>
  <div>
    <headerpage :title_page="title_page='详情'" :backBtn="backBtn=1"></headerpage>
    <div class="aboutNews">
      <h4>{{aboutNewsDetail.news_title}}</h4>
      <p>{{aboutNewsDetail.describe}}</p>
      <div>{{aboutNewsDetail.author}}</div>
    </div>
  </div>
</template>
<script>
import headerpage from "../../components/header";
export default {
  components: {
    headerpage
  },
  data() {
    return {
      aboutNewsDetail: ""
    };
  },
  created() {
    console.log(this.$route.query.aboutNewsDetail, 24);
    this.aboutNewsDetail = JSON.parse(this.$route.query.aboutNewsDetail);
  }
};
</script>
<style lang="scss" scope>
.aboutNews {
  padding: 50px 20px;
  h4 {
    text-align: center;
    margin: 30px;
  }
  p {
    margin-bottom: 100px;
  }
  div {
    text-align: right;
  }
}
</style>