import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './index.css';

function Cert(props) {
  return (
    <div id="certDiv" className="row col-lg-5 col-sm-10">
    <Card style={{ width: '35rem' }}>
      <Card.Img variant="top" src={props.certimgsrc} height="400" />
      <Card.Body>
        <Card.Title>{props.certTitle}</Card.Title>
        <Card.Text>
          {props.certText}
        </Card.Text>
        <Button variant="dark">Live Link</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Cert;