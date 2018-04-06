var $ = require('jquery');
var View = require('jquery-simple-view');



module.exports = View.extend({

    initialize: function(options) {
        require('simple-lightbox');
        var sourceSplit = options.split("/");
        var stringToChange = sourceSplit[sourceSplit.length-1].replace(/Small/,"Large");
        sourceSplit[sourceSplit.length-1] = stringToChange;

        var img = new Image();
        img.onload = function() {
          
        }
        img.src = sourceSplit.join('/');
        
        $.simpleLightbox.open({
            //sourceSplit.join('/')
            content: img,
            elementClass: 'slbContentEl'
        });

    }

});
