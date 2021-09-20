/*
$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    for(user of users) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  });;
});
*/

$(document).ready(() => {
  //header back btn
  $('#back').click(() => {
    window.history.back();
  })
  //home btns
  $('#multimedia').click(() => {
    window.location.href='/category/multimedia';
  });
  $('#food').click(() => {
    window.location.href='/category/food';
  });
  $('#reading').click(() => {
    window.location.href='/category/reading';
  });
  $('#buying').click(() => {
    window.location.href='/category/buying';
  });
  $('#misc').click(() => {
    window.location.href='/category/misc';
  });
  //profile btn
  $('#profile-edit').click(() => {
    window.location.href='/profile/edit';
  });
  //footer btn
  $('#footer-home').click(() => {
    window.location.href='/home';
  });
  $('#footer-multimedia').click(() => {
    window.location.href='/category/multimedia';
  });
  $('#footer-food').click(() => {
    window.location.href='/category/food';
  });
  $('#footer-reading').click(() => {
    window.location.href='/category/reading';
  });
  $('#footer-buying').click(() => {
    window.location.href='/category/buying';
  });
  $('#footer-profile').click(() => {
    window.location.href='/profile';
  });
});
