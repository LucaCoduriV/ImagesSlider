var images_count = $(".slider .slider-images").length;
var avant_dernier = images_count -2;

var first_img_clone = $(".slider .slider-images:first").clone();
var second_img_clone = $(".slider .slider-images:eq(1)").clone();
var beforeLast_img_clone = $(".slider .slider-images:eq(" + avant_dernier +")").clone();
var last_img_clone = $(".slider .slider-images:last").clone();
var slider = $(".slider");
var position = 2;

slider.append(first_img_clone);
slider.append(second_img_clone);
slider.prepend(last_img_clone);
slider.prepend(beforeLast_img_clone);

//donner la class "showing"
$(".slider .slider-images:eq(2)").toggleClass("showing");

$("#next").click(function(){
  var temp_position = 0;
  $("img").css("transition", "all 0.5s ease");
  //si c'est la derniere image revenir au début en enlevant l'animation
  if(position >= images_count+1){
    $(".slider .slider-images:eq(" + position.toString() +")").toggleClass("showing");
    position++;
    temp_position = position;
    $(".slider .slider-images:eq(" + position.toString() +")").toggleClass("showing");
    //faire la translation puis attendre la fin de la transition
    $(".slider .slider-images").css({"transform" : "translate(calc((-622px - 100px)*"+position.toString()+"))"}).one("webkitTransitionEnd", function(){
      $(".slider .slider-images").css({"transition" : "none"})
      position = 2;
      $(".slider .slider-images:eq(" + position.toString() +")").toggleClass("showing");
      $(".slider .slider-images").css({"transform" : "translate(calc((-622px - 100px)*"+position.toString()+"))"});
      $(".slider .slider-images:eq(" + temp_position.toString() +")").toggleClass("showing");

    });



  }else{
    //passer à l'image suivante
    $(".slider .slider-images:eq(" + position.toString() +")").toggleClass("showing");
    position++;
    $(".slider .slider-images:eq(" + position.toString() +")").toggleClass("showing");
    $(".slider .slider-images").css({"transform" : "translate(calc((-622px - 100px)*"+position.toString()+"))"});
  }
});

$("#previous").click(function(){
  var temp_position = 0;
  $("img").css("transition", "all 0.5s ease");
  //si c'est la derniere image revenir au début en enlevant l'animation
  if(position <= 2){
    $(".slider .slider-images:eq(" + position.toString() +")").toggleClass("showing");
    position--;
    temp_position = position;
    $(".slider .slider-images:eq(" + position.toString() +")").toggleClass("showing");
    //faire la translation puis attendre la fin de la transition
    $(".slider .slider-images").css({"transform" : "translate(calc((-622px - 100px)*"+position.toString()+"))"}).one("webkitTransitionEnd", function(){
      $(".slider .slider-images").css({"transition" : "none"})
      position = images_count + 1;
      $(".slider .slider-images:eq(" + position.toString() +")").toggleClass("showing");
      $(".slider .slider-images").css({"transform" : "translate(calc((-622px - 100px)*"+position.toString()+"))"});
      $(".slider .slider-images:eq(" + temp_position.toString() +")").toggleClass("showing");
    });
  }else{
    //passer à l'image precedente
    $(".slider .slider-images:eq(" + position.toString() +")").toggleClass("showing");
    position--;
    $(".slider .slider-images:eq(" + position.toString() +")").toggleClass("showing");
    $(".slider .slider-images").css({"transform" : "translate(calc((-622px - 100px)*"+position.toString()+"))"});

  }

  });
