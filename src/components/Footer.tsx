import React from "react";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/logo.svg";
const Footer = () => {
  return (
    <div className="font-jakarta mx-8 my-4 text-[#0D062D]">
      <div className="my-8 h-[1px] w-full bg-black/20" />
      <div className="flex flex-col  gap-8 md:gap-16 md:flex-row justify-between">
        <div className="flex flex-col gap-4">
          <Image
            src={logo as HTMLImageElement}
            alt="jsk-logo"
            height={1000}
            width={1000}
            className="h-fit w-fit"
          />
          <p className="max-w-xs">
            At JSK, our foundation is built on financial wisdom and a commitment
            to your success
          </p>
        </div>
        <div>
          <p className="mb-4 font-[700]">Contact Us</p>
          <div className="mb-8">
            <div className="w-full max-w-md">
              <div className="">
                {/* <div className="table-cell py-2 align-top">
            <Building2 className="opacity-60" />
          </div> */}
                <div className="table-cell pb-2">
                  <p>
                    JSK Portfolio Management Co. L.L.C Unit 18, 18th Floor,
                    Ontario Tower, Business Bay, Dubai. UAE
                  </p>
                </div>
              </div>
              <div className="table-row">
                <div className="table-cell py-2 align-top">
                  <Mail className="opacity-60" />
                </div>
                <div className="table-cell py-2 pl-4">
                  <a
                    href="mailto:sudeepbhartia@gmail.com"
                    className="text-blue-600 underline"
                  >
                    sudeepbhartia@gmail.com
                  </a>
                </div>
              </div>
              <div className="table-row">
                <div className="table-cell py-2 align-top">
                  <Phone className="opacity-60" />
                </div>
                <div className="table-cell py-2 pl-4">
                  <a
                    href="tel:+971565697237"
                    className="text-blue-600 underline"
                  >
                    +971 56 569 7237
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
