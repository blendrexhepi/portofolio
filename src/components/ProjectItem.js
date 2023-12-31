import { useNavigate } from "react-router-dom"
import "../styles/projects.css"


export const ProjectItem = ({image, name, id}) => {
    const navigate = useNavigate();
    return (
        <div className="projectItem" onClick={() => {
            navigate("/project/" + id)
        }} >
            <div style={{backgroundImage: `url(${image})`}}  className="bgImage" />
            <h1>{name}</h1>
        </div>
    )
}