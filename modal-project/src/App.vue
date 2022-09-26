<template>
  <NavBar />
  <Modal :title="title" />
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Modal from "./components/Modal.vue";
export default {
  name: "App",
  data() {
    return { title: "Did you wash your ass today ?" };
  },
  components: {
    NavBar,
    Modal,
  },
};
</script>

<style>
body {
  margin: 0px;
}
</style>
