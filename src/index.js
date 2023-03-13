// Trazer de outro arquivo/biblioteca alguma função ou variável
import { createRoot } from "react-dom/client";
import { Blog } from "./components/Blog";
import { Footer } from "./components/Footer";
import { Postagem } from "./components/Postagem";
import './styles.css';

// Selecionando a div na página
const rootElement = document.getElementById("root");

// A div root será a base da aplicação
const root = createRoot(rootElement); // A div root será a base da aplicação


root.render(
    <div>
        <Blog></Blog>
        <Footer></Footer>
    </div>
);