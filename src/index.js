// validate form
function validateForm() {
    
    // Initialized user input data
    let name = document.forms["myForm"]["name"].value;
    let email = document.forms["myForm"]["email"].value;
    let phone = document.forms["myForm"]["phone"].value;
    let message = document.forms["myForm"]["message"].value;
    
    // Checking 
    if (name == "") {
        alert("Name must be filled out");
        return false;
    } else if (email == "") {
        alert("Email must be filled out");
        return false;
    } else if (phone == "") {
        alert("Mob.No must be filled out");
        return false;
    } else if (message == "") {
        alert("Message must be filled out");
        return false;
    } else {
        
        // Firebase Realtime Database URL
        const URL = "https://yourproject-databaseurl.firebaseio.com";
        
        // Collection or Table name
        const PATH = "contacts";
        
        // Database connection 
        const database = URL + "/" + PATH + ".json";
        
        // Send Data
        const res = fetch(database,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            
            // Initialized send data and value
            body: JSON.stringify({
                name: name,
                email: email,
                phone: phone,
                message: message
            }),
        });
        
        // Checking send data
        if (res) {
            alert("Data send successfully");
            window.location.href = "index.html";
        } else {
            alert("Oops, something went wrong!");
            window.location.href = "index.html";
        }

    }

}
