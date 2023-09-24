<template>
  <Todo/>
</template>
<script>
import FirstPage from "./components/FirstPage.vue";
import SelectPlayer from "./components/selectPlayer.vue";
import MainPage from "./components/MainPage.vue";
import ScoreCard from "./components/scoreCard.vue";
import Todo from "./components/Todo.vue"; 
export default {
  data() {
    return { msg: "Hello" };
  },
  components: {
    FirstPage,
    SelectPlayer,
    MainPage,
    ScoreCard,
    Todo
  },
  computed: {},
  methods: {},
};
</script>
