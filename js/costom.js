
const allBtn = document.getElementsByClassName('button');
let count = 0;

for(const btn of allBtn){
     btn.addEventListener('click', function(e){
         // seat count -40 hobe
         count = count +1;
         setInnerText('uping count',count)
         // seat count + 1 hobe
          setInnerText('seat-count1',count);
          const buttonText = e.target.innerText
          document.getElementById('select-btn').innerText = buttonText;
               
          const  buttonTextValue  = document.getElementById('selector-container')

               
               



      })
}