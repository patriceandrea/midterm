

$(document).ready(function() {

  $("form").on("submit", function (event) {
    event.preventDefault();
    let data = $(this).val();
    console.log('Data', data)

  });


});

$.ajax({
  url : "admin/waitTime" ,
  type: "POST",
  data : data,
  success : function () {

}
});




  // let data = $(this).find(":selected").val();
  // console.log("Wait time selection", data);

