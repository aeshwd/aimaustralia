function apply(jobTitle) {
    alert(`You are applying for the position of ${jobTitle}. Please send your resume and cover letter to aeshgoswami2004@gmail.com`);
  }




  // Get Price 

 let bedroom = document.getElementById('bedroom');
 let extra = document.getElementById('extra-rooms');
 let charge = document.getElementById('charge');
 let tip = document.getElementById('tip');
 let button = document.getElementById('button');
 let output = document.getElementById('output');

 button.addEventListener("click", () => {
     let beValue = bedroom.value;
     let eValue = extra.value;
     let tValue = tip.value;


     // Formula to calculate = ((No. of bedrooms * 20) + (No. of Bathrooms * 30) + (No. of Extra rooms * 15) + (Service Charge(20)) + (tip amount))
     let out = (beValue * 50) + (eValue * 10) + (10* 1) + (tValue * 1) ;

     output.innerHTML = `Total Price = AUD ${out}`;
     alert(`Your Total Price including service Charge is AUD ${out}`)
 });

  