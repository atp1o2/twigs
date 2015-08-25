app.Models.Note = Backbone.Model.extend({
  defaults: {
    content: 'null'
  }
});

app.Collections.NoteList = Backbone.Collection.extend({
  initialize: function(url){
    this.url = url
  },
  model: app.Models.Note
})
