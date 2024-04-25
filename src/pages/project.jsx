import AcadamicProject from "./acadamicsprojects"
import { Acadamic_Project_Data } from "./acadamic.js"
import { Side_Project_Data } from "./sideprojects.js"
import SideProjects from "./sideprojects.jsx"

const Project = () => {
  return (
    // Acadamics Proojects
    <div className="card-group">
      <div className="card">
        <ul className="list-group list-group-flush list-group-numbered">
          <p className="h6 text-dark text-center fw-bold">Academic Projects</p>
          {Acadamic_Project_Data.map((acdItem) => (<AcadamicProject key={acdItem.title} {...acdItem} />))}
        </ul>
      </div>
      {/* Side Projects */}
      <div className="card">
        <ul className="list-group list-group-flush list-group-numbered">
          <p className="h6 text-dark text-center fw-bold">Side Projects</p>
          {Side_Project_Data.map((sideItems) => (<SideProjects key={sideItems} {...sideItems} />))}
        </ul>
      </div>
    </div>
  )
}

export default Project