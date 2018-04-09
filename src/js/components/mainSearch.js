var View = require('jquery-simple-view');



module.exports = View.extend({

    initialize: function() {
        require('fastsearch');
        this.$('.query').fastsearch({
            onItemSelect: 'fillInput'
        });

    }

});
