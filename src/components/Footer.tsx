import Link from "next/link";


export function Footer() {
  return (
    <>
<footer className="bg-neutral-primary-soft h-85 flex items-center">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <div className="mb-6 flex items-center">
                  <img src="https://flowbite.com/docs/images/logo.svg" className="h-7 me-3" alt="FlowBite Logo" />
                  <span className="text-heading self-center text-2xl font-bold whitespace-nowrap">Sheffield Usrah Group</span>
              </div>
              <div className="sm:w-1/2 sm:mt-0 mt-8 h-auto">
              <p className="text-grey-darker leading-normal mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, consectetur. </p>
              <div className="text-red-light mb-2"><strong>Email:</strong> info@mysite.com</div>
              <div className="text-red-light mb-2"><strong>Phone:</strong> 123-456-7890</div>
              <div className="text-red-light mb-2"><strong>Registered Charity:</strong> 12345-67</div>
    </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-2xl tracking-tight font-bold text-heading">Quick Links</h2>
                  <ul className="text-body">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">About</a>
                      </li>
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Support Us</a>
                      </li>
                      <li className="mb-4">
                          <a href="#" className="hover:underline">News</a>
                      </li>
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Events</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Contact</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-heading text-2xl tracking-tight font-bold">Follow Us</h2>
                  <ul className="text-body">
                      <li className="mb-4">
                          <a href="" className="hover:underline ">Facebook</a>
                      </li>
                      <li className="mb-4">
                          <a href="" className="hover:underline">X</a>
                      </li>
                      <li>
                          <a href="" className="hover:underline">Youtube</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-2xl font-bold text-heading">Legal</h2>
                  <ul className="text-body">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
    </div>
</footer>
<div className="bg-slate-100 py-12 sm:px-10 px-6 tracking-wide h-65">
      <div className="max-w-screen-xl mx-auto">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900">Newsletter</h2>
          <p className="text-sm mt-4 text-slate-600 leading-relaxed">Subscribe to our newsletter and stay up to date with the latest news,
            updates, and exclusive offers. Get valuable insights. Join our community today!</p>

          <div className="bg-gray-200 flex px-2 py-1.5 rounded-full text-left mt-8">
            <input type='email' placeholder='Enter your email' className="w-full outline-none bg-transparent text-sm pl-4" />
            <button type='button'
              className="bg-red-500 hover:bg-red-400 text-white text-sm rounded-full px-4 py-2.5 ml-4 transition-all tracking-wide cursor-pointer">Submit</button>
          </div>
        </div>

        <hr className="my-12 border-gray-300" /></div></div>
<div className="w-full h-16 border-b bg-blue-900 sticky top-0 z-50 flex items-center">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div
            className="text-xl tracking-tight text-white"
          >
            © 2035 by Sheffield Usrah Group. Powered and secured by <a
              href="https://nanocrafts.xyz"
              className="text-xl tracking-tight text-white underline"
            >
              Nanocrafts
          </a>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="/"
            className="text-xl tracking-tight text-white"
          >
            Terms & Conditions 
          </a>

          <a
            className="text-xl tracking-tight text-white"
          >
            |
          </a>
          <a
            href="/"
            className="text-xl tracking-tight text-white"
          >
            Privacy Policy
          </a>
          <a
            className="text-xl tracking-tight text-white"
          >
            |
          </a>
          <a
            href="/"
            className="text-xl tracking-tight text-white"
          >
            Accessibility Statement
          </a>
        </div>
      </div>
</div>
</> 
  );
}
