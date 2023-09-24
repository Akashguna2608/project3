<template>
  <div class="row justify-center">
    <div class="col-6 col-md-12 box">
      <div class="row">
        <div class="col-12 pad-row bg-color">
          <span class="cricket">Cricket</span>
          <span class="score">scorer</span>
        </div>
      </div>
      <form @submit.prevent="onSubmit">
        <div class="row bg-clr">
          <div class="col-12">
            <div class="row">
              <div class="col-12">
                <div class="team">Teams</div>
              </div>
            </div>
            <div class="row pad-col">
              <div class="col-12 pad-text">
                <div>
                  <input
                    type="text"
                    class="text1"
                    placeholder="Enter Team1"
                    v-model="teamDetails.teamName1"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    class="text2"
                    placeholder="Enter Team2"
                    v-model="teamDetails.teamName2"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 bg-clr">
                <div class="toss">Toss won by?</div>
              </div>
            </div>
            <div claass="row">
              <div class="col-12 radio">
                <span class="team1"
                  ><input
                    type="radio"
                    value="team1"
                    v-model="teamDetails.selectedTeam"
                    required
                  />
                  {{ teamDetails.teamName1 }}</span
                >
                <span
                  ><input
                    type="radio"
                    value="team2"
                    v-model="teamDetails.selectedTeam"
                    required
                  />
                  {{ teamDetails.teamName2 }}</span
                >
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="optin">Opted to?</div>
              </div>
            </div>
            <div claass="row">
              <div class="col-12 radio">
                <span class="team1"
                  ><input
                    type="radio"
                    value="Bat"
                    v-model="teamDetails.choose"
                    required
                  />
                  Bat</span
                >
                <span
                  ><input
                    type="radio"
                    value="Bowl"
                    v-model="teamDetails.choose"
                    required
                  />
                  Bowl
                </span>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="optin">Overs?</div>
              </div>
            </div>
            <div claass="row">
              <div class="col-12 radio">
                <div>
                  <input
                    type="Number"
                    class="over"
                    max="50"
                    v-model="teamDetails.over"
                    required
                    ref="akash"
                  />
                </div>
              </div>
            </div>
            <div class="row button">
              <button class="btn">Start match</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import selectPlayer from "./selectPlayer.vue";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  name: "app",
  data() {
    return {
      teamDetails: {
        teamName1: "",
        teamName2: "",
        selectedTeam: "",
        choose: "",
        over: "",
      },
    };
  },
  components: {
    selectPlayer,
  },
  computed: {},
  methods: {
    onSubmit() {
      if (
        this.teamDetails.selectedTeam != "" &&
        this.teamDetails.choose != ""
      ) {
        alert("hello");
        this.$store.dispatch("sendPlayerDetails", this.teamDetails);
      }
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
  flex: 0 0 35%;
}
.col-12 {
  flex: 0 0 100%;
}
.pad-row {
  padding: 5px;
}
.box {
  border: 2px solid black;
}
.bg-color {
  background-color: green;
}
.bg-clr {
  background-color: aliceblue;
}
.cricket {
  font-size: 25px;
  padding-right: 5px;
  color: white;
}
.score {
  font-size: 20px;
  color: white;
}
.team {
  padding: 5px;
  color: green;
}
.pad-col {
  margin: 5px;
}
.pad-text {
  padding: 5px;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 7px;
}
.text1 {
  width: 100%;
  border: none;
  border-bottom: 1px solid green;
  margin: 0px 0px 3px 0px;
  padding: 5px;
  outline: none;
  font-size: 13px;
}
.text2 {
  width: 100%;
  border: none;
  border-bottom: 1px solid green;
  margin: 0px 0px 3px 0px;
  padding: 5px;
  outline: none;
  font-size: 13px;
}
.toss {
  padding: 5px;
  color: green;
}
.radio {
  border: 1px solid lightgray;
  margin: 5px;
  padding: 5px;
  border-radius: 7px;
  background-color: white;
}
.team1 {
  padding: 5px;
}
.optin {
  padding: 5px;
  color: green;
}
.over {
  width: 100%;
  border: none;
  border-bottom: 1px solid green;
  outline: none;
  padding: 5px;
}
.btn {
  padding: 9px;
  background-color: green;
  color: white;
  border-radius: 5px;
  border: none;
  float: right;
  font-size: 15px;
}
.button {
  float: right;
  padding: 5px;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
@media (max-width: 600px) {
  .col-md-12 {
    flex: 0 0 100%;
  }
}
</style>
