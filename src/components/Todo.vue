<template>
  <div class="row">
    <div class="col-12">
      <div class="row justify-center">
        <div class="col-6 col-md-12 box">
          <div class="row">
            <div class="col-12">
              <div class="row">
                <div class="col-12 text-center">
                  <input
                    @keyup.enter="sendTopics"
                    type="text"
                    class="text"
                    placeholder="Enter what we need?"
                    v-model="data"
                  />
                </div>
              </div>
              <TodoList
                :topic="topics"
                :filterType="FilterType"
                @triggered="trigger"
                @delete="del"
              />
              <TodoFilter
                v-if="topics.filter((x) => !x.status).length >= '1'"
                @filter="filter"
                @clear="topics = topics.filter((x) => !x.status)"
                :count="topics.filter((x) => !x.status).length"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TodoList from "./TodoList.vue";
import TodoFilter from "./TodoFilter.vue";
export default {
  name: "Todo",
  data() {
    return {
      data: "",
      topics: [],
      FilterType: "All",
    };
  },
  components: {
    TodoList,
    TodoFilter,
  },

  methods: {
    sendTopics() {
      if (this.data != "") {
        this.topics.push({
          datas: this.data,
          status: false,
        });
      }
      this.data = "";
    },
    trigger(index) {
      this.topics[index].status = !this.topics[index].status;
    },
    del(index) {
      this.topics.splice(index, 1);
    },
    filter(value) {
      this.FilterType = value;
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
.col-6 {
  flex: 0 0 50%;
}
.col-12 {
  flex: 0 0 100%;
}
.text {
  width: 100%;
  padding: 10px;
  font-size: 30px;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  color: brown;
}
.text::placeholder {
  color: brown;
}
.box {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  color: blue;
}
@media (max-width: 600px) {
  .col-md-12 {
    flex: 0 0 100%;
  }
}
</style>
