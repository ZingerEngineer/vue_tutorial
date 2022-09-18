const app = Vue.createApp({
  data() {
    return {
        showZabr: true,
      title: "Zabron",
      author: "Bob",
      age: "27"
    };
  },
  methods: {
    ShowHide(){
this.showZabr = !this.showZabr
}
    ,
    changeTitle() {
      if (this.title === "Zabron") {
        this.title = "Zabyonel";
      } else {
        this.title = "Zabron";
      }
    },
  }})
app.mount("#app");
/*this refrences to the component itself
and it's data(variables,constants,etc..)to use it inside of our methods.

vue directives allow us to render our components more dynamicly and invoke
functions on certain conditions like
v-on --> onclick / onload / etc..
v-on:click="method/expression" == @click="method/expression".
v-if for conditional function invocation.
v-else will do the other block of code if the if statement is falsy with out
setting a new v-if directive.
v-show for rendering and hiding an html tags but using css.
display="none" --> added and removed.
*/