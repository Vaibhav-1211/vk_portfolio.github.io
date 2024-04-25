export default function SideProjects(props) {
  return (
    <li className="list-group-item text-start">{props.title}<a className="mx-auto px-2 text-decoration-none" href={props.link}><b><i>Project Link</i></b></a></li>
  )
}