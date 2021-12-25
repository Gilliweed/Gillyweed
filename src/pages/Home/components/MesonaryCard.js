import react,{useState} from 'react';
import Card from 'react-bootstrap/Card';

const MCard=({image,alt,title,text})=>{
    const[filter,setFilter] = useState(false);
    return(
        <>
            <Card >
                <Card.Img src={image} alt={alt}/>
                {/* <Card.ImgOverlay className="justify-center">
                    <Card.title onMouseEnter={()=>setFilter(!filter)} onMouseLeave={()=>setFilter(!filter)}>{title}</Card.title>
                    {filter?<Card.Text>{text}</Card.Text>:null}
                </Card.ImgOverlay> */}
                {}
                {text}
            </Card>
        </>
    );
}

export default MCard;