import BookVisitButton from "./BookVisitButton";

export default function Header() {
  return (
    <header>
      <div className="container nav">
        <a className="logo" href="#home">
          <span className="logo-mark">32</span>
          <span>
            INTACT
            <small>SMILE DESIGNERS</small>
          </span>
        </a>
        <nav className="navlinks">
          <a href="#about">The Clinic</a>
          <a href="#doctors">Our Doctors</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
        <BookVisitButton />
      </div>
    </header>
  );
}
