var li =document.querySelectorAll('.rate li')
 

li.forEach(function(element){ 

    element.addEventListener('click', function(event){ 

        var el = document.querySelector('.active'); 
        if(el) {
          el.classList.remove('active');
        }            
        element.classList.add('active');
    } )
 

})

