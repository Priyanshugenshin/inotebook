import React from 'react'

export default function About() {
  return (
    <div>
      <div className="container text-center" style={{ backgroundColor: "#d8f9ff" }}>
        <h3>About Us</h3>
        <figure classname="figure" >
          <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum tempus egestas sed sed risus pretium quam. Viverra maecenas accumsan lacus vel facilisis volutpat est velit. Aenean et tortor at risus viverra adipiscing at in tellus. Tortor pretium viverra suspendisse potenti. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci. At consectetur lorem donec massa sapien faucibus. Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo. Ac turpis egestas sed tempus. Faucibus scelerisque eleifend donec pretium vulputate. Pharetra massa massa ultricies mi quis hendrerit dolor magna eget. Et netus et malesuada fames ac. Suscipit tellus mauris a diam. Purus sit amet volutpat consequat mauris nunc congue nisi vitae. Ut morbi tincidunt augue interdum velit euismod in pellentesque massa. Magna ac placerat vestibulum lectus mauris ultrices. Posuere urna nec tincidunt praesent semper feugiat nibh.</p>
          <img src="https://st2.depositphotos.com/1017228/9855/i/450/depositphotos_98555688-stock-photo-thoughtful-programmer-coding-in-the.jpg" classname="figure-img img-fluid rounded me-2" alt=".."  style={{width: "101%",height:"400px"}}/>
        </figure>
      </div>
      <div className="container text-center" style={{width:"75%"}}>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
            <i className="fa-solid fa-people-group fa-3x mt-3"></i>
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
            <i className="fa-solid fa-earth-asia fa-3x mt-3"></i>
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
            <i class="fa-regular fa-face-smile-beam fa-3x mt-3"></i>
                <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center mt-5" style={{width:"500px"}}>
      <img src="https://camo.githubusercontent.com/cae12fddd9d6982901d82580bdf321d81fb299141098ca1c2d4891870827bf17/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313336302f302a37513379765349765f7430696f4a2d5a2e676966" alt=".." style={{width:"200px" ,height:"150px"}}/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur doloremque aspernatur voluptates quaerat, voluptate officiis neque at, corrupti esse laboriosam cumque officia reprehenderit atque in, sunt asperiores soluta delectus dignissimos.</p>
      <p className='mt-4' style={{fontWeight :'bold',margin:"0"}}>Priyanshu Bisht 🤩</p>
      <p style={{ marginBottom:"40px"}}>Full Stack Developer</p>
      </div>

    </div>
  )
}
