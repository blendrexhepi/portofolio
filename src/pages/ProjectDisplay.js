import { useParams } from "react-router-dom";
import { projectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/projectDisplay.css"

export const ProjectDisplay = () => {
    const { id } = useParams();
    const project = projectList[id];
    return (
        <div className="project">
            <h1>{project.name}</h1>
            <img src={project.image}  alt="error"/>
            <p><b>Skills:{project.skills}</b></p>
            <a href="https://github.com/blendrexhepi" ><GitHubIcon/> </a>
        </div>
        
    ) 
}