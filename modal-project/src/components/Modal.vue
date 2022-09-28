<template>
  <div class="wrapper">
    <div @click.self = "closeModalEventEmitter" class="backDrop"></div>
    <div class="modal-body" :class="{danger:themed==='danger'}">
      <h1>{{ title }}</h1>
      <div class="modal-content">{{text}}</div>
      <template class="links"><slot name="links"></slot></template>
    </div>
  </div>
</template>
<script>
export default {
  name: "Modal",
  data() {
    return {
      showModal: false,
    };
  },
  props: ["title","text","themed"],
  methods: {
    closeModalEventEmitter(){
      this.$emit('closeModal')
    }
  },
};
</script>
<style scoped>
.backDrop {
  position: fixed;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0 / 79%);
}
.modal-body {
  position: relative;
  width: 500px;
  height: 300px;
  margin: auto;
  padding: 50px;
  background-color: rgb(255 255 255);
  border-radius: 10px;
  box-sizing: border-box;
}
h1 {
  margin: auto;
  font-size: 25px;
  width: fit-content;
  font-family: "Arial rounded MT", arial, sans-serif;
}
.modal-content{
  width: fit-content;
  margin: auto;
  position: relative;
  top:50px;
  font-family: "Arial rounded MT", arial, sans-serif;

}
.danger{
  background-color: red;
  color: white;
}
</style>
