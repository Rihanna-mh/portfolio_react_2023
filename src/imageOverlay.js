import Card from 'react-bootstrap/Card';
import './index.css';

function ImgOverlay(props) {
  return (
    <div className="imageoverlay bg-dark">
    <Card className="bg-dark text-white">
      <Card.Img src={props.imgsrc} alt="Card image"/> 
      <Card.ImgOverlay>
        <Card.Title id={props.imgid}><h2>{props.card_title}</h2></Card.Title>
        <Card.Text>
          {props.card_text}
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    </div>
  );
}

export default ImgOverlay;