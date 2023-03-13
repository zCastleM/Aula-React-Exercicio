export function Mensagem() {
  const textoTitulo = "As batatas quando nascem se esparramam pelo chão";
  const nomeAutor = "J. Almir";
  const linkImagem = "https://picsum.photos/200";
  
  return (
    <section className="mensagem">
      <h2 className="titulo">{textoTitulo.toUpperCase()}</h2>
      <img src={linkImagem} />
      <p className="paragrafo">
        Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam
        a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Leite de
        capivaris, leite de mula manquis sem cabeça.Vehicula non. Ut sed ex
        eros. Vivamus sit amet nibh non tellus tristique interdum.Aenean aliquam
        molestie leo, vitae iaculis nisl.
      </p>
      <small>Esta frase foi criada por {nomeAutor}</small>
    </section>
  );
}
