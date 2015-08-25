var SubjectItemView = Backbone.View.extend({
  tagName: 'div',
  className: "hook-subject-name debug",
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
app.Views.SubjectListView = Backbone.View.extend({
  el: '#list',
  initialize: function(){
    this.listenTo(this.collection, 'sync', this.render)
  },
  events: {
    'click a': 'showNotes'
  },
  showNotes: function(event){
    event.preventDefault();
    // need a better selector
    var url = $('a').attr('href')

    Backbone.ajax({
      url: url,
      data: "",
      success: function(response){
        // UNFINISHED
        var list = $('#list')
        // list.html("")
        // only returning first <a> url

        app.notes = new app.Collections.NoteList({url: url})
        app.noteListView = new app.Views.NoteListView({ collection: app.notes })
        return app.notes.fetch();
        // console.log(app.noteListView)
      }
    })
  },
  render: function(){
    var models_array = this.collection.models;
    for(var i=0; i < models_array.length; i++ ){
      var subjectItemView = new SubjectItemView({ model: models_array[i] });
      this.$el.append(subjectItemView.render().el);
    }
  }
})
