var $ = require('jquery');
var View = require('jquery-simple-view');
var MainNav = require('js/components/mainNav');
var MainSearch = require('js/components/mainSearch');

module.exports = View.extend({

    delegatedEvents: false,

    initialize: function() {

        this.setupBaseComponents();

    },

    events: {
        'click .mainHeader .signIn': function(e) {

            e.preventDefault();
            this.showLoginModal();

        },
        'click .imageThumbnail': function(e) {
            console.log(e.target.currentSrc);
            e.preventDefault();
            this.showGalleryModal(e.target.currentSrc);
        }
    },

    setupBaseComponents: function() {

        this.mainNav = this.addView(new MainNav({$el: $('.mainNav')}));
        this.mainSearch =  this.addView(new MainSearch({$el: $('.mainSearch')}));

        return this;
    },

    showLoginModal: function(e) {

        require.ensure([], function() {

            var LoginModal = require('js/components/loginModal');
            new LoginModal();

        });

    },

    showGalleryModal: function(e) {

        
        require.ensure([], function(){

            var GalleryModal = require('js/components/galleryModal');
            new GalleryModal(e);

        });

    }

});
