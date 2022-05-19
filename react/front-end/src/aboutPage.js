import React from 'react';
import { Container, Row, Col, Card, Button, CardGroup } from 'react-bootstrap';

export default function AboutPage() {
  return (
    <body style={{ marginTop: '20px', marginLeft: '6%' }}>

      <h1><center> About Us </center></h1>

      <div style={{ margin: '5%' }}>
        <Row>
          <Card style={{ width: '90%', marginLeft: '5%' }}>
            <Card.Header as="h5">Back-End</Card.Header>
            <Card.Body>
              <Card.Title>Zachary Zloof</Card.Title>
              <Card.Text>
                I was the lead back-end programmer on this project, I was responsible for the login, forum, booking, email system, payment, search functionality and testing proceedures for the project. I was responsible for the Jira board and took on the role as scrum master, which involved overseeing the project and allocating tasks.
              </Card.Text>
              <Button variant="info" href='https://www.linkedin.com/in/zach-zloof-a3a151236/' >Linked-In</Button>
              <Button variant="dark" href='https://github.com/zachzloof'>GitHub</Button>
            </Card.Body>
          </Card>
        </Row>

        <Row><br /></Row>

        <Row>
          <Card style={{ width: '90%', marginLeft: '5%' }}>
            <Card.Header as="h5">Front-End</Card.Header>
            <Card.Body>
              <Card.Title>Syed Shamil Ali</Card.Title>
              <Card.Text>
              Hi, I’m Shamil and I am the lead front-end developer. I was responsible for making the homepage, which included a brief ‘Now Showing’ and a ‘Coming Soon’ feature. I also took control of the ‘Getting There’, 'About Us' and the ‘Screens’ page, as well and styling the whole website on pages that had not been so. I implemented bootstrap into the forms and created a Logo for the company.
              </Card.Text>
              <Button variant="info" href='https://www.linkedin.com/in/syed-shamil-ali-137851146/'>Linked-In</Button>
              <Button variant="dark" href='https://github.com/shamil-ali'>GitHub</Button>
            </Card.Body>
          </Card>
        </Row>

        <Row><br /></Row>

        <Row>
          <Card style={{ width: '90%', marginLeft: '5%' }}>
            <Card.Header as="h5">UX Designer</Card.Header>
            <Card.Body>
              <Card.Title>Owen Cornock</Card.Title>
              <Card.Text>
              Hi, my name is Owen, I’m a frontend programmer took control of the Navbar, upcoming listings and things to do around the area. This included styling the pages to add some visually pleasing aspects.
              </Card.Text>
              <Button variant="info" href='https://www.linkedin.com/in/owen-cornock-090a6413b/'>Linked-In</Button>
              <Button variant="dark" href='https://github.com/owencornock'>GitHub</Button>
            </Card.Body>
          </Card>
        </Row>

        <Row><br /></Row>

        <Row>
          <Card style={{ width: '90%', marginLeft: '5%' }}>
            <Card.Header as="h5"> DevOps </Card.Header>
            <Card.Body>
              <Card.Title>JD Bonapos</Card.Title>
              <Card.Text>
              Hey I'm JD, I was assigned lead DevOps operator for our project with the aim of enhancing our workflow and unifying the front and back-end elements of our project. My main responsibilities included creating the movie listings and classification pages as well as general product documentation.
              </Card.Text>
              <Button variant="info" href='https://www.linkedin.com/in/john-bonapos-292890228/'>Linked-In</Button>
              <Button variant="dark" href='https://github.com/jdbonapos1'>GitHub</Button>
            </Card.Body>
          </Card>
        </Row>
      </div>

      <Container style={{ margin: '5%', width: '90%', textAlign: 'center', backgroundColor: '#695cfe', color: 'black' }} >
        <div style={{ margin: '5%' }}>
        <h1> Scrum Methodology </h1>
        <br />
          <p>
            <a href='https://www.scrum.org/'>Scrum</a> is a widely adopted agile framework used by teams for complex product development. The main purpose for Scrum is to approach the development process in a way where an initial functional product is produced and then continuously constructed in increments until the end target is achieved. Scrum implements three main elements: to reduce complexity, monitor/adapt to current progress and increase transparency within the team.
          </p>
          <p>
            We collectively agreed on implementing a scrum methodology to allow us to achieve flexibility and maximise work efficiency. We nominated Zach as our scrum leader to assign tasks and oversee current progress. To manage our workload, we split the project into two five-day sprints. During these sprints we would hold regular meetings and provide continuous feedback on our code. This allowed us to set the pace we were working and control the flow of tasks without being burnt out.
          </p>
          <p>
            We initiated Jira as our Kanban board, here we created a product backlog of issues and user stories within each sprint making sure to implement AGILE fundamentals. We would then proceed with our assigned tasks and move them across the project board once “under progress” or “done”. Utilizing a scrum proved extremely beneficial to ensuring the MVP for our Cinema Project was met. It allowed us to effectively monitor our progress, manage our workload and ultimately ensure a functional Cinema website was continuously developed through each stage.
          </p>
        </div>
      </Container>
    </body >
  );
}