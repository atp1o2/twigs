var SubjectModelView = Backbone.View.extend({
  // tagName: 'div',
  // className: "hook-subject-name debug random-color",
  // template: _.template("<%= title %>"),
  template: _.template( $('#subject-template').html()),
  initialize: function(passedModel){
    return this.model = passedModel.model;
  },
  render: function(){
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
})


// Display each SubjectViewItem
app.Views.SubjectCollectionView = Backbone.View.extend({
  el: '#list',
  initialize: function(){
    this.listenTo(this.collection, 'sync', this.render)
  },
  events: {
    'click a': 'showNotes'
  },
  showNotes: function(event){
    event.preventDefault();
    var url = $('a').attr('href')

    Backbone.ajax({
      url: url,
      success: function(response){
        var list = $('#list')
        list.html("")

        for(var i=1; i<=6; i++){
          list.append("<div class='hook-note random-color'> NOTES GO HERE </div>")
        }
        list.append("<button> Post Note </button>")
        list.append("<form><input type='submit' value='Back to Subjects'></form>")
        // app.notes = new app.Collections.NoteList({url: url})
        // app.noteListView = new app.Views.NoteListView({ collection: app.notes })
        // return app.notes.fetch();
      }
    })
  },

  render: function(){
    var models_array = this.collection.models;
    for(var i=0; i < models_array.length; i++ ){
      var subjectModelView = new SubjectModelView({ model: models_array[i] });
      this.$el.append(subjectModelView.render().el);
    }
  }
})
