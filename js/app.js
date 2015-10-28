$(function() {

    //Set up instafeed
    var feed = new Instafeed({
        get: 'user',
	userId: 26949386,
        accessToken: '26949386.467ede5.b0e72008750e429e8976458cd8d1d549',
        target: 'instafeed',
       	sortBy: 'most-liked',
	links: true,
        resolution: 'standard_resolution',
        template: '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="photo-box"><div class="image-wrap"><a href="{{link}}"><img src="{{image}}"></a><div class="likes">{{likes}} Likes</div></div><div class="description">{{caption}}<div class="date">{{model.date}}</div></div></div></div>'
    });
    feed.run();

});
