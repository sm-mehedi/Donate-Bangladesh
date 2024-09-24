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

// Reusable function created by the developer
// Reusable function created by the developer
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
// Reusable function created by the developer
// Reusable function created by the developer


document.getElementById('donateButton1').addEventListener('click', function(event) {

    event.preventDefault();

   
    const isNValid = check_input_field('N_input');
    if (!isNValid) {
        document.getElementById('N_input').value="";
        return;
    }
    const addmoneyInput = document.getElementById('N_input').value;
     const currentBalance = document.getElementById('current_balance').innerText;
     const noakhali_balance = document.getElementById('noakhali').innerText;
     const addmoneyInputConv = parseFloat(addmoneyInput);
     const currentBalanceConv = parseFloat(currentBalance);
     const noakhali_balanceConv = parseFloat(noakhali_balance); 

   

    
    if (isNValid && currentBalanceConv>=0 && currentBalanceConv>=addmoneyInputConv) {
        const newB = currentBalanceConv - addmoneyInputConv;
        document.getElementById('current_balance').innerText = newB;
        const newF = noakhali_balanceConv + addmoneyInputConv;
        document.getElementById('noakhali').innerText = newF;
        document.getElementById('my_modal_1').showModal();
       
  const currentDate = new Date();
 
  const formattedDate = currentDate.toLocaleString(); 
  const message = document.createElement('p');

  message.classList.add(
    'text-3xl', 'font-semibold', 'text-gray-800', 'bg-orange-400', 
    'border', 'border-orange-500', 'rounded-xl', 'shadow-xl', 
    'p-8', 'mt-8', 'mb-8', 'max-w-3xl', 'mx-auto', 'text-center', 'leading-relaxed'
  );
  

  message.textContent = `We sincerely appreciate your generous donation of ${addmoneyInput} BDT to support the Noakhali Flood relief efforts. Donation made on ${formattedDate}.`;
        document.getElementById('History-section').appendChild(message);    
        document.getElementById('N_input').value="";
    }
    else{
        console.log("Insufficient balance");
        alert("Insufficient balance");
        document.getElementById('N_input').value="";
    }
      
    }
);
document.getElementById('donateButton2').addEventListener('click', function(event) {
   
     event.preventDefault();
     const isFValid = check_input_field('F_input');
     if (!isFValid) {
        document.getElementById('F_input').value="";
        return;
    }
     const addmoneyInput = document.getElementById('F_input').value;
     const currentBalance = document.getElementById('current_balance').innerText;
     const feni_balance = document.getElementById('feni').innerText;
     const addmoneyInputConv = parseFloat(addmoneyInput);
     const currentBalanceConv = parseFloat(currentBalance);
     const feni_balanceConv = parseFloat(feni_balance); 
   

    
    if (isFValid && currentBalanceConv>=0 && currentBalanceConv>=addmoneyInputConv) {
       
        const newB = currentBalanceConv - addmoneyInputConv;
        document.getElementById('current_balance').innerText = newB;
        const newF = feni_balanceConv + addmoneyInputConv;
        document.getElementById('feni').innerText = newF;
        document.getElementById('my_modal_1').showModal();

  const currentDate = new Date();
 
  const formattedDate = currentDate.toLocaleString(); 
  const message = document.createElement('p');

  
  message.classList.add(
    'text-3xl', 'font-semibold', 'text-gray-800', 'bg-orange-400', 
    'border', 'border-orange-500', 'rounded-xl', 'shadow-xl', 
    'p-8', 'mt-8', 'mb-8', 'max-w-3xl', 'mx-auto', 'text-center', 'leading-relaxed'
  );
  
  
  message.textContent = `We sincerely appreciate your generous donation of ${addmoneyInput} BDT to support the Feni Flood relief efforts. Donation made on ${formattedDate}.`;
  
        document.getElementById('History-section').appendChild(message);    
        document.getElementById('F_input').value="";
    }
    else{
        console.log("Insufficient balance");
        alert("Insufficient balance");
        document.getElementById('F_input').value="";
    }
});
const button = document.getElementById('donateButton');
   
document.getElementById('donateButton').addEventListener('click', function(event) {
    event.preventDefault();

    
     const isQValid = check_input_field('Q_input');
     if (!isQValid) {
        document.getElementById('Q_input').value="";
        return;
    }


    
    const addmoneyInput = document.getElementById('Q_input').value;
    const currentBalance = document.getElementById('current_balance').innerText;
    const feni_balance = document.getElementById('Quota').innerText;
    const addmoneyInputConv = parseFloat(addmoneyInput);
    const currentBalanceConv = parseFloat(currentBalance);
    const feni_balanceConv = parseFloat(feni_balance); 
  

   
   if (isQValid && currentBalanceConv>=0 && currentBalanceConv>=addmoneyInputConv) {
      
       const newB = currentBalanceConv - addmoneyInputConv;
       document.getElementById('current_balance').innerText = newB;
       const newF = feni_balanceConv + addmoneyInputConv;
       document.getElementById('Quota').innerText = newF;
       document.getElementById('my_modal_1').showModal();
      
 const currentDate = new Date();

 const formattedDate = currentDate.toLocaleString(); 
 const message = document.createElement('p');

  
 message.classList.add(
   'text-3xl', 'font-semibold', 'text-gray-800', 'bg-orange-400', 
   'border', 'border-orange-500', 'rounded-xl', 'shadow-xl', 
   'p-8', 'mt-8', 'mb-8', 'max-w-3xl', 'mx-auto', 'text-center', 'leading-relaxed'
 );
 
 
 message.textContent = `We sincerely appreciate your generous donation of ${addmoneyInput} BDT to support the  Quota Movement relief efforts. Donation made on ${formattedDate}.`;
       document.getElementById('History-section').appendChild(message);    
       document.getElementById('Q_input').value="";
   }
   else{
       console.log("Insufficient balance");
       alert("Insufficient balance");
       document.getElementById('Q_input').value="";
   }
});