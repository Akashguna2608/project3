<template>
  <div class="row pad">
    <div class="col-1">{{count}}</div>
    <div @click="filter('All')" class="col-2">All</div>
    <div @click="filter('pending')" class="col-2">Pending</div>
    <div @click="filter('completed')" class="col-3">Completed</div>
    <div @click="clearCompleted" class="col-3">Clearcompleted</div>
  </div>
</template>
<script>
export default {
  props: {
    count: {
      type: Number,
    },
  },
  methods: {
    filter(value) {
      this.$emit("filter", value);
    },
    clearCompleted() {
      this.$emit("clear");
    },
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.row {
  display: flex;
  flex-flow: row wrap;
}
.col-1 {
  flex: 0 0 8.33%;
}
.col-2 {
  flex: 0 0 16.66%;
}
.col-3 {
  flex: 0 0 25%;
}
.pad {
  padding: 10px;
  color:brown;
}
</style>
