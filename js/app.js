const toggler = document.querySelector(".toggler");
toggler.addEventListener("click", () => {
  toggler.classList.toggle("change");
});

$(".faq .dropdown-menu li").on("click", function () {
  $(this).addClass("active").siblings().removeClass("active");
  $(".tab-content > div").hide();
  $(".faq .dropdown .btn").text($(this).text());
  $($(this).data("content")).fadeIn();
});
