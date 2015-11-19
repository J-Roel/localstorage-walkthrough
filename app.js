window.onload = function(){
 
  var submitButton = document.querySelector('form div:last-child input');
  var inputColors = document.querySelectorAll('input');
  var body = document.querySelector('body');

  var currentdate = new Date(Date.now())
  var today = currentdate.getDay()

  document.querySelector('#today').innerText = currentdate;

  var dayColors = {};
  var colorData;

  getColors();


  submitButton.addEventListener("click", function(){
        for(var i = 0; i< inputColors.length-1; i++){
          colorData[i] = inputColors[i].value;
        }
        
        setColors();
        updateColors();
  });


  function updateColors(){
  
     document.body.style.backgroundColor = colorData[today-1];
      
      for(var i = 0; i< inputColors.length; i++){
        inputColors[i].style.backgroundColor = colorData[i];
      }
  }


  function setColors(){      
      window.localStorage.setItem('colorData', JSON.stringify(colorData));
  };


  function getColors() {
      colorData = JSON.parse(window.localStorage.colorData);
      console.log(colorData);
      updateColors();
  }
 

}
