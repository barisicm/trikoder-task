var $ = require('jquery');
var View = require('jquery-simple-view');



module.exports = View.extend({

    initialize: function(options) {
        require('simple-lightbox');
        $.simpleLightbox.open({
            content: $('.loginModal').clone(),
            elementClass: 'slbContentEl'
        });

    }

});
