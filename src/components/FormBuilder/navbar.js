import './navbar.css'

export default function Navbar(){
    return (
        <div className='groupe'>
        <nav>
            <ul className='liste'>
                    <li className='items'> <img className='logoece'height="24px" src={"https://upload.wikimedia.org/wikipedia/fr/thumb/2/2d/ECE_LOGO_2021_web.png/1200px-ECE_LOGO_2021_web.png"} alt=""/></li>
                    <li className='items'><img className='logoece' height="18px"src={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/CGI_logo.svg/2560px-CGI_logo.svg.png"} alt=""/></li>
                     <a className="lien" href="./Home.js"><li className="items">Accueil</li></a>
                    <a className="lien" href="../../Visualiser.js"><li className="items">Compte</li></a>
             </ul>
        </nav>
        <div className='groupe_titre'>
        <h1 className='titre'>Questionnaire sécurisé</h1>
        </div>
        </div>
    )
}