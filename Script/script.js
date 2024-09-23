const history = document.getElementById('Donation').addEventListener('click',function(){
    document.getElementById('donation-section').style.display='block';
    document.getElementById('History-section').style.display='none';

    
    document.getElementById('Donation').classList.add('bg-orange-600', '!text-white');
    document.getElementById('Donation').classList.remove('btn-outline', 'text-orange-600');

    document.getElementById('History').classList.remove('bg-orange-600', 'text-white');
    document.getElementById('History').classList.add('btn-outline', 'text-orange-600');
   


})

document.getElementById('History').addEventListener('click', function() {
    
    document.getElementById('History-section').style.display = 'block';
    document.getElementById('donation-section').style.display = 'none';
  
    document.getElementById('History').classList.add('bg-orange-600', 'text-white');
    document.getElementById('History').classList.remove('btn-outline', 'text-orange-600');

    document.getElementById('Donation').classList.remove('bg-orange-600', 'text-white');
    document.getElementById('Donation').classList.add('btn-outline', 'text-orange-600');
});


window.onload = function() {
    document.getElementById('Donation').click();
};


function check_input_field(inputId) { // Reusable function created by the developer
    const inputField = document.getElementById(inputId);
    const value = inputField.value.trim(); 

    const positiveNumber = /^[+]?(0|[1-9]\d*)(\.\d+)?$/;

    if (value === '') {
        alert('Please fill in the ' + inputField.placeholder + ' input box.');
        return false; 
    } else if (!positiveNumber.test(value)) {
        alert('Please enter a valid amount.');
        return false; 
    }

    return true; 
}


document.getElementById('donateButton1').addEventListener('click', function() {
    const isNValid = check_input_field('N_input');
   

    
    if (isNValid) {
        alert('Thank you for your donations!');
      
    }
});
document.getElementById('donateButton2').addEventListener('click', function() {
   
     const isFValid = check_input_field('F_input');
   

    
    if (isFValid) {
        alert('Thank you for your donations!');
      
    }
});
const button = document.getElementById('my_modal_1');
    button.disabled = true;
document.getElementById('my_modal_1').addEventListener('click', function() {
    
     const isQValid = check_input_field('Q_input');

    
    if (isQValid) {
        button.disabled = 'false';
        document.getElementById('my_modal_1').showModal();
       
    }
});