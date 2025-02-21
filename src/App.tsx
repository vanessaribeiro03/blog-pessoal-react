import NavBar from "./components/navbar/NavBar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Cadastro from "./pages/cadastro/Cadastro"
import Login from "./pages/login/Login"
import Home from "./pages/home/Home"
import { AuthProvider } from "./contexts/AuthContext"
import ListaTemas from "./components/temas/listaTemas/ListaTemas"
import FormTema from "./components/temas/formtema/FormTema"
import DeletarTema from "./components/temas/deletartema/DeletarTema"
import ListaPostagens from "./components/postagens/listapostagens/ListaPostagens"
import FormPostagem from "./components/postagens/formpostagem/FormPostagem"
import DeletarPostagem from "./components/postagens/deletarpostagem/DeletarPostagem"
import Perfil from "./pages/perfil/Perfil"

function App() {


  return (
    <>
    <AuthProvider>

        <BrowserRouter>

          <NavBar />

          <div className="min-h-[80vh]">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/login" element={<Login />} />
                <Route path="/temas" element={<ListaTemas />} />
                <Route path="/cadastrartema" element={<FormTema />} />
                <Route path="/editartema/:id" element={<FormTema />} />
                <Route path="/deletartema/:id" element={<DeletarTema />} />
                <Route path="/postagens" element={<ListaPostagens />} />
                <Route path="/cadastrarpostagem" element={<FormPostagem />} />
                <Route path="/editarpostagem/:id" element={<FormPostagem />} />
                <Route path="/deletarpostagem/:id" element={<DeletarPostagem />} />
                <Route path="/perfil" element={<Perfil />} />
            </Routes>
          </div>

          <Footer />
          
        </BrowserRouter>
        
      </AuthProvider>
    </>
  )
}

export default App
