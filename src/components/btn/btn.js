
import { Link } from "react-router-dom"; 
const Btn= ({link,title,styles})=>{
    return(<>
        <Link to={link} style={{ textDecoration: 'none' }}>
        <button type="button" className= { ( styles ? styles : "")+ " rounded-full py-2 px-3 hover:-translate-y-1 border-2" }>
             {title}
        </button>
    </Link>
    </>
     
    );
}
export default Btn;