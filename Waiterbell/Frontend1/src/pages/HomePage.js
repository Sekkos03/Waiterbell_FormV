import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import BrikkePåBord from "../asset/brikke_på_bord.png";
import Brikken from "../asset/Brikken.png";
import Hotell from "../asset/Hotell.jpg";
import Klokke_WB from "../asset/Klokke_WB.png";
import Logo_medT from "../asset/Logo_medT.png";
import Logo_WB_US from "../asset/Logo_WB_US.png";
import Restaurant from "../asset/restaurant_ordering.jpg";
import Servitører from "../asset/Servitører.png";
import Uteliv from "../asset/Uteliv.jpg";
import Logo_WB from "../asset/Logo_WB.png";
import restaurantBg from "../asset/restaurant-ordering.jpg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Button";

const HomePage = () => {
  const navigate = useNavigate();

  const scrollToSection = () => {
    document
      .getElementById("info-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSection1 = () => {
    document
      .getElementById("sefordeler")
      .scrollIntoView({ behavior: "smooth" });
  };
  const scrollToSection2 = () => {
    document
      .getElementById("leverertil")
      .scrollIntoView({ behavior: "smooth" });
  };
  const scrollToSection3 = () => {
    document.getElementById("omoss").scrollIntoView({ behavior: "smooth" });
  };
  const scrollToSection4 = () => {
    document.getElementById("kontakt").scrollIntoView({ behavior: "smooth" });
  };

  const handleRequestPage = () => {
    navigate("/requestpage");
  };
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={Logo_WB_US} alt="Icon" />
            Waiter Bell
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link className="nav-links" onClick={scrollToSection}>
                Slik fungerer det
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links" onClick={scrollToSection1}>
                Se fordeler
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links" onClick={scrollToSection2}>
                Levere til
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links" onClick={scrollToSection3}>
                Om oss
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links" onClick={scrollToSection4}>
                Kontakt
              </Link>
            </li>

            <li>
              <Link
                to="/requestpage"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Be om pris
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Be om pris</Button>}
        </div>
      </nav>

      <div className="homepage-container">
        {/* Hero Section */}
        <section
          className="hero d-flex flex-column justify-content-center align-items-center text-center position-relative"
          style={{ backgroundImage: `url(${restaurantBg})` }}
        >
          <div className="overlay"></div>
          <h1 className="display-4 text-white">
            Great service starts with Waiter Bell
          </h1>
          <p className="lead text-white">Order, Pay and Call with one click</p>
          <button
            className="btn btn-primary btn-lg mt-3"
            onClick={scrollToSection}
          >
            Slik fungerer Waiter Bell
          </button>
        </section>

        <section className="slik-fungerer" id="info-section">
          <div className="container">
            <h2 className="section-title">Slik fungerer Waiter Bell</h2>
            <p className="section-subtitle">
              Waiter Bell består av to enheter som sikrer sømløs kommunikasjon
              mellom gjester og servitører.
            </p>

            <div className="functionality-container">
              {/* Venstre side - Bilder */}
              <div className="left-images">
                <img
                  src={BrikkePåBord}
                  alt="Table with Waiter Bell"
                  className="feature-image"
                />
                <img
                  src={Servitører}
                  alt="Servitører"
                  className="feature-image"
                />
              </div>

              {/* Midten - Tekst */}
              <div className="middle-text">
                <h3>1) Tilkallingsenheter for gjestene:</h3>
                <p>
                  Hvert bord har en vanntett enhet med fire alternativer: Order,
                  Pay, Call og Cancel.
                </p>
                <p>
                  <strong>Order-funksjonen:</strong> Gjestene trykker på denne
                  dersom de ønsker å bestille.
                </p>
                <p>
                  <strong>Pay-funksjonen:</strong> Gjestene trykker på denne
                  dersom de ønsker å betale.
                </p>
                <p>
                  <strong>Call-funksjonen:</strong> Gjestene trykker på denne
                  hvis de trenger hjelp eller har spørsmål.
                </p>
                <p>
                  <strong>Cancel-funksjonen:</strong> Gjestene kan avbryte en
                  tilkalling av servitør.
                </p>

                <h3>2) Varslingsklokke for servitørene:</h3>
                <p>
                  En varslingsklokke for servitørene som varsler hver gang et
                  bord ønsker å bestille, betale eller trenger hjelp.
                </p>
                <p>
                  Klokken vibrerer og viser hvilken enhet som har tilkalt
                  servitør.
                </p>
                <p>
                  Med Waiter Bell kan hvert bord enkelt tilkalle service med ett
                  trykk.
                </p>
              </div>

              {/* Høyre side - Bilder */}
              <div className="right-images">
                <img
                  src={Brikken}
                  alt="Call Button"
                  className="feature-image"
                />
                <img
                  src={Klokke_WB}
                  alt="Waiter Watch"
                  className="feature-image"
                />
                <img
                  src={Logo_WB_US}
                  alt="Waiter Bell Logo"
                  className="feature-image logo-image"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Se Fordeler Section */}
        <section className="benefits-section text-center py-5" id="sefordeler">
          <div className="container">
            <h2 className="benefits-title">
              Se fordeler{" "}
              <img src={Logo_WB_US} alt="Logo" className="benefits-logo" />
            </h2>
            <div className="row mt-5">
              <div className="col-md-4 benefit-item">
                <h3>Gjester</h3>
                <div className="circle-progress">80%</div>
                <h4>Mindre ventetid</h4>
                <p>Waiter Bell tjenesten reduserer ventetiden for gjestene.</p>
              </div>
              <div className="col-md-4 benefit-item">
                <h3>Tips</h3>
                <div className="circle-progress">40%</div>
                <h4>Mer tips</h4>
                <p>Raskere service bidrar til økt kundetilfredshet.</p>
              </div>
              <div className="col-md-4 benefit-item">
                <h3>Restaurant eiere</h3>
                <div className="circle-progress">19%</div>
                <h4>Øker inntektene</h4>
                <p>
                  Waiter Bell tjenesten gjør det enkelt for gjestene å bestille.
                </p>
              </div>
            </div>
            <button
              className="btn btn-primary mt-4 request-btn"
              onClick={handleRequestPage}
            >
              Be om pris
            </button>
          </div>
        </section>
        {/* Waiter Bell Leverer Til Section */}
        <section
          className="waiter-bell-section text-center py-5"
          id="leverertil"
        >
          <div className="container">
            <h2 className="waiter-bell-title">
              Waiter Bell leverer til{" "}
              <img src={Logo_WB_US} alt="Logo" className="waiter-bell-logo" />
            </h2>
            <div className="row mt-5">
              <div className="col-md-4 category-item">
                <img
                  src={Restaurant}
                  alt="Restaurant"
                  className="category-image"
                />
                <h3>Restaurant</h3>
                <ul>
                  <li>Unngå lang ventetid for gjester å bestille</li>
                  <li>Bestill og betalt enkelt</li>
                  <li>Gjør det enklere for servitørene</li>
                </ul>
              </div>
              <div className="col-md-4 category-item">
                <img src={Uteliv} alt="Uteliv" className="category-image" />
                <h3>Uteliv</h3>
                <ul>
                  <li>Øker sjansen for flere bestillinger</li>
                  <li>Slippe bar-kø</li>
                  <li>Gir gjestene VIP opplevelse</li>
                </ul>
              </div>
              <div className="col-md-4 category-item">
                <img src={Hotell} alt="Hotell" className="category-image" />
                <h3>Hotell</h3>
                <ul>
                  <li>Øker arbeidskapasiteten</li>
                  <li>Bedre oversikt på bestillinger og betalinger</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="about-section" id="omoss">
          <div className="container">
            {/* Venstre side - Om oss */}
            <div className="about-text">
              <h2>Om oss</h2>
              <p>
                Waiter Bell er et norsk selskap som tilbyr fleksibel
                kommunikasjon mellom gjester og servitør.
              </p>
              <p>
                <strong>Mål:</strong> Å gi restauranter, barer og hoteller
                muligheten til å forbedre
              </p>
              <p>
                Serviceopplevelsen er det som får kunden til å komme tilbake.
              </p>

              {/* Plassering av logo under teksten */}
              <div className="about-logo">
                <img src={Logo_medT} alt="Waiter Bell Logo" />
              </div>
            </div>

            {/* Høyre side - Hvorfor velge oss */}
            <div className="why-choose-text">
              <h2>Hvorfor velge oss?</h2>
              <p>
                <strong>Reduser ventetid:</strong> Unngå at gjester venter for
                lenge med å få oppmerksomhet.
              </p>
              <p>
                <strong>Enkelt og effektivt:</strong> Bestilling og betaling med
                ett klikk.
              </p>
              <p>
                <strong>Bedre oversikt:</strong> Servitører har full oversikt
                over alle forespørsler.
              </p>
              <p>
                <strong>Økt kapasitet:</strong> Gjør det enklere for servitører
                å betjene flere gjester.
              </p>
              <p>
                <strong>VIP-opplevelse:</strong> Gjestene føler seg ivaretatt
                uten å måtte vente.
              </p>
            </div>
          </div>
        </section>
        {/* Kontakt Section */}
        <section className="contact-section text-center py-5" id="kontakt">
          <div className="container">
            <h2 className="contact-title">Kontakt</h2>
            <div className="row mt-5">
              <div className="col-md-4 contact-item">
                <h3>Stephan Kovac</h3>
                <p>Daglig leder</p>
                <p>Tlf: +47 455 10 294</p>
                <p>E-post: stephan@waiterbell.no</p>
              </div>
              <div className="col-md-4 contact-item">
                <h3>Josef Missoum</h3>
                <p>Salgsjef</p>
                <p>Tlf: +47 929 70 458</p>
                <p>E-post: josef@waiterbell.no</p>
              </div>
              <div className="col-md-4 contact-item">
                <h3>Alexander Eliassen</h3>
                <p>Økonomisjef</p>
                <p>Tlf: +47 403 40 825</p>
                <p>E-post: alexander@waiterbell.no</p>
              </div>
            </div>
            <div className="contact-logo mt-5">
              <img
                src={Logo_WB}
                alt="Waiter Bell Logo"
                className="contact-logo-img"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
