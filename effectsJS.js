$(document).ready(function () {
   /*Dropdown Menu*/
   $(document).on("click", ".dropdown", function () {
      $(this).attr("tabindex", 1).focus();
      $(this).toggleClass("active");
      $(this).find(".dropdown-menu").slideToggle(200);
   });
   $(document).on("focusout", ".dropdown", function () {
      $(this).removeClass("active");
      $(this).find(".dropdown-menu").slideUp(200);
   });
   $(document).on("click", ".dropdown .dropdown-menu li", function () {
      $(this).parents(".dropdown").find("span").text($(this).text());
      $(this).parents(".dropdown").find("input").val($(this).attr("id"));
   });
   /*End Dropdown Menu*/
   /*Inputs & Textareas*/
   $(document).on("keyup", ".form-input", function () {
      if ($(this).val() === "") {
         $(this).siblings("label").addClass("form-label-move");
         return;
      }
      $(this).siblings("label").removeClass("form-label-move");
   });
   $(document).on("keypress", "textarea", function (event) {
      //Prevent line breaks
      if (event.keyCode == 13) {
         event.preventDefault();
      }
   });
   /*End Inputs & Textareas*/
});
