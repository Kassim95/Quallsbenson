$(document).ready(function () {
	//nav bar
	$('nav').mouseenter(function(){
		$(".social").attr('src','images/social.png');
		$(".home").attr('src','images/home.png');
		$('.logo').attr('src','images/logo-in.png');
		$('.icon-title').stop().show();
		$('.jo').stop().animate({
			marginBottom: "3vh"
		});
		$('.links').stop().animate({
			marginBottom: "0vh"
		});
		$('.bottom-nav').stop().animate({
			marginTop: "3.5vh"
		});
		$(this).stop().animate({
    	width:'10vw'
		});
		$('.icon-title').stop().show();
		$(this).stop().animate({
    	width:'10vw'
		});
		$('.nav-modal').fadeIn(1000);
	});

	$("nav").mouseleave(function(){
		$(".social").attr('src','images/ico8.png');
		$(".home").attr('src','images/ico9.png');
		$('.logo').attr('src','images/logo.png')
		$('.icon-title').stop().hide();
		$('.jo').stop().animate({
			marginBottom: "10vh"
		});
		$('.links').stop().animate({
			marginBottom: "3vh"
		});
		$('.bottom-nav').stop().animate({
			marginTop: "7vh"
		});
		$(this).stop().animate({
    	width:'5vw'
		});
		$('.nav-modal').hide();
	});

	//icons
	$('.links').mouseenter(function(){
		$(this).find(".icon").stop().animate({
			marginBottom: "-2.5vh"
		});
	});

	$(".links").mouseleave(function(){
		$(this).find(".icon").stop().animate({
			marginBottom: "-4.5vh"
		});
	});
	//journal page
	$('.journal').on('click', function(){
		$('.nav-modal').hide();
		$('.landing').hide();
		$('.social-feed-container').css({"display": "inline-block", "height": "100vh"});
		$('.social-feed-container').masonry();
	});
	//journal page
	$('.home, .logo').on('click', function(){
		location.reload();
	});
	// social-feed
	$('.social-feed-container').socialfeed({
	  // FACEBOOK
	  facebook: {
	      accounts: ['@journalsquaredjc'],
	      limit: 60,
	      access_token: '276761649336363|c4146b3378fc2941b3ca7c3553475b1a'
	  },
	  	  // INSTAGRAM
    instagram: {
        accounts: ['@journalsquared'],
        limit: 4,
        client_id: 'a473993a81b343cbbb4a7e1127fc030f',
        access_token: '5744467607.a473993.4c696a3e3ac04b21a3b7af5cf3b7b230'
    },
	  // GENERAL SETTINGS
	  length: 200,
	  show_media: true,
	  // Moderation function - if returns false, template will have class hidden
	  moderation: function(content) {
	      return (content.text) ? content.text.indexOf('fuck') == -1 : true;
	  },
	  //update_period: 5000,
	  // When all the posts are collected and displayed - this function is evoked
	  callback: function() {
      console.log('all posts are collected');
      $('.social-feed-container').masonry({
		  	// options...
			  itemSelector: '.social-feed-element',
			});
	  }
	});
});