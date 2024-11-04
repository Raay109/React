import React, { act } from 'react'
import "./Navbar.css"

function Navbar(){


function slidebar() {
  let activ = false;

  const slidebar = document.querySelector(".slidebar");
  if (activ == false){
    activ = true;
    slidebar.style.width = '100%';
  }else {
slidebar.style.width = '0%';
  }
}
  return (
    <div>
      <div class="slidebar"></div>
<nav class="navbar">
    <nav class="nav-btn" onClick={slidebar}>
        <div class="nav-line-1"> </div>
        <div class="nav-line-2"> </div>
    </nav>
</nav>
    </div>
  )
}

export default Navbar