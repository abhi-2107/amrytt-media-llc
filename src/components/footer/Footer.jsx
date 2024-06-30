function Footer() {
  return (
    <footer className="bg-gradient-to-r from-fuchsia-700/10 to-red-600/10  shadow-md ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Contact Us</h3>
            <a className="text-gray-600 mt-2   hover:underline" href="mailto: test@amrytt.com">Email: test@amrytt.com</a>
            <br />
            <a className="text-gray-600 hover:underline" href="tel: +91 9876543210">Phone: +91 9876543210</a>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Address</h3>
            <p className="text-gray-600 mt-2">Vaishnovdevi Circle, Khoraj</p>
            <p className="text-gray-600">Ahmedabad, 382421, Gujarat</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://www.facebook.com"
                className="text-gray-600 hover:text-gray-900"
                target="_blank"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692V11.01h3.128V8.413c0-3.1 1.892-4.788 4.658-4.788 1.325 0 2.464.099 2.794.144v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.31h3.587l-.467 3.696h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.324V1.325C24 .593 23.407 0 22.675 0z" />
                </svg>
              </a>

              <a
                href="https://x.com/"
                className="text-gray-600 hover:text-gray-900"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#212121"
 
                    d="M38,42H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28	c2.209,0,4,1.791,4,4v28C42,40.209,40.209,42,38,42z"
                   ></path>
                  <path
                    fill="#fff"
                    d="M34.257,34h-6.437L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z"
                  ></path>
                  <polygon
                    fill="#fff"
                    points="15.866,34 23.069,25.656 22.127,24.407 13.823,34"
                  ></polygon>
                  <polygon
                    fill="#fff"
                    points="24.45,21.721 25.355,23.01 33.136,14 31.136,14"
                  ></polygon>
                </svg>
              </a>

              <a
                href="https://www.instagram.com/"
                className="text-gray-600 hover:text-gray-900"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 50 50"
                >
                  <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                className="text-gray-600 hover:text-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 26 26"
                >
                  <path d="M 21.125 0 L 4.875 0 C 2.183594 0 0 2.183594 0 4.875 L 0 21.125 C 0 23.816406 2.183594 26 4.875 26 L 21.125 26 C 23.816406 26 26 23.816406 26 21.125 L 26 4.875 C 26 2.183594 23.816406 0 21.125 0 Z M 8.039063 22.070313 L 4 22.070313 L 3.976563 9.976563 L 8.015625 9.976563 Z M 5.917969 8.394531 L 5.894531 8.394531 C 4.574219 8.394531 3.722656 7.484375 3.722656 6.351563 C 3.722656 5.191406 4.601563 4.3125 5.945313 4.3125 C 7.289063 4.3125 8.113281 5.191406 8.140625 6.351563 C 8.140625 7.484375 7.285156 8.394531 5.917969 8.394531 Z M 22.042969 22.070313 L 17.96875 22.070313 L 17.96875 15.5 C 17.96875 13.910156 17.546875 12.828125 16.125 12.828125 C 15.039063 12.828125 14.453125 13.558594 14.171875 14.265625 C 14.066406 14.519531 14.039063 14.867188 14.039063 15.222656 L 14.039063 22.070313 L 9.945313 22.070313 L 9.921875 9.976563 L 14.015625 9.976563 L 14.039063 11.683594 C 14.5625 10.875 15.433594 9.730469 17.519531 9.730469 C 20.105469 9.730469 22.039063 11.417969 22.039063 15.046875 L 22.039063 22.070313 Z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-600">
          &copy;2023 AMRYTT MEDIA LLC <br /> All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
