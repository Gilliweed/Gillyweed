import react,{useState} from 'react';
import Card from 'react-bootstrap/Card';
import './css/mesonaryCard.css'
const MCard=({image,alt,title,text})=>{
    const[filter,setFilter] = useState(false);
    return(
        <>
            <Card  className="home-mesonary-card rounded-lg" style={{backgroundImage: "url(" + image + ")"}}>
                {/* <Card.Img src={image} alt={alt}  /> */}
                <Card.ImgOverlay className="justify-center" onMouseEnter={()=>setFilter(!filter)} onMouseLeave={()=>setFilter(!filter)} className="home-mesonary-card-image">
                    <Card.Title className="text-light" >{title}</Card.Title>
                    {filter?<Card.Text className="text-light">{text}</Card.Text>:null}
                </Card.ImgOverlay> 
            </Card>
        </>
    );
}

export default MCard;