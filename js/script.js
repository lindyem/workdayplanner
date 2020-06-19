var currentHour = 9;

function renderTimeBoxes() {
  if (currentHour === 9) {
    $("#hour-9").addClass("present");
  } else if (currentHour < 9) {
    $("#hour-9").addClass("future");
  } else {
    $("#hour-9").addClass("past");
  }

  if (currentHour === 10) {
    $("#hour-10").addClass("present");
  } else if (currentHour < 10) {
    $("#hour-10").addClass("future");
  } else {
    $("#hour-10").addClass("past");
  }

  if (currentHour === 11) {
    $("#hour-11").addClass("present");
  } else if (currentHour < 11) {
    $("#hour-11").addClass("future");
  } else {
    $("#hour-11").addClass("past");
  }

  if (currentHour === 12) {
    $("#hour-12").addClass("present");
  } else if (currentHour < 12) {
    $("#hour-12").addClass("future");
  } else {
    $("#hour-12").addClass("past");
  }

  if (currentHour === 13) {
    $("#hour-13").addClass("present");
  } else if (currentHour < 13) {
    $("#hour-13").addClass("future");
  } else {
    $("#hour-13").addClass("past");
  }

  if (currentHour === 14) {
    $("#hour-14").addClass("present");
  } else if (currentHour < 14) {
    $("#hour-14").addClass("future");
  } else {
    $("#hour-14").addClass("past");
  }

  if (currentHour === 15) {
    $("#hour-15").addClass("present");
  } else if (currentHour < 15) {
    $("#hour-15").addClass("future");
  } else {
    $("#hour-15").addClass("past");
  }

  if (currentHour === 16) {
    $("#hour-16").addClass("present");
  } else if (currentHour < 16) {
    $("#hour-16").addClass("future");
  } else {
    $("#hour-16").addClass("past");
  }

  if (currentHour === 17) {
    $("#hour-17").addClass("present");
  } else if (currentHour < 17) {
    $("#hour-17").addClass("future");
  } else {
    $("#hour-17").addClass("past");
  }

  for (var i = 0; i < localStorage.length; i++) {
    var timeBlockId = "#" + localStorage.key(i);
    $(timeBlockId)
      .children(".description")
      .val(localStorage.getItem(localStorage.key(i)));
  }
}

function saveText(event) {
  var text = $(this).siblings(".description").val();
  var timeBlockId = $(this).parent().attr("id");
  localStorage.setItem(timeBlockId, text);
}

//START OF PROGRAM
$("#currentDay").text(moment().format("dddd MMMM Do YYYY"));
renderTimeBoxes();

$(".saveBtn").on("click", saveText);
