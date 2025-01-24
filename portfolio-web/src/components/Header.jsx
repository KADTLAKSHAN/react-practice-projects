function Header() {
  const name = "John Doe";
  const profession = "Full Stack Developer";

  return (
    <header className="header">
      <h1>{name}</h1>
      <h2>{profession}</h2>

      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
