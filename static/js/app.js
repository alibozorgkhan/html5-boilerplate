requirejs.config({
    paths: {
        jquery: '../../bower_components/jquery/dist/jquery',
        underscore: '../../bower_components/underscore/underscore',
        backbone: '../../bower_components/backbone/backbone',
        'backbone.marionette': '../../bower_components/backbone.marionette/lib/backbone.marionette',
        foundation: '../../bower_components/foundation/js/foundation'
    }
});


define(['jquery', 'underscore', 'backbone', 'backbone.marionette'],
        function ($, _, Backbone, Marionette) {
      console.log('JS loaded');
});