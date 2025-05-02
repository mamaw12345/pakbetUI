<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta content="width=device-width, initial-scale=1" name="viewport" />
  <title>Add Shipping Address</title>
  <style>
    /* Reset and base */
    * {
      box-sizing: border-box;
    }
    body {
      margin: 0;
      font-family: 'Inter', sans-serif;
      background-color: #e6f0f7;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      padding: 16px;
    }
    main {
      background: white;
      max-width: 900px;
      width: 100%;
      display: flex;
      flex-direction: column;
      border-radius: 6px;
      box-shadow: 0 8px 20px rgba(0,0,0,0.1);
      overflow: hidden;
    }
    @media (min-width: 768px) {
      main {
        flex-direction: row;
      }
    }

    /* Left section */
    .left-section {
      flex: 1;
      padding: 48px 32px;
    }
    h1 {
      font-weight: 600;
      font-size: 18px;
      color: #2d3a45;
      margin-bottom: 32px;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    input[type="text"],
    textarea {
      border: 1px solid #d1d5db;
      border-radius: 2px;
      padding: 8px 12px;
      font-size: 12px;
      color: #4b5563;
      font-family: inherit;
      outline-offset: 2px;
      outline-color: transparent;
      transition: outline-color 0.2s ease;
    }
    input[type="text"]:focus,
    textarea:focus {
      outline-color: #00d084;
      border-color: #00d084;
    }
    textarea {
      resize: none;
      min-height: 72px;
    }
    .row {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
    }
    .row > * {
      flex: 1 1 100%;
    }
    @media (min-width: 640px) {
      .row > * {
        flex: 1 1 0;
      }
    }
    .pincode-highlight {
      border-color: #00d084 !important;
      outline-color: #00d084 !important;
    }
    .checkbox-row {
      display: flex;
      align-items: center;
      font-size: 12px;
      color: #4b5563;
      gap: 8px;
    }
    .checkbox-row a {
      margin-left: auto;
      color: #00d084;
      font-weight: 500;
      text-decoration: none;
      cursor: pointer;
    }
    .checkbox-row a:hover {
      text-decoration: underline;
    }
    button.save-btn {
      background-color: #00d084;
      color: white;
      font-weight: 600;
      font-size: 12px;
      padding: 10px 0;
      border: none;
      border-radius: 2px;
      cursor: pointer;
      transition: background-color 0.2s ease;
    }
    button.save-btn:hover {
      background-color: #00c877;
    }

    /* Right section */
    .right-section {
      width: 100%;
      border-top: 1px solid #e5e7eb;
      padding: 48px 32px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    @media (min-width: 768px) {
      .right-section {
        width: 320px;
        border-top: none;
        border-left: 1px solid #e5e7eb;
      }
    }
    nav.steps {
      font-size: 12px;
      color: #9ca3af;
      margin-bottom: 24px;
      display: flex;
      gap: 8px;
      align-items: center;
    }
    nav.steps span.active {
      color: #00d084;
    }
    nav.steps span.separator {
      user-select: none;
    }
    h2, h3 {
      font-weight: 600;
      font-size: 14px;
      color: #2d3a45;
      margin-bottom: 12px;
    }
    .summary-row {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      color: #374151;
      margin-bottom: 4px;
    }
    .summary-row.delivery-charges {
      margin-bottom: 24px;
    }
    .delivery-summary {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 24px;
      font-size: 12px;
      color: #374151;
    }
    .delivery-summary img {
      width: 48px;
      height: 48px;
      border-radius: 2px;
      object-fit: cover;
      background: #f9fafb;
    }
    .delivery-summary-text {
      flex: 1;
    }
    .delivery-summary-text p {
      margin: 0;
    }
    .delivery-summary-text p:first-child {
      font-weight: 600;
      color: #2d3a45;
      margin-bottom: 4px;
    }
    .delivery-summary-text p:nth-child(2) {
      color: #9ca3af;
      margin-bottom: 4px;
    }
    .delivery-summary-text p:last-child {
      font-weight: 600;
    }
    .change-link {
      color: #00d084;
      font-weight: 500;
      cursor: pointer;
      text-decoration: none;
      font-size: 12px;
    }
    .change-link:hover {
      text-decoration: underline;
    }
    .total-payable {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      font-weight: 600;
      color: #2d3a45;
      margin-bottom: 12px;
    }
    button.place-order {
      background-color: #ff5c5c;
      color: white;
      font-weight: 600;
      font-size: 12px;
      padding: 10px 0;
      border: none;
      border-radius: 2px;
      cursor: pointer;
      transition: background-color 0.2s ease;
      width: 100%;
    }
    button.place-order:hover {
      background-color: #ff4a4a;
    }
  </style>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />
</head>
<body>
  <div id="root" style="width: 100%;"></div>

  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

  <script type="text/babel">
    function App() {
      return (
        <main>
          {/* Left section */}
          <section className="left-section">
            <h1>Add Shipping Addreass</h1>
            <form onSubmit={e => e.preventDefault()}>
              <input
                type="text"
                placeholder="Company's Name (Optional)"
                aria-label="Company's Name (Optional)"
              />
              <div className="row">
                <input type="text" placeholder="Name" aria-label="Name" />
                <input
                  type="text"
                  placeholder="Phone Number"
                  aria-label="Phone Number"
                  defaultValue="Powai"
                />
              </div>
              <div className="row">
                <input type="text" placeholder="Pincode" aria-label="Pincode" />
                <input
                  type="text"
                  placeholder="Powai"
                  aria-label="Powai"
                  defaultValue="Powai"
                  className="pincode-highlight"
                />
              </div>
              <textarea
                placeholder="Address (Area and Street)"
                aria-label="Address (Area and Street)"
                rows="3"
              ></textarea>
              <div className="row">
                <input type="text" placeholder="City/District/Town" aria-label="City/District/Town" />
                <input type="text" placeholder="State" aria-label="State" />
              </div>
              <div className="checkbox-row">
                <input type="checkbox" id="billing" defaultChecked />
                <label htmlFor="billing">Same as Billing Address</label>
                <a href="#">Add Billing Address</a>
              </div>
              <button type="submit" className="save-btn">
                Save and Deliver here
              </button>
            </form>
          </section>

          {/* Right section */}
          <section className="right-section">
            <nav className="steps" aria-label="Checkout steps">
              <span>Cart</span>
              <span className="separator">- - - - - -</span>
              <span className="active">Delivery</span>
              <span className="separator">- - - - - -</span>
              <span>Payment</span>
            </nav>

            <div>
              <h2>Order Summary</h2>
              <div className="summary-row">
                <span>Order Total</span>
                <span>Rs. 2,766</span>
              </div>
              <div className="summary-row delivery-charges">
                <span>Delivery Charges</span>
                <span>Rs. 150</span>
              </div>

              <h3>Delivery Summary</h3>
              <div className="delivery-summary">
                <img
                  src="https://storage.googleapis.com/a1aa/image/e002f9b1-0661-4485-bed3-652f411891c0.jpg"
                  alt="Small white delivery package box on a light background"
                  width="48"
                  height="48"
                />
                <div className="delivery-summary-text">
                  <p>Standard Delivery</p>
                  <p>Expected on 21 May, 2016</p>
                  <p>Rs 120</p>
                </div>
                <a href="#" className="change-link">
                  Change
                </a>
              </div>
            </div>

            <div className="total-payable">
              <span>Total Payable</span>
              <span>Rs. 4300</span>
            </div>
            <button className="place-order">Place Order</button>
          </section>
        </main>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);
  </script>
</body>
</html>
