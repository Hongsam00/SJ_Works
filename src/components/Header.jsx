import "./Header.css";

function Header() {
  return (
    <header className="header">
        <div id = "header">
            <button className="header_Title" type="button">SJ's Portfolio</button>
        </div>
        <nav className="navbar">
            <ul>
                <li><a href="#about">About me</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;
