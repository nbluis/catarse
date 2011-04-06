var ProjectController = Backbone.Controller.extend({

  initialize: function(options){
    this.project = options.project
  },
  
  routes: {
    "": "about",
    "about": "about",
    "updates": "updates",
    "backers": "backers",
    "comments": "comments"
  },

  about: function() {
    this.view = new ProjectAboutView()
  },

  updates: function() {
    alert('Updates!')
  },

  backers: function() {
    this.view = new ProjectBackersView({
      collection: new Backers({project: this.project}),
      link: $('#backers_link'),
      template: $('#project_backers_template')
    })
  },

  comments: function() {
    this.view = new ProjectCommentsView({
      collection: new Comments({project: this.project}),
      link: $('#comments_link'),
      template: $('#project_comments_template')
    })
  }

});
