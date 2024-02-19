
function setBackgroundById(element){
    const addBackgroundByColor = document.getElementById(element);
          const setBaakround =  addBackgroundByColor.classList.add('bg-green-500');
          return setBaakround
  }
  
  function setInnerText(id,value){
    document.getElementById(id).innerText = value;
     
  }