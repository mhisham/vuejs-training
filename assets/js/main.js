 new Vue({
  'el' : '#app',
  'data': {
    message: '<h1>Hello Vue!</h1>',
    name: 'Heba Elsafty',
    list : ["Apple", "Orange", "Mango"],
    newItem: "",
    counter: 0,
  },
  'methods': {
    deleteItem: function(item) {
      var index = this.list.indexOf(item);
       this.list.splice(index,1);
    },
    addNew: function(){
      this.list.push(this.newItem);
      this.newItem = "";
    }
  }
});
