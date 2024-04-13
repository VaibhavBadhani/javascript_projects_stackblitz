const form = document.querySelector('form')

form.addEventListener('submit',function(event){
   event.preventDefault();
   const weight = parseInt(document.querySelector('#Weight').value);
   const height = parseInt(document.querySelector('#Height').value);  
   const res = document.querySelector('#result');
   if(weight==''||weight<=0||isNaN(weight)){
    res.innerHTML='Please update your weight'
   }
   else if(height==''||height<=0||isNaN(height)){
    res.innerHTML='Please update your height'
   }
   else{
    const ans = ((weight/(height*height))*10000).toFixed(2);
    res.innerHTML = `${ans}`;
   }
});


