
import { Link } from "react-router-dom"


export const NavMainMenu = () => {
    const handleQuit = () => {
        window.electron.ipcRenderer.send('quit-app')
    }

    return (
        <div className="flex min-h-10 p-4 text-lg text-slate-300 m-auto border-2 rounded-lg shadow-2xl border-slate-400 w-1/3 justify-around items-center">
            <Link to="/v1/new-game" className="hover:cursor-pointer">
                New Game
            </Link>
            <Link to="/v1/load-game" className="hover:cursor-pointer">
                Load Game
            </Link>
            <Link to="/v1/settings" className="hover:cursor-pointer">
                Settings
            </Link>
            <div onClick={handleQuit} className="hover:cursor-pointer">
                Quit
            </div>
        </div>
    )
}