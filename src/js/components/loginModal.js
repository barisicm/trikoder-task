var $ = require('jquery');
var View = require('jquery-simple-view');



module.exports = View.extend({

    initialize: function(options) {
        require('simple-lightbox');

        $.get('login-modal.html', null, function(data, status){
            if (status == "success")
            {
                $.simpleLightbox.open({
                    content: data,
                    elementClass: 'slbContentEl'
                });
            }
            else
            {
                console.log('This cool code failed to load the modal.')
            }
        }, "html")
    }

});
