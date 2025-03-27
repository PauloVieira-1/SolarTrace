import { useState } from "react";
import { Accordion, Button, Card, Col, Container, Row } from "react-bootstrap";

const courses = [
	{
		id: 1,
		title: "Introduction to Solar Energy",
		description: "Learn the basics of solar energy and its benefits.",
		duration: "2 minutes",
		level: "Beginner",
		videoUrl: "https://youtube.com/embed/YS9Ot6HRSko?si=UFwVHwi3vDfBrlQm", // Replace with actual video URL
	},
	{
		id: 2,
		title: "Solar Panel Installation",
		description: "A quick guide on how to install solar panels.",
		duration: "3 minutes",
		level: "Intermediate",
		videoUrl: "https://www.youtube.com/embed/wr_rwlDcAEs?si=UYRfVJyhEHJJjJ4P", // Replace with actual video URL
	},
	{
		id: 3,
		title: "Understanding Solar Inverters",
		description: "Learn about the role of inverters in solar systems.",
		duration: "2 minutes",
		level: "Advanced",
		videoUrl: "https://www.youtube.com/embed/lv9CQezVHBw?si=v4SYVYFI_dV0uQiF", // Replace with actual video URL
	},
	{
		id: 4,
		title: "Solar Battery Storage",
		description: "Discover how solar batteries work and their advantages.",
		duration: "3 minutes",
		level: "Advanced",
		videoUrl: "https://www.youtube.com/embed/-FBJzNqQloI?si=hWoCc4TrwHtZEfpD", // Replace with actual video URL
	},
	{
		id: 5,
		title: "Benefits of Solar Energy",
		description: "Explore the environmental and economic benefits of solar energy.",
		duration: "2 minutes",
		level: "Beginner",
		videoUrl: "https://www.youtube.com/embed/ecyUvTDIxU0?si=EvA4pBLmUDAPiLlD", // Replace with actual video URL
	},
];

export default function Course() {
	const [selectedCourseIndex, setSelectedCourseIndex] = useState(0); // Track the index of the selected course

	const handleSelectCourse = (index: number) => {
		setSelectedCourseIndex(index);
	};

	const handleNextCourse = () => {
		if (selectedCourseIndex < courses.length - 1) {
			setSelectedCourseIndex(selectedCourseIndex + 1);
		}
	};

	const handlePrevCourse = () => {
		if (selectedCourseIndex > 0) {
			setSelectedCourseIndex(selectedCourseIndex - 1);
		}
	};

	const selectedCourse = courses[selectedCourseIndex]; // Get the currently selected course

	return (
		<Container fluid className="p-3">
			<Row>
				<Col md={3}>
					<Card className="mb-3">
						<Card.Header as="h5">Course List</Card.Header>
						<Accordion defaultActiveKey="0">
							{courses.map((course, index) => (
								<Accordion.Item eventKey={index.toString()} key={course.id}>
									<Accordion.Header onClick={() => handleSelectCourse(index)}>{course.title}</Accordion.Header>
									<Accordion.Body>
										<Card.Text>{course.description}</Card.Text>
										<Card.Text>
											<strong>Duration:</strong> {course.duration}
										</Card.Text>
										<Card.Text>
											<strong>Level:</strong> {course.level}
										</Card.Text>
									</Accordion.Body>
								</Accordion.Item>
							))}
						</Accordion>
					</Card>
					<Card className="mt-3">
						<Card.Header as="h5">Course Details</Card.Header>
						<Card.Body>
							<Card.Title>{selectedCourse.title}</Card.Title>
							<Card.Text>{selectedCourse.description}</Card.Text>
							<Card.Text>
								<strong>Duration:</strong> {selectedCourse.duration}
							</Card.Text>
							<Card.Text>
								<strong>Level:</strong> {selectedCourse.level}
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col md={9}>
					<div className="h-75 m-1 rounded">
						<iframe
							className="h-100"
							width="100%"
							src={selectedCourse.videoUrl}
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						></iframe>
					</div>
					<div className="d-flex justify-content-between mt-3">
						<Button variant="secondary" onClick={handlePrevCourse} disabled={selectedCourseIndex === 0}>
							Previous
						</Button>
						<Button
							variant="secondary"
							onClick={handleNextCourse}
							disabled={selectedCourseIndex === courses.length - 1}
						>
							Next
						</Button>
					</div>
				</Col>
			</Row>
		</Container>
	);
}
