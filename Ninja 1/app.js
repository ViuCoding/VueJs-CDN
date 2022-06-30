const app = Vue.createApp({
  // data or functions
  data() {
    return {
      url: "https://www.nba.com",
      showBooks: true,
      books: [
        {
          title: "The Final Empire",
          author: "Brandon Sanderson",
          img: "img/1.png",
        },
        {
          title: "The Lord of the Rings",
          author: "R.R. Tolkien",
          img: "img/2.png",
        },
        {
          title: "I 7 nani",
          author: "Roccu Alici",
          img: "img/3.png",
        },
      ],
      age: 41,
      x: 0,
      y: 0,
    };
  },

  methods: {
    changeTitle() {
      this.title = "Lord of the Rings";
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(ev, data) {
      // ev stands for the Event object which is automatically there if we want to access it
      console.log(ev);
      if (data) {
        // We are checking if the second parameter is actually there since sometimes we don't pass any
        console.log(ev, data);
      }
    },
    handleMouseMove(ev) {
      this.x = ev.offsetX;
      this.y = ev.offsetY;
    },
  },
});

app.mount("#app");
