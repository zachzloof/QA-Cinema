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
                Hi I'm Zach and I Ut metus erat, faucibus in mauris aliquam, gravida sagittis est. Cras pellentesque justo lorem, in elementum leo accumsan a. Maecenas fermentum a risus non fringilla. Mauris volutpat finibus tortor, at commodo nisi vestibulum et. Aenean vitae pellentesque orci. Nulla ante tellus, dictum nec gravida quis, accumsan ut mauris. Morbi dignissim, libero eget tempor varius, sapien lorem porttitor ipsum, eu dictum ex metus eget neque. Sed placerat, lacus nec gravida commodo, magna lectus aliquet tortor, in semper neque libero blandit nibh. Donec vulputate ac nisl id iaculis. Morbi tincidunt nisl vel est tempus, ac gravida dui pulvinar. Quisque eu efficitur dolor.
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
                Hi I'm Shamil and I Ut metus erat, faucibus in mauris aliquam, gravida sagittis est. Cras pellentesque justo lorem, in elementum leo accumsan a. Maecenas fermentum a risus non fringilla. Mauris volutpat finibus tortor, at commodo nisi vestibulum et. Aenean vitae pellentesque orci. Nulla ante tellus, dictum nec gravida quis, accumsan ut mauris. Morbi dignissim, libero eget tempor varius, sapien lorem porttitor ipsum, eu dictum ex metus eget neque. Sed placerat, lacus nec gravida commodo, magna lectus aliquet tortor, in semper neque libero blandit nibh. Donec vulputate ac nisl id iaculis. Morbi tincidunt nisl vel est tempus, ac gravida dui pulvinar. Quisque eu efficitur dolor.
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
                Hi I'm Owen and I Donec a enim eleifend, cursus odio et, ullamcorper ipsum. Curabitur facilisis diam sed ultrices fermentum. In cursus felis urna, eget ultrices nisl suscipit ac. Integer porta facilisis ante sit amet dictum. Proin sagittis turpis lorem, vel iaculis diam elementum ut. Cras feugiat vestibulum urna, tempor cursus eros. Etiam dolor sapien, ultrices quis aliquam sit amet, tempor at ipsum. Nunc nulla arcu, tincidunt nec blandit sit amet, suscipit nec felis.
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
                Hi I'm JD and I Praesent mattis ultricies mi ut rhoncus. Vivamus ex ex, mattis id ornare ut, condimentum ullamcorper orci. In posuere ultrices eleifend. Vestibulum hendrerit ante vel posuere mattis. Proin id molestie nunc. Aenean auctor, turpis sit amet aliquet scelerisque, ex lacus interdum quam, ut dictum felis purus vel nisi. Ut varius nibh sit amet cursus congue.
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