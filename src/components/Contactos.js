import Imagen from "./mapa.JPG";
import Facebook from "./facebook-.png";
import Telefono from "./telefono.png";
import WhatsApp from "./WhatsApp.png";
import "./Contactos.css";



const Contactos = ( )=>{
    return(
        <div className="contenedor">
       <a href="https://www.facebook.com/compasspointhomeschool" className="elemento"> <img className="img" src={Facebook}/></a>
       <div className="elemento"><a href="https://goo.gl/maps/YcW2uTRyCgz3BMiB9"> <img className="img" src={Telefono}/></a>  <p>(809)-222-8003</p> </div>
       <div className="elemento"><a href="https://www.whatsapp.com/"> <img className="img" src={WhatsApp}/></a><p>(829)-322-0337</p></div>
       <a href="https://goo.gl/maps/YcW2uTRyCgz3BMiB9" className="elemento"> <img className="img" src={Imagen}/></a>
       </div>
    )
}

export default Contactos;