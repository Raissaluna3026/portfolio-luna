import React from "react";
import "../app/globals.css"; 
import Header from "../components/header/Header";
import Homme from "@//home/Homme";



export default function Home() {
  return (
  <>
    <Header/>
    <main className="main">
      <Homme/>
    </main>
    
  </>
  )
}
