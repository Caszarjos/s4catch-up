<script>

import ArticleCard from "@/news/components/article-card.component.vue";

export default {
  name: "main-content",
  components: {ArticleCard},
  props: {
    articles: Array
  }
}
</script>

<template>
  <div v-for="article in articles">
    <article-card :article="article"></article-card>
  </div>
</template>

<style scoped>
</style>