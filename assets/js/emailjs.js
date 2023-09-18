const Name = document.getElementById("from_name");
const Email = document.getElementById("reply_to");
const Message = document.getElementById("message");

const Submit = document.getElementById("submit");


(function () {
        // https://dashboard.emailjs.com/admin/account
        emailjs.init('vu1cixeqH75TR5QAg');
    })();


// window.onload
function EmailJS() {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_ltywki5', 'template_e4zqh7x', this)
            .then(function () {
                console.log('SUCCESS!');
            }, function (error) {
                console.log('FAILED...', error);
            });
    });
}

Submit.addEventListener('click', () => {
    if( Name.value == '' || Email.value == '' || Message.value == ''){
        alert("Um ou mais campos em branco.\nPreencha todos os campos para mandar uma menssagem.")
    }
    else{
        alert("Sucesso! Sua Mensagem foi enviada.")
        EmailJS()
    }
})