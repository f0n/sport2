  /* TO DO LIST */
  /*
  $(".tdl-new").bind('keypress', function(e){
    var code = (e.keyCode ? e.keyCode : e.which);
    if(code == 13) {
      var v = $(this).val();
      var s = v.replace(/ +?/g, '');
      if (s == ""){
        return false;
      }else{
        $(".tdl-content ul").append("<li><label><input type='checkbox'><i></i><span>"+ v +"</span><a href='#'>–</a></label></li>");
        $(this).val("");
      }
    }
  });*/

  $("input[type='text']").keypress(function(event){
  	if(event.which === 13){
  		//grabbing new todo text from input
  		var v = $(this).val();
  		$(this).val("");
  		//create a new li and add to ul
  		$(".tdl-content ul").append("<li><label><input type='checkbox'><i></i><span>"+ v +"</span><a href='#'>–</a></label></li>");
  	}
  });

/*  $("input[type='text']").keypress(function(event){
  	if(event.which === 13){
  		//grabbing new todo text from input
  		var todoText = $(this).val();
  		$(this).val("");
  		//create a new li and add to ul
  		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
  	}
  });*/


  $(".tdl-content a").bind("click", function(){
    var _li = $(this).parent().parent("li");
        _li.addClass("remove").stop().delay(100).slideUp("fast", function(){
          _li.remove();
        });
    return false;
  });

  // for dynamically created a tags
  $(".tdl-content").on('click', "a", function(){
    var _li = $(this).parent().parent("li");
        _li.addClass("remove").stop().delay(100).slideUp("fast", function(){
          _li.remove();
        });
    return false;
  });

/*
  // Check Off Specific Todos By Clicking
  $("ul").on("click", "li", function(){
  	$(this).toggleClass("completed");
  });

  //Click on X to delete Todo
  $("ul").on("click", "span", function(event){
  	$(this).parent().fadeOut(500,function(){
  		$(this).remove();
  	});
  	event.stopPropagation();
  });
*/

/*
  $(".fa-plus").click(function(){
  	$("input[type='text']").fadeToggle();
  });*/
