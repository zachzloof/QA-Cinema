import React from 'react';
import { Container, Row, Col, Card, Button, CardGroup } from 'react-bootstrap';

export default function AboutPage() {
  return (
    <body style={{ marginLeft: "8%", marginRight: "auto"}}>
      <Container >
        <Row>
          <Col>
            <h1><center> About Us </center></h1>
          </Col>
        </Row>
      </Container>

      <Row><br /></Row>

      <Container>
        <Row style={{ width: '90%' }}>
          <Card >
            <Card.Header as="h5">Back-End</Card.Header>
            <Card.Body>
              <Card.Title>Zachary Zloof</Card.Title>
              <Card.Text>
                Hi I'm Zach and I Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sem sem, lobortis sit amet neque sed, ultricies ornare eros. Duis semper semper mi. Donec tristique vulputate neque at bibendum. Vivamus mollis orci vel sem cursus, nec luctus eros tincidunt. Praesent quis erat pretium, rhoncus mi ut, maximus risus. Nulla blandit rhoncus consequat. Donec nec purus nec diam faucibus laoreet. Integer consequat, libero eget aliquet bibendum, libero orci vehicula ligula, nec molestie ante lacus id lacus. Pellentesque laoreet magna vitae semper pretium. Aliquam id varius ex. Ut vel scelerisque lacus. Nulla suscipit imperdiet convallis.
              </Card.Text>
              <Button variant="info" href='https://www.linkedin.com/in/zach-zloof-a3a151236/' >Linked-In</Button>
              <Button variant="dark" href='https://github.com/zachzloof'>GitHub</Button>
            </Card.Body>
          </Card>
        </Row>
        <Row style={{ width: '90%' }}>
          <Card>
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
        <Row>
          <Card style={{ width: '90%' }}>
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
        <Row>
          <Card style={{ width: '90%' }}>
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
      </Container>

      <Container>

      </Container>

    </body >
  );
}