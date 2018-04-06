var $ = require('jquery');
var View = require('jquery-simple-view');

require('simple-lightbox');

module.exports = View.extend({

    initialize: function(options) {

        var sourceSplit = options.split("/");
        var stringToChange = sourceSplit[sourceSplit.length-1].replace(/Small/,"Large");
        sourceSplit[sourceSplit.length-1] = stringToChange;
        
        $.simpleLightbox.open({
            content: "<div><img src="+sourceSplit.join('/')+"></div>",
            elementClass: 'slbContentEl'
        });

    }

});
