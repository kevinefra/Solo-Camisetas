$(document).ready(function () {
  //AGREGANDO CLASE ACTIVE AL PRIMER ENLACE
  $('.category__list .category__item[category="all"]').addClass(
    "bt-item-active"
  );

  $(".category__item").click(function () {
    let catProduct = $(this).attr("category");

    //AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
    $(".category__item").removeClass("bt-item-active");
    $(this).addClass("bt-item-active");

    //OCULTANDO PRODUCTOS=====================
    $(".product-item").css("transform", "scale(0)");

    function hideProduct() {
      $(".product-item").hide();
    }
    setTimeout(hideProduct, 400);

    //MOSTRANDO PRODUCTOS SELECCIONADOS=====================
    function showProduct() {
      $('.product-item[category="' + catProduct + '"]').show();
      $('.product-item[category="' + catProduct + '"]').css(
        "transform",
        "scale(1)"
      );
    }
    setTimeout(showProduct, 400);
  });

  //MOSTRANDO TODOS LOS PRODUCTOS================
  $('.category__item[category="all"]').click(function () {
    function showAll() {
      $(".product-item").show();
      $(".product-item").css("transform", "scale(1)");
    }
    setTimeout(showAll, 400);
  });
});
