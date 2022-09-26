<template>
  <button class="modal-button" @click="showModalHandler">Click me !</button>
  <div v-if="showModal" class="wrapper">
    <div class="backDrop"></div>
    <div class="modal-body"><h1>{{title}}</h1></div>
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
  props:[
    'title'
  ],
  methods: {
    showModalHandler() {
      this.showModal = !this.showModal;
    },
  },
};
</script>
<style scoped>
.modal-button {
  width: 85px;
  height: 50px;
  background-color: rgb(8, 211, 116);
  font-size: 15px;
  border: solid;
  border-width: 1px;
  border-color: rgb(39, 225, 138);
  color: white;
  display: block;
  margin-right: auto;
  margin-left: auto;
}
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
    background-color: rgb(8, 211, 116);
    border-radius: 20px;
}
</style>
