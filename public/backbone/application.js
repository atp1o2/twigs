window.app = {
  Models: {},
  Collections: {},
  Views: {}
}


$(document).ready(function() {
  app.subjects = new app.Collections.SubjectList;

  app.subjectListView = new app.Views.SubjectListView({
    collection: app.subjects
  })
  return app.subjects.fetch();
});


// app needs to be in each field bc the listTo method
// is listening to all of the 'app's changes to sync
