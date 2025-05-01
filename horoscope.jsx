<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <title>Horoscope</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
      rel="stylesheet"
    />
    <style>
      body {
        font-family: "Poppins", sans-serif;
        background: linear-gradient(135deg, #f0e6f6, #f9fafb);
        margin: 0;
        padding: 0;
        color: #333;
      }
      nav {
        background-color: #2c3e50;
        color: white;
        font-size: 0.9rem;
        font-weight: 600;
        box-shadow: 0 2px 8px rgb(0 0 0 / 0.15);
      }
      nav a {
        transition: color 0.3s ease;
        color: #ecf0f1;
        padding: 0.5rem 0.75rem;
        border-radius: 0.375rem;
        display: inline-block;
      }
      nav a:hover {
        color: #f39c12;
        background-color: #34495e;
        text-decoration: none;
      }
      .nav-container {
        max-width: 1120px;
        margin: 0 auto;
        padding: 0.75rem 1rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
      }
      .nav-links {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
      }
      .nav-info {
        display: flex;
        gap: 1.5rem;
        font-size: 0.8rem;
        font-weight: 600;
        align-items: center;
      }
      .nav-info i {
        color: #f39c12;
      }
      main {
        max-width: 1120px;
        margin: 3rem auto 5rem;
        padding: 0 1rem;
      }
      h1 {
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 1.5rem;
        text-align: center;
        color: #2c3e50;
        letter-spacing: 0.05em;
      }
      .hero {
        position: relative;
        border-radius: 1rem;
        overflow: hidden;
        box-shadow: 0 12px 30px rgb(0 0 0 / 0.12);
        margin-bottom: 4rem;
        cursor: pointer;
        transition: transform 0.4s ease, box-shadow 0.4s ease;
        max-width: 100%;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        align-items: center;
        background: #8b1d0e;
        color: white;
        padding: 2rem 3rem;
      }
      .hero:hover {
        transform: scale(1.04);
        box-shadow: 0 20px 40px rgb(0 0 0 / 0.2);
      }
      .hero-text {
        flex: 1;
        font-size: 1.75rem;
        font-weight: 700;
        line-height: 1.3;
        letter-spacing: 0.03em;
      }
      .hero-button {
        background: white;
        color: #8b1d0e;
        font-weight: 700;
        font-size: 1.25rem;
        padding: 0.75rem 2.5rem;
        border-radius: 9999px;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s ease, color 0.3s ease;
        margin-left: 2rem;
        white-space: nowrap;
        box-shadow: 0 4px 12px rgb(0 0 0 / 0.15);
      }
      .hero-button:hover,
      .hero-button:focus {
        background-color: #6e1508;
        color: white;
        outline: none;
      }
      .cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2rem;
      }
      .card {
        background: white;
        border-radius: 1rem;
        box-shadow: 0 8px 24px rgb(0 0 0 / 0.1);
        overflow: hidden;
        cursor: pointer;
        transition: box-shadow 0.3s ease, transform 0.3s ease;
        width: 320px;
        display: flex;
        flex-direction: column;
      }
      .card:hover {
        box-shadow: 0 16px 48px rgb(0 0 0 / 0.18);
        transform: translateY(-8px);
      }
      .card img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-bottom: 1px solid #e0e0e0;
        border-radius: 1rem 1rem 0 0;
      }
      .card-content {
        padding: 1.25rem 1.5rem;
        font-size: 1.125rem;
        font-weight: 600;
        color: #34495e;
        flex-grow: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
      }
      @media (max-width: 768px) {
        .hero {
          flex-direction: column;
          padding: 2rem 1.5rem;
          text-align: center;
        }
        .hero-text {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          margin-left: 0;
        }
        .hero-button {
          margin-left: 0;
          width: 100%;
          max-width: 280px;
          margin-inline: auto;
        }
      }
      @media (max-width: 480px) {
        .nav-container {
          justify-content: center;
          gap: 1rem;
        }
        .nav-links {
          justify-content: center;
          gap: 0.75rem;
        }
        .nav-info {
          justify-content: center;
          gap: 1rem;
          font-size: 0.75rem;
        }
        .cards {
          flex-direction: column;
          align-items: center;
        }
        .card {
          width: 90vw;
        }
      }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script>
      const e = React.createElement;

      function Navbar() {
        return e(
          "nav",
          null,
          e(
            "div",
            { className: "nav-container" },
            e(
              "ul",
              { className: "nav-links" },
              e("li", null, e("a", { href: "#" }, "HOME")),
              e("li", null, e("a", { href: "#" }, "SHOP")),
              e("li", null, e("a", { href: "#" }, "CONSULTATIONS")),
              e("li", null, e("a", { href: "#" }, "HOROSCOPE")),
              e("li", null, e("a", { href: "#" }, "BLOGS")),
              e("li", null, e("a", { href: "#" }, "FREE TOOLS")),
              e("li", null, e("a", { href: "#" }, "CONTACT US"))
            ),
            e(
              "div",
              { className: "nav-info" },
              e(
                "div",
                { className: "flex items-center space-x-1" },
                e("i", { className: "fas fa-eye" }),
                e("span", null, "RECENTLY VIEWED")
              ),
              e(
                "div",
                { className: "flex items-center space-x-1" },
                e("i", { className: "fas fa-phone-alt" }),
                e("span", null, "0976-120-3535")
              )
            )
          )
        );
      }

      function Hero() {
        return e(
          "section",
          {
            className: "hero",
            role: "banner",
            tabIndex: 0,
            "aria-label":
              "Red banner with auspicious pattern and text 'Bring the auspicious into your life today! SHOP NOW' in white with a rounded white button",
          },
          e(
            "div",
            { className: "hero-text" },
            "Bring the auspicious into your life today!"
          ),
          e(
            "button",
            { className: "hero-button", type: "button", tabIndex: 0 },
            "SHOP NOW"
          )
        );
      }

      function Card({ imgSrc, altText, title }) {
        return e(
          "article",
          { className: "card", tabIndex: 0 },
          e("img", { src: imgSrc, alt: altText, width: "400", height: "250" }),
          e("div", { className: "card-content" }, title)
        );
      }

      function App() {
        return e(
          React.Fragment,
          null,
          e(Navbar),
          e(
            "main",
            null,
            e("h1", null, "Horoscope"),
            e(Hero),
            e(
              "section",
              { className: "cards" },
              e(Card, {
                imgSrc:
                  "https://storage.googleapis.com/a1aa/image/599544c6-113c-4e77-ec6e-686350b4f67d.jpg",
                altText:
                  "Red background with auspicious pattern and text 'Horoscope Forecast Today August 28, 2022' in yellow and white",
                title: "August 28 Horoscope",
              }),
              e(Card, {
                imgSrc:
                  "https://storage.googleapis.com/a1aa/image/e63dbc80-936c-4998-235c-9f55a1dceea5.jpg",
                altText:
                  "Hand holding a smoking stick with blurred background of a room",
                title: "Horoscope For Today February 20, 2023",
              })
            )
          )
        );
      }

      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(e(App));
    </script>
  </body>
</html>