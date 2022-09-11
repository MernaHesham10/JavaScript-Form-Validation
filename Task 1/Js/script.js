function formValidation() {
    var userID = document.registration.userid;
    var userpassword = document.registration.userpassword;
    var userName = document.registration.username;
    var userCountry = document.registration.country;
    var userZIP = document.registration.zip;
    var userEmail = document.registration.email;
    var userMale = document.registration.msex;
    var userFemale = document.registration.fsex;
    
    if(userid_validation(userID, 5, 12)) {
        if(userpassword_validation(userpassword, 7, 12)) {
            if(allLetter(userName)) {
                    if(countryselect(userCountry)){
                        if(allnumeric(userZIP)){
                            if(ValidateEmail(userEmail)){
                                if(validsex(userMale,userFemale)){
                                
                                }
                            } 
                        }
                    } 
                
            }
        }
    }
    
    return false;
}

function userid_validation(userID, maxLength, minLength) {
    var userID_len = userID.value.length;
    if (userID_len == 0 || userID_len >= minLength || userID_len < maxLength) {
        alert("User Id should not be empty and must be of length " + maxLength + " to " + minLength);
        userID.focus();
        return false;
    }
    return true;
}

function userpassword_validation(userpassword, maxLength, minLength) {
    var userpassword_len = userpassword.value.length;
    if (userpassword_len == 0 ||userpassword_len >= minLength || userpassword_len < maxLength) {
        alert("Password should not be empty and must be of length " + maxLength + " to " + minLength);
        userpassword.focus();
        return false;
    }
    return true;
}

function allLetter(userName) { 
    var letters = /^[A-Za-z]+$/;
    if(userName.value.match(letters)) {
        return true;
    }
    else {
        alert('User name should not be empty and must have alphabetes only');
        userName.focus();
        return false;
    }
}


function countryselect(userCountry) {
    if(userCountry.value == "Default") {
        alert('Select your country from the list');
        userCountry.focus();
        return false;
    }
    else{
        return true;
    }
}

function allnumeric(userZIP) { 
    var numbers = /^[0-9]+$/;
    if(userZIP.value.match(numbers)) {
        return true;
    }
    else{
        alert('ZIP code should not be empty and must have numeric only');
        userZIP.focus();
        return false;
    }
}

function ValidateEmail(userEmail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(userEmail.value.match(mailformat)){
        return true;
    }
    else {
        alert("Email should not be empty and must be valid!");
        userEmail.focus();
        return false;
    }
}

function validsex(userMale,userFemale) {
    x=0;

    if(userMale.checked) {
        x++;
    } 
    if(userFemale.checked){
        x++; 
    }
    if(x==0) {
        alert('Select Male/Female');
        userMale.focus();
        return false;
    }
    else {
        alert('Form Succesfully Submitted');
        window.location.reload()
        return true;
    }
}
