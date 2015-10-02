BalsamiqSearchAutoComplete = {};

var thisdomain = window.location.href.split("/")[2].split(":")[0];
BalsamiqSearchAutoComplete.firstDomain = (thisdomain === "localhost") ? "balsamiq.com" : thisdomain;

BalsamiqSearchAutoComplete.domains = [	{url:'balsamiq.com', label:'our Website'}, 
										{url:'docs.balsamiq.com', label:'the Docs'},
										{url:'support.balsamiq.com', label:'our Support Portal'},
										{url:'www.uxapprentice.com', label:'UX Apprentice'},
										{url:'mockupstogo.mybalsamiq.com', label:'Mockups To Go'},
										{url:'blogs.balsamiq.com', label:'our Blogs'},
										{url:'forums.balsamiq.com', label:'our Forums'}
									];
	
//The div has to have an input component in it
BalsamiqSearchAutoComplete.initDiv = function(divID)
{
	var input = $("#"+divID+" input");

	$("#"+divID).append("<div id='searching' style='float: right; position: relative; margin-top: -36px; margin-right: 20px; visibility:hidden'>Searching...</div>");
	var searching = $("#"+divID+" #searching");

	$("#"+divID).append("<div id='results' style='position:absolute; background-color: #FFF; border: solid; border-color: #CCC; padding:10px; z-index:9999; visibility:hidden'></div>");
	var results = $("#"+divID+" #results");

	function showSearching(p_showIt)
	{
		searching.css("visibility", p_showIt ? "visible" : "hidden");
	}

	function closeOnEsc(e)
	{
		if (e.keyCode === 27) { // escape key maps to keycode `27`
			showSearching(false);
			showResults(false);
		}
	}

	function showResults(p_showIt)
	{
		results.css("visibility", p_showIt ? "visible" : "hidden");

		if (p_showIt)
		{
			$(document).keyup(closeOnEsc);
		}
		else
		{
			$(document).unbind("keyup", closeOnEsc);
		}
	}

	var pendingSendTimer;
	
	input.on('input', function()
	{
		showSearching(false);
		showResults(false);

		if (pendingSendTimer != null) {
			//Stop the previous send
			clearInterval(pendingSendTimer);
		}
		//Start a new delayed send
		pendingSendTimer = setInterval(	function(){ 
												clearInterval(pendingSendTimer);
												doSuggest(input.val());
										}, 250);
	});
	
	function doSuggest(p_string)
	{
		if (p_string === null || p_string === "" || p_string.length < 3) {
			results.css("visibility", "hidden");
			return;
		}

		searching.html("Searching...");
		showSearching(true);
		$.ajax({
			url: 'https://api.swiftype.com/api/v1/public/engines/suggest?q='+p_string+'&engine_key=3UDzEcC5dkC9USWUiuxX',
			dataType: 'jsonp',
			success: function (data) {
				var res = data.records.page;

				if (data.record_count === 0) {
					searching.html("No results");
					showResults(false);
					return;
				}

				showResults(true);
				showSearching(false);

				var resultsByDomain = {};
				var i;
		
				for (i=0; i<data.records.page.length; i++)
				{
					var page = res[i];
					var domain = page.url.split("/")[2]; 
					if (resultsByDomain[domain] === null) {
						resultsByDomain[domain] = "";
					}
					var title = page.highlight.title;
					if (title === null) {
						title = page.highlight.sections;
					}
					if (title === null) {
						title = page.title;
					}
					resultsByDomain[domain] += "<li><a href='"+page.url+"'>"+title+"</a></li>\n";
				}

				var list = "";
			
				//Current domain goes first
				if (resultsByDomain[BalsamiqSearchAutoComplete.firstDomain] != null) {
					for (i=0; i<BalsamiqSearchAutoComplete.domains.length; i++) {
						if (BalsamiqSearchAutoComplete.domains[i].url === BalsamiqSearchAutoComplete.firstDomain) {	
							list += "<h4>From "+BalsamiqSearchAutoComplete.domains[i].label +"</h4>\n";
							list += "<ul>\n";
							list += resultsByDomain[BalsamiqSearchAutoComplete.firstDomain];
							list += "</ul>\n";
						}
					}
				}

				//The rest
				for (i=0; i<BalsamiqSearchAutoComplete.domains.length; i++) {
					if (BalsamiqSearchAutoComplete.domains[i].url === BalsamiqSearchAutoComplete.firstDomain)
					{
						continue;
					}
				
					if (resultsByDomain[BalsamiqSearchAutoComplete.domains[i].url] != null) {
						list += "<h4>From "+BalsamiqSearchAutoComplete.domains[i].label+"</h4>\n";
						list += "<ul>\n";
						list += resultsByDomain[BalsamiqSearchAutoComplete.domains[i].url];
						list += "</ul>\n";
					}
				}        
				results.html(list);
			},
			error: function(data) {		
				searching.html("Error searching");
				showResults(false);
			}
		});
	}
};
