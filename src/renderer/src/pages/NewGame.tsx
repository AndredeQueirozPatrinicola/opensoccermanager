
import { NavMainMenu } from "@renderer/components/NavMainMenu"
import { Link } from "react-router-dom"
import { NavbarInv } from "@renderer/components/NavbarInv"

import { NewGameMenu } from "@renderer/components/NewGameMenu"

export const NewGame = () => {

    return (
        <section className="bg-gray-500 h-[100vh] flex flex-col items-center justify-center">
            <NavbarInv to="/" />
            <NewGameMenu/>
        </section>
    )
}