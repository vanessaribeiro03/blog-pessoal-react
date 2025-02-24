import { useNavigate } from "react-router-dom";
import CardPostagens from "../cardpostagens/CardPostagens";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import Postagem from "../../../models/Postagem";
import { buscar } from "../../../services/Service";
import { DNA } from "react-loader-spinner";
import { ToastAlerta } from "../../../utils/ToastAlerta";


function ListaPostagens() {
    const navigate = useNavigate();

    const [postagens, setPostagens] = useState<Postagem[]>([]);

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarPostagens() {
        setIsLoading(true);
        try {
            await buscar('/postagens', setPostagens, {
                headers: { Authorization: token },
            });
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout();
            }
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado', 'info');
            navigate('/');
        }
    }, [token]);

    useEffect(() => {
        buscarPostagens();
    }, [postagens.length]);

    
    const postagensUsuarioLogado = postagens.filter(p => p.usuario?.id === usuario.id);
    const postagensOutrosUsuarios = postagens.filter(p => p.usuario?.id !== usuario.id);

    return (
        <>
            {isLoading && (
                 <DNA
                     visible={true}
                    height="200"
                     width="200"
                     ariaLabel="dna-loading"
                     wrapperStyle={{}}
                     wrapperClass="dna-wrapper mx-auto"
               />
            )}

            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col mx-2">
                    {(!isLoading && postagens.length === 0) && (
                        <span className="text-3xl text-center my-8"> Nenhuma postagem foi encontrada.</span>
                    )}

                    {postagensUsuarioLogado.length > 0 && (
                        <>
                            <h2 className="text-2xl font-bold mb-4">Suas postagens:</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {postagensUsuarioLogado.map((postagem) => (
                                    <CardPostagens key={postagem.id} postagem={postagem} />
                                ))}
                            </div>
                        </>
                    )}

                    {postagensOutrosUsuarios.length > 0 && (
                        <>
                            <h2 className="text-2xl font-bold mt-8 mb-4">Postagens de outros usuários:</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {postagensOutrosUsuarios.map((postagem) => (
                                    <CardPostagens key={postagem.id} postagem={postagem} />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default ListaPostagens;