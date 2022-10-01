<template>
<div class="back-drop"></div>
<div class="results-modal">
  <h1 class="results-title">
  Your reaction time is {{reactionTimer}} ms.
  </h1>
  <h1 class="results-speed">You have a reaction of a {{speedLevel}} !</h1>
  <button class="try-again" @click="tryAgain">Try again</button>
</div>
</template>

<script>
export default {
  
  name: 'Results',
  props:["reactionTimer","speedLevel"],
  data(){
    return{
toggleModal : false
    }
    
  },
  methods:{
tryAgain(){
  this.toggleModal= false
  this.$emit("retry")
}
  }
}
</script>

<style>
h1{
    width: fit-content;
    margin: 0px;
    color: rgb(255, 255, 255);
    font-size: 20px;
}
.back-drop{
    width: 100%;
    height: 100%;
    background-color: rgb(255 255 255 / 73%);
    position: fixed;
    top: 0px;
}
.results-modal{
    width: 340px;
    display: flex;
    height: 100%;
    background-color: rgb(124 124 124);
    color: white;
    text-align: center;
    padding: 0 35px;
    position: fixed;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 0px;
}
.results-speed{
    margin-top: 10px;
    font-size: 15px;
}
.results-title{
  font-size: 45px;
}
</style>
