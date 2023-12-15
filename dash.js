let menuicn = document.querySelector(".menuicn"); 
let nav = document.querySelector(".navcontainer"); 

menuicn.addEventListener("click", () => { 
	nav.classList.toggle("navclose"); 
})
document.addEventListener("DOMContentLoaded", function () {
    
    var labelTags = document.querySelectorAll('.label-tag');
  
    labelTags.forEach(function (labelTag) {
      
      var status = labelTag.textContent.trim().toLowerCase();
  
      switch (status) {
        case 'good':
          labelTag.style.backgroundColor = 'green';
          break;
        case 'bad':
          labelTag.style.backgroundColor = 'red';
          break;
        case 'average':
          labelTag.style.backgroundColor = 'yellow';
          break;
        default:
          labelTag.style.backgroundColor = 'gray';
          break;
      }
    });
  });
  