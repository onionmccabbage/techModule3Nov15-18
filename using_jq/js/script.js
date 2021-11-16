// invoke jQuery
$(function () {
    // listen to the button click event
    $('#btnGetPhotos').click(function () {
        // empty out the 'output'
        $('#output').empty()
        // make a GET call to the API
        $.get('https://jsonplaceholder.typicode.com/photos', function (photos) {
            // construct an HTML fragment
            let html = "<div class='photo'>"
            // iterate over the returned data
            $.each(photos, function (i, photo) { // i represents the index of the iterable
                console.log(photo)
                // add to the fragment of HTML
                html += `<h3>${photo.title}</h3>`
                // mini exercise - also write the image id and thumbnail URL as list items (as per p278)
                // also try to show the ACTUAL thumnail images
                html += `<ul>`
                html += `<li>photo ID:${photo.id}</li>`
                html += `<li>thumbnail:${photo.thumbnailUrl}</li>`
                html += `</ul>`
                html += `<img src='${photo.thumbnailUrl}' alt='${photo.title}' />`
            }) // end of .each iterator function
            // inject the HTML fragment into the page
            html += '</div>'
            $('#output').append($(html)) // inject the LITERAL object called html
        }) // end of .get call-back function
    }) // end of click event handler call-back
}) // end of jQuery call-back