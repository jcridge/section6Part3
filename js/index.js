$(document).on("pagecreate","#page1",function(){
  $('#submit').on("click", function(){
    submitText();
  });            
});   

function submitText() {
	var text = $('#textinput').val();
	alert(text);
}