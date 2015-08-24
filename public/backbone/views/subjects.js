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

  render: function(){
    var models_array = this.collection.models;
    for(var i=0; i < models_array.length; i++ ){
      var item = new SubjectItemView({ model: models_array[i] });
      this.$el.append(item.render().el);
    }
  }
})
