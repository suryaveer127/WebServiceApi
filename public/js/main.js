 document.getElementById('viewUsersBtn').onclick = function() {
    window.location.href = '/users/list';
  };

$("#user").submit(function(event) {
  event.preventDefault();
    let isValid = true;
    let errorMsg = "";

    const fname = $("input[name='firstName']").val().trim();
    const lname = $("input[name='lastName']").val().trim();
    const mobile = $("input[name='mobile']").val().trim();
    const email = $("input[name='email']").val().trim();
    const city = $("input[name='city']").val().trim();
    const state = $("input[name='state']").val().trim();
    const country = $("input[name='country']").val().trim();
    const loginId = $("input[name='loginId']").val().trim();
    const password = $("input[name='password']").val().trim();

     if ( !/^[A-Za-z]+$/.test(fname)) {
      errorMsg = "First Name must contain only letters.";
      isValid = false;
    }else if (lname === "" || !/^[A-Za-z]+$/.test(lname)) {
      errorMsg = "Last Name must contain only letters.";
      isValid = false;
    }else if (!/^\d{10}$/.test(mobile)) {
      errorMsg = "Mobile must be exactly 10 digits.";
      isValid = false;
    }else if (!/^[\w._%+-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(email)) {
      errorMsg = "Enter a valid email address.";
      isValid = false;
    }else if (!/^[A-Za-z\s]+$/.test(city)) {
      errorMsg = "City must contain only letters.";
      isValid = false;
    }else if (!/^[A-Za-z\s]+$/.test(state)) {
      errorMsg = "State must contain only letters.";
      isValid = false;
    }else if (!/^[A-Za-z\s]+$/.test(country)) {
      errorMsg = "Country must contain only letters.";
      isValid = false;
    }else if (! /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9]{8}$/.test(loginId)) {
      errorMsg = "Login ID must be 8 characters alphanumeric.";
      isValid = false;
    }else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6}$/.test(password)) {
      errorMsg = "Password must be 6 chars with 1 uppercase, 1 lowercase & 1 special char.";
      isValid = false;
    }
    if (!isValid) {
      $("#errorMsg").text(errorMsg);
      return; 
    } else {
      $("#errorMsg").text(""); 
    }
    
    $.ajax({
    url: "/users",
    type: "POST",
    data: $(this).serialize(),
    success: function() {
      window.location.href = "/users/list"; 
     
    },
   
  });
});
