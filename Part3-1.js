//Anurag-18BCE2335 -> Event Regisstration Form(partiii-1)

//Referencing Elements of HTML form to variables in Javascript.
const myForm = document.querySelector('#regform');
const fullName = document.querySelector('#fullName');
const regNumber = document.querySelector('#regno');
const email = document.querySelector('#email');
const addr = document.querySelector('#address');
const msg = document.querySelector('.alert');
const errorList = document.querySelector('#items');
const erros = document.querySelector('.erros');

//Listening for the submit event(clicking submit on the form)
myForm.addEventListener('submit', onSubmit);

//Submit event function then validating user inputs.
function onSubmit(e) {
    e.preventDefault();

    if (fullName.value === '' || regNumber.value === '' || email.value === '' || addr.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please Enter all the Fields';
        setTimeout(() => msg.remove(), 10000);
    }
    else {
        const li = document.createElement('li');
        const li1 = document.createElement('li');
        const li2 = document.createElement('li');
        const li3 = document.createElement('li');

        if (fullName.value.match(/^[a-zA-Z]* [a-zA-Z]+$/i)){console.log('Valid Name');} else {
            console.log("error in name");
            errorList.classList.add('error');
            li.appendChild(document.createTextNode('Please Enter a valid Name '));
            errorList.appendChild(li);
            
        }
        if (regNumber.value.match(/^[0-9]{2}[A-Z]{3}[0-9]{4}$/)){console.log('Valid Registation Number');} else {
            console.log("error in reg number");
            errorList.classList.add('error');
            li1.appendChild(document.createTextNode('Please Enter a valid Registration Number ' ));
            errorList.appendChild(li1);
        }
        if (email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){console.log('Valid Email');} else {
            console.log("error in email");
            errorList.classList.add('error');
            li2.appendChild(document.createTextNode('Please Enter a valid Email '));
            errorList.appendChild(li2);
        }
        if (addr.value.match(/^[0-9]{6}$/)){console.log('Valid Pincode');} else {
            console.log("error in address");
            errorList.classList.add('error');
            li3.appendChild(document.createTextNode('Please Enter a valid Pincode '));
            errorList.appendChild(li3);
            
        }
        
        
    }
    setTimeout(() => erros.remove(), 7000);
}