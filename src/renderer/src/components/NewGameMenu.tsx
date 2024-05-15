import { useState } from "react"
import { Link } from "react-router-dom"


type NewGameFormState = {
    saveName: string,
    managerName: string,
    managerCountry: string,
    teamCountry: string,
    teamLeague: string,
    team:string
}


export const NewGameMenu = () => {
    const [formState, setFormState] = useState({} as NewGameFormState)

    const handleFormChange = (e) => {
        setFormState((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleNext = (e) => {
        console.log(e.target)
    }

    return (
        <form className="flex w-[60vw] m-auto border-2">
            <div className="flex flex-col w-1/2 border-2">
                <div
                    className="flex justify-center p-5"
                >
                    <input
                        placeholder="Nome do save"
                        className="w-[90%] p-2 rounded-md"
                        name="saveName"
                        value={formState.saveName}
                        onChange={handleFormChange}
                    ></input>
                </div>
                <div
                    className="flex justify-center p-5"
                >
                    <input
                        placeholder="Nome do treinador"
                        className="w-[90%] p-2 rounded-md"
                        name="managerName"
                        value={formState.managerName}
                        onChange={handleFormChange}
                    ></input>
                </div>
                <div
                    className="flex justify-center p-5"
                >
                    <select
                        className="w-[90%] p-2 rounded-md"
                        name="managerCountry"
                        onChange={handleFormChange}
                    >
                        <option value="">Nacionalidade trienador</option>
                        <option value="1">Espanhol</option>
                        <option value="2">Ingles</option>
                        <option value="3">Frances</option>
                        <option value="4">Brasileiro</option>
                    </select>
                </div>
                <div
                    className="flex justify-center p-5"
                >
                    <select
                        className="w-[90%] p-2 rounded-md"
                        name="teamCountry"
                        onChange={handleFormChange}
                    >
                        <option value="">País time</option>
                        <option value="1">Brasil</option>
                        <option value="2">Espanha</option>
                        <option value="3">Inglaterra</option>
                        <option value="4">França</option>
                    </select>
                </div>
                <div
                    className="flex justify-center p-5"
                >
                    <select
                        className="w-[90%] p-2 rounded-md"
                        name='teamLeague'
                        onChange={handleFormChange}
                    >
                        <option value="">Liga time</option>
                        <option value="1">Serie A</option>
                        <option value="2">Serie B</option>
                        <option value="3">Serie C</option>
                        <option value="4">Serie D</option>
                    </select>
                </div>
                <div
                    className="flex justify-center p-5"
                >
                    <select
                        className="w-[90%] p-2 rounded-md"
                        name="team"
                        onChange={handleFormChange}
                    >
                        <option value="">Time</option>
                        <option value="1">Santos</option>
                        <option value="2">Santos</option>
                        <option value="3">Santos</option>
                        <option value="4">Santos</option>
                    </select>
                </div>
                
            </div>
            <div className="flex flex-col w-1/2 border-2">
                <div
                        className="flex justify-center p-5"
                    >
                        <div 
                            className="w-[90%] h-36 border-2"
                        >
                            escudo
                        </div>
                </div>
                <div
                    className="flex justify-center p-5"
                >
                    <div 
                        className="flex flex-col w-[90%] h-36 border-2"
                    >
                        <span>Jogador 1</span>
                        <span>Jogador 1</span>
                        <span>Jogador 1</span>
                        <span>Jogador 1</span>
                        <span>Jogador 1</span>
                        <span>Jogador 1</span>
                    </div>
                </div>
                <div className="flex justify-end p-8">
                    <button 
                        className="border-2 hover:cursor-pointer"
                        onClick={handleNext}
                        >
                        Próximo
                    </button>
                </div>
            </div>
        </form>
    )
}