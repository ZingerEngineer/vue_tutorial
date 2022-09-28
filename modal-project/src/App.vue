<template>
  <NavBar />
    <button class="modalButton" @click = "toggleModal">Open modal</button>
    <teleport to=".modals" v-if="showModal">
  <Modal :title="title" :text="text" themed="danger" @closeModal="toggleModal">
    <template v-slot:links>
    <h1>Here comes the slot.</h1>
    <a href="#">Link lol</a>
    </template>
  </Modal>
    </teleport>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Modal from "./components/Modal.vue";
export default {
  name: "App",
  data() {
    return {
      title: "Did you wash your ass today ?",
      text: "Go wash it right now !",
      theme: "danger",
      showModal:false
    };
  },
  components: {
    NavBar,
    Modal,
  },
  methods:{
    toggleModal(){
      this.showModal=!this.showModal
    }
  }
};
</script>

<style>
body {
  margin: 0px;
}
.modalButton{
  position: relative;
  height: 50px;
  width: 100px;
  color: black;
  border-radius: 5px;
  border-width: 0px;
  cursor: pointer;
  background-color: #ccc;
  font-family: "Arial rounded MT",arial,sans-serif;
}
.modalButton:hover{
    background-color: rgb(146, 146, 146);
}
h1 {
  margin: auto;
  font-size: 25px;
  width: fit-content;
  font-family: "Arial rounded MT", arial, sans-serif;
}
.links{
  position: relative;
    top: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
