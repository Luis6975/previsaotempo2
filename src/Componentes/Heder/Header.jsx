import './Header.css';

function Header() {
  return (
    <header className="menu" aria-label="Cabeçalho de navegação do site OPEN Clima">
      <div className="logo">
        <span>OPEN Clima - Meteorologia</span>
      </div>
      <nav>
        <a href="/" aria-label="Página inicial">Home</a>
        <a href="/Noticias" aria-label="Noticias">Noticias</a>
        <a href="/mapa" aria-label='Mapeamento'>Mapa</a>
        <a href="/contatos" aria-label="Página de contatos">Contato</a>
      </nav>
    </header>
  );
}

export default Header;