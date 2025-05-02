<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta content="width=device-width, initial-scale=1" name="viewport" />
  <title>Add Review</title>
  <style>
    body {
      margin: 0;
      font-family: 'Inter', sans-serif;
      background-color: #e6f0f7;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      min-height: 100vh;
      padding: 24px 16px;
    }
    main {
      background: white;
      max-width: 600px;
      width: 100%;
      border-radius: 6px;
      box-shadow: 0 8px 20px rgba(0,0,0,0.1);
      padding: 32px 32px 40px;
      box-sizing: border-box;
    }
    h1 {
      font-weight: 600;
      font-size: 20px;
      color: #2d3a45;
      margin-bottom: 24px;
      text-align: center;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    label {
      font-size: 14px;
      font-weight: 600;
      color: #374151;
      margin-bottom: 6px;
      display: block;
    }
    input[type="text"],
    textarea {
      width: 100%;
      border: 1px solid #d1d5db;
      border-radius: 4px;
      padding: 10px 14px;
      font-size: 14px;
      color: #4b5563;
      font-family: inherit;
      outline-offset: 2px;
      outline-color: transparent;
      transition: outline-color 0.2s ease;
      resize: none;
      box-sizing: border-box;
    }
    input[type="text"]:focus,
    textarea:focus {
      outline-color: #00d084;
      border-color: #00d084;
    }
    textarea {
      min-height: 100px;
    }
    .rating-group {
      display: flex;
      gap: 8px;
      font-size: 24px;
      justify-content: center;
      user-select: none;
      flex-wrap: nowrap;
    }
    .rating-group input[type="radio"] {
      display: none;
    }
    .rating-group label {
      cursor: pointer;
      color: #d1d5db;
      transition: color 0.2s ease;
      flex-shrink: 0;
    }
    .rating-group input[type="radio"]:checked ~ label,
    .rating-group label:hover,
    .rating-group label:hover ~ label {
      color: #ffb400;
    }
    .submit-btn {
      background-color: #00d084;
      color: white;
      font-weight: 600;
      font-size: 14px;
      padding: 12px 0;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.2s ease;
      margin-top: 8px;
      width: 100%;
    }
    .submit-btn:hover {
      background-color: #00c877;
    }
    @media (max-width: 480px) {
      main {
        padding: 24px 20px 32px;
      }
      h1 {
        font-size: 18px;
      }
      .rating-group {
        justify-content: space-around;
        gap: 4px;
      }
      .rating-group label {
        font-size: 20px;
      }
    }
  </style>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />
</head>
<body>
  <div id="root" style="width: 100%; max-width: 600px;"></div>

  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

  <script type="text/babel">
    function Star({ filled, onClick, onMouseEnter, onMouseLeave }) {
      return (
        <svg
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          xmlns="http://www.w3.org/2000/svg"
          fill={filled ? "#ffb400" : "none"}
          stroke="#ffb400"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="32"
          height="32"
          style={{ cursor: "pointer" }}
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01z" />
        </svg>
      );
    }

    function AddReview() {
      const [rating, setRating] = React.useState(0);
      const [hoverRating, setHoverRating] = React.useState(0);
      const [name, setName] = React.useState("");
      const [review, setReview] = React.useState("");

      const handleSubmit = (e) => {
        e.preventDefault();
        if (rating === 0) {
          alert("Please select a rating.");
          return;
        }
        if (!name.trim()) {
          alert("Please enter your name.");
          return;
        }
        if (!review.trim()) {
          alert("Please enter your review.");
          return;
        }
        alert(`Thank you for your review!\n\nName: ${name}\nRating: ${rating} star(s)\nReview: ${review}`);
        setRating(0);
        setHoverRating(0);
        setName("");
        setReview("");
      };

      return (
        <main>
          <h1>Add Review</h1>
          <form onSubmit={handleSubmit} aria-label="Add review form">
            <div>
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
                aria-required="true"
              />
            </div>
            <div>
              <label>Rating</label>
              <div className="rating-group" role="radiogroup" aria-label="Star rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    filled={star <= (hoverRating || rating)}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                  />
                ))}
              </div>
            </div>
            <div>
              <label htmlFor="review">Your Review</label>
              <textarea
                id="review"
                placeholder="Write your review here"
                value={review}
                onChange={e => setReview(e.target.value)}
                required
                aria-required="true"
              />
            </div>
            <button type="submit" className="submit-btn" aria-label="Submit review">
              Submit Review
            </button>
          </form>
        </main>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<AddReview />);
  </script>
</body>
</html>
