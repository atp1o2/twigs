var SubjectItemView = Backbone.View.extend({
  tagName: 'div',
  template: _.template("<%= title %>"),

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
  el: '#sub_list',

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
