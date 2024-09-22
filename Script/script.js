const history = document.getElementById('Donation').addEventListener('click',function(){
    document.getElementById('donation-section').style.display='block';
    document.getElementById('History-section').style.display='none';

    
    document.getElementById('Donation').classList.add('bg-orange-600', 'text-white');
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