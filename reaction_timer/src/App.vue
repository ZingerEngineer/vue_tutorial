<template>
<h2>Reaction time game</h2>
<button @click="start" :disabled="isPlaying">Play</button>
<Block v-if="isPlaying" :delay="delay" @endGame="showResults"/>
<Results v-if ="end" :reactionTimer="score" :speedLevel="speedLevel" @retry="reset"/>
</template>

<script>
import Block from "./components/Block.vue"
import Results from "./components/Results.vue"

export default {
  name: 'App',
  components: {
    Block,Results
  },
  data(){
    return{
      isPlaying : false,
      delay: null,
      discriptionList:["snail","lightning"],
      end:false,
      score: null,
      speedLevel: null
    }
  },
  methods:{
    start(){
      this.delay = 2000 + Math.random() * 5000
      this.isPlaying = true
    },
    showResults(reactionTimer){
      this.end=!this.end
      this.score = reactionTimer
      if(this.score<200){
        this.speedLevel = this.discriptionList[1]
      }else{this.speedLevel=this.discriptionList[0]}
    },
    reset(){
      this.isPlaying= false,
      this.delay= null,
      this.end=false,
      this.score= null,
      this.speedLevel= null
    }

  }
}
</script>




<style>
#app {
  color: #282828;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    font-family: sans-serif,Arial,"Arial Rounded MT",bold;
}
body{
  margin:0px;
}
button{
    width: 90px;
    height: 40px;
    border-radius: 5px;
    margin-top: 10px;
    background-color: #ccc;
    font-size: 15px;
    border-width: 2px;
    border-color: darkgrey;
    border-style: solid;
    cursor: pointer;
}
h2{
  font-size: 40px;
}
</style>
