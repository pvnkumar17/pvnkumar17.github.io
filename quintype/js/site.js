$(document).ready(function() {
	$.ajax({
	  url: 'https://rio.quintype.io/api/v1/stories',
	  type: "get",
	  data:{
	  	 format:"json"
	  	},
	  success: function(response) {
			// console.log(response);
			var data = response.stories;
			// console.log(data);
			if (data) {
				loadDom(data);
				// $("#lead-story-section").text(data[0].sections.name);
			}
		},
		error: function(error) { console.log(error.statusCode()); }
	});
	var imgConfig = {
	          cdn: "http://quintype-01.imgix.net/"
	      };
	// var leadHtml = '<h4 class="section">';
	function loadDom(data){
		//Lead story contents
		$("#lead-story-section").html(data[0].sections[0].name);
		// .wrap('<a href="/'+data[0].sections[0].slug+'/"></a>');
		console.log(data);
		$("#lead-story-headline").text(data[0].headline).wrapInner('<a href="/'+data[0].slug+'/"></a>');
		$("#lead-story .img-box").html('<img src="'+imgConfig.cdn+data[0]["hero-image-s3-key"] + '" alt =""/>');
		$(".lead-story-author .right span.author-name").html(data[0]["author-name"]);
		$(".lead-story-author .right span.time").html(getPDate(data[0]["last-published-at"]));

		//Module2 contents
		$("#module2-left-section").html(data[1].sections[0].name);
		// .wrap('<a href="/'+data[1].sections[0].slug+'/"></a>');
		console.log(new Date(data[1]["last-published-at"]));
		$("#module2-left-headline").text(data[1].headline).wrapInner('<a href="/'+data[1].slug+'/"></a>');
		$(".module2-left .img-box").html('<img src="'+imgConfig.cdn+data[1]["hero-image-s3-key"] + '" alt =""/>');
		$(".module2-left span.author").html(data[1]["author-name"]);
		var module2Html = "<ul>";
		for (var i = 2; i < 5; i++) {
			module2Html += '<li><h4 class="section">'+data[i].sections[0].name+'</h4><h2><a href="/'+data[i].slug+'/">'+data[i].headline +'</a></h2><span class="author">'+data[i]["author-name"]+'</span></li>';
		}
		module2Html += "</ul>";
		$(".module2-middle").html(module2Html);

		//Must Read contents

		var mustReadHtml = "";
		for (var i = 5; i < 8; i++) {
			mustReadHtml += '<li><p>'+data[i].headline+'</p><a href="/'+data[i].slug+'/">Read Story</a></li>';
		}
		$(".must-read ul").html(mustReadHtml);
		$(".must-read ul").cycle({
				fx: 'scrollHorz',
				timeout: 10000,
				slides: '> li',
				speed: 2000
			});

		//Politics contents
			//left
		var module3LeftHtml = '<img src="'+imgConfig.cdn+data[8]["hero-image-s3-key"]+'" alt=""/>';
			module3LeftHtml += '<div><h2>' + data[8].headline + '</h2><span class="author">'+data[8]["author-name"]+'</span></div>';
		$(".module3-left").html(module3LeftHtml);
			//Middle
		$(".module3-middle-top").html('<img src="'+imgConfig.cdn+data[9]["hero-image-s3-key"]+'" alt=""/><div><h2>'+ data[9].headline + '</h2><span class="author">'+data[9]["author-name"]+'</span></div>');
		$(".module3-middle-bottom").html('<div><h2>'+ data[10].headline + '</h2><span class="author">'+data[10]["author-name"]+'</span></div>');
			//Right
		var moduleRightHtml = "<ul>";
		for (var i = 11; i < 15; i++) {
			moduleRightHtml += '<li><h2><a href="/'+data[i].slug+'/">'+data[i].headline +'</a></h2><span class="author">'+data[i]["author-name"]+'</span></li>';
		}
		moduleRightHtml += "</ul>";
		$(".module3-right").html(moduleRightHtml);
		//Module4 contents
			//left
		var module4LeftHtml = "";
		for (var i = 15; i < 18; i++) {
			module4LeftHtml += '<div class="module4-left-content clearfix box"><div class="img-box"><img src="'+imgConfig.cdn+data[i]["hero-image-s3-key"] + '" alt =""/></div><div class="content-box"><h2><a href="/'+data[i].slug+'/">'+data[i].headline +'</a></h2><span class="author">'+data[i]["author-name"]+'</span></div></div>';
		}

		$(".module4-left").html(module4LeftHtml);
			//Right
		$(".module4-right").html('<img src="'+imgConfig.cdn+data[15]["hero-image-s3-key"]+'" alt=""/><div><h2>'+ data[15].headline + '</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio ipsa nesciunt temporibus dignissimos ducimus obcaecati.</p><span class="author">'+data[15]["author-name"]+'</span></div>');

		//Recent stories

		var recentHtml = "";
		for (var i = 17; i < 20; i++) {
			recentHtml += '<div class="recent-post clearfix"><div class="img-box"><img src="'+imgConfig.cdn+data[i]["hero-image-s3-key"] + '" alt =""/></div><div class="right-content"><h4 class="section">'+data[i].sections[0].name+'</h4><h2><a href="/'+data[i].slug+'/">'+data[i].headline +'</a></h2><span class="author">'+data[i]["author-name"]+'</span><span class="time">'+getPDate(data[0]["last-published-at"])+'</span></div></div>';
		}
		recentHtml += "</ul>";
		$(".content-recent-stories").html(recentHtml);
	}
	function getPDate(time){
		var d = new Date(time);
		var mon = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		var m = mon[d.getMonth()], d1 = d.getDate(), y = d.getFullYear();
		return "Posted "+ d1 +"/"+ m +"/" + y;
	}
	var win = $(window);

	// Each time the user scrolls
	win.scroll(function() {
		// End of the document reached?
		if ($(document).height() - win.height() == win.scrollTop()) {
			// $('#loading').show();
				console.log("called");
			$.ajax({
				url: 'https://rio.quintype.io/api/v1/stories?limit=20&offset=20',
				type: "get",
				data:{
					 format:"json"
					},
				success: function(response) {
					var data = response.stories;
					var moreRecentHtml = "";
					for (var i = 0; i < data.length; i++) {
						moreRecentHtml += '<div class="recent-post clearfix"><div class="img-box"><img src="'+imgConfig.cdn+data[i]["hero-image-s3-key"] + '" alt =""/></div><div class="right-content"><h4 class="section">'+data[i].sections[0].name+'</h4><h2><a href="/'+data[i].slug+'/">'+data[i].headline +'</a></h2><span class="author">'+data[i]["author-name"]+'</span><span class="time">'+getPDate(data[0]["last-published-at"])+'</span></div></div>';
					}
					$('.content-recent-stories').append(moreRecentHtml);

				}
			});
		}
	});
});