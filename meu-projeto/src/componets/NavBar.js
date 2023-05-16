import { Link } from "react-router-dom";
function NavBar() {
    return(
        <ul>
        <li>
          <link to="/">Home</link>
          </li>
          <li>
          <link to="empresa">Empresa</link>
         </li>
         <li>
         <link to="contato">Contato</link>
         </li>
         </ul>  

    )
};

export default NavBar