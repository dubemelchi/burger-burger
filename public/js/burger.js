
$(function() {
    $(".change-devour").on("click", function(event) {
      var id = $(this).data("id");
    
  
      var newDevourState = {
        devoured: true
      };
  
      
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          console.log("changed devoured to", true);
          
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
     
      event.preventDefault();
  
      var newBurger = {
        name: $("#ca").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
      };
  
      
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
         
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
     
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          
          location.reload();
        }
      );
    });
  });
  