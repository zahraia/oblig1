
   // creates an empty array to put all orders in and fetches the table to put them in
    let orders = [];
    const tickets = document.getElementById("tickets");

    //validates email using regex
    function validateEmail(email){
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }

    function validatePhone(phone){
        const pattern = /^\d{8}$/;
        return pattern.test(phone);
    }

    //buys ticket by getting values and checking if email and phone is validated
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

        alert_email.textContent = "";
        alert_phone.textContent = "";
        alert_surname.textContent = "";
        alert_first_name.textContent = "";
        alert_amount.textContent = "";
        alert_movie.textContent = "";


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
    //validates all input
    else {
    if (email.value === ""){
        alert_email.textContent = "Please enter your email.";
    }

    else if(!validateEmail(email.value)){
        alert_email.textContent = "Please enter a valid email.";
    }

    if (phone.value === ""){
        alert_phone.textContent = "Please enter your phone number.";
    }

    else if(!validatePhone(phone.value)){
        alert_phone.textContent= "Please enter a valid phone number."
    }

    if (first_name.value === ""){
        alert_first_name.textContent = "Please enter your first name.";
    }

    if (surname.value === ""){
        alert_surname.textContent = "Please enter your surname.";
    }
    if (parseInt(amount.value) <= 0 || isNaN(parseInt(amount.value))){
        alert_amount.textContent = "Please enter a valid amount.";
    }
    if (movie.value === ""){
        alert_movie.textContent = "Please choose your movie.";
    }

        }

}
//creates a table haed and shows the array
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

    for (let i of orders) {
    ut += "<tr>" + "<td>" + i.movie + "</td>" + "<td>" + i.amount +  "</td>" + "<td>" + i.first_name +
    "</td>" + "<td>" + i.surname + "</td>" + "<td>" + i.phone + "</td>" + "<td>" + i.email +" </td>"+ "</tr>";

}
    tickets.innerHTML += ut;
}

//empties the array and deletes the content of the table
    function deleteTickets() {
    orders = [];
    tickets.innerHTML = "";

}


