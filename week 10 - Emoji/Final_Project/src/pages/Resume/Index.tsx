import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { Card, CardMedia, Tooltip } from "@mui/material";
import Footer from "@/components/Footer";
function Index() {
	const [width, setWidth] = useState(1200);

	useEffect(() => {
		setWidth(window.innerWidth);
	}, [width]);

	return (
		<div>
			<Container fluid className="resume-section">
				<Row style={{ justifyContent: "center", position: "relative" }}>
					<h1 className="project-heading">
						<strong className="purple">Resume</strong>
					</h1>
				</Row>

				<Row className="resume">
					<Card sx={{ maxWidth: 824 }}>
						<CardMedia
							className="cardmedia"
							component="iframe"
							height="1056px"
							src="https://drive.google.com/file/d/1RpAqZ38uLXRpznytLuUDe2ZU3x6604Ns/preview"
						/>
					</Card>
				</Row>

				<Row style={{ justifyContent: "center", position: "relative" }}>
					<Tooltip title="CLICK ME"><a href='/resume.pdf' download><Button
						variant="primary"
						style={{ maxWidth: "250px" }}
					>
						<AiOutlineDownload />
						&nbsp;Download Resume
					</Button></a></Tooltip>
				</Row>
				{/*                                 MASTER                                                 */}
				<Row style={{ justifyContent: "center", position: "relative" }}>
					<h1 className="project-heading">
						<strong className="purple">The constancy of completion <br />of the master's degree.</strong>
					</h1>
				</Row>
				<Row className="resume">
					<Card sx={{ maxWidth: 824 }}>
						<CardMedia
							className="cardmedia"
							component="iframe"
							height="1056px"
							src="https://drive.google.com/file/d/1juCBzvZMNnle39dyitxPO170Zxl2uyRr/preview"
						/>
					</Card>
				</Row>

				<Row style={{ justifyContent: "center", position: "relative" }}>
					<Tooltip title="CLICK ME"><a href='/master.pdf' download><Button
						variant="primary"
						style={{ maxWidth: "250px" }}
					>
						<AiOutlineDownload />
						&nbsp;Download Constancy
					</Button></a></Tooltip>
				</Row>
				{/*                                 English                                                 */}
				<br />
				<Row style={{ justifyContent: "center", position: "relative" }}>
					<h1 className="project-heading">
						<strong className="purple">Certificate B2 Upper Intermediate </strong>
					</h1>
				</Row>

				<Row className="resume">
					<Card sx={{ maxWidth: 824 }}>
						<CardMedia
							className="cardmedia"
							component="iframe"
							height="1056px"
							src="https://drive.google.com/file/d/13ZjJE3Q6cCs65sKUoXotzOlOSlbbUSzM/preview"
						/>
					</Card>
				</Row>

				<Row style={{ justifyContent: "center", position: "relative" }}>
					<Tooltip title="CLICK ME"><a href='/b2.pdf' download><Button
						variant="primary"
						style={{ maxWidth: "250px" }}
					>
						<AiOutlineDownload />
						&nbsp;Download Certificate
					</Button></a></Tooltip>
				</Row>
				{/*                                 certificates                                                 */}
				<br />
				<Row style={{ justifyContent: "center", position: "relative" }}>
					<h1 className="project-heading">
						<strong className="purple"> My Certificates </strong>
					</h1>
				</Row>

				<Row className="resume">
					<Card sx={{ maxWidth: 824 }}>
						<CardMedia
							className="cardmedia"
							component="iframe"
							height="1056px"
							src="https://drive.google.com/file/d/1A0Xb2EhSVRTg6Oe67veDHPjNDZCpk_5u/preview"
						/>
					</Card>
				</Row>

				<Row style={{ justifyContent: "center", position: "relative" }}>
					<Tooltip title="CLICK ME"><a href='/certificates.pdf' download><Button
						variant="primary"
						style={{ maxWidth: "250px" }}
					>
						<AiOutlineDownload />
						&nbsp;Download Certificates
					</Button></a></Tooltip>
				</Row>
			</Container>
			<Footer /> 
		</div>
	);
}

export default Index;