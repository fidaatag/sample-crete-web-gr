import { Icon } from "@iconify/react/dist/iconify.js"

const Footer = () => {
  return (

    <section className="px-4 lg:px-20 flex flex-col gap-10 lg:gap-16 border-t pt-16">

      {/* top */}
      <div className="flex flex-col lg:flex-row gap-10 justify-between">

        {/* logo + email */}
        <div className="flex flex-col gap-10">

          <div>
            <div className="w-40">
              <img src="./Logo_black.png" className="w-full h-full object-cover" alt="" />
            </div>
            <p className="mt-2 text-base max-w-50">Discover Creta: Your Ultimate Travel Guide</p>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold text-base" htmlFor="">Get the latest news and updates</label>
            <input className="px-4 py-2 border rounded-lg shadow-lg" type="text" placeholder="Enter your email address" />
            <button className="mt-2 px-3 py-2 bg-cyan-950 text-white font-semibold w-fit rounded-lg">Suscribe</button>
          </div>


        </div>

        {/* menu */}
        <div className="flex gap-20">
          {/* 01 */}
          <div className="flex flex-col gap-3">
            <p className="text-base font-semibold mb-3">About Us</p>
            <p className="text-base">Mission</p>
            <p className="text-base">Our Team</p>
            <p className="text-base">Awards</p>
            <p className="text-base">Testimonials</p>
            <p className="text-base">Privacy policy</p>
          </div>
          {/* 02 */}
          <div className="flex flex-col gap-3">
            <p className="text-base font-semibold mb-3">About Us</p>
            <p className="text-base">Web design</p>
            <p className="text-base">Web development</p>
            <p className="text-base">Mobile design</p>
            <p className="text-base">UI/UX design</p>
            <p className="text-base">Branding design</p>
          </div>

        </div>

        {/* maps */}
        <div className="flex flex-col gap-3 w-full lg:w-96">
          <p className="text-base font-semibold mb-3">Maps</p>
          <div className="relative w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d833516.8422309774!2d24.257420728025902!3d35.3078409092689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x149a555aa4cf0283%3A0x69ac157a30fcbb59!2sKreta!5e0!3m2!1sid!2sid!4v1732263545812!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="lg:hidden flex justify-center gap-2">
          <div className="border p-1 bg-cyan-950 rounded-lg w-fit text-sm text-white"><Icon icon="ri:facebook-fill" /></div>
          <div className="border p-1 bg-cyan-950 rounded-lg w-fit text-sm text-white"><Icon icon="ri:whatsapp-fill" /></div>
          <div className="border p-1 bg-cyan-950 rounded-lg w-fit text-sm text-white"><Icon icon="ri:instagram-fill" /></div>
          <div className="border p-1 bg-cyan-950 rounded-lg w-fit text-sm text-white"><Icon icon="ri:twitter-x-fill" /></div>
        </div>

      </div>

      {/* bottom */}
      <div className="flex justify-between py-6 border-t text-center">
        <p className="text-[12px] font-normal text-cyan-950 px-5 lg:px-0">
          Copyright © 2025 Crete-Web
          <span className="text-gray-400 px-1">|</span>
          All Rights Reserved
          <span className="text-gray-400 px-1">|</span>
          <span className="font-semibold underline">Terms and Conditions</span>
          <span className="text-gray-400 px-1">|</span>
          <span className="font-semibold underline">Privacy Policy</span>
        </p>
        <div className="hidden lg:flex gap-2">
          <div className="border p-1 bg-cyan-950 rounded-lg w-fit text-sm text-white"><Icon icon="ri:facebook-fill" /></div>
          <div className="border p-1 bg-cyan-950 rounded-lg w-fit text-sm text-white"><Icon icon="ri:whatsapp-fill" /></div>
          <div className="border p-1 bg-cyan-950 rounded-lg w-fit text-sm text-white"><Icon icon="ri:instagram-fill" /></div>
          <div className="border p-1 bg-cyan-950 rounded-lg w-fit text-sm text-white"><Icon icon="ri:twitter-x-fill" /></div>
        </div>
      </div>

    </section>
  )
}

export default Footer
