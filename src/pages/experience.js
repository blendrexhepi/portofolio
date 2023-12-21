
import {VerticalTimeline,VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School"
import CodeIcon from '@mui/icons-material/Code';

export const Experience = () => {
    return (
        <div className="experience">
            <VerticalTimeline lineColor="#3e497a">

                <VerticalTimelineElement 
                   className="vertical-timeline-element--education"
                   date="2020-2023"
                   iconStyle={{background:"#3e497a", color:"white"}}
                   icon={<SchoolIcon/>}>
                    <h3 className="vertical-timeline-element-title">UBT College</h3>
                    <p>Computer Science and Engineering</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                   className="vertical-timeline-element--education"
                   date="2023"
                   iconStyle={{background:"#3e497a", color:"white"}}
                   icon={<CodeIcon/>}>
                    <h3 className="vertical-timeline-element-title">ICT for KOSOVO'S Growth</h3>
                    <p>Web Application Development Professional</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                   className="vertical-timeline-element--education"
                   date="2021"
                   iconStyle={{background:"#3e497a", color:"white"}}
                   icon={<SchoolIcon/>}>
                    <h3 className="vertical-timeline-element-title">QAP</h3>
                    <p>Teknologji Informacioni dhe Komunikim</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                   className="vertical-timeline-element--education"
                   date="2017-2020"
                   iconStyle={{background:"#3e497a", color:"white"}}
                   icon={<SchoolIcon/>}>
                    <h3 className="vertical-timeline-element-title">Gymnasium "Kuvendi i Arberit"</h3>
                    <p>High School Diploma</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}