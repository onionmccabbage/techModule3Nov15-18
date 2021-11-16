$(document).ready(function() {
    $("#show").click(function() {
      console.log("running click on show");
      event.preventDefault();
      $.get("http://localhost:8080/bookshop/list", function(books) {
            console.log(books);
            let html = "<div class='book'>";
            html += JSON.stringify(books);
  
            html += "</div>";
            $("#booklist").append($(html));
      });
    });
  });
  