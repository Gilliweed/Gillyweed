import react,{useState} from 'react';
import Card from 'react-bootstrap/Card';
import './css/mesonaryCard.css'
const MCard=({image,alt,title,text})=>{
    const[filter,setFilter] = useState(false);
    return(
        <>
       <div id="app" class="bg-white w-128 h-60 rounded shadow-md flex card text-grey-darkest">
            <img class="w-1/2 h-full rounded-l-sm" src="https://bit.ly/2EApSiC" alt="Room Image"/>
            <div class="w-full flex flex-col">
                <div class="p-4 pb-0 flex-1">
                    <h3 class="font-light mb-1 text-grey-darkest">Tower Hotel</h3>
                    <div class="text-xs flex items-center mb-4">
                        <i class="fas fa-map-marker-alt mr-1 text-grey-dark"></i>
                        Soho, London
                    </div>
                    <span class="text-5xl text-grey-darkest">£63.00<span class="text-lg">/PPPN</span></span>
                    <div class="flex items-center mt-4">
                        <div class="pr-2 text-xs">
                            <i class="fas fa-wifi text-green"></i> Free WiFi
                        </div>
                        <div class="px-2 text-xs">
                            <i class="text-grey-darker far fa-building"></i> 2mins to center
                        </div>
                    </div>
                </div>
                <div class="bg-grey-lighter p-3 flex items-center justify-between transition hover:bg-grey-light">
                    Book Now
                    <i class="fas fa-chevron-right"></i>
                </div>
            </div>
        </div>
        </>
    );
}

export default MCard;