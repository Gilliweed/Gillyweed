import { Button, Card } from 'react-bootstrap';
import { ShoppingCartOutlined } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
const TopRatingCard = (data) => {
  return (
    <div>
      <Card
        className=" text-dark border-0"
        style={{
          width: '100%',
          height: '17rem',
          // boxShadow: '5px 5px 5px  grey',
        }}
      >
        <NavLink to={`/productDesc/${data._id}`}  exact>
          <Card.Img
            className=" text-dark border-0"
            src={data.img}
            alt="Card image"
            style={{ width: '100%', height: '11rem' }}
          />

          <Card.ImgOverlay className=" text-dark border-0">
            <Card.Title>{data.para}</Card.Title>
          </Card.ImgOverlay>
        </NavLink>
        <Card className=" text-dark border-0">
          <Card.Title>{data.head}</Card.Title>

          <Button variant="outline-success">
            <ShoppingCartOutlined /> Add
          </Button>
        </Card>
      </Card>
    </div>
  );
};
export default TopRatingCard;
