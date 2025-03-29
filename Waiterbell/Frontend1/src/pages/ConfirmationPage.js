import { Link, useNavigate } from "react-router-dom";
import "./RequestPage.css";
import React, { useState } from "react";
import "./RequestPage.css";
import "./HomePage.css";
import logo from "../asset/Logo_WB_US.png";
import Logo_medT from "../asset/Logo_medT.png";
import Logo_WB from "../asset/Logo_WB.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePage.css";
import { useEffect } from "react";
import "./Navbar.css";
import { Button } from "./Button2";
import Logo_WB_US from "../asset/Logo_WB_US.png";
import Hotell from "../asset/Hotell.jpg";
import Restaurant from "../asset/restaurant_ordering.jpg";
import Uteliv from "../asset/Uteliv.jpg";


const ConfirmationPage = () => {
  const navigate = useNavigate();

  const scrollToSection1 = () => {
    document.getElementById("omoss").scrollIntoView({ behavior: "smooth" });
  };
  const scrollToSection2 = () => {
    document.getElementById("kontakt").scrollIntoView({ behavior: "smooth" });
  };
  const scrollToSection3 = () => {
    document.getElementById("beompris").scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSection4 = () => {
    document
      .getElementById("sefordeler")
      .scrollIntoView({ behavior: "smooth" });
  };
  const scrollToSection5 = () => {
    document
      .getElementById("leverertil")
      .scrollIntoView({ behavior: "smooth" });
  };
  const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
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
                  <Link className="nav-links" onClick={scrollToSection4}>
                    Se Fordeler
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-links" onClick={scrollToSection5}>
                    Leverer til
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-links" onClick={scrollToSection1}>
                    Om oss
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-links" onClick={scrollToSection2}>
                    Kontakt
                  </Link>
                </li>
    
                <li className="nav-item">
                  <Link className="nav-links" onClick={scrollToSection3}>
                    Tilbake
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
    <section className="about-section" id="beompris">
    <div className="request-page">
      <div className="confirmation-container">
        {/* Logo - Clicking redirects to Request Page */}
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="Waiter Bell Logo" className="logo-img" />
          </Link>
        </div>

        {/* Confirmation Message */}
        <div className="form-container">
          <h1>Forespørsel er sendt!</h1>
          <p className="message">Takk for din forespørsel. Vi kontakter deg snart.</p>
          <button onClick={() => navigate("/")}>Tilbake til Be om pris</button>
        </div>

        {/* Slogan */}
        <div className="slogan-container">
          <h2>Order,</h2>
          <h2>Pay, and</h2>
          <h2>Call with</h2>
          <h2>One Click.</h2>
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
                <h2 className="waiter-bell-titleTO">Om oss</h2>
                <p>
                <strong>Waiter Bell</strong> er et norsk selskap som tilbyr fleksibel kommunikasjon
                  mellom gjester og servitør.
                </p>
                <p>
                  <strong>Mål:</strong> Å gi restauranter, barer og hoteller
                  muligheten til å forbedre kundeopplevelsen, øke effektiviteten, og gi gjestene en VIP-opplevelse.
                </p>
                <p><strong>Serviceopplevelsen</strong> er det som får kunden til å komme tilbake!</p>
              </div>
            </div>
          </section>
          {/* Kontakt Section */}
          <section className="contact-section text-center py-5" id="kontakt">
            <div className="container">
              <h2 className="waiter-bell-titleEN">Kontakt</h2>
              <div className="row mt-5">
                <div className="col-md-6 contact-item">
                  <h3>Stephan Kovac</h3>
                  <p>Daglig leder</p>
                  <p>Tlf: +47 455 10 294</p>
                  <p className="email-line">E-post: stephan@waiterbell.no</p>
    
                </div>
                <div className="col-md-6 contact-item">
                  <h3>Josef Missoum</h3>
                  <p>Salgssjef</p>
                  <p>Tlf: +47 929 70 458</p>
                  <p>E-post: josef@waiterbell.no</p>
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
    
    </>
  );
};

export default ConfirmationPage;
