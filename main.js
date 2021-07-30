var images = [
    "https://i.pinimg.com/736x/f8/a9/dd/f8a9dd5024d6ebed33ae33db724d84e3.jpg",
    "https://image.shutterstock.com/image-illustration/cartoon-old-woman-cane-260nw-1376524529.jpg",
    "https://cdn4.vectorstock.com/i/1000x1000/46/13/cute-grandfather-cartoon-vector-17814613.jpg",
  ];
  
  var i = 0;
  function nextslide() { 
   
     if(i == 9)
       {
         i=0;
       }
     
      document.getElementById("album").src = images[i];
    i++;
   
  }
  
  
  