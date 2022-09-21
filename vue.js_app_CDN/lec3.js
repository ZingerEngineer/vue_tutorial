const app = Vue.createApp({
  data() {
    return {
      showZabr: true,
      zobrs: [
        {title: "Zabario",author: "Bob",isFav: true,img:"./assets/heavy.png",isfav:true},
        { title: "Zabralon", author: "Buck",isFav: false,img:"./assets/engineer.png",isfav:false},
        { title: "Zobero", author: "Gus",isFav: true,img:"./assets/spy.png",isfav:true}
      ],
    //   X: 0,
    //   Y: 0,
    };
  },
  methods: {
    ShowHide() {
      this.showZabr = !this.showZabr;
    },
    // changeTitle() {
    //   if (this.title === "Zabron") {
    //     this.title = "Zabyonel";
    //   } else {
    //     this.title = "Zabron";
    //   }
    // },
    // handleEvent(e, data) {
    //   if (data) {
    //     console.log(data);
    //   }
    //   console.log(e);
    // },
    // handleMouseMovement(e) {
    //   this.X = e.offsetX;
    //   this.Y = e.offsetY;
    // },
    toggleFav(zobr){
      zobr.isfav = !zobr.isfav;
    }
  },
computed: {
  filteredZobrs() {
    return this.zobrs.filter((zobr) => zobr.isfav)
  }

}
});
app.mount("#app");
/*
  4 MAIN MOUSE HANDLERS --> < @mouseover @mouseleave @dblclick @mousemove >

<div class="box" @mouseover="handleEvent($event,5)">mouse over (enter)</div>
<div class="box" @mouseleave="handleEvent">mouse leave</div>
<div class="box" @dblclick="handleEvent">double click</div>
<div class="box" @mousemove="handleMouseMovement">Position - {{X}} {{Y}}</div>

Here we have 3 divs with the same handleEvent function but the first one
is doing something else wich is taking 2 arguments, in most cases while
working with handlers, the first arguement by default is going to be the 
event arguement which contains most useful info about the event that 
triggered the handler.

We can name it anything we want like "e" or "event" etc...

If we want to pass another arguement that is not event in the dom elements
we need to write it like this "$event", then the other arguements 
we want to pass.
  
So we have 3 divs doing the same function but the first one is taking another
arguemnt that is called 'data' to do something more than the other handlers.

The fourth one is assigning the offset values of the pointer inside the div
which is done by using the event arguement and it's properties "offsetX",
"offsetY".

-----------------------------------------------------------------------------
OUTPUTTING LISTS & CYCLING THROUGH DATA

v-for directive it's used to cycle through data like a list of object.

v-for = "  "name_of_element (can be any name)" in "name_of_list / name_of_object"  "

-----------------------------------------------------------------------------
ATTRIBUTE BINDING

v-bind directive or ":" for short hand, it's used to make attributes of html tags dynamic
and can be cycled through when using v-for.

-----------------------------------------------------------------------------
DYNAMIC CLASSES

with data binding :class= "{key : value}"
if that value is falsy it's not gonna create the class for the tag.
if it's true value then it's going to be created.
it all depends on the value that the controls the falsy / truey value.
  */
