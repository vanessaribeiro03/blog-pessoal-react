import { useContext } from "react"
import ListaPostagens from "../../components/postagens/listapostagens/ListaPostagens"
import ModalPostagem from "../../components/postagens/modalpostagem/ModalPostagem"
import { AuthContext } from "../../contexts/AuthContext"

function Home() {

    const { usuario } = useContext(AuthContext)

    return (
        <>
            <div className="bg-indigo-900 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center
                                    justify-center py-4">
                        <h2 className='text-5xl font-bold text-center'>
                            Seja Bem Vindo(a), {usuario.nome}!
                        </h2>
                        <p className='text-xl'>
                            Expresse aqui seus pensamentos e opniões
                        </p>

                       
                        <div className="flex justify-around gap-4">
                            <div className="flex justify-around gap-4">
                                <ModalPostagem />
                            </div>
                        </div>
                    </div>

                    <div id="imagem" className="flex justify-center">
                        <img
                            src="https://i.imgur.com/VpwApCU.png"
                            alt="Imagem da Página Home"
                            className="w-2/3"
                        />
                    </div>
                </div>
            </div>
            <ListaPostagens />
        </>
    )
}

export default Home