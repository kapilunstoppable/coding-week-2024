fetch("https://coding-week-2024-api.onrender.com/api/data")
.then(response => response.json())
.then(data => {
   console.log(data);

  //  headlines of the content

   document.getElementById('headline-1').innerHTML = data[0].headline;
   document.getElementById('headline-2').innerHTML = data[1].headline;
   document.getElementById('headline-3').innerHTML = data[2].headline;
   document.getElementById('headline-4').innerHTML = data[3].headline;

  //  type of the content

   document.getElementById('type-1').innerHTML = data[0].type;
   document.getElementById('type-2').innerHTML = data[1].type;
   document.getElementById('type-3').innerHTML = data[2].type;
   document.getElementById('type-4').innerHTML = data[3].type;

   // dates will be fetched here

   document.getElementById('date-1').innerHTML = data[0].date;
   document.getElementById('date-2').innerHTML = data[1].date;
   document.getElementById('date-3').innerHTML = data[2].date;
   document.getElementById('date-4').innerHTML = data[3].date;

   // Auther of the context will be feched here

   document.getElementById('author-1').innerHTML = data[0].author;
   document.getElementById('author-2').innerHTML = data[1].author;
   document.getElementById('author-3').innerHTML = data[2].author;
   document.getElementById('author-4').innerHTML = data[3].author;
   
   // images will be fetched here

   document.getElementById('img-1').src = data[0].image;
   document.getElementById('img-2').src = data[1].image;
   document.getElementById('img-3').src = data[2].image;
   document.getElementById('img-4').src = data[3].image;

   let data2 = "";
   data.map((values) =>{
    data2 +=` 
        <div class="colums" id="c-1">
         <div class="main-right-content-1">
            <div class="images">
               <img src=${values.image} alt="">
            </div>
            <div class="content-right">
             <p id="headline-5">${values.headline}</p>
              
              <div class="imgages-right-foot">
                <i class='bx bx-calendar-exclamation date-foot'  ></i> <span class="date-foot">${values.date}</span>
              </div>
            </div>
          </div>  `
   });
   document.getElementById("hello").innerHTML = data2;

})
.catch((error) => document.write("<h1>Data not feched</h1>"));
