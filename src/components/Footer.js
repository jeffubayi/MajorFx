import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-gray-300 pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px", transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">
                Subscribe to Major Fx premium membership services!
              </h4>
              <h4 className="text-1xl font-semibold">
                What do you get ?
              </h4>

              <h5 className="text-sm mt-0 mb-2 text-gray-700">
                》2-4 Intraday Signals with multiple entries
                </h5>
                <h5 className="text-sm mt-0 mb-2 text-gray-700">
》4-6 Swing trade signals every Week
</h5>
<h5 className="text-sm mt-0 mb-2 text-gray-700">
》1000-2000 Profitable Pips Per month
</h5>
<h5 className="text-sm mt-0 mb-2 text-gray-700">
》One on One Professional Forex Mentorship
</h5>
<h5 className="text-sm mt-0 mb-2 text-gray-700">
》Detailed Chart and Video Analysis
</h5>
<h5 className="text-sm mt-0 mb-2 text-gray-700">
》Weekly Market Outlook
</h5>
<h5 className="text-sm mt-0 mb-2 text-gray-700">
》Learn The Forex Trading Strategies That I Use Plus 2 Bonus Strategies
</h5> 
<h5 className="text-sm mt-0 mb-2 text-gray-700">
》Trading Psychology & Emotional Intelligence Training
</h5>
<h5 className="text-sm mt-0 mb-2 text-gray-700">
》We will Develop A Clear Trading Plan To Maintain Your Account Growth
</h5>
<h5 className="text-sm mt-0 mb-2 text-gray-700">
》You Are Going To Trade With Me From Entry To Exit.
              </h5>
              <div>
                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
           <input type="hidden" name="cmd" value="_s-xclick"></input>
          <input type="hidden" name="hosted_button_id" value="8HT723QRB3QM2"/>
         <table>
<tr><td><input type="hidden" name="on0" value="Subscription Plans"/>Subscription Plans</td></tr><tr><td><select name="os0">
 <option value="1 Month">1 Month $40.00 USD</option>
 <option value="3 Months">3 Months $80.00 USD</option>
 <option value="6 Months">6 Months $150.00 USD</option>
 <option value="Lifetime">Lifetime $250.00 USD</option>
</select> </td></tr>
            </table>
<input type="hidden" name="currency_code" value="USD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_paynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
          </div>
              <div className="mt-6">
                <button
                  className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  <i className="flex fab fa-twitter"></i>
                </button>
                <button
                  className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  <i className="flex fab fa-telegram-plane"></i>
                </button>

                <button
                  className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  <i className="flex fab fa-instagram"></i>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
               
                
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-600 font-semibold py-1">
                Copyright © {new Date().getFullYear()}{" "}MajorFx by{" "}
                <a
                  href="https://jeffubayi.site"
                  className="text-gray-600 hover:text-gray-900"
                >
               Ubeezy
                </a>.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
