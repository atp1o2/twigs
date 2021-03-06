// app needs to be in each field bc the listTo method
// is listening to all of the 'app's changes to sync
// Backbone.js app
window.app = {
  Models: {},
  Collections: {},
  Views: {}
}


$(document).ready(function() {
  app.subjects = new app.Collections.SubjectList;
  app.subjectListView = new app.Views.SubjectCollectionView({ collection: app.subjects })
  return app.subjects.fetch();

});


