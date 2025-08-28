 document.getElementById('viewUsersBtn').onclick = function() {
    window.location.href = '/users/list';
  };


$("#user").submit(function(event) {
  event.preventDefault();
  $.ajax({
    url: "/users",
    type: "POST",
    data: $(this).serialize(),
    success: function() {
      window.location.href = "/users/list"; 
     
    },
    error: function(xhr) {
      alert("Error: " + xhr.responseText);
    }
  });
});
