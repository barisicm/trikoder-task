var $ = require('jquery');
var View = require('jquery-simple-view');

module.exports = View.extend({

    initialize: function(options) {
        require('simple-lightbox');

        var urlSplit = options.split("/");
        var imageName = urlSplit[urlSplit.length-1].replace(/Small/,"Large");
        urlSplit[urlSplit.length-1] = imageName;

        var img = new Image();
        img.onload = function(){}
        img.src = urlSplit.join('/');
        
        $.simpleLightbox.open({
            content: img,
            elementClass: 'slbContentEl'
        });

    }

});
