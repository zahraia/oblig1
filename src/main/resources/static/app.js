
    let orders = [];
    const tickets = document.getElementById("tickets");
    function validateEmail(email){
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }

    function validatePhone(phone){
        const pattern = /^\d{8}$/;
        return pattern.test(phone);
    }

    function buyTicket(){

    const alert_phone = document.getElementById("err_phone");
    const alert_email = document.getElementById("err_email");
    const alert_first_name = document.getElementById("err_first_name");
    const alert_surname = document.getElementById("err_surname");
    const alert_amount = document.getElementById("err_amount");
    const alert_movie = document.getElementById("err_movie");



    const first_name = document.getElementById("first_name");
    const surname = document.getElementById("surname");
    const movie = document.getElementById("movies");
    const amount = document.getElementById("amount");
    const phone = document.getElementById("phone");
    const email = document.getElementById("email");

        alert_email.innerHTML = "";
        alert_phone.innerHTML = "";
        alert_surname.innerHTML = "";
        alert_first_name.innerHTML = "";
        alert_amount.innerHTML = "";
        alert_movie.innerHTML = "";


    if (validateEmail(email.value) && validatePhone(phone.value)){

    let newOrder = {movie: movie.value, amount: amount.value, first_name: first_name.value, surname: surname.value, phone: phone.value, email: email.value };

    orders.push(newOrder);
    console.log(orders);
    showList();

    first_name.value = "";
    surname.value = "";
    movie.value = "";
    phone.value = "";
    email.value = "";
    amount.value = 1;


    }
    else {
    if (email.value === ""){
        alert_email.innerHTML = "Please enter your email.";
    }

    else if(!validateEmail(email.value)){
        alert_email.innerHTML = "Please enter a valid email.";
    }

    if (phone.value === ""){
        alert_phone.innerHTML = "Please enter your phone number.";
    }

    else if(!validatePhone(phone.value)){
        alert_phone.innerHTML = "Please enter a valid phone number."
    }

    if (first_name.value === ""){
        alert_first_name.innerHTML = "Please enter your first name.";
    }

    if (surname.value === ""){
        alert_surname.innerHTML = "Please enter your surname.";
    }
    if (parseInt(amount.value) <= 0 || isNaN(parseInt(amount.value))){
        alert_amount.innerHTML = "Please enter a valid amount.";
        console.log("Amount:", amount.value);
        console.log("Parsed Amount:", parseInt(amount.value));
    }
    if (movie.value === ""){
        alert_movie.innerHTML = "Please choose your movie.";
    }

        }

}

    function showList(){

    tickets.innerHTML = "";

    let ut = "<tr>" +
    "<th>" + "Movie" + "</th>" +
    "<th>" + "Amount" + "</th>" +
    "<th>" + "First Name" + "</th>" +
    "<th>" + "Surname" + "</th>" +
    "<th>" + "Phone number" + "</th>" +
    "<th>" + "Email" + "</th>" +
    "</tr>";

    for (let i = 0; i < orders.length; i++){
    ut += "<tr>" + "<td>" + orders[i].movie + "</td>" + "<td>" + orders[i].amount +  "</td>" + "<td>" + orders[i].first_name +
    "</td>" + "<td>" + orders[i].surname + "</td>" + "<td>" + orders[i].phone + "</td>" + "<td>" + orders[i].email +" </td>"+ "</tr>";

}
    tickets.innerHTML += ut;
}


    function deleteTickets() {
    orders = [];
    tickets.innerHTML = "";

}


