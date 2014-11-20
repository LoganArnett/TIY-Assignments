(function(){
'use strict';

  var app = angular.module('myFirstApp', [ ]);

  app.controller('CommentController', function(){
    var list = this;
    this.comments = [ ];
    this.newComment = function(comment){
      this.createdOn = Date.now();
      this.comments.push(this.comment);
      
    };
  });
//curl the url for the issue and observe how the comments were pulled from the gist
})();
