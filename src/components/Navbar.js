import React from 'react'

function Navbar() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg" style={{width:"60%",margin:"auto",padding:"1%"}}>
  <div className="container-fluid" style={{fontFamily:"Montserrat",color:"white"}}>
    <a className="navbar-brand text-white" href="/" style={{marginRight:"7%"}}>BrandName</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Product</a>
        </li>                
        <li className="nav-item">
          <a className="nav-link" href="/">Pricing</a>
        </li>                
        <li className="nav-item" >
          <a className="nav-link" href="/" >Contact</a>
        </li>                
                        
      </ul>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item" >
          <a className="nav-link mx-3" href="/">Login</a>
        </li>                
        <li className="nav-item">
        <button type="button" className="btn" style={{backgroundColor:"#ff7b52", color:"white",borderRadius:"5%", paddingLeft:"25px",paddingRight:"25px"}}>Join Us &rarr;</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
