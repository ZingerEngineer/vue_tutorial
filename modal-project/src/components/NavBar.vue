<template>
  <div class="nav-bar">
    <div id="buttons">
      <button ref="dropDown" @click="dropDownMenu">☰</button>
      <button>Home</button>
      <button>Sign up</button>
      <button>Log in</button>
    </div>
    <img
      class="logo-svg"
      src="../assets/Romeo.svg"
      alt="Romeo-Website-logo.svg"
    />
  </div>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    dropDownMenu() {
      this.$refs.dropDown.setAttribute("class", "clicked");
      this.$refs.dropDown.innerText = "^";
    },
  },
};
</script>

<style>
.nav-bar {
  height: 60px;
  width: 100%;
  display: flex;
  background-color: #ccc;
  justify-content: space-between;
  align-items: center;
}

button {
  font-size: 15px;
  color: black;
  background-color: #ccc;
  border: solid;
  border-width: 1px;
  border-color: rgb(161, 161, 161);
  width: 70px;
  height: 60px;
  cursor: pointer;
}

button:hover {
  background-color: rgb(146, 146, 146);
}

.logo-svg {
  width: 50px;
  height: 50px;
  margin-right: 5px;
}
.clicked {
  background-color: rgb(116, 116, 116);
  border-width: 2px;
  border-color: rgb(114, 114, 114);
}
</style>
