<template>
  <div class="row">
    <div class="col-6">
      <div class="row">
        <div class="col-12 bg-clr">
          <div class="row text-center mar-t pad f-color">
            <div class="col-1">Back</div>
            <div class="col-4">Team1</div>
            <div class="col-2">v/s</div>
            <div class="col-4">Team2</div>
          </div>
          <div class="row pad f-color">
            <div class="col-12">ScoreBoard</div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 pad">
          <div>Team1 won the toss choose to bat</div>
        </div>
      </div>
      <div class="row bg-clr">
        <div class="col-12">
          <div class="row">
            <div class="col-6">
              <div class="bdr">Team1</div>
            </div>
            <div class="col-6">
              <div class="bdr">Team2</div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg">xxx</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ScoreCard',
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
    padding: 8px;
  }
  .f-color {
    color: white;
  }
  .bdr {
    padding: 5px 5px 2px 5px;
    width: 40%;
    border-bottom: 2px solid white;
    color: white;
  }
  .bg {
    background-color: red;
  }

</style>
