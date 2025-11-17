let CONTAINS_TEXT_INPUT_PARAMETER     = false;
let CONTAINS_RETURNED_CLICKED_VALUES  = false;
let CONTAINS_RETURNED_OPTION_VALUES   = false;
let CONTAINS_RANGE_SELECTOR           = false;

document.addEventListener('DOMContentLoaded', function() {

  $("#tp_inputs").hide();

  $("#text_input").fadeOut();
  $("#text_input").val("");
  
  $("#options_select").fadeOut();
  $('#options_select').html('');

  $("#range-selector").fadeOut();
  $("#range-selector-value").fadeOut();

  $("#range-selector").val(1);
  $("#range-selector-value").text('1');

}, false);

function CloseDialog() {
  
  $("#tp_inputs").fadeOut();

  CONTAINS_TEXT_INPUT_PARAMETER    = false;
  CONTAINS_RETURNED_CLICKED_VALUES = false;
  CONTAINS_RETURNED_OPTION_VALUES  = false;

  $("#text_input").fadeOut();
  $("#text_input").val("");
  
  $("#options_select").fadeOut();
  $('#options_select').html('');

  $("#range-selector").fadeOut();
  $("#range-selector-value").fadeOut();
  
  $("#range-selector-value").text('1');
  $("#range-selector").val(1);
  
	$.post('http://tp_inputs/closeNUI', JSON.stringify({}));
}

function playAudio(sound) {
	var audio = new Audio('./audio/' + sound);
	audio.volume = Config.DefaultClickSoundVolume;
	audio.play();
}
