
var hasTextInputParameter = false;

var hasReturningClickedValues = false;

function closeInputsDialog() {
  toggleInputsDialog(false);

  hasTextInputParameter = false;
  hasReturningClickedValues = false;

  document.getElementById("text_input").style.visibility = "hidden";
  document.getElementById("text_input").value = "";
  
	$.post('http://tp_inputs/closeNUI', JSON.stringify({}));
}

function toggleInputsDialog(bool) {

	if (bool) {
		$("#tp_inputs").show();
	} else {
		$("#tp_inputs").hide();
	}
}


function playAudio(sound) {
	var audio = new Audio('./audio/' + sound);
	audio.volume = Config.DefaultClickSoundVolume;
	audio.play();
}

$(function() {

  toggleInputsDialog(false);

	window.addEventListener('message', function(event) {
		
    var item = event.data;

    if (item.action === 'toggle') {
			toggleInputsDialog(item.toggle);

      document.getElementById("text_input").style.visibility = "hidden";
      document.getElementById("text_input").value = "";
      
    } else if (event.data.action == "open") {
      var data = event.data.inputData;
      var hasTextInput = event.data.hasTextInput;
      var hasReturnedValues = event.data.returnClickedValue;

			document.getElementById("title").innerHTML = data.title;
      document.getElementById("description").innerHTML = data.desc;
       
      hasTextInputParameter = hasTextInput;

      hasReturningClickedValues = hasReturnedValues;

      if (hasTextInput) {

        document.getElementById("text_input").style.visibility = "visible";
      }

      document.getElementById("firstbutton").innerHTML = data.buttonparam1;
      document.getElementById("secondbutton").innerHTML = data.buttonparam2;

    } else if (event.data.action == "close") {
      closeInputsDialog();
    }

  });

  /*-----------------------------------------------------------
  General Action
  -----------------------------------------------------------*/

  $("#tp_inputs").on("click", "#firstbutton", function(event) {
    playAudio("button_click.wav");

    var returnedText = "ACCEPT"

    if (!hasReturningClickedValues){

      if (hasTextInputParameter) {
        var input = document.getElementById("text_input").value;
        returnedText = input
      }

    }else{
      returnedText = document.getElementById("firstbutton").innerHTML;
    }

    $.post("http://tp_inputs/sendbuttonclickedinput", JSON.stringify({
      input: returnedText,
    }));

  });
  
  $("#tp_inputs").on("click", "#secondbutton", function(event) {
    playAudio("button_click.wav");

    var returnedText = "DECLINE"

    if (hasReturningClickedValues){
      returnedText = document.getElementById("secondbutton").innerHTML;
    }

    $.post("http://tp_inputs/sendbuttonclickedinput", JSON.stringify({
      input: returnedText,
    }));

  });
  

});
