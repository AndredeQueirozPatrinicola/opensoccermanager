import { Link } from "react-router-dom"




export const NavbarInv = ({to}) => {

    return (
        <nav className="flex items-center">
            <Link to={to}>
                Voltar
            </Link>
        </nav>
    )
}