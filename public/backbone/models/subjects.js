app.Models.Subject = Backbone.Model.extend({
  defaults: {
    content: 'null'
  }
});

app.Collections.SubjectList = Backbone.Collection.extend({
  url: 'http://localhost:3000/subjects',
  model: app.Models.Subject
});
