import './boton-favorito.css';
/**
 * @author Leonel Contreras
 * @param {boolean} esFavorito
 * @param {Function} onClick  
 * @returns {JSX.Element}
 */

type BotonProps = {
    esFavorito:boolean;
    onClick:any;
}

const ButtonFav = ({esFavorito, onClick}:BotonProps): JSX.Element => {
    const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png"

    return <div className="boton-favorito">
        <img src={src} alt={"favorito"} onClick={onClick} />
    </div>
}

export default ButtonFav;