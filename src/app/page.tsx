"use client";
import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import illustration from "@/assets/illustration.jpg";
import Logo from "@/assets/logo.svg";
import Button from "@/components/button";
import { Building2, Instagram, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { Toaster, toast } from "react-hot-toast";
import Footer from "@/components/Footer";

const Page = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("Email", email);
      const response = await axios.post("/api/sheets", formData);
      if (response.data) {
        toast.success(
          "Thank you for your interest! We will reach out to you soon.",
        );
        setEmail("");
      }
    } catch (error) {
      console.error("There was an error submitting the form:", error);
      toast.error("There was an error submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex h-screen w-full max-w-7xl flex-col lg:mx-6 min-[1080px]:mx-auto">
        <Image
          src={Logo as HTMLImageElement}
          alt="jsk-logo"
          height={1000}
          width={1000}
          className="mx-8 my-4 h-16 w-auto self-start lg:my-8"
        />
        <div className="h-[2px] w-full bg-black/20" />
        <div className="flex flex-1 flex-col-reverse items-center justify-center p-8 lg:flex-row">
          <div className="flex flex-col items-center justify-center text-center lg:text-left">
            <div className="mx-1 mb-2 uppercase text-[#525252] lg:self-start">
              coming soon
            </div>
            <div className="text-5xl uppercase text-[#0D263B] lg:text-7xl">
              get notified when we launch
            </div>
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-row gap-4 lg:self-start"
            >
              <input
                className="w-[200px] select-none border-2 border-black/10 bg-white/90 px-5 py-4 text-[14px] outline-none lg:w-[400px]"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" disabled={loading}>
                {loading ? (
                  <svg
                    className="h-5 w-5 animate-spin text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                ) : (
                  "Subscribe"
                )}
              </Button>
            </form>
          </div>
          <Image
            src={illustration as HTMLImageElement}
            alt="freepik-illustration"
            height={1000}
            width={1000}
            className="h-[300px] w-[300px] lg:h-[500px] lg:w-[500px]"
          />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Page;
