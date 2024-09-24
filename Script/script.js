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
        alert('Thank you for your donations!');
       
  const currentDate = new Date();
 
  const formattedDate = currentDate.toLocaleString(); 
        const message = document.createElement('p');
        message.classList.add('text-4xl', 'text-white', 'bg-orange-500', 'border', 'border-black', 'p-4', 'mt-4', 'mb-4');

        message.textContent="Thank you For your donation to Noakhali Flood [Amount] "+addmoneyInput+ " BDT at "+formattedDate;
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
        alert('Thank you for your donations!');
       
  const currentDate = new Date();
 
  const formattedDate = currentDate.toLocaleString(); 
        const message = document.createElement('p');
        message.classList.add('text-4xl', 'text-white', 'bg-orange-500', 'border', 'border-black', 'p-4', 'mt-4', 'mb-4');

        message.textContent="Thank you For your donation to Feni Flood [Amount] "+addmoneyInput+ " BDT at "+formattedDate;
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
       alert('Thank you for your donations!');
      
 const currentDate = new Date();

 const formattedDate = currentDate.toLocaleString(); 
       const message = document.createElement('p');
       message.classList.add('text-4xl', 'text-white', 'bg-orange-500', 'border', 'border-black', 'p-4', 'mt-4', 'mb-4');

       message.textContent="Thank you For your donation to Quota Movement [Amount] "+addmoneyInput+ " BDT at "+formattedDate;
       document.getElementById('History-section').appendChild(message);    
       document.getElementById('Q_input').value="";
   }
   else{
       console.log("Insufficient balance");
       alert("Insufficient balance");
       document.getElementById('Q_input').value="";
   }
});