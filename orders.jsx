<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta content="width=device-width, initial-scale=1" name="viewport" />
  <title>Manorlead Orders React</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
    rel="stylesheet"
  />
  <style>
    body {
      font-family: "Inter", sans-serif;
    }
  </style>
</head>
<body class="bg-gradient-to-b from-[#dbe9f9] to-[#f0f5fb] min-h-screen flex items-center justify-center p-4">
  <div id="root" class="w-full max-w-4xl"></div>
  <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <script>
    const e = React.createElement;

    function ProgressStep({ active, label1, label2 }) {
      return e(
        "div",
        {
          className: `flex flex-col items-center w-20 shrink-0 text-xs ${
            active ? "text-gray-700" : "text-gray-400"
          }`,
        },
        e(
          "div",
          {
            className: `w-5 h-5 rounded-full border-2 flex items-center justify-center ${
              active ? "border-[#ef5a3f] bg-[#ef5a3f]" : "border-[#f7d9d0] bg-[#f7d9d0]"
            }`,
          },
          e("div", { className: "w-2.5 h-2.5 rounded-full bg-white" })
        ),
        e(
          "span",
          { className: "mt-1 text-center leading-tight" },
          label1,
          e("br"),
          label2
        )
      );
    }

    function Order1() {
      return e(
        "article",
        { className: "bg-white rounded-lg p-6 shadow-sm space-y-6" },
        e(
          "h3",
          { className: "font-semibold text-gray-800 text-lg" },
          "My Orders"
        ),
        e(
          "div",
          {
            className:
              "flex flex-col md:flex-row md:items-center md:justify-between gap-6",
          },
          e(
            "div",
            { className: "flex-1 min-w-[220px]" },
            e(
              "h4",
              { className: "font-bold text-xl text-gray-900 mb-1" },
              "Order 1"
            ),
            e(
              "p",
              { className: "text-sm text-gray-700" },
              "Agent: Sample Agent"
            ),
            e(
              "p",
              { className: "text-sm text-gray-700" },
              "Task: Buy Property"
            )
          ),
          e(
            "div",
            { className: "flex-1 min-w-[120px]" },
            e(
              "p",
              { className: "font-semibold text-sm text-gray-900 mb-1" },
              "Complete"
            ),
            e(
              "p",
              { className: "font-extrabold text-3xl text-gray-900 mb-1" },
              "45",
              e("span", { className: "text-xl" }, "%")
            ),
            e(
              "div",
              { className: "w-full h-1 bg-gray-300 rounded overflow-hidden" },
              e("div", {
                className: "h-1 bg-[#ef5a3f]",
                style: { width: "45%" },
              })
            )
          ),
          e(
            "div",
            { className: "flex-1 min-w-[140px] text-right" },
            e(
              "p",
              { className: "font-semibold text-sm text-gray-900 mb-1" },
              "Expected Completion"
            ),
            e(
              "p",
              { className: "text-sm font-semibold text-gray-900" },
              "Oct 12, 2019"
            ),
            e(
              "p",
              { className: "text-xs text-gray-600" },
              "15 Days"
            )
          )
        ),
        e(
          "div",
          {
            className:
              "flex justify-between mt-6 max-w-full overflow-x-auto",
          },
          e(
            "div",
            { className: "flex items-center space-x-6 min-w-[600px]" },
            e(ProgressStep, {
              active: true,
              label1: "Initial",
              label2: "Questions",
            }),
            e(ProgressStep, {
              active: true,
              label1: "In-Person",
              label2: "Consultation",
            }),
            e(ProgressStep, {
              active: true,
              label1: "Sign",
              label2: "Contact",
            }),
            e(ProgressStep, {
              active: false,
              label1: "View",
              label2: "Homes",
            }),
            e(ProgressStep, {
              active: false,
              label1: "Send",
              label2: "offer",
            }),
            e(ProgressStep, {
              active: false,
              label1: "Complete",
              label2: "Deal",
            })
          )
        ),
        e(
          "div",
          { className: "space-y-4" },
          e(
            "h4",
            { className: "font-semibold text-gray-800 text-sm" },
            "Recommendations"
          ),
          e(
            "div",
            {
              className:
                "bg-[#fff9e9] rounded p-4 flex justify-between items-center",
            },
            e(
              "div",
              {
                className:
                  "flex items-start gap-3 max-w-[70%] text-xs text-gray-800",
              },
              e("div", { className: "mt-1 w-3 h-3 rounded-full bg-gray-800" }),
              e(
                "p",
                null,
                "23% increase in home listing is word you like to view?"
              )
            ),
            e(
              "div",
              { className: "flex gap-3" },
              e(
                "button",
                {
                  className:
                    "border border-black rounded px-6 py-1 text-xs font-normal hover:bg-gray-100 transition",
                },
                "Yes"
              ),
              e(
                "button",
                {
                  className:
                    "border border-black rounded px-6 py-1 text-xs font-normal hover:bg-gray-100 transition",
                },
                "No"
              )
            )
          ),
          e(
            "div",
            {
              className:
                "bg-[#fff6f4] rounded p-4 flex justify-between items-center",
            },
            e(
              "div",
              {
                className:
                  "flex items-start gap-3 max-w-[70%] text-xs text-gray-800",
              },
              e("div", { className: "mt-1 w-3 h-3 rounded-full bg-gray-800" }),
              e(
                "p",
                null,
                "We recommend that you purchase soon price are 11% below average."
              )
            ),
            e(
              "div",
              { className: "flex gap-3" },
              e(
                "button",
                {
                  className:
                    "border border-black rounded px-6 py-1 text-xs font-normal hover:bg-gray-100 transition",
                },
                "Yes"
              ),
              e(
                "button",
                {
                  className:
                    "border border-black rounded px-6 py-1 text-xs font-normal hover:bg-gray-100 transition",
                },
                "No"
              )
            )
          )
        ),
        e(
          "div",
          {
            className:
              "text-center text-xs text-gray-600 cursor-pointer select-none",
          },
          "Minimize ▲"
        )
      );
    }

    function Order2() {
      return e(
        "article",
        { className: "bg-white rounded-lg p-6 shadow-sm space-y-4" },
        e(
          "div",
          {
            className:
              "flex flex-col md:flex-row md:items-center md:justify-between gap-6",
          },
          e(
            "div",
            { className: "flex-1 min-w-[220px]" },
            e(
              "h4",
              { className: "font-bold text-xl text-gray-900 mb-1" },
              "Order 2"
            ),
            e(
              "p",
              { className: "text-sm text-gray-700" },
              "Task: Buy Property"
            )
          ),
          e(
            "div",
            { className: "flex-1 min-w-[120px]" },
            e(
              "p",
              { className: "font-semibold text-sm text-gray-900 mb-1" },
              "Complete"
            ),
            e(
              "p",
              { className: "font-extrabold text-3xl text-gray-900 mb-1" },
              "75",
              e("span", { className: "text-xl" }, "%")
            ),
            e(
              "div",
              { className: "w-full h-1 bg-gray-300 rounded overflow-hidden" },
              e("div", {
                className: "h-1 bg-[#ef5a3f]",
                style: { width: "75%" },
              })
            )
          ),
          e(
            "div",
            { className: "flex-1 min-w-[140px] text-right" },
            e(
              "p",
              { className: "font-semibold text-sm text-gray-900 mb-1" },
              "Expected Completion"
            ),
            e(
              "p",
              { className: "text-sm font-semibold text-gray-900" },
              "Oct 12, 2019"
            ),
            e(
              "p",
              { className: "text-xs text-gray-600" },
              "15 Days"
            )
          )
        ),
        e(
          "div",
          {
            className:
              "text-center text-xs text-gray-600 cursor-pointer select-none",
          },
          "Expand ▼"
        )
      );
    }

    function App() {
      return e(
        "div",
        {
          className:
            "max-w-4xl w-full bg-white rounded-xl shadow-lg overflow-hidden min-h-[600px] p-6 sm:p-8",
        },
        e(Order1),
        e(Order2)
      );
    }

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(e(App));
  </script>
</body>
</html>