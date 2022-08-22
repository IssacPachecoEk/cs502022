import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaLaravel, FaMedal } from "react-icons/fa";
import { BsMicrosoft } from "react-icons/bs";
import {
  SiCsharp,
  SiPostgresql,
  SiArduino,
  SiJsonwebtokens,
  SiVisualstudiocode,
  SiMicrosoftsqlserver,
  SiMicrosoftazure,
  SiAmazondynamodb,
  SiNuxtdotjs,
  SiTypescript
} from "react-icons/si";
import { MdSchool, MdRestaurant } from "react-icons/md";
import { GiSandsOfTime } from "react-icons/gi";
import { RiGovernmentFill } from "react-icons/ri";
import { DiPhp, DiMysql, DiCodeigniter, DiMongodb, DiScrum } from "react-icons/di";
import { Badge } from "react-bootstrap";
import Tooltip from '@mui/material/Tooltip';

function Experience() {
  return (
    <>
    <h1 style={{ fontSize: "2.3em", paddingBottom:"5em" }}>
      <span className="purple">EXPERIENCE</span>
    </h1>
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2019 - 2022"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<RiGovernmentFill />}
      >
        <h3 style={{ fontSize: "20px", textAlign: "center", paddingBottom: "10px" }}
          className="vertical-timeline-element-title"><Badge pill bg="dark" > SEGEY </Badge></h3>
        <h4 style={{ fontSize: "18px", textAlign: "center" }}
          className="vertical-timeline-element-subtitle">Mérida, Yucatán</h4>
        <p style={{ textAlign: "justify" }}>
          I worked for 3 years and 4 months at The
          Secretary of Education of the Government of the State
          of Yucatan in Mérida city. In the IT department, I have
          implemented different systems for the secretary of
          education. Using technologies such as CodeIgniter and
          MySQL. With a schedule from 8 a.m. to 3 p.m., Monday to
          Friday.
        </p>
        <div style={{ textAlign: "center" }} className="iconSize">
          <Tooltip title="CODEIGNITER">
            <Badge style={{ marginRight: "20px" }} pill bg="danger" > <DiCodeigniter /> </Badge>
          </Tooltip>
          <Tooltip title="LARAVEL">
            <Badge style={{ marginRight: "20px" }} pill bg="danger" > <FaLaravel /> </Badge>
          </Tooltip>
          <Tooltip title="MYSQL">
            <Badge style={{ marginRight: "20px" }} pill bg="danger" > <DiMysql /> </Badge>
          </Tooltip>
          <Tooltip title="PHP">
            <Badge style={{ marginRight: "20px" }} pill bg="danger" > <DiPhp /> </Badge>
          </Tooltip>
          <Tooltip title="TYPESCRIPT">
            <Badge style={{ marginRight: "20px" }} pill bg="danger" > <SiTypescript /> </Badge>
          </Tooltip>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2019 - 2022"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<MdSchool />}
      >
        <h3 style={{ fontSize: "20px", textAlign: "center", paddingBottom: "10px" }}
          className="vertical-timeline-element-title"><Badge pill bg="dark" > UNIIDE UTM </Badge></h3>
        <h4 style={{ fontSize: "18px", textAlign: "center" }}
          className="vertical-timeline-element-subtitle">Mérida, Yucatán</h4>
        <p style={{ textAlign: "justify" }}>
          I worked for 3 years and 2 months in the
          innovation and business development incubation unit at
          the metropolitan technology university in Mérida city. In
          the IT department, I have been developing an automated
          quote platform for the generation of financial budget
          reports. Using technologies such as ASP.NET MVC and
          MongoDB. With a schedule from 4 p.m. to 10 p.m.,
          Monday to Friday.
        </p>
        <div style={{ textAlign: "center" }} className="iconSize">
          <Tooltip title="MONGODB">
            <Badge style={{ marginRight: "20px" }} pill bg="danger" > <DiMongodb /> </Badge>
          </Tooltip>
          <Tooltip title="C#">
            <Badge style={{ marginRight: "20px" }} pill bg="danger" > <SiCsharp /> </Badge>
          </Tooltip>
          <Tooltip title="AZURE">
            <Badge style={{ marginRight: "20px" }} pill bg="danger" > <SiMicrosoftazure /> </Badge>
          </Tooltip>
          <Tooltip title="JSON WEB TOKEN">
            <Badge style={{ marginRight: "20px" }} pill bg="danger" > <SiJsonwebtokens /> </Badge>
          </Tooltip>
          <Tooltip title="ASP.NET">
            <Badge style={{ marginRight: "20px" }} pill bg="danger" > <BsMicrosoft /> </Badge>
          </Tooltip>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2016 - 2019"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<MdSchool />}
      >
        <h3 style={{ fontSize: "20px", textAlign: "center", paddingBottom: "10px" }}
          className="vertical-timeline-element-title"><Badge pill bg="dark" >
            HIGH SCHOOL <br /> DR. EDUARDO URZAIZ RODRIGUEZ</Badge></h3 >
        <h4 style={{ fontSize: "18px", textAlign: "center" }}
          className="vertical-timeline-element-subtitle">Izamal, Yucatán</h4>
        <p style={{ textAlign: "justify" }}>
          I worked for 3 years and 8 months at Dr.
          Eduardo Urzaiz Rodríguez High School in Izamal city.
          In the computer science department, I had been
          developed an automated school grading system for the
          generation of student reports. Using technologies such
          as C# and SQL Server. With a schedule from 8 a.m. to 3
          p.m., Monday to Friday.
        </p>
        <div style={{ textAlign: "center" }} className="iconSize">
          <Tooltip title="SQL SERVER">
            <Badge style={{ marginRight: "20px" }} pill bg="danger" > <SiMicrosoftsqlserver /> </Badge>
          </Tooltip>
          <Tooltip title="C#">
            <Badge style={{ marginRight: "20px" }} pill bg="danger" > <SiCsharp /></Badge>
          </Tooltip>
          <Tooltip title="SCRUM">
            <Badge style={{ marginRight: "20px" }} pill bg="danger" > <DiScrum /> </Badge>
          </Tooltip>
          <Tooltip title="AZURE">
            <Badge style={{ marginRight: "20px" }} pill bg="danger" > <SiMicrosoftazure /> </Badge>
          </Tooltip>
          <Tooltip title="VISUAL STUDIO CODE">
            <Badge style={{ marginRight: "20px" }} pill bg="danger" > <SiVisualstudiocode /> </Badge>
          </Tooltip>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2016 - 2019"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<MdRestaurant />}
      >
        <h3 style={{ fontSize: "20px", textAlign: "center", paddingBottom: "10px" }}
          className="vertical-timeline-element-title"><Badge pill bg="dark" > RESTAURANTS <br /> KINICH AND ZAMNA </Badge></h3>
        <h4 style={{ fontSize: "18px", textAlign: "center" }}
          className="vertical-timeline-element-subtitle">Izamal, Yucatán</h4>
        <p style={{ textAlign: "justify" }}>
          I worked for 3 years and 8 months at the
          Kinich and Zamna restaurants in Izamal city. In the IT
          department, I implemented a web platform for the
          services offered in these establishments. Using
          technologies such as Laravel and DynamoDB. With
          schedules from 12 p.m. to 8 p.m., from part-time only on
          Saturdays and Sundays.
        </p>
        <div style={{ textAlign: "center" }} className="iconSize">
          <Tooltip title="NUXT JS">
            <Badge style={{ marginRight: "20px" }} pill bg="danger" > <SiNuxtdotjs /> </Badge>
          </Tooltip>
          <Tooltip title="LARAVEL">
            <Badge style={{ marginRight: "20px" }} pill bg="danger" > <FaLaravel /> </Badge>
          </Tooltip>
          <Tooltip title="SCRUM">
            <Badge style={{ marginRight: "20px" }} pill bg="danger" > <DiScrum /> </Badge>
          </Tooltip>
          <Tooltip title="DYNAMODB">
            <Badge style={{ marginRight: "20px" }} pill bg="danger" > <SiAmazondynamodb /> </Badge>
          </Tooltip>
          <Tooltip title="TYPESCRIPT">
            <Badge pill bg="danger" > <SiTypescript /> </Badge>
          </Tooltip>
        </div>
      </VerticalTimelineElement>
      {/* premios y reconocimientos */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2019"
        iconStyle={{ background: 'rgb(255, 215, 0)', color: '#fff' }}
        icon={<FaMedal />}
      >
        <h3 style={{ fontSize: "20px", textAlign: "center", paddingBottom: "10px" }}
          className="vertical-timeline-element-title"><Badge pill bg="dark" >
            TrashDivider <br />  Integrative Projects
          </Badge></h3>
        <h4 style={{ fontSize: "18px", textAlign: "center" }}
          className="vertical-timeline-element-subtitle">
          Second place
        </h4>
        <p style={{ textAlign: "justify" }}>
          The Metropolitan Technological University academic project competition was celebrated.
          Our team developed a system focused on waste collection, dividing it into organic and inorganic.
          The objective was to automate a platform that allows updating the statistics of the amount by type of trash,
          through an IOT component that connects directly to the cloud in real-time. The technologies used were: Laravel,
          Arduino IDE and PostgreSQL. In 8 months to produce it, conformed by 4 members.
        </p>
        <div style={{ textAlign: "center" }} className="iconSize">
          <Tooltip title="POSTGRESQL">
            <Badge style={{ marginRight: "20px" }} pill bg="danger" > <SiPostgresql /> </Badge>
          </Tooltip>
          <Tooltip title="LARAVEL">
            <Badge style={{ marginRight: "20px" }} pill bg="danger" > <FaLaravel /> </Badge>
          </Tooltip>
          <Tooltip title="ARDUINO">
            <Badge pill bg="danger" > <SiArduino /> </Badge>
          </Tooltip>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2018"
        iconStyle={{ background: 'rgb(255, 215, 0)', color: '#fff' }}
        icon={<FaMedal />}
      >
        <h3 style={{ fontSize: "20px", textAlign: "center", paddingBottom: "10px" }}
          className="vertical-timeline-element-title"><Badge pill bg="dark" >
            OnlineFood <br /> Integrative Projects </Badge></h3>
        <h4 style={{ fontSize: "18px", textAlign: "center" }}
          className="vertical-timeline-element-subtitle">
          First Place
        </h4>
        <p style={{ textAlign: "justify" }}>
          The Technological University of the Center academic project competition was celebrated.
          Our team developed a web system that allows the restaurants
          "KINICH AND ZAMNA" to upload their menus, and galleries of the place,
          make a reservation to the customer, and see the inventory availability through a statistic (graphs).
          The technologies used were: Nuxt.js, Laravel, and DynamoDB. In a period of 24 months produce it, formed by 4 members.
        </p>
        <div style={{ textAlign: "center" }} className="iconSize">
          <Tooltip title="NUXT JS">
            <Badge style={{ marginRight: "20px" }} pill bg="danger" > <SiNuxtdotjs /> </Badge>
          </Tooltip>
          <Tooltip title="LARAVEL">
            <Badge style={{ marginRight: "20px" }} pill bg="danger" > <FaLaravel /> </Badge>
          </Tooltip>
          <Tooltip title="DYNAMODB">
            <Badge pill bg="danger" > <SiAmazondynamodb /> </Badge>
          </Tooltip>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element"
        iconStyle={{ background: 'red', color: '#fff' }}
        icon={<GiSandsOfTime />}
      />
    </VerticalTimeline>
    </>
  );
}
export default Experience;
