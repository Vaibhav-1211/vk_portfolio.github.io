const Profile = () => {
  return (
    <div className="card text mx-auto mb-4" style={{ maxWidth: "800px" }}>
      <div className="row g-2 justify-content-center text-start p-4">
        <div className="col-md-8">
          <div className="card-body  ">
            <h5 className="card-title fw-bold text-start">Hello,</h5>
            <h6 className='card-subtitle mb-2 text-muted'>I'm Software Developer</h6>
            <p className="card-text">Enthusiastic and driven software developer with a strong foundation in programming concepts and hands-on experience in JavaScript. Proficient in developing and debugging code, and passionate about learning new technologies and frameworks. Excellent problem-solving skills and the ability to work collaboratively in a team environment. Eager to contribute to innovative projects and grow within a dynamic development team.</p>
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
              <button className='btn btn-primary col rounded-pill my-3' type='button' ><a className="text-light text-decoration-none" href='https://docs.google.com/document/d/1UxLAYXVUEyft3K8NJ270r-v5PCyzVEMu/edit?usp=sharing&ouid=111466538837725299315&rtpof=true&sd=true'>View Resume</a></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Profile