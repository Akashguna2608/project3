<template>
  <div class="row justify-center">
    <div class="col-6 col-md-12">
      <div class="row">
        <div class="col-12 text-center">
          <div class="row bg-clr">
            <div class="col-2">
              <div class="back">Back</div>
            </div>
            <div class="col-10">
              <div class="select">Select opening player</div>
            </div>
          </div>
        </div>
      </div>
      <form @submit.prevent="sendPlayerNames">
        <div class="row">
          <div class="col-12">
            <div class="row">
              <div class="col-12">
                <div class="striker">Striker</div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 pad-text">
                <div>
                  <input
                    type="text"
                    class="set-player"
                    placeholder="Player name"
                    v-model="playerNames.striker"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="striker">Non-striker</div>
              </div>
            </div>
            <div class="row">
              <div class="col-11 pad-text">
                <div>
                  <input
                    type="text"
                    class="set-player"
                    placeholder="Player name"
                    v-model="playerNames.nonStriker"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="striker">Opening bowler</div>
              </div>
            </div>
            <div class="row">
              <div class="col-11 pad-text">
                <div>
                  <input
                    type="text"
                    class="set-player"
                    placeholder="Player name"
                    v-model="playerNames.openingBowler"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 pad-text">
                <input type="submit" class="start-btn" value="Start match" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "Player",
  data() {
    return {
      playerNames: {
        striker: "",
        nonStriker: "",
        openingBowler: "",
      },
    };
  },
  computed: {},
  methods: {
    sendPlayerNames() {
      this.$store.dispatch("sendPlayerNames", this.playerNames);
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
.col-2 {
  flex: 0 0 16.66%;
}
.col-6 {
  flex: 0 0 50%;
}
.col-10 {
  flex: 0 0 83.33%;
}
.col-11 {
  flex: 0 0 93.33%;
}
.col-12 {
  flex: 0 0 100%;
}
.bg-clr {
  background-color: green;
}
.add {
  color: green;
  padding-top: 12px;
  cursor: po inter;
}
.back {
  padding: 35px 0px 15px 5px;
  color: white;
}
.select {
  font-size: 20px;
  color: white;
  padding-top: 32px;
}
.striker {
  color: green;
  padding: 5px;
}
.set-player {
  padding: 5px;
  width: 100%;
  border: none;
  border-bottom: 1px solid green;
  font-size: 15px;
  outline: none;
}
.pad-text {
  padding: 5px;
}
.start-btn {
  width: 100%;
  font-size: 15px;
  padding: 10px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 5px;
  outline: none;
}
@media (max-width: 600px) {
  .col-md-12 {
    flex: 0 0 100%;
  }
}
</style>
