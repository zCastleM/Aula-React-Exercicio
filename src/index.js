// Trazer de outro arquivo/biblioteca alguma função ou variável
import { createRoot } from "react-dom/client";
import { Titulo } from "./components/Titulo";
import { Mensagem } from "./components/Mensagem";
import { Nav } from "./components/Nav";
import './styles.css';

// Selecionando a div na página
const rootElement = document.getElementById("root");

// A div root será a base da aplicação
const root = createRoot(rootElement); // A div root será a base da aplicação


root.render(
    <div>
        <header>
            <Nav></Nav>
        </header>
        <Titulo></Titulo>
        <Mensagem/>
    </div>
);