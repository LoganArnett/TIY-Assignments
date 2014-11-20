(function(){
'use strict';

  var app = angular.module('myFirstApp', [ ]);

  app.controller('CommentController', function($http, $interpolate){
    var apiUrl = 'https://api.github.com/repos/TheIronYard--Orlando/FEE--2014--FALL/issues/414/comments',
        apiKeyTpl = $interpolate('?access_token={{key}}');

    var self = this;

    // this.apiKey = '9dbd5217e5eb05668f136a10dee526550e74ba60';

    $http.get(apiUrl)
      .success(function(data){
        self.comments = data;
      });

    this.newComment = function(text, apiKey){
      var self = this;
      var url = apiUrl + apiKeyTpl({key: apiKey})



      $http.post(url, { body : text })
        .success(function(data){
          self.comments.push(data);
        });

      // this.createdOn = Date.now();
      // this.comments.push(this.comment);
      // console.log(self.comments);
    };

  });
})();
