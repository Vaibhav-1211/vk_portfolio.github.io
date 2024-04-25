const Profile = () => {
  return (
    <div className="card text mx-auto mb-4" style={{ maxWidth: "800px" }}>
      <div className="row g-2 justify-content-center text-start p-4">
        <div className="col-md-8">
          <div className="card-body  ">
            <h5 className="card-title fw-bold text-start">Hello,</h5>
            <h6 className='card-subtitle mb-2 text-muted'>I'm Frontend Developer</h6>
            <p className="card-text">Driven by a passion for frontend development and a desire to create engaging and user-centric web experiences, I am seeking opportunities to further develop my skills and contribute to impactful projects within a dynamic and collaborative environment. Eager to leverage my knowledge and enthusiasm to contribute positively to the success of your organization while continuing to grow both personally and professionally.</p>
            <hr />
            <div className='row '>
              <div className="col p-2 fw-medium fs-3 ">Vaibhav Kabira</div>
            </div>
            <div className='row'>
              <div className="col p-2 g-1 fw-medium text-muted"><a className='nav-link' href='mailto: vaibhavkabira12@example.com'>vaibhavkabira12@gmail.com</a>
              </div>
              <div className="col p-2 g-1 fw-medium text-muted">Ahmedabad,India</div>
            </div>
            <div className='row-1'>

              <button className='btn btn-primary col rounded-pill my-3' type='button' ><a className="text-light text-decoration-none" href='https://drive.google.com/file/d/1psqV8IYA4pz3czzFklZI8JP220CbK77S/view?usp=sharing'>View Resume</a></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Profile