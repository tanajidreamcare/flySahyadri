import React from "react";
import {BsFacebook} from "react-icons/bs";
import {BsTwitter} from "react-icons/bs";
import {BsInstagram} from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-sky-200 
     py-10 text-blue-900 px-10">
      <div className="flex justify-center">
        <Image
        height={200}
        width={200}
        src={'/logo/logo.png'}
        alt="Logo"
        />
      </div>
      <div className="flex justify-center my-6">
        <div className="flex justify-evenly w-40">
        <BsFacebook />
        <BsInstagram/>
        <BsTwitter/>
        </div>
        
      </div>
      <div>

      </div>
      <hr className="border-blue-800 mb-6"/>
      <div className="md:flex justify-evenly w-full text-sm ">
        <div className="">
          <h1 className="text-xl mb-2 font-extrabold ">Contact Us</h1>
          <div className="">
            
            <div>
            <h1 className="">5629476426</h1>
            <Link href={"/"}><h1 className="">flysahyadri@gmail.com</h1></Link>
            <h1>Kamshet,shelar Site</h1>
            
            <h1>Pune</h1>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-xl mb-2 font-extrabold ">Links</h1>
          <div className="">
            <Link href={"/about"}><h1 className="">About Us</h1></Link>
            <Link href={"/gallery"}><h1 className="">Gallery</h1></Link>
            <Link href={"/services"}><h1 className="">services</h1></Link>
            
          </div>
        </div>
        <div>
          <h1 className="text-xl mb-2 font-extrabold ">Services</h1>
          <div className="">
            <Link href={"/services"}>
            <h1 className="">Bliss Joyride</h1>
            <h1 className="">Instructional Tandem</h1>
            <h1>Acro Tandem</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
