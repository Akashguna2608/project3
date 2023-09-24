import { createStore } from 'vuex';
import profile from '../Module/profile';
const store = createStore({
  state() {
    return {
      arr: [],
      playerDetails:"",
      team1Count: 1,
      team2Count: 2,
      team1Wicket: 1,
      team2Wicket: 2,
      team1Over: 1,
      team2Over: 2,
      team1OverCount: 1,
      team2OverCount: 2,
      player1Score: 1,
      player2Score: 2,
      player1BallCount: 1,
      player2BallCount: 2,
      player1Four: 1,
      player2Four: 2,
      player1Six: 1,
      player2Six: 2,
      strikeRate1: '0.00',
      strikeRate2: '0.00',
      bowlerMaiden: 1,
      bowlerRun: 1,
      bowlerWicket: 1,
      bowlerEconomy: 1,
      balls: [[]],
      ateamPlayers: [],
      ateamPlayersScoreCard: [],
      bteamPlayersScoreCard: [],
      bteamPlayers: [],
      bowler:[],
      ateamBowler: [],
      bteamBowler: [],
      
    };
  },
  getters: {
    teamName(state) {
      if (
        (state.playerDetails.selectedTeam == 'team1' && state.playerDetails.choose == 'Bat') ||
        (state.playerDetails.selectedTeam == 'team2' && state.playerDetails.choose == 'Bowl')
      ) {
        return state.playerDetails.teamName1;
      }

      if (
        (state.playerDetails.selectedTeam == 'team1' && state.playerDetails.choose == 'Bowl') ||
        (state.playerDetails.selectedTeam == 'team2' && state.playerDetails.choose == 'Bat')
      ) {
        return state.playerDetails.teamName2;
      }
    },
    teamCount(state) {
      if (
        (state.playerDetails.selectedTeam == 'team1' && state.playerDetails.choose == 'Bat') ||
        (state.playerDetails.selectedTeam == 'team2' && state.playerDetails.choose == 'Bowl')
      ) {
        return state.team1Count;
      } 

      if (
        (state.playerDetails.selectedTeam == 'team1' && state.playerDetails.choose == 'Bowl') ||
        (state.playerDetails.selectedTeam == 'team2' && state.playerDetails.choose == 'Bat')
      ) {
        return state.team2Count;
      }
    },
    teamWicket(state) {
      if (
        (state.playerDetails.selectedTeam == 'team1' && state.playerDetails.choose == 'Bat') ||
        (state.playerDetails.selectedTeam == 'team2' && state.playerDetails.choose == 'Bowl')
      ) {
        return state.team1Wicket;
      }

      if (
        (state.playerDetails.selectedTeam == 'team1' && state.playerDetails.choose == 'Bowl') ||
        (state.playerDetails.selectedTeam == 'team2' && state.playerDetails.choose == 'Bat')
      ) {
        return state.team2Wicket;
      }
    },
    teamOver(state) {
      if (
        (state.playerDetails.selectedTeam == 'team1' && state.playerDetails.choose == 'Bat') ||
        (state.playerDetails.selectedTeam == 'team2' && state.playerDetails.choose == 'Bowl')
      ) {
        return state.team1Over;
      }

      if (
        (state.playerDetails.selectedTeam == 'team1' && state.playerDetails.choose == 'Bowl') ||
        (state.playerDetails.selectedTeam == 'team2' && state.playerDetails.choose == 'Bat')
      ) {
        return state.team2Over;
      }
    },
    teamOverCount(state) {
      if (
        (state.playerDetails.selectedTeam == 'team1' && state.playerDetails.choose == 'Bat') ||
        (state.playerDetails.selectedTeam == 'team2' && state.playerDetails.choose == 'Bowl')
      ) {
        return state.team1OverCount;
      }

      if (
        (state.playerDetails.selectedTeam == 'team1' && state.playerDetails.choose == 'Bowl') ||
        (state.playerDetails.selectedTeam == 'team2' && state.playerDetails.choose == 'Bat')
      ) {
        return state.team2OverCount;
      }
    },
    
    playerRun(state) {
      if (
        (state.playerDetails.selectedTeam == 'team1' && state.playerDetails.choose == 'Bat') ||
        (state.playerDetails.selectedTeam == 'team2' && state.playerDetails.choose == 'Bowl')
      ) {
        return state.team1Score;
      }

      if (
        (state.playerDetails.selectedTeam == 'team1' && state.playerDetails.choose == 'Bowl') ||
        (state.playerDetails.selectedTeam == 'team2' && state.playerDetails.choose == 'Bat')
      ) {
        return state.team2Score;
      }
    },
    playerBallCount(state) {
      if (
        (state.playerDetails.selectedTeam == 'team1' && state.playerDetails.choose == 'Bat') ||
        (state.playerDetails.selectedTeam == 'team2' && state.playerDetails.choose == 'Bowl')
      ) {
        return state.player1BallCount;
      }

      if (
        (state.playerDetails.selectedTeam == 'team1' && state.playerDetails.choose == 'Bowl') ||
        (state.playerDetails.selectedTeam == 'team2' && state.playerDetails.choose == 'Bat')
      ) {
        return state.player2BallCount;
      }
    },
    playerFours(state) {
      if (
        (state.playerDetails.selectedTeam == 'team1' && state.playerDetails.choose == 'Bat') ||
        (state.playerDetails.selectedTeam == 'team2' && state.playerDetails.choose == 'Bowl')
      ) {
        return state.team1Four;
      }

      if (
        (state.playerDetails.selectedTeam == 'team1' && state.playerDetails.choose == 'Bowl') ||
        (state.playerDetails.selectedTeam == 'team2' && state.playerDetails.choose == 'Bat')
      ) {
        return state.team2Four;
      }
    },
    playerSix(state) {
      if (
        (state.playerDetails.selectedTeam == 'team1' && state.playerDetails.choose == 'Bat') ||
        (state.playerDetails.selectedTeam == 'team2' && state.playerDetails.choose == 'Bowl')
      ) {
        return state.team1Six;
      }

      if (
        (state.playerDetails.selectedTeam == 'team1' && state.playerDetails.choose == 'Bowl') ||
        (state.playerDetails.selectedTeam == 'team2' && state.playerDetails.choose == 'Bat')
      ) {
        return state.team2Six;
      }
    },
    runRate(state){
      return eval(state.team1Count / state.team1Over).toString().slice(0,5);
    },
    strikeRatePlayer1(state) {
      return eval((state.ateamPlayers[0].run / state.ateamPlayers[0].ball) * 100)
        .toString()
        .slice(0, 5);
    },
    strikeRatePlayer2(state) {
      return eval((state.ateamPlayers[1].run / state.ateamPlayers[1].ball) * 100)
        .toString()
        .slice(0, 5);
    },
  },
  mutations: {
    sendRuns(state, runs) {
      if (
        (state.playerDetails.selectedTeam == 'team1' && state.playerDetails.choose == 'Bat') ||
        (state.playerDetails.selectedTeam == 'team2' && state.playerDetails.choose == 'Bowl')
      ) {
        state.team1OverCount += 1;
        if(state.team1OverCount == 6){
          state.team1Over += 1;
          state.team1OverCount = 0;
        }
        for (var i = 0; i < state.ateamPlayers.length; i++) {
          
            if (state.ateamPlayers[i].batsmanTrue && state.balls.length != state.playerDetails.over) {
              state.ateamPlayers[i].run += parseInt(runs);
              state.ateamPlayers[i].ball += 1; 
              if(runs == 4){
                state.ateamPlayers[i].four += 1
              }
              if(runs == 6){
                state.ateamPlayers[i].six += 1
              } 
            }
            
            if(runs == 1 || runs == 5 || runs == 3){
              state.ateamPlayers[i].batsmanTrue = !state.ateamPlayers[i].batsmanTrue;
              console.log(state.ateamPlayers[i].batsmanTrue);
            }

            if (state.balls[state.balls.length-1].length == 5 && (runs == 2 || runs == 4 || runs == 6)) {
              state.ateamPlayers[i].batsmanTrue = !state.ateamPlayers[i].batsmanTrue;
              console.log(state.ateamPlayers[i].batsmanTrue);
            }
        }
        state.ateamPlayers[0].strikeRate = 
        ((state.ateamPlayers[0].run / state.ateamPlayers[0].ball) * 100).toString()
        .slice(0, 5);
        state.ateamPlayers[1].strikeRate = 
        ((state.ateamPlayers[1].run / state.ateamPlayers[1].ball) * 100).toString()
        .slice(0, 5);

        function addRuns() {
          var b = null;
          for (var i = 0; i < state.balls.length; i++) {
            if (state.balls[i].length != 6) {
              state.balls[i].push({ run: runs });
              }
          }
          b = state.balls.length - 1;
          if(state.balls.length != state.playerDetails.over){
            state.team1Count += parseInt(state.balls[b][state.balls[b].length - 1].run);
          }

          if (state.balls[b].length == 6 && state.balls.length != state.playerDetails.over) {
            state.balls.push([]);
          }
        }
        addRuns();
      }

      if (
        (state.playerDetails.selectedTeam == 'team1' && state.playerDetails.choose == 'Bowl') ||
        (state.playerDetails.selectedTeam == 'team2' && state.playerDetails.choose == 'Bat')
      ) {
        state.team2OverCount += 1;
        if(state.team2OverCount == 6){
          state.team2Over += 1;
          state.team2OverCount = 0;
        }
        for (var i = 0; i < state.bteamPlayers.length; i++) {
          
            if (state.bteamPlayers[i].batsmanTrue && state.balls.length != state.playerDetails.over) {
              state.bteamPlayers[i].run += parseInt(runs);
              state.bteamPlayers[i].ball += 1; 
              if(runs == 4){
                state.bteamPlayers[i].four += 1
              }
              if(runs == 6){
                state.bteamPlayers[i].six += 1
              } 
            }
            
            if(runs == 1 || runs == 5 || runs == 3){
              state.bteamPlayers[i].batsmanTrue = !state.bteamPlayers[i].batsmanTrue;
              
            }

            if (state.balls[state.balls.length-1].length == 5 && (runs == 2 || runs == 4 || runs == 6)) {
              state.bteamPlayers[i].batsmanTrue = !state.bteamPlayers[i].batsmanTrue;
              console.log(state.bteamPlayers[i].batsmanTrue);
            }
        }
        state.bteamPlayers[0].strikeRate = 
        ((state.bteamPlayers[0].run / state.bteamPlayers[0].ball) * 100).toString()
        .slice(0, 5);

        function addRuns() {
          var b = null;
          for (var i = 0; i < state.balls.length; i++) {
            if (state.balls[i].length != 6) {
              state.balls[i].push({ run: runs });
              }
          }
          b = state.balls.length - 1;
          if(state.balls.length != state.playerDetails.over){
            state.team2Count += parseInt(state.balls[b][state.balls[b].length - 1].run);
          }

          if (state.balls[b].length == 6 && state.balls.length != state.playerDetails.over) {
            state.balls.push([]);
          }
        }
        addRuns(); 
      }
    },
    
    sendPlayerDetails(state,data){
        state.playerDetails = data;
    },
    sendPlayerNames(state,data){
        if (
            (state.playerDetails.selectedTeam == 'team1' && state.playerDetails.choose == 'Bat') ||
            (state.playerDetails.selectedTeam == 'team2' && state.playerDetails.choose == 'Bowl')
          ) {
            state.ateamPlayers.push({
              batsmanName: data.striker,
              run: state.player1Score,
              ball: state.player1BallCount,
              four: state.player1Four,
              six: state.player1Six,
              strikeRate: state.strikeRate1,
              Out: 'not out',
              batsmanTrue: true,
              status: true,
            });
            state.ateamPlayers.push({
                batsmanName: data.nonStriker,
                run: state.player2Score,
                ball: state.player2BallCount,
                four: state.player2Four,
                six: state.player2Six,
                strikeRate: state.strikeRate2,
                Out: 'not out',
                batsmanTrue: false,
                status: true,
              });
              
              state.bteamBowler.push({
                bowlerName: data.openingBowler,
                over: state.team2Over,
                overCount: state.team2OverCount,
                maiden:state.bowlerMaiden,
                run:state.bowlerRun,
                wicket:state.bowlerWicket,
                economy: state.bowlerEconomy,
                status: true,
            })
            
          }
          if (
            (state.playerDetails.selectedTeam == 'team2' && state.playerDetails.choose == 'Bat') ||
            (state.playerDetails.selectedTeam == 'team1' && state.playerDetails.choose == 'Bowl')
          ) {
            state.bteamPlayers.push({
                batsmanName: data.striker,
                run: state.player1Score,
                ball: state.player1BallCount,
                four: state.player1Four,
                six: state.player1Six,
                strikeRate: state.strikeRate1,
                Out: 'not out',
                batsmanTrue: true,
                status: true,
              });
              state.bteamPlayers.push({
                batsmanName: data.nonStriker,
                run: state.player2Score,
                ball: state.player2BallCount,
                four: state.player2Four,
                six: state.player2Six,
                strikeRate: state.strikeRate2,
                Out: 'not out',
                batsmanTrue: false,
                status: true,
              });
              state.ateamBowler.push( {
                bowlerName: data.openingBowler,
                over: state.team1Over,
                overCount:state.team1OverCount,
                maiden:state.bowlerMaiden,
                run: state.bowlerRun,
                wicket: state.bowlerWicket,
                economy: state.bowlerEconomy,
                status: true,
              });
           
            }
    },

},
  actions: {
    sendPlayerDetails(context,data){ 
        context.commit("sendPlayerDetails",data);
    },
    sendPlayerNames(context,data){
        context.commit("sendPlayerNames",data);
  },
  sendRuns(context, runs) {
    context.commit('sendRuns', runs);
  },
},
  modules: {
    profile,
  },
});
export default store;
