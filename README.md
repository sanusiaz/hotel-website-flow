# OceanBlue Hotel Template

Welcome to the **OceanBlue Hotel Template** — a modern, fully responsive static HTML template designed for premium hotels and luxury resorts. 

## Features

- **Responsive Design:** Built with Tailwind CSS, the template looks perfect on desktops, tablets, and mobile devices.
- **Dynamic Interactions:** Uses Swiper.js for beautiful, touch-friendly image carousels and hero sections.
- **Micro-Animations:** Enhance the user experience with subtle animations on hover and scroll (using Animate.css).
- **Multi-Language Support:** Seamlessly integrated with Google Translate to provide instant, account-free translations into multiple languages.
- **Multi-Currency Support:** A client-side currency converter using a free live exchange rate API, allowing guests to view prices in USD, EUR, GBP, or JPY.
- **PayPal Integration:** The booking page features a working PayPal Smart Payment Buttons integration (currently using the sandbox `test` client ID).

## Pages Included

- `index.html` - The landing page featuring a full-screen hero slider, amenities, featured rooms, and testimonials.
- `rooms.html` - A comprehensive listing of all available rooms and suites with a filtering sidebar.
- `room-detail.html` - An in-depth view of a specific room, showcasing imagery, amenities, and a booking summary.
- `booking.html` - The checkout page with integrated payment methods (Credit Card and PayPal).
- `dining.html`, `spa.html`, `events.html` - Dedicated pages highlighting the hotel's premium services.
- `contact.html` - A contact form and location information.
- `about.html` - The hotel's story, mission, and vision.
- `policies.html` - Terms and conditions.

## Technologies Used

- **HTML5:** Semantic and accessible markup.
- **Tailwind CSS:** Utility-first CSS framework for rapid UI development.
- **Iconify:** High-quality SVG icons from the Material Design library.
- **Swiper.js:** Modern mobile touch slider.
- **Vanilla JavaScript:** Powers the currency conversion, live chat toggle, scroll animations, and PayPal interaction.

## Setup & Usage

Since this is a static HTML template, no complex build process or server setup is required.

1. **Clone or Download:** Extract the files to your local machine.
2. **Open the Site:** Double-click `index.html` to open it in any modern web browser.
3. **Live Server (Optional but Recommended):** If you are using VS Code, install the "Live Server" extension and run the project to test the AJAX requests (like the currency API).
4. **Go Live with PayPal:** The `booking.html` file uses the sandbox PayPal environment. To accept real payments, open `booking.html`, locate the PayPal script tag, and replace `client-id=test` with your actual PayPal Live Client ID.

## Customization

- **Colors & Fonts:** Tailwind CSS handles all styling. You can modify the classes directly or create a `tailwind.config.js` to override the default theme.
- **Currency Exchange:** The currency API uses `open.er-api.com`. If you wish to use a different provider or hardcode exchange rates, you can modify the script inside the HTML headers.
- **Icons:** All icons use `<iconify-icon>`. You can easily swap icons by changing the `icon="..."` attribute to any icon found on [Iconify Design](https://icon-sets.iconify.design/).
