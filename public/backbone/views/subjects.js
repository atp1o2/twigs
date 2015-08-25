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
  el: '#sub-list',

  initialize: function(){
    this.listenTo(this.collection, 'sync', this.render)
  },

  events: {
    'click a': 'showNotes'
  },

  showNotes: function(event){
    event.preventDefault();
    Backbone.ajax({
      url: $('a').attr('href'),
      data: "",
      success: function(response){
        console.log("Hello from events")
        var subList = $('#sub-list')
        subList.html("")
        subList.append("<div>hi!!</div>")
      }
    })
  },

  render: function(){
    var models_array = this.collection.models;
    for(var i=0; i < models_array.length; i++ ){
      var item = new SubjectItemView({ model: models_array[i] });
      this.$el.append(item.render().el);
    }
  }
})
