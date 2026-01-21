function registration() {
    const inputs = document.querySelectorAll("input");

    const name = inputs[0].value;
    const email = inputs[1].value;
    const age = inputs[2].value;

    alert(
        "Student Registered Successfully!\n" +
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Age: " + age
    );
}