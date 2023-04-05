import React from 'react';
import Links from '../Links';
import Image from '../Image';

const Footer = () => {
  return (
    <>
      <div className="flex flex-col mt-5">
        <div className="flex justify-center items-center container mx-auto w-full flex-col">
          <img
            src="https://assets.jiji.ng/static/img/footer-nigeria.svg"
            alt="footer_image"
          />
        </div>
        <div className="flex  bg-[#3DB83A] h-fit py-5">
          <div className="w-full container mx-auto">
            <div className="w-full grid grid-cols-5  gap-2">
              <div className="flex flex-col gap-y-2 text-[whitesmoke]">
                <h2 className="text-[#006304]">About us</h2>
                <Links url="/about" label="About Jiji" />
                <Links url="/hello" label="We are hiring!" />
                <Links url="/about" label="Terms & Conditions" />
                <Links url="/about" label="Privacy Policy" />
                <Links url="/about" label="Billing Policy" />
                <Links url="/about" label="Cookie Policy" />
                <Links url="/about" label="Copyright Infringement Policy" />
              </div>
              <div className="flex flex-col gap-y-2 text-[whitesmoke]">
                <h2 className="text-[#006304]">Support</h2>
                <Links url="/about" label="support@jiji.ng" />
                <Links url="/about" label="Safety tips" />
                <Links url="/about" label="Contact Us" />
                <Links url="/about" label="FAQ" />
              </div>
              <div className="flex flex-col gap-y-2 text-[whitesmoke]">
                <h2 className="text-[#006304]">Our apps</h2>
                <a href="/">
                  <Image
                    src="https://assets.jiji.ng/static/img/single-images/ios.svg"
                    alt="apple store"
                    className="w-[150px]"
                  />
                </a>
                <a href="/">
                  <Image
                    src="https://assets.jiji.ng/static/img/single-images/android.svg"
                    alt="apple store"
                    className="w-[150px]"
                  />
                </a>
              </div>
              <div className="flex flex-col gap-y-2 text-[whitesmoke]">
                <h2 className="text-[#006304]">Our resources</h2>
                <Links url="/about" label="Our blog" />
                <Links url="/about" label="Jiji on FB" />
                <Links url="/about" label="Our Instagram" />
                <Links url="/about" label="Our YouTube" />
                <Links url="/about" label="Our Twitter" />
              </div>
              <div className="flex flex-col gap-y-2 text-[whitesmoke]">
                <h2 className="text-[#006304]">Hot links</h2>
                <Links url="/about" label="Brand" />
                <Links url="/about" label="Regions" />
                <Links url="/about" label="Jiji Africa" />
              </div>
            </div>
            <div className="flex justify-center p-5">
              <h1>&copy; 2023 Jiji.ng Gibraltar</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
