import { Col, Row } from "react-bootstrap";
import Tooltip from '@mui/material/Tooltip';
import { AiFillHtml5 } from "react-icons/ai";
import { SiVite,SiCsharp, SiNuxtdotjs, SiTypescript } from "react-icons/si";
import { DiCss3, DiMysql, DiCodeigniter } from "react-icons/di";
import { FaLaravel } from "react-icons/fa";
import {
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiBootstrap
} from "react-icons/di";
import { useState } from "react";
import DialogModal from "./DialogModal";

function Techstack() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);
  const [open8, setOpen8] = useState(false);
  const [open9, setOpen9] = useState(false);
  const [open10, setOpen10] = useState(false);
  const [open11, setOpen11] = useState(false);
  const [open12, setOpen12] = useState(false);
  const [open13, setOpen13] = useState(false);
  const [open14, setOpen14] = useState(false);
  return (

    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/*                        modals                    */}
      <>
        <DialogModal
          state={open}
          onHide={() => setOpen(false)}
          title={"CSS"}
          description="Cascading Style Sheets, called CSS,
          is a design language intended to simplify the process of making web pages presentable.
          Handles the look and feel part of a web page. You can control the color of the text, 
          the style of fonts, the spacing between paragraphs, how columns are sized and laid out, what background images or colors are used, 
          layout designs,variations in display for different devices, and screen sizes."
        />
        <DialogModal
          state={open1}
          onHide={() => setOpen1(false)}
          title={"HTML"}
          description="HTML (stands for Hypertext Markup Language) is a computer language that makes up most web pages and online applications. 
          A hypertext is a text that is used to reference other pieces of text,
          while a markup language is a series of markings that tells web servers the style and structure of a document."
        />
        <DialogModal
          state={open2}
          onHide={() => setOpen2(false)}
          title={"TYPESCRIPT"}
          description="TypeScript is a superset of typed JavaScript (optional) that can help build and manage large-scale JavaScript projects. 
          It can be considered JavaScript with additional features like strong static typing, compilation, and object-oriented programming."
        />
        <DialogModal
          state={open3}
          onHide={() => setOpen3(false)}
          title={"NODE JS"}
          description="Node.js is an open-source, cross-platform, 
          back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser, 
          which was designed to build scalable network applications. "
        />
        <DialogModal
          state={open4}
          onHide={() => setOpen4(false)}
          title={"REACT JS"}
          description="React makes it painless to create interactive UIs. 
          Design simple views for each state in your application,
          and React will efficiently update and render just the right components when your data changes."
        />
        <DialogModal
          state={open5}
          onHide={() => setOpen5(false)}
          title={"NUXT JS"}
          description="Nuxt.js is a framework for creating Vue.js applications.
          Its goal is to help Vue developers take advantage of top-notch technologies, fast, easy and in an organized way."
        />
        <DialogModal
          state={open6}
          onHide={() => setOpen6(false)}
          title={"MYSQL"}
          description="MySQL is a relational database management system (RDBMS) developed by Oracle that is based on structured query language (SQL)."
        />
        <DialogModal
          state={open7}
          onHide={() => setOpen7(false)}
          title={"MONGODB"}
          description="MongoDB is a document database that offers great scalability and flexibility, and an advanced query and indexing model."
        />
        <DialogModal
          state={open8}
          onHide={() => setOpen8(false)}
          title={"GIT"}
          description="Git is a free and open source distributed version control system designed to handle 
          everything from small to very large projects with speed and efficiency."
        />
        <DialogModal
          state={open9}
          onHide={() => setOpen9(false)}
          title={"PYTHON"}
          description="Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. 
          Its high-level built in data structures, combined with dynamic typing and dynamic binding, 
          make it very attractive for Rapid Application Development."
        />
        <DialogModal
          state={open10}
          onHide={() => setOpen10(false)}
          title={"LARAVEL"}
          description="Laravel is a free and open-source PHP framework that provides a set of tools and resources to build modern PHP applications.
           With a complete ecosystem leveraging its built-in features, and a variety of compatible packages and extensions."
        />
        <DialogModal
          state={open11}
          onHide={() => setOpen11(false)}
          title={"VITE JS"}
          description="Vite. js is a rapid development tool for modern web projects. 
          It focuses on speed and performance by improving the development experience. 
          Vite uses native browser ES imports to enable support for modern browsers without a build process."
        />
        <DialogModal
          state={open12}
          onHide={() => setOpen12(false)}
          title={"BOOTSTRAP"}
          description="Bootstrap is a free and open-source web development framework. 
          It’s designed to ease the web development process of responsive, 
          mobile-first websites by providing a collection of syntax for template designs."
        />
        <DialogModal
          state={open13}
          onHide={() => setOpen13(false)}
          title={"CODEIGNITER"}
          description="CodeIgniter is a powerful PHP framework with a very small footprint, 
          built for developers who need a simple and elegant toolkit to create full-featured web applications."
        />
        <DialogModal
          state={open14}
          onHide={() => setOpen14(false)}
          title={"C#"}
          description="C# is a simple, modern, and an object-oriented programming language. 
          The purpose of C# was to develop a programming language that is not only easy to learn but also supports 
          modern day functionality for all kind of software development."
        />
      </>
      {/*                                       list                                                */}
      <Tooltip title="TYPESCRIPT">
        <Col xs={4} md={2} className="tech-icons" onClick={() => setOpen2(true)}>
          <SiTypescript />
          <p className="purple" style={{ fontSize: "15px" }}>TYPESCRIPT</p>
        </Col>
      </Tooltip>
      <Tooltip title="VITE JS"><Col xs={4} md={2} className="tech-icons" onClick={() => setOpen11(true)} >
        <SiVite />
        <p className="purple" style={{ fontSize: "15px" }}>VITE JS</p>
      </Col>
      </Tooltip>
      <Tooltip title="NODE JS">
        <Col xs={4} md={2} className="tech-icons" onClick={() => setOpen3(true)} >
          <DiNodejs />
          <p className="purple" style={{ fontSize: "15px" }}>NODE JS</p>
        </Col>
      </Tooltip>
      <Tooltip title="REACT JS">
        <Col xs={4} md={2} className="tech-icons" onClick={() => setOpen4(true)} >
          <DiReact />
          <p className="purple" style={{ fontSize: "15px" }}>REACT JS</p>
        </Col>
      </Tooltip>
      <Tooltip title="NUXT JS">
        <Col xs={4} md={2} className="tech-icons" onClick={() => setOpen5(true)} >
          <SiNuxtdotjs />
          <p className="purple" style={{ fontSize: "15px" }}>NUXT JS</p>
        </Col>
      </Tooltip>
      <Tooltip title="MYSQL"><Col xs={4} md={2} className="tech-icons" onClick={() => setOpen6(true)} >
        <DiMysql />
        <p className="purple" style={{ fontSize: "15px" }}>MYSQL</p>
      </Col>
      </Tooltip>
      <Tooltip title="MONGODB"><Col xs={4} md={2} className="tech-icons" onClick={() => setOpen7(true)} >
        <DiMongodb />
        <p className="purple" style={{ fontSize: "15px" }}>MONGODB</p>
      </Col>
      </Tooltip>
      <Tooltip title="GIT"><Col xs={4} md={2} className="tech-icons" onClick={() => setOpen8(true)} >
        <DiGit />
        <p className="purple" style={{ fontSize: "15px" }}>GIT</p>
      </Col>
      </Tooltip>
      <Tooltip title="PYTHON"><Col xs={4} md={2} className="tech-icons" onClick={() => setOpen9(true)} >
        <DiPython />
        <p className="purple" style={{ fontSize: "15px" }}>PYTHON</p>
      </Col>
      </Tooltip>
      <Tooltip title="LARAVEL"><Col xs={4} md={2} className="tech-icons" onClick={() => setOpen10(true)} >
        <FaLaravel />
        <p className="purple" style={{ fontSize: "15px" }}>Laravel</p>
      </Col>
      </Tooltip>
      <Tooltip title="BOOTSTRAP"><Col xs={4} md={2} className="tech-icons" onClick={() => setOpen12(true)} >
        <DiBootstrap />
        <p className="purple" style={{ fontSize: "15px" }}>BOOTSTRAP</p>
      </Col>
      </Tooltip>
      <Tooltip title="CODEIGNITER"><Col xs={4} md={2} className="tech-icons" onClick={() => setOpen13(true)} >
        <DiCodeigniter />
        <p className="purple" style={{ fontSize: "15px" }}>CODEIGNITER</p>
      </Col>
      </Tooltip>
      <Tooltip title="C#"><Col xs={4} md={2} className="tech-icons" onClick={() => setOpen14(true)} >
        <SiCsharp />
        <p className="purple" style={{ fontSize: "15px" }}>C#</p>
      </Col>
      </Tooltip>
      <Tooltip title="CSS" >
        <Col xs={4} md={2} className="tech-icons" onClick={() => setOpen(true)}>
          <DiCss3 />
          <p className="purple" style={{ fontSize: "15px" }}>CSS</p>
        </Col>
      </Tooltip>
      <Tooltip title="HTML">
        <Col xs={4} md={2} className="tech-icons" onClick={() => setOpen1(true)} >
          <AiFillHtml5 />
          <p className="purple" style={{ fontSize: "15px" }}>HTML</p>
        </Col>
      </Tooltip>
    </Row>
  );
}

export default Techstack;
