var NoteModelView = Backbone.Model.extend({
  tagName: 'div',
  className: 'hook-note',
  template: _.template("<%= content %>"),

  initialize: function(passedModel){
    return this.model = passedModel.model
  },

  render: function(){
    this.$el.html(this.template(this.model.attributes))
  }
})


app.Views.NoteListView = Backbone.View.extend({
  el: '#list',

  initialize: function(){
    // set this.collection to subject/id/notes collection
    this.listenTo(this.collection, 'sync', this.render)
  },

  render: function(){
    var models_array = this.collection.models;
    for(var i=0; i < models_array.length; i++){
      var noteModelView = new NoteModelView({ model: models_array[i] });
      this.$el.append(noteModelView.render().el);
    }
  }
})
