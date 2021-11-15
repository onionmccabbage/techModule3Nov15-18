 // JavaScript is never 'compiled' it is interpreted by the browser
        // variables
        var x = 1 // old
        let y = 2 // new - do this
        let usr = 'Grace Hopper' // a string of text
        let age = 42 // a number
        // plan - concatenate the usr and age then write it on the page
        // use back-tick interpolation syntax
        let c = `${usr} age ${age}` // same as usr + ' age ' + age
        // grab the thing whose ID is 'username' and set it's value
        username.value = c
        // or (more formal syntax for the same thing)
        let u = document.getElementById('username')
        u.value = c

        // functions - often used for event call-backs
        const handleButton = () => { // same as function(){}
            // we need to prevent the form from submitting!!!!
            event.preventDefault()
            // this function responds to the button being clicked
            console.log('the button was clicked')
            // lets take the form field values and inject them into the HTML page
            let u = username.value // grab the 'usrname' field value
            let p = password.value // grab the 'password' field value
            // first let's check the password is at least 8 characters
            if (p.length<8){
                // alert('password must be 8 or more characters')
                pwd.innerHTML = 'please make sure the password is 8 or more characters'
            } else {
                pwd.innerHTML = p
            }
            person.innerHTML = u
        }

        // events (always after the functions!!)
        btnGo.addEventListener('click', handleButton)

        // classes