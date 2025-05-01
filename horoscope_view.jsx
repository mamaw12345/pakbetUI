<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Single Blog Preview</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
  />
</head>
<body class="bg-white text-black font-sans">
  <!-- Top Navigation Bar -->
  <nav class="bg-[#1a1a4d] text-white text-xs md:text-sm">
    <div class="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-2">
      <ul class="flex flex-wrap justify-center md:justify-start space-x-4 font-semibold mb-2 md:mb-0">
        <li><a href="#" class="hover:underline">HOME</a></li>
        <li><a href="#" class="hover:underline">SHOP</a></li>
        <li><a href="#" class="hover:underline">CONSULTATIONS</a></li>
        <li><a href="#" class="hover:underline">HOROSCOPE</a></li>
        <li><a href="#" class="hover:underline">BLOGS</a></li>
        <li><a href="#" class="hover:underline">FREE TOOLS</a></li>
        <li><a href="#" class="hover:underline">CONTACT US</a></li>
      </ul>
      <div class="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-6 text-xs md:text-sm font-semibold">
        <div class="flex items-center space-x-1">
          <i class="far fa-eye"></i>
          <span>RECENTLY VIEWED</span>
        </div>
        <div class="flex items-center space-x-1">
          <i class="fas fa-phone-alt"></i>
          <span>0976-120-3535</span>
        </div>
      </div>
    </div>
  </nav>

  <!-- Main Content -->
  <main class="max-w-screen-xl mx-auto px-4 py-8 md:py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
    <!-- Left Content -->
    <section class="md:col-span-2">
      <h1 class="text-base md:text-lg font-normal mb-4">
        Horoscope For Today February 20, 2023
      </h1>
      <img
        src="https://storage.googleapis.com/a1aa/image/890545ad-e629-4746-a719-74d8bbf641ac.jpg"
        alt="Herbal stick in kitchen"
        class="w-full mb-4 object-cover"
        width="900"
        height="400"
      />
      <p class="text-[10px] md:text-xs leading-tight">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit... {/* Truncated for brevity */}
      </p>
    </section>

    <!-- Right Sidebar -->
    <aside class="space-y-6">
      <h2 class="text-sm font-semibold mb-2">Category & Related Posts</h2>

      <article class="border border-yellow-400 rounded-sm overflow-hidden">
        <div class="relative bg-red-700">
          <img
            src="https://storage.googleapis.com/a1aa/image/b0b4af68-77b9-4dbc-560a-9666640683b9.jpg"
            alt="Horoscope Forecast Today"
            class="w-full"
            width="400"
            height="200"
          />
          <div class="absolute inset-0 flex flex-col justify-center items-center space-y-1">
            <span class="bg-[#2f1a0a] bg-opacity-90 text-yellow-400 text-sm font-semibold px-2 py-1">
              Horoscope Forecast Today
            </span>
            <span class="bg-[#2f1a0a] bg-opacity-90 text-white text-sm font-semibold px-3 py-1">
              August 28, 2022
            </span>
          </div>
        </div>
        <div class="px-3 py-2 text-xs font-normal">August 28 Horoscope</div>
      </article>

      <article class="border rounded-sm overflow-hidden">
        <img
          src="https://storage.googleapis.com/a1aa/image/890545ad-e629-4746-a719-74d8bbf641ac.jpg"
          alt="Herbal stick in kitchen"
          class="w-full"
          width="400"
          height="200"
        />
        <div class="px-3 py-2 text-xs font-normal">
          Horoscope For Today February 20, 2023
        </div>
      </article>
    </aside>
  </main>
</body>
</html>