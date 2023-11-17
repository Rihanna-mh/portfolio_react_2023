import Card from 'react-bootstrap/Card';
import './index.css';

function JobExp(props){
  return (
    <div id="jobDiv" className="row col-lg-5 col-sm-10">
    <Card id="job" className="border-dark bg-light rounded-5" >
      <Card.Body>
        <Card.Title><h3>{props.companyName}</h3></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.timePeriod}</Card.Subtitle>
        <Card.Subtitle className="mb-2"><h4>{props.role}</h4></Card.Subtitle>
        <Card.Text>
          <ul id="jobdesc">
            <li>Some quick example text to build on the card title and make up the bulk of the card's content.</li>
            <li>Some quick example text to build on the card title and make up the bulk of the card's content.</li>
            <li>Some quick example text to build on the card title and make up the bulk of the card's content.</li>
            <li>Some quick example text to build on the card title and make up the bulk of the card's content.</li>
          </ul>
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </div>
  );
}

export default JobExp;