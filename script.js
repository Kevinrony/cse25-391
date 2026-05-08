<!-- JS VALIDATION -->
<script>

document.getElementById("contactForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    let name =
    document.getElementById("name").value;

    let email =
    document.getElementById("email").value;

    let subject =
    document.getElementById("subject").value;

    let message =
    document.getElementById("message").value;

    if(name==="" || email==="" ||
       subject==="" || message===""){

        alert("Please fill in all fields.");

    }else{

        alert("Message sent successfully!");

        document.getElementById("contactForm").reset();

    }

});

</script>

