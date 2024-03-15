import Image from "next/image";
"use client";
import Tombol_1, {Tombol_2, Tombol_3} from "@/components/button";
import Gallery from "@/components/gallery";
import Form from "@/components/form";
import { Form_2 } from "@/components/form";

export default function Home() {
  return (
    <>
     <div className="container mx-auto">
        <h2>Kuis Kota Mati</h2>
        <Tombol_1/>
        <hr>
        </hr>
        <Tombol_2 isiPesan="Ini pesan dari Presiden :)" namaTombol="Coba Pesan"/>
     </div>
     <br />
     <div className="bg-red-300" onClick={() => alert('Parent Element : Div')}>
        <Tombol_3 isiPesan="Child Element : Tombol-1" namaTombol="Tombol-1"/>
        <Tombol_3 isiPesan="Child Element : Tombol-2" namaTombol="Tombol-2"/>
     </div>
     <br />
     <Gallery />
     <br />
     <Form />
     <br />
     <Form_2 />
    </>
  );
}
