<template>
  <div class="block" v-if="showBlock" @click="toggleBlock">
    Click me !
  </div>
</template>

<script>
export default {
  name: "Block",
props: ["delay"],
data(){
return {
  showBlock: false,
  timer : null,
  reactionTimer : 0
}
},
mounted(){
  setTimeout(()=>{
    this.showBlock = !this.showBlock
    this.timer = setInterval(()=>{
      this.reactionTimer = this.reactionTimer + 10
    },10)
  }, this.delay)
},
methods:{
  toggleBlock(){
    clearInterval(this.timer)
    this.showBlock=!this.showBlock
    this.$emit("endGame",this.reactionTimer)
      }
}
}
</script>

<style>
.block{
  width: 400px;
  border-radius: 20px;
  background-color: rgb(231, 39, 39);
  color: white;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
  cursor: pointer;
}
</style>