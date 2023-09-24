<template>
  <div class="row justify-center">
    <div class="col-6 col-md-12">
      <div class="row">
        <div class="col-12 bg-clr">
          <div class="row">
            <div class="col-2 pad-t">
              <div class="back">Back</div>
            </div>
            <div class="col-10 pad-t">
              <div class="row text-center">
                <div class="col-4 team1">{{ playerDetails.teamName1 }}</div>
                <div class="col-2 vs">v/s</div>
                <div class="col-4 team2">{{ playerDetails.teamName2 }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- green page -->
      <div class="row">
        <div class="col-12 bg-color pad">
          <div class="row">
            <div class="col-12 border">
              <div class="row">
                <div class="col-6">
                  <div class="row">
                    <div class="col-12 inning">{{ teamName }}-1st inning</div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="row">
                    <div class="col-12 text-center run-rate">CRR</div>
                  </div>
                </div>
              </div>
              <!-- 1stcntent -->
              <div class="row">
                <div class="col-6 score">
                  {{ teamCount }} - {{ teamWicket }} ({{ teamOver }}.{{
                    teamOverCount
                  }})
                </div>
                <div class="col-6 text-center rate">{{ runRate }}</div>
              </div>
              <!-- 2nd cntent -->
            </div>
          </div>
          <div class="row mar-t">
            <div class="col-12 bdr text-center">
              <div class="row f-size font">
                <div class="col-2">Batsman</div>
                <div class="col-2">R</div>
                <div class="col-2">B</div>
                <div class="col-2">4s</div>
                <div class="col-2">6s</div>
                <div class="col-2">SR</div>
              </div>
              <div
                v-for="(player1, index) in ateamPlayers"
                :key="index"
                class="row font"
              >
                <div class="col-12">
                  <div class="row">
                    <div
                      class="col-2 striker"
                      :class="{ star: player1.batsmanTrue }"
                    >
                      {{ player1.batsmanName }}
                    </div>
                    <div class="col-2">{{ player1.run }}</div>
                    <div class="col-2">{{ player1.ball }}</div>
                    <div class="col-2">{{ player1.four }}</div>
                    <div class="col-2">{{ player1.six }}</div>
                    <div class="col-2">{{ player1.strikeRate }}</div>
                  </div>
                </div>
              </div>
              <div class="row f-size font">
                <div class="col-2 bowler">Bowler</div>
                <div class="col-2">O</div>
                <div class="col-2">M</div>
                <div class="col-2">R</div>
                <div class="col-2">W</div>
                <div class="col-2">ER</div>
              </div>
              <div
                v-for="(bowlerB, index) in bteamBowler"
                :key="index"
                class="row font"
              >
                <div class="col-12">
                  <div class="row">
                    <div class="col-2 b-name">{{ bowlerB.bowlerName }}</div>
                    <div class="col-2">
                      {{ bowlerB.over }}.{{ bowlerB.overCount }}
                    </div>
                    <div class="col-2">{{ bowlerB.maiden }}</div>
                    <div class="col-2">{{ bowlerB.run }}</div>
                    <div class="col-2">{{ bowlerB.wicket }}</div>
                    <div class="col-2">{{ bowlerB.economy }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- ateam -->
          <!-- bteam -->
          <div class="row mar-t">
            <div class="col-12 bdr text-center">
              <div class="row f-size font">
                <div class="col-2">Batsman</div>
                <div class="col-2">R</div>
                <div class="col-2">B</div>
                <div class="col-2">4s</div>
                <div class="col-2">6s</div>
                <div class="col-2">SR</div>
              </div>
              <div
                v-for="(player1, index) in bteamPlayers"
                :key="index"
                class="row font"
              >
                <div class="col-12">
                  <div class="row">
                    <div class="col-2 striker" :class="{ star: player1.batsmanTrue }">{{ player1.batsmanName }}</div>
                    <div class="col-2">{{ player1.run }}</div>
                    <div class="col-2">{{ player1.ball }}</div>
                    <div class="col-2">{{ player1.four }}</div>
                    <div class="col-2">{{ player1.six }}</div>
                    <div class="col-2">{{ player1.strikeRate }}</div>
                  </div>
                </div>
              </div>

              <div class="row f-size font">
                <div class="col-2 bowler">Bowler</div>
                <div class="col-2">O</div>
                <div class="col-2">M</div>
                <div class="col-2">R</div>
                <div class="col-2">W</div>
                <div class="col-2">ER</div>
              </div>
              <div
                v-for="(bowlerA, index) in ateamBowler"
                :key="index"
                class="row font"
              >
                <div class="col-12">
                  <div class="row">
                    <div class="col-2 b-name">{{ bowlerA.bowlerName }}</div>
                    <div class="col-2">
                      {{ bowlerA.over }}.{{ bowlerA.overCount }}
                    </div>
                    <div class="col-2">{{ bowlerA.maiden }}</div>
                    <div class="col-2">{{ bowlerA.run }}</div>
                    <div class="col-2">{{ bowlerA.wicket }}</div>
                    <div class="col-2">{{ bowlerA.economy }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- bteam -->
          <div class="row mar-t">
            <div class="col-12">
              <div class="row bdr">
                <div class="col-3 over">This over:</div>
                <div
                  v-for="(balls, index) in $store.state.balls"
                  :key="index"
                  class="mar-top"
                >
                  <span
                    v-if="balls.length != 6"
                    v-for="(ball, index) in $store.state.balls[index].length"
                    :key="index"
                    class="col-1 parent"
                  >
                    <span class="box"> {{ balls[index].run }} </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12"></div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="row">
                <div class="col-12 f-color">
                  <div class="row font">
                    <div class="col-3"><input type="checkbox" /> Wide</div>
                    <div class="col-3"><input type="checkbox" /> No Ball</div>
                    <div class="col-3"><input type="checkbox" /> Byes</div>
                    <div class="col-3"><input type="checkbox" /> Leg Byes</div>
                  </div>
                  <div class="row font">
                    <div class="col-4"><input type="checkbox" /> Wicket</div>
                    <div class="col-4">
                      <input type="submit" class="btn" value="Retire" />
                    </div>
                    <div class="col-4">
                      <input type="Submit" class="btn" value="Swap Batsman" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 f-color">
              <div class="row">
                <div class="col-2">
                  <div class="row pad-btm">
                    <input type="submit" class="btn" value="Undo" />
                  </div>
                  <div class="row pad-btm">
                    <input type="submit" class="btn" value="Partnership" />
                  </div>
                  <div class="row">
                    <input type="submit" class="btn" value="Extras" />
                  </div>
                </div>
                <div class="col-9">
                  <div class="row">
                    <div class="col-12">
                      <div class="row flex-end pad-b">
                        <div class="col-3 flex-end">
                          <div @click="sendRuns('0')" class="circle">0</div>
                        </div>
                        <div class="col-3 flex-end">
                          <div @click="sendRuns('1')" class="circle">1</div>
                        </div>
                        <div class="col-3 flex-end">
                          <div @click="sendRuns('2')" class="circle">2</div>
                        </div>
                        <div class="col-3 flex-end">
                          <div @click="sendRuns('3')" class="circle">3</div>
                        </div>
                      </div>
                      <div class="row flex-end">
                        <div class="col-3 flex-end">
                          <div @click="sendRuns('4')" class="circle">4</div>
                        </div>
                        <div class="col-3 flex-end">
                          <div @click="sendRuns('5')" class="circle">5</div>
                        </div>
                        <div class="col-3 flex-end">
                          <div @click="sendRuns('6')" class="circle">6</div>
                        </div>
                        <div class="col-3 flex-end">
                          <div @click="sendRuns('0')" class="circle">...</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Cntent -->
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "main",
  data() {
    return {};
  },
  computed: {
    ...mapState([
      "playerDetails",
      "ateamPlayers",
      "bteamPlayers",
      "ateamBowler",
      "bteamBowler",
    ]),
    ...mapGetters([
      "teamName",
      "teamCount",
      "teamWicket",
      "teamOver",
      "teamOverCount",
      "runRate",
    ]),
  },
  methods: {
    sendRuns(runs) {
      this.$store.dispatch("sendRuns", runs);
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
.col-3 {
  flex: 0 0 25%;
}
.col-4 {
  flex: 0 0 33.33%;
}
.col-6 {
  flex: 0 0 50%;
}
.col-8 {
  flex: 0 0 66.66%;
}
.col-9 {
  flex: 0 0 75%;
}
.col-10 {
  flex: 0 0 83.33%;
}
.col-12 {
  flex: 0 0 100%;
}
.bg-clr {
  background-color: green;
}
.bg-color {
  background-color: aliceblue;
}
.mar-t {
  margin-top: 10px;
}
.pad {
  padding: 5px;
}

.pad-t {
  padding: 20px 0px 5px 0px;
}
.back {
  padding: 5px;
  color: white;
}
.team1 {
  color: white;
  padding: 5px;
}
.vs {
  color: white;
  padding: 5px;
}
.team2 {
  color: white;
  padding: 5px;
}
.inning {
  color: green;
  padding: 5px;
}
.run-rate {
  color: green;
  padding: 5px;
}
.score {
  color: green;
  padding: 5px;
}
.rate {
  color: green;
  padding: 5px;
}
.border {
  background-color: white;
  border-radius: 5px;
}
.f-size {
  font-size: 13px;
  border-bottom: 1px solid lightgray;
}
.bdr {
  padding: 5px;
  border-radius: 5px;
  background-color: white;
  color: green;
}
.font {
  font-size: 13px;
  padding: 5px 0px 5px 0px;
}
.mar-top {
  margin-top: 5px;
}
.parent {
  margin: 5px;
}
.box {
  width: 30px;
  height: 30px;
  padding: 3px 6px 3px 6px;
  margin: 3px;
  border-radius: 50%;

  border: 1px solid green;
  color: black;
}
.over {
  padding-top: 5px;
}
.btn {
  background-color: green;
  border: none;
  padding: 3px;
  border-radius: 4px;
  color: white;
}
.f-color {
  color: green;
  padding: 5px;
  background-color: white;
  margin-top: 10px;
  border-radius: 5px;
}
.flex-end {
  display: flex;
  justify-content: flex-end;
}
.circle {
  width: 30px;
  height: 30px;
  border: 1px solid green;
  border-radius: 50%;
  color: black;
  padding: 5px 0px 0px 10px;
}
.pad-b {
  padding-bottom: 10px;
}
.pad-btm {
  padding-bottom: 5px;
}
.striker {
  font-size: 15px;
}
.bowler {
  font-size: 13px;
}
.b-name {
  font-size: 14px;
}
.star::after {
  content: "*";
}
@media (max-width: 600px) {
  .col-md-12 {
    flex: 0 0 100%;
  }
}
</style>
