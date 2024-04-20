/* eslint-disable @next/next/no-img-element */

import ContactForm from "@/components/ContactForm";
import Content from "@/components/Content";
import Header from "@/components/Header";
import Others from "@/components/Others";
import Title from "@/components/Title";

export default function Home() {
  return (
    <>
   <Header/>
   <Title/>
   <Content/>
   <ContactForm/>
   <Others/>
    </>
  );
}
