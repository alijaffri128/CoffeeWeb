import React from "react";
import {
  BiLogoFacebook,
  BiLogoWhatsapp,
  BiLogoInstagram,
  BiLogoTiktok,
  BiMap,
  BiPhone,
  BiEnvelope,
} from "react-icons/bi";

const Footer = () => {
  return (
    <>
      <section className="grid gap-8 md:grid-cols-4 px-6 py-12 text-[#1e1e1e]">
        {/* Box 1 */}
        <div className="footer-box flex flex-col gap-5 items-center text-center md:items-start md:text-left">
          <h3 className="text-2xl font-bold">Coffee Shop</h3>
          <p className="text-base">
            Join us in a place where people connect, relax, and enjoy a
            consistent and high-quality beverage
          </p>
          <div className="flex gap-3 justify-center md:justify-start">
            <a href="#"><BiLogoFacebook className="text-4xl bg-[#e2dcd3] hover:bg-[#BC9667] p-1 rounded-md hover:text-white text-black transition-all duration-400 ease-linear" /></a>
            <a href="#"><BiLogoWhatsapp className="text-4xl bg-[#e2dcd3] hover:bg-[#BC9667] p-1 rounded-md hover:text-white text-black transition-all duration-400 ease-linear" /></a>
            <a href="#"><BiLogoInstagram className="text-4xl bg-[#e2dcd3] hover:bg-[#BC9667] rounded-md hover:text-white text-black transition-all duration-400 ease-linear" /></a>
            <a href="#"><BiLogoTiktok className="text-4xl bg-[#e2dcd3] hover:bg-[#BC9667] rounded-md hover:text-white text-black transition-all duration-400 ease-linear" /></a>
          </div>
        </div>

        {/* Box 2 */}
        <div className="footer-box flex flex-col gap-3 items-center text-center md:items-start md:text-left">
          <h3 className="text-xl font-bold">Support</h3>
          <ul className="text-base space-y-2">
            <li><a href="#" className="text-black hover:text-[#BC9667] transition-colors">Product</a></li>
            <li><a href="#" className="text-black hover:text-[#BC9667] transition-colors">Help & Support</a></li>
            <li><a href="#" className="text-black hover:text-[#BC9667] transition-colors">Return Policy</a></li>
            <li><a href="#" className="text-black hover:text-[#BC9667] transition-colors">Terms of Use</a></li>
            <li><a href="#" className="text-black hover:text-[#BC9667] transition-colors">Legal</a></li>
          </ul>
        </div>

        {/* Box 3 */}
        <div className="footer-box flex flex-col gap-3 items-center text-center md:items-start md:text-left">
          <h3 className="text-xl font-bold">View Guides</h3>
          <ul className="text-base space-y-2">
            <li><a href="#" className="text-black hover:text-[#BC9667] transition-colors">Features</a></li>
            <li><a href="#" className="text-black hover:text-[#BC9667] transition-colors">Careers</a></li>
            <li><a href="#" className="text-black hover:text-[#BC9667] transition-colors">Blog Posts</a></li>
            <li><a href="#" className="text-black hover:text-[#BC9667] transition-colors">Our Branches</a></li>
          </ul>
        </div>

        {/* Box 4 */}
        <div className="footer-box flex flex-col gap-3 items-center text-center md:items-start md:text-left">
          <h3 className="text-xl font-bold">Contact</h3>
          <div className="text-base flex flex-col gap-3">
            <span className="flex items-center justify-center md:justify-start gap-2">
              <BiMap className="text-2xl" />
              I 10 Markat, Islamabad 
            </span>
            <span className="flex items-center justify-center md:justify-start gap-2">
              <BiPhone className="text-2x1" />
              +92 3425416106
            </span>
            <span className="flex items-center justify-center md:justify-start gap-2">
              <BiEnvelope className="text-2xl" />
              coffee@shop
            </span>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <div className=" bg-[#e2dcd3] py-5 text-center text-base">
        <p>
          &copy; <a
            href="https://codepen.io/leonam-silva-de-souza"
            className="hover:text-[#BC9667] font-[Turret_Road] text-[var(--text-color)] transition-all duration-400 ease-linear"
            target="_blank"
            rel="noreferrer"
          >ALIJAFFRI CODE</a>. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;