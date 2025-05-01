<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta content="width=device-width, initial-scale=1" name="viewport" />
  <title>PakBet TV</title>
  <style>
    * {
      box-sizing: border-box;
    }
    body {
      margin: 0;
      font-family: 'Montserrat', sans-serif;
      background: white;
      color: #1a202c;
    }
    a {
      text-decoration: none;
      color: #4a5568;
      font-weight: 600;
      font-size: 0.875rem;
    }
    a:hover {
      color: #b91c1c;
    }
    header {
      border-bottom: 1px solid #d1d5db;
      padding: 0.75rem 1rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
    }
    .header-left {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      color: #4a5568;
    }
    .header-left span:nth-child(2) {
      color: #a0aec0;
    }
    nav {
      display: flex;
      gap: 1rem;
      font-size: 0.875rem;
      font-weight: 600;
      flex-wrap: wrap;
      margin: 0.5rem 0;
    }
    nav a {
      color: #4a5568;
    }
    nav a:hover {
      color: #1a202c;
    }
    .header-right {
      display: flex;
      gap: 0.75rem;
      align-items: center;
      flex-wrap: wrap;
    }
    .header-right input[type="text"] {
      border: 1px solid #d1d5db;
      border-radius: 9999px;
      padding: 0.25rem 0.75rem;
      font-size: 0.75rem;
      outline: none;
      transition: box-shadow 0.2s ease;
    }
    .header-right input[type="text"]:focus {
      box-shadow: 0 0 0 2px #b91c1c;
      border-color: #b91c1c;
    }
    .btn-red {
      background-color: #991b1b;
      color: white;
      font-size: 0.75rem;
      font-weight: 600;
      border-radius: 9999px;
      padding: 0.375rem 1.25rem;
      border: none;
      cursor: pointer;
      transition: background-color 0.2s ease;
      white-space: nowrap;
    }
    .btn-red:hover {
      background-color: #7f1d1d;
    }
    .btn-cart {
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }
    main {
      max-width: 1200px;
      margin: 1rem auto 3rem;
      padding: 0 1rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .top-buttons {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      justify-content: center;
    }
    .top-buttons button {
      background-color: #7f1d1d;
      color: white;
      font-size: 0.75rem;
      font-weight: 600;
      border-radius: 9999px;
      padding: 0.375rem 1.25rem;
      border: none;
      cursor: pointer;
      transition: background-color 0.2s ease;
      white-space: nowrap;
    }
    .top-buttons button:hover {
      background-color: #5c1212;
    }
    .info-bar {
      background-color: #7f1d1d;
      color: white;
      border-radius: 0.5rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 2rem;
      padding: 0.75rem 1rem;
      font-weight: 600;
      font-size: 0.75rem;
      align-items: center;
      text-align: center;
    }
    .info-bar > div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      min-width: 180px;
      justify-content: center;
    }
    .info-bar .divider {
      border-left: 1px solid white;
      height: 1.5rem;
      margin: 0 1rem;
    }
    .banner-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
    }
    @media(min-width: 640px) {
      .banner-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    .banner-card {
      background-color: #7f1d1d;
      border-radius: 0.5rem;
      color: white;
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      padding: 1rem;
      align-items: center;
    }
    .banner-card img {
      border-radius: 0.5rem;
      width: 160px;
      height: 120px;
      object-fit: cover;
      flex-shrink: 0;
    }
    .banner-content {
      max-width: 320px;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    .banner-content h2 {
      font-size: 1.125rem;
      font-weight: 700;
      text-transform: uppercase;
      margin: 0;
    }
    .banner-content p {
      font-size: 0.75rem;
      font-weight: 400;
      margin: 0;
    }
    .banner-content button {
      background-color: #991b1b;
      border: none;
      border-radius: 9999px;
      color: white;
      font-weight: 600;
      font-size: 0.75rem;
      padding: 0.375rem 1.25rem;
      cursor: pointer;
      width: max-content;
      transition: background-color 0.2s ease;
    }
    .banner-content button:hover {
      background-color: #7f1d1d;
    }
    section {
      margin-top: 2rem;
    }
    section h3 {
      font-weight: 600;
      font-size: 1.125rem;
      margin-bottom: 0.5rem;
      color: #1a202c;
    }
    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem;
    }
    .section-header a {
      font-weight: 600;
      font-size: 0.75rem;
      color: #4a5568;
    }
    .section-header a:hover {
      color: #b91c1c;
    }
    .grid-6 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.75rem;
    }
    @media(min-width: 640px) {
      .grid-6 {
        grid-template-columns: repeat(6, 1fr);
      }
    }
    .card {
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 0.5rem;
      padding: 0.5rem;
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      height: 100%;
    }
    .card img {
      width: 100%;
      height: 120px;
      object-fit: cover;
      border-radius: 0.5rem;
      flex-shrink: 0;
    }
    .card .title {
      font-weight: 600;
      font-size: 0.75rem;
      color: #1a202c;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .card .price-old {
      font-size: 0.75rem;
      color: #a0aec0;
      text-decoration: line-through;
    }
    .card .price-new {
      font-size: 0.75rem;
      font-weight: 600;
      color: #b91c1c;
    }
    .card button {
      background-color: #991b1b;
      border: none;
      border-radius: 9999px;
      color: white;
      font-weight: 600;
      font-size: 0.75rem;
      padding: 0.375rem 0;
      cursor: pointer;
      margin-top: auto;
      transition: background-color 0.2s ease;
    }
    .card button:hover {
      background-color: #7f1d1d;
    }
    .big-card {
      background-color: #7f1d1d;
      color: white;
      border-radius: 0.5rem;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
    }
    .big-card p {
      font-size: 0.75rem;
      font-weight: 600;
      margin: 0;
    }
    .big-card button {
      background-color: #991b1b;
      border: none;
      border-radius: 9999px;
      color: white;
      font-weight: 600;
      font-size: 0.75rem;
      padding: 0.375rem 1rem;
      cursor: pointer;
      margin-top: 1rem;
      width: max-content;
      transition: background-color 0.2s ease;
    }
    .big-card button:hover {
      background-color: #7f1d1d;
    }
    .big-card img {
      margin-top: 1rem;
      border-radius: 0.5rem;
      width: 100%;
      height: 160px;
      object-fit: cover;
    }
    .discount-banner {
      background-color: #7f1d1d;
      border-radius: 0.5rem;
      color: white;
      font-weight: 600;
      font-size: 0.75rem;
      padding: 1rem 1.5rem;
      text-align: center;
      margin-top: 2rem;
    }
    .discount-banner span {
      background: white;
      color: #7f1d1d;
      font-weight: 700;
      padding: 0.25rem 1rem;
      border-radius: 9999px;
      margin-left: 0.5rem;
      letter-spacing: 0.1em;
    }
    .category-grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
      margin-top: 1rem;
    }
    .category-card {
      background-color: #7f1d1d;
      border-radius: 0.5rem;
      width: 112px;
      padding: 1rem 0.75rem;
      color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      cursor: pointer;
      user-select: none;
    }
    .category-card img {
      width: 48px;
      height: 48px;
      object-fit: contain;
    }
    .category-card span {
      font-weight: 600;
      font-size: 0.75rem;
      text-align: center;
      text-transform: capitalize;
    }
    .marketplace-banner {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: center;
      margin-top: 2rem;
    }
    .marketplace-card {
      border-radius: 0.5rem;
      padding: 1.5rem 1rem;
      color: white;
      width: 100%;
      max-width: 360px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.75rem;
      font-weight: 600;
      font-size: 0.875rem;
      text-align: center;
      user-select: none;
    }
    .marketplace-card.orange {
      background-color: #f97316;
    }
    .marketplace-card.blue {
      background-color: #1e40af;
    }
    .marketplace-card img {
      width: 120px;
      height: 40px;
      object-fit: contain;
    }
    .marketplace-card button {
      background: white;
      color: inherit;
      border: none;
      border-radius: 9999px;
      font-weight: 600;
      font-size: 0.75rem;
      padding: 0.375rem 1.25rem;
      cursor: pointer;
      transition: background-color 0.2s ease;
    }
    .marketplace-card button:hover {
      background-color: #f3f4f6;
    }
    nav.pagination {
      display: flex;
      justify-content: center;
      gap: 1rem;
      font-weight: 600;
      font-size: 0.875rem;
      color: #4a5568;
      margin-bottom: 3rem;
    }
    nav.pagination button {
      background: none;
      border: none;
      cursor: pointer;
      color: inherit;
      font-weight: 600;
      font-size: 1rem;
      padding: 0;
      transition: color 0.2s ease;
    }
    nav.pagination button:hover {
      color: #b91c1c;
    }
    footer {
      background-color: #f3f4f6;
      color: #4a5568;
      font-size: 0.75rem;
      padding: 2rem 1rem 1rem;
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      justify-content: space-between;
    }
    footer > div {
      flex: 1 1 200px;
      min-width: 200px;
    }
    footer h4 {
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
    footer ul {
      list-style: none;
      padding: 0;
      margin: 0;
      line-height: 1.5;
    }
    footer address {
      font-style: normal;
      line-height: 1.5;
    }
    .social-icons {
      display: flex;
      gap: 1rem;
      margin-bottom: 1rem;
    }
    .social-icons a {
      color: #4a5568;
      font-size: 1.25rem;
      transition: color 0.2s ease;
    }
    .social-icons a:hover {
      color: #b91c1c;
    }
    .footer-bottom {
      background-color: #111827;
      color: #d1d5db;
      font-size: 0.625rem;
      text-align: center;
      padding: 0.5rem 1rem;
      user-select: none;
    }
    .footer-bottom a {
      color: #d1d5db;
      margin: 0 0.5rem;
    }
    .footer-bottom a:hover {
      color: white;
    }
    @media(min-width: 640px) {
      header {
        flex-wrap: nowrap;
      }
      .header-left {
        font-size: 0.75rem;
      }
      nav {
        margin: 0;
      }
      .header-right {
        margin: 0;
      }
    }
  </style>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap" rel="stylesheet" />
  <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <script crossorigin src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
  <div id="root"></div>
  <script type="text/babel">
    const productsRecommended = [
      {
        id: 1,
        title: "Best Product 202",
        priceOld: "₱ 905.00",
        priceNew: "₱ 700.00",
        img: "https://storage.googleapis.com/a1aa/image/53467d33-4e1d-4bb8-44bf-a635a0bf9a6a.jpg",
        alt: "Compass product image with black background",
      },
      {
        id: 2,
        title: "Anti-Conflict Rooster",
        priceNew: "₱ 287.00",
        img: "https://storage.googleapis.com/a1aa/image/8a90e283-c103-4f24-b892-7f6381990254.jpg",
        alt: "Anti-Conflict Rooster figurine",
      },
      {
        id: 3,
        title: "Forever Wealth W...",
        priceOld: "₱ 799.00",
        priceNew: "₱ 499.00",
        img: "https://storage.googleapis.com/a1aa/image/c715ea2c-ac3e-471d-a831-c96bc429cc8c.jpg",
        alt: "Colorful beads called Forever Wealth Wealth",
      },
      {
        id: 4,
        title: "Beautiful Gold coin",
        priceOld: "₱ 590.00",
        priceNew: "₱ 301.00",
        img: "https://storage.googleapis.com/a1aa/image/044e292f-49ac-4cc0-ca9e-64c859cfd48d.jpg",
        alt: "Beautiful Gold coin",
      },
      {
        id: 5,
        title: "Emerald Bowl",
        priceOld: "₱ 799.00",
        priceNew: "₱ 499.00",
        img: "https://storage.googleapis.com/a1aa/image/fccdff4c-4a09-4f3c-bef2-096d889fe782.jpg",
        alt: "Emerald Bowl",
      },
      {
        id: 6,
        title: "Lucky Bottle",
        priceNew: "₱ 499.00",
        img: "https://storage.googleapis.com/a1aa/image/68106c35-3fd7-4bd6-884f-5b6bfc7abda9.jpg",
        alt: "Lucky Bottle",
      },
      {
        id: 7,
        title: "Planner for 2025",
        priceNew: "₱ 589.00",
        img: "https://storage.googleapis.com/a1aa/image/cacc6e6a-524e-47e1-a00b-76d81d92debb.jpg",
        alt: "Planner for 2025",
      },
      {
        id: 8,
        title: "Winning Streak 'Su...",
        priceOld: "₱ 799.00",
        priceNew: "₱ 499.00",
        img: "https://storage.googleapis.com/a1aa/image/7beb4532-99c8-478a-6c70-d62364475462.jpg",
        alt: "Winning Streak 'Su...",
      },
      {
        id: 9,
        title: "24K Gold-Plated S...",
        priceOld: "₱ 730.00",
        priceNew: "₱ 499.00",
        img: "https://storage.googleapis.com/a1aa/image/941d7fbf-afcb-42d6-e2a0-fa13f9689292.jpg",
        alt: "24K Gold-Plated S...",
      },
      {
        id: 10,
        title: "Luck Transforming...",
        priceOld: "₱ 790.00",
        priceNew: "₱ 499.00",
        img: "https://storage.googleapis.com/a1aa/image/a7aaff26-82b8-408d-1c66-055206073705.jpg",
        alt: "Luck Transforming...",
      },
    ];

    const productsBestSellers = [
      {
        id: 1,
        title: "15 HUMS Protection",
        priceNew: "₱ 298.00",
        img: "https://storage.googleapis.com/a1aa/image/4ede3d71-e94e-4a15-ff6d-080cca355c54.jpg",
        alt: "15 HUMS Protection amulet",
      },
      {
        id: 2,
        title: "Wealth Talisman",
        priceNew: "₱ 78.00",
        img: "https://storage.googleapis.com/a1aa/image/09a4e4a8-5c2d-4bc7-e50b-55c145983f90.jpg",
        alt: "Wealth Talisman",
      },
      {
        id: 3,
        title: "Gift of Gold - Chinese",
        priceNew: "₱ 989.00",
        img: "https://storage.googleapis.com/a1aa/image/fbbc75e6-052c-4b4f-c535-bdba24ca10a9.jpg",
        alt: "Gift of Gold - Chinese",
      },
      {
        id: 4,
        title: "Sky Animal - Rooster",
        priceNew: "₱ 198.00",
        img: "https://storage.googleapis.com/a1aa/image/3774e4b3-7485-4f9b-a06c-6e23f0094005.jpg",
        alt: "Sky Animal - Rooster",
      },
      {
        id: 5,
        title: "Gift of Gold - Rooster",
        priceNew: "₱ 1,498.00",
        img: "https://storage.googleapis.com/a1aa/image/e3843800-dd42-4867-d94d-10e9bfb0dae3.jpg",
        alt: "Gift of Gold - Rooster",
      },
      {
        id: 6,
        title: "Choy San Yeh, God",
        priceNew: "₱ 118.99",
        img: "https://storage.googleapis.com/a1aa/image/e751697d-fac3-43b8-b1ce-0eab9d93db41.jpg",
        alt: "Choy San Yeh, God",
      },
      {
        id: 7,
        title: "Luck Transforming...",
        priceNew: "₱ 252.00",
        img: "https://storage.googleapis.com/a1aa/image/714a49b4-9d35-4f8f-ec76-b63f86c12b72.jpg",
        alt: "Luck Transforming amulet",
      },
      {
        id: 8,
        title: "Fame Flowers",
        priceNew: "₱ 148.00",
        img: "https://storage.googleapis.com/a1aa/image/c9d61cff-8afa-4ff3-3f9c-fa8a49ad67f6.jpg",
        alt: "Fame Flowers",
      },
      {
        id: 9,
        title: "Geser of Ling Plaque",
        priceNew: "₱ 189.97",
        img: "https://storage.googleapis.com/a1aa/image/97c7c42b-8367-4262-a0d2-90ed7ad1fc16.jpg",
        alt: "Geser of Ling Plaque",
      },
      {
        id: 10,
        title: "9 Phoenix",
        priceNew: "₱ 148.00",
        img: "https://storage.googleapis.com/a1aa/image/8eb9b94a-c78d-4550-b897-b072f561e7e3.jpg",
        alt: "9 Phoenix",
      },
    ];

    const productsFlashDeals = [
      {
        id: 1,
        title: "Angel Wings with Sc...",
        priceNew: "₱ 148.00",
        img: "https://storage.googleapis.com/a1aa/image/1219babf-2086-4a1f-f904-46c5b0d57330.jpg",
        alt: "Angel Wings with Sacred design",
      },
      {
        id: 2,
        title: "Yu Lou",
        priceNew: "₱ 148.00",
        img: "https://storage.googleapis.com/a1aa/image/39001bd7-3ff7-4c80-e4c2-c107f00fb1b2.jpg",
        alt: "Yu Lou",
      },
      {
        id: 3,
        title: "Bejewelled Blue Tara",
        priceNew: "₱ 205.97",
        img: "https://storage.googleapis.com/a1aa/image/82eafaa8-c276-4903-1577-7bf77b35f2f1.jpg",
        alt: "Bejewelled Blue Tara",
      },
      {
        id: 4,
        title: "Gift of Gold - Nedi...",
        priceNew: "₱ 1,499.00",
        img: "https://storage.googleapis.com/a1aa/image/8a4e0003-2700-4faf-9fba-f1bf7537215e.jpg",
        alt: "Gift of Gold - Nedi...",
      },
      {
        id: 5,
        title: "Luo Han with Crane",
        priceNew: "₱ 176.00",
        img: "https://storage.googleapis.com/a1aa/image/1b858f34-5136-464b-7747-521b89b9a32e.jpg",
        alt: "Luo Han with Crane",
      },
      {
        id: 6,
        title: "Dragon Brooch",
        priceNew: "₱ 59.00",
        img: "https://storage.googleapis.com/a1aa/image/9e9eb7c5-999d-477c-987c-198138287d72.jpg",
        alt: "Dragon Brooch",
      },
    ];

    const categories = [
      {
        id: 1,
        title: "Best Sellers",
        img: "https://storage.googleapis.com/a1aa/image/cf2bd1b2-1dc4-4bf9-52e2-c6179f4766fa.jpg",
        alt: "Best Seller icon with laurel wreath",
      },
      {
        id: 2,
        title: "Flash Deals",
        img: "https://storage.googleapis.com/a1aa/image/3f051fa4-c503-48f7-1738-88c58c20f235.jpg",
        alt: "Flash Deal icon with lightning bolt",
      },
      {
        id: 3,
        title: "Books",
        img: "https://storage.googleapis.com/a1aa/image/0799df8e-85e0-4a0b-2626-addf4a6e27e5.jpg",
        alt: "Books icon with open book",
      },
      {
        id: 4,
        title: "Amulets",
        img: "https://storage.googleapis.com/a1aa/image/507307a1-b685-4dc7-9542-d73159731626.jpg",
        alt: "Amulets icon with pendant",
      },
      {
        id: 5,
        title: "Bracelets",
        img: "https://storage.googleapis.com/a1aa/image/c3703f28-abfb-4330-d690-ea2ec392d203.jpg",
        alt: "Bracelets icon with beads",
      },
    ];

    const marketplace = [
      {
        id: 1,
        name: "Shopee",
        img: "https://storage.googleapis.com/a1aa/image/b3d02d41-282a-4b9a-43a3-bada47db2b6b.jpg",
        alt: "Shopee logo",
        bgClass: "orange",
      },
      {
        id: 2,
        name: "Lazada",
        img: "https://storage.googleapis.com/a1aa/image/10cdb606-341f-45d2-b290-7b5398f81723.jpg",
        alt: "Lazada logo",
        bgClass: "blue",
      },
    ];

    const allProducts = [
      {
        id: 1,
        title: "15 HUMS Protection",
        priceNew: "₱ 72.97",
        img: "https://storage.googleapis.com/a1aa/image/4ede3d71-e94e-4a15-ff6d-080cca355c54.jpg",
        alt: "15 HUMS Protection amulet",
      },
      {
        id: 2,
        title: "Red Dragon",
        priceNew: "₱ 18.80",
        img: "https://storage.googleapis.com/a1aa/image/cf3d9e1a-92ef-4a9c-ed26-8c67569ab7bd.jpg",
        alt: "Red Dragon",
      },
      {
        id: 3,
        title: "King Geser Pin",
        priceNew: "₱ 72.97",
        img: "https://storage.googleapis.com/a1aa/image/7b0590d1-ed5d-44d4-a2fe-c0c9554c6f00.jpg",
        alt: "King Geser Pin",
      },
      {
        id: 4,
        title: "Pair of Chi Lin",
        priceNew: "₱ 399.97",
        img: "https://storage.googleapis.com/a1aa/image/aff0c248-1d59-45ef-41db-df21f022eef1.jpg",
        alt: "Pair of Chi Lin",
      },
      {
        id: 5,
        title: "Warrior on Elephant",
        priceNew: "₱ 72.97",
        img: "https://storage.googleapis.com/a1aa/image/a11d2f51-1c36-4661-f07e-22296a80a08e.jpg",
        alt: "Warrior on Elephant",
      },
      {
        id: 6,
        title: "Sample Item",
        priceOld: "₱ 799.00",
        priceNew: "₱ 499.00",
        img: "https://storage.googleapis.com/a1aa/image/a4181036-07c9-4edc-4a97-2abc21407b16.jpg",
        alt: "Sample Item emerald bowl",
      },
      {
        id: 7,
        title: "Prayer Wheel Pendant",
        priceNew: "₱ 748.00",
        img: "https://storage.googleapis.com/a1aa/image/07783cda-1bea-492a-e824-93e5c30b8eaa.jpg",
        alt: "Prayer Wheel Pendant",
      },
      {
        id: 8,
        title: "Five Prosperity Bats",
        priceNew: "₱ 92.79",
        img: "https://storage.googleapis.com/a1aa/image/e3f25453-8c63-4efa-937c-6fa76e36ada8.jpg",
        alt: "Five Prosperity Bats",
      },
      {
        id: 9,
        title: "God of Longevity",
        priceNew: "₱ 49.97",
        img: "https://storage.googleapis.com/a1aa/image/0e7aa327-8ef8-4c79-c5e8-e17bab387809.jpg",
        alt: "God of Longevity",
      },
      {
        id: 10,
        title: "Garuda with Ant Ill...",
        priceNew: "₱ 115.97",
        img: "https://storage.googleapis.com/a1aa/image/c5730bb3-4fc9-4145-16ee-24c24c498fb3.jpg",
        alt: "Garuda with Ant Ill...",
      },
      {
        id: 11,
        title: "Jade Wu Lou Pendant",
        priceNew: "₱ 41.97",
        img: "https://storage.googleapis.com/a1aa/image/4504840a-ded5-4892-7ab5-5cc174c37232.jpg",
        alt: "Jade Wu Lou Pendant",
      },
      {
        id: 12,
        title: "Medicine Buddha",
        priceNew: "₱ 9.97",
        img: "https://storage.googleapis.com/a1aa/image/a78d53fa-497e-46fc-1be0-07664545c90c.jpg",
        alt: "Medicine Buddha",
      },
      {
        id: 13,
        title: "Bejewelled Blue Tara",
        priceNew: "₱ 205.97",
        img: "https://storage.googleapis.com/a1aa/image/82eafaa8-c276-4903-1577-7bf77b35f2f1.jpg",
        alt: "Bejewelled Blue Tara",
      },
      {
        id: 14,
        title: "Dragon Brooch",
        priceNew: "₱ 59.00",
        img: "https://storage.googleapis.com/a1aa/image/9e9eb7c5-999d-477c-987c-198138287d72.jpg",
        alt: "Dragon Brooch",
      },
      {
        id: 15,
        title: "Yu Lou",
        priceNew: "₱ 148.00",
        img: "https://storage.googleapis.com/a1aa/image/39001bd7-3ff7-4c80-e4c2-c107f00fb1b2.jpg",
        alt: "Yu Lou",
      },
      {
        id: 16,
        title: "Angel Wings with S...",
        priceNew: "₱ 148.00",
        img: "https://storage.googleapis.com/a1aa/image/1219babf-2086-4a1f-f904-46c5b0d57330.jpg",
        alt: "Angel Wings with Sacred design",
      },
      {
        id: 17,
        title: "Luo Han with Crane",
        priceNew: "₱ 176.00",
        img: "https://storage.googleapis.com/a1aa/image/1b858f34-5136-464b-7747-521b89b9a32e.jpg",
        alt: "Luo Han with Crane",
      },
      {
        id: 18,
        title: "Gift of Gold - Medic...",
        priceNew: "₱ 1,499.00",
        img: "https://storage.googleapis.com/a1aa/image/a898b284-8ed7-453e-6fc3-4b14c3716267.jpg",
        alt: "Gift of Gold - Medicine Buddha",
      },
    ];

    function Header() {
      return (
        <header>
          <div className="header-left" aria-label="Brand and tagline">
            <span>MICHAEL DE MESA</span>
            <span>|</span>
            <span>ASTROLOGY &amp; FENG SHUI</span>
          </div>
          <nav aria-label="Primary navigation">
            <a href="#">Shop</a>
            <a href="#">Consultations</a>
            <a href="#">Horoscope</a>
            <a href="#">Blogs</a>
            <a href="#">Tree Tools</a>
          </nav>
          <div className="header-right">
            <input type="text" placeholder="Search for product" aria-label="Search for product" />
            <button className="btn-red" type="button">Newsletter Signup</button>
            <button className="btn-red btn-cart" type="button" aria-label="Shopping cart with 0 items">
              <i className="fas fa-shopping-cart" aria-hidden="true"></i> Cart (0)
            </button>
          </div>
        </header>
      );
    }

    function TopButtons() {
      const buttons = [
        "Recommended for you",
        "Best Sellers",
        "Flash Deals",
        "Categories",
        "All Products",
      ];
      return (
        <div className="top-buttons" role="group" aria-label="Top category buttons">
          {buttons.map((btn, i) => (
            <button key={i} type="button">{btn}</button>
          ))}
        </div>
      );
    }

    function InfoBar() {
      return (
        <div className="info-bar" role="region" aria-label="Information bar">
          <div>
            <img src="https://storage.googleapis.com/a1aa/image/6552c9fb-2801-46b8-f0f5-e0bd2eb15670.jpg" alt="Gift icon" width="24" height="24" />
            <span>FREE GIFT in Every Transactions</span>
          </div>
          <div className="divider" aria-hidden="true"></div>
          <div>
            <img src="https://storage.googleapis.com/a1aa/image/c4440a40-71ad-4a77-4be1-05ae16a5f08b.jpg" alt="Support agent icon" width="24" height="24" />
            <span>24/7 Virtual Support Agent</span>
          </div>
          <div className="divider" aria-hidden="true"></div>
          <div>
            <img src="https://storage.googleapis.com/a1aa/image/bed0f472-7aef-4537-b21c-7c8f42c85a81.jpg" alt="Return icon" width="24" height="24" />
            <span>100% RETURN Within 7 Days</span>
          </div>
        </div>
      );
    }

    function Banner() {
      return (
        <div className="banner-grid">
          <article className="banner-card" aria-label="What's New banner">
            <img src="https://storage.googleapis.com/a1aa/image/fd198f24-c17b-427b-acfd-9a68592e772a.jpg" alt="Person wearing bracelets on arm" />
            <div className="banner-content">
              <h2>WHAT'S NEW?</h2>
              <p>Know our new arrival discounts, and on going promo!</p>
              <button type="button">SHOP NOW</button>
            </div>
          </article>
          <article className="banner-card" aria-label="Best Sellers banner">
            <img src="https://storage.googleapis.com/a1aa/image/86953da2-22ea-4d63-7fde-8d87003bc7d3.jpg" alt="Gold coins and amulets" />
            <div className="banner-content">
              <h2>BEST SELLERS!</h2>
              <p>Welcome prosperity and luck with our best seller items!</p>
              <button type="button">SHOP NOW</button>
            </div>
          </article>
        </div>
      );
    }

    function ProductCard({ product }) {
      return (
        <article className="card" aria-label={product.title}>
          <img src={product.img} alt={product.alt} />
          <div className="title" title={product.title}>{product.title}</div>
          {product.priceOld && <div className="price-old">{product.priceOld}</div>}
          <div className="price-new">{product.priceNew}</div>
          <button type="button">BUY NOW</button>
        </article>
      );
    }

    function BigCardRecommended() {
      return (
        <article className="big-card" aria-label="Recommended message">
          <p>All PakBet TV merchandises are guaranteed cleansed before shipping.</p>
          <button type="button">WATCH THE CLEANSING PROCESS</button>
          <img src="https://storage.googleapis.com/a1aa/image/fd2a8b2e-8b35-4b30-cf5d-081c1117851d.jpg" alt="White cup and wooden stick on black background" />
        </article>
      );
    }

    function RecommendedForYou() {
      return (
        <section aria-labelledby="recommended-title">
          <div className="section-header">
            <h3 id="recommended-title">Recommended For You</h3>
            <a href="#">See More</a>
          </div>
          <div className="grid-6">
            <BigCardRecommended />
            {productsRecommended.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      );
    }

    function DiscountBanner() {
      return (
        <section className="discount-banner" aria-label="Discount code banner">
          <p>Sign up and Receive exclusive discount on your first order.</p>
          <p>USE CODE: <span>HELLOPAKBET</span></p>
        </section>
      );
    }

    function SmallBanner({ img, alt, title }) {
      return (
        <article className="category-card" role="button" tabIndex="0" aria-label={title}>
          <img src={img} alt={alt} />
          <span>{title}</span>
        </article>
      );
    }

    function SmallBannersRow() {
      return (
        <section className="category-grid" aria-label="Small category banners">
          <SmallBanner img="https://storage.googleapis.com/a1aa/image/fc161a90-ae47-4809-a9b0-022ee544aae6.jpg" alt="Amulet pendant on brown cloth background" title="AMULETS" />
          <SmallBanner img="https://storage.googleapis.com/a1aa/image/cb40ab40-1ec6-4a13-ab71-7b7622b47e24.jpg" alt="Golden windchimes hanging" title="WINDCHIMES" />
          <SmallBanner img="https://storage.googleapis.com/a1aa/image/c19f1d5a-9316-41e6-24ee-4b3c495e3db5.jpg" alt="Incense stick burning with smoke" title="INCENSE & SPACE CLEARING" />
        </section>
      );
    }

    function BestSellers() {
      return (
        <section aria-labelledby="best-sellers-title">
          <div className="section-header">
            <h3 id="best-sellers-title">Best Sellers</h3>
            <a href="#">See More</a>
          </div>
          <div className="grid-6">
            {productsBestSellers.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
            <article className="big-card" aria-label="Master M's Top Picks for this year">
              <p>Master M's Top Picks for this year!</p>
              <button type="button">FIND OUT NOW</button>
              <img src="https://storage.googleapis.com/a1aa/image/056c0762-ba1b-43f9-01cc-b078cd1573e2.jpg" alt="Bracelets on arm with colorful beads" />
            </article>
          </div>
        </section>
      );
    }

    function FlashDeals() {
      return (
        <section aria-labelledby="flash-deals-title">
          <div className="section-header">
            <h3 id="flash-deals-title">Flash Deals</h3>
            <a href="#">See More</a>
          </div>
          <div className="grid-6">
            {productsFlashDeals.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      );
    }

    function Categories() {
      return (
        <section aria-label="Categories">
          <h3>Categories</h3>
          <div className="category-grid">
            {categories.map((cat) => (
              <SmallBanner key={cat.id} img={cat.img} alt={cat.alt} title={cat.title} />
            ))}
          </div>
        </section>
      );
    }

    function Marketplace() {
      return (
        <section aria-label="Marketplace banners">
          <div className="marketplace-banner">
            {marketplace.map((m) => (
              <article key={m.id} className={`marketplace-card ${m.bgClass}`} role="button" tabIndex="0" aria-label={`We are now live on ${m.name}`}>
                <img src={m.img} alt={m.alt} />
                <p>We are now live on</p>
                <button type="button">FIND OUT NOW</button>
              </article>
            ))}
          </div>
        </section>
      );
    }

    function AllProducts() {
      return (
        <section aria-labelledby="all-products-title">
          <h3 id="all-products-title">All Products</h3>
          <div className="grid-6">
            {allProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      );
    }

    function Pagination() {
      return (
        <nav className="pagination" aria-label="Pagination">
          <button type="button" aria-label="Previous page">&lt;</button>
          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button type="button">4</button>
          <button type="button" aria-label="Next page">&gt;</button>
        </nav>
      );
    }

    function Footer() {
      return (
        <>
          <footer>
            <div>
              <h4>FAQ</h4>
              <ul>
                <li>Delivery</li>
                <li>Return / Exchange</li>
                <li>Order / Cancellation</li>
                <li>Payment</li>
                <li>Product/Availability</li>
                <li>Gift Wrapping Services</li>
              </ul>
            </div>
            <div>
              <h4>VISIT US</h4>
              <address>
                <p>Feng Chui by PakBet TV</p>
                <p>Unit 1004 Cityland Shaw Tower</p>
                <p>Corner St. Francis, Shaw Blvd.</p>
                <p>Mandaluyong City, Philippines</p>
                <p>Hours</p>
                <p>Monday - Sunday</p>
                <p>8 am - 5 pm</p>
                <p>Public Holidays - CLOSED</p>
              </address>
            </div>
            <div>
              <h4>FOLLOW US</h4>
              <div className="social-icons" aria-label="Social media links">
                <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f" aria-hidden="true"></i></a>
                <a href="#" aria-label="Instagram"><i className="fab fa-instagram" aria-hidden="true"></i></a>
                <a href="#" aria-label="YouTube"><i className="fab fa-youtube" aria-hidden="true"></i></a>
              </div>
              <h4>NEED HELP?</h4>
              <p>acm@pakbettv.com</p>
              <p>0917.23.2121.2121</p>
            </div>
          </footer>
          <div className="footer-bottom" aria-label="Copyright and legal links">
            COPYRIGHT © PAKBET TV FENG SHUI CONSULTANCY INC. ALL RIGHTS RESERVED
          </div>
          <div className="footer-bottom">
            <a href="#">Terms of use</a> | <a href="#">Privacy Policy</a>
          </div>
        </>
      );
    }

    function App() {
      return (
        <>
          <Header />
          <main>
            <TopButtons />
            <InfoBar />
            <Banner />
            <RecommendedForYou />
            <DiscountBanner />
            <SmallBannersRow />
            <BestSellers />
            <FlashDeals />
            <Categories />
            <Marketplace />
            <AllProducts />
            <Pagination />
          </main>
          <Footer />
        </>
      );
    }

    ReactDOM.createRoot(document.getElementById('root')).render(<App />);
  </script>
</body>
</html>