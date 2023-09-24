<template>
  <div
    v-for="(project, index) in topic"
    :key="index"
    class="row justify-center"
  >
    <div class="col-12">
      <div
        v-if="
          filterType == 'All' ||
          (filterType == 'pending' && !topic[index].status) ||
          (filterType == 'completed' && topic[index].status)
        "
        @mouseover="data = index"
        @mouseleave="data = ''"
        class="row project border pad"
      >
        <div @click="changeColor(index)" class="col-2 text-center">
          <div class="boxe" :class="{ color: project.status }"></div>
        </div>
        <div class="col-8">{{ project.datas }}</div>
        <div @click="del(index)" class="col-2">
          <div v-if="data === index">Del</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TodoList",
  data() {
    return {
      data: "",
    };
  },
  props: {
    topic: {
      type: Array,
    },
    filterType: {
      type: String,
    },
  },
  components: {},
  methods: {
    changeColor(index) {
      this.$emit("triggered", index);
    },
    del(index) {
      this.$emit("delete", index);
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
.text-center {
  text-align: center;
}
.justify-center {
  justify-content: center;
}
.align-center {
  align-items: center;
}
.project {
  font-size: 25px;
}
.col-2 {
  flex: 0 0 16.66%;
}
.col-8 {
  flex: 0 0 66.66%;
}
.col-12 {
  flex: 0 0 100%;
}
.boxe {
  width: 25px;
  height: 25px;
  border: 2px solid lightgray;
  border-radius: 60%;
}
.pad {
  padding: 5px;
}
.border {
  border: none;
  border-bottom: 1px solid lightgray;
}
.color {
  background-color: red;
}
</style>
