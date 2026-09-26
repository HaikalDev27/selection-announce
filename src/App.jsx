import { useState } from "react";
import "./index.css"; 
const prankResults = [ 
  { 
    title: "SELAMAT! 🎉", 
    text: "Kamu resmi diterima sebagai anggota Multimedia.", 
    detail: "Posisi: penonton setia karya multimedia" 
  }, 
  { 
    title: "HASIL SELEKSI", 
    text: "Nama kamu berhasil ditemukan di database.", 
    detail: "Kamu berhasil masuk multimedia seteleh menguras lautan" 
  }, 
  { 
    title: "CONGRATULATIONS!", 
    text: "Kamu lolos seleksi Multimedia.", 
    detail: "Kamu menjabat sebagai ketua parkir" 
  }, 
  { 
    title: "DATA DITEMUKAN.", 
    text: "Setelah melalui proses seleksi yang sangat ketat...", 
    detail: "Kamu terpilih menjadi anggota Multimedia angkatan ∞." 
  }, 
  { 
    title: "SELAMAT! 🥳", 
    text: "Kamu mendapatkan skor seleksi: 100/100.", 
    detail: "Sayangnya, skor tersebut tidak berpengaruh terhadap apa pun." 
  }, 
  { 
    title: "HASIL SELEKSI", 
    text: "Kamu dinyatakan LOLOS.", 
    detail: "Tapi server meminta kamu mentraktir satu divisi terlebih dahulu." 
  }, 
  { 
    title: "SYSTEM ERROR 🤖", 
    text: "Hasil seleksi terlalu bagus untuk diproses.", 
    detail: "Silakan coba lagi setelah menjadi legenda Multimedia." 
  } 
]; 

function App() { 
  const [name, setName] = useState(""); 
  const [screen, setScreen] = useState("home"); 
  const [result, setResult] = useState(null); 
  
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    if (!name.trim()) return; 
    setScreen("loading"); 
    setTimeout(() => { 
      const randomResult = prankResults[Math.floor(Math.random() * prankResults.length)]; 
      setResult(randomResult); 
      setScreen("result"); 
    }, 2500); 
  }; 
  const reset = () => { 
    setName(""); 
    setResult(null); 
    setScreen("home"); 
  }; 
  
  return ( 
    <main className="app">
       {/* HOME */} {screen === "home" && ( 
        <section className="hero">
          <div className="hero-badge"> OFFICIAL SELECTION PORTAL </div> 
          <h1> Pengumuman Hasil <br /> <span>Seleksi Multimedia Scada</span> </h1> 
          <p className="hero-description"> Selamat datang di portal resmi pengumuman hasil seleksi anggota baru Multimedia SMKN 2 Kuningan. </p> 
          <div className="announcement-card"> 
            {/* <div className="card-header"> 
              <div> 
                <span className="small-label"> HASIL SELEKSI </span> 
                <h2>Anggota Baru Multimedia</h2> 
              </div> 
              <div className="date"> 2026 </div> 
            </div>  */}
            {/* <div className="divider"></div>    */}
            <p> Untuk mengetahui hasil seleksi, silakan masukkan nama lengkap kamu pada kolom di bawah. </p> 
            <form onSubmit={handleSubmit}> 
              <label htmlFor="name"> NAMA LENGKAP </label> 
              <input id="name" type="text" placeholder="Masukkan nama kamu..." value={name} onChange={(e) => setName(e.target.value)} autoComplete="off" /> 
              <button type="submit"> CEK HASIL SELEKSI <span>→</span> </button> 
            </form> 
          </div> 
          <div className="notice"> <span>🔒</span> Hasil yang ditentukan sudah dipertimbangkan dan tidak dapat diganggu gugat </div> 
        </section> 
      )} {/* LOADING */} {screen === "loading" && ( 
        <section className="loading-screen"> 
          <div className="loader"></div> 
          <div className="loading-title"> MEMVERIFIKASI DATA </div> 
          <p> Mencari data <strong>{name}</strong>... </p> 
          <div className="loading-bar"> 
            <div></div> 
          </div> 
          <small> Jangan tutup halaman ini. </small> 
        </section> 
      )} {/* RESULT */} {screen === "result" && result && ( 
        <section className="result-screen"> 
        <div className="result-badge"> HASIL SELEKSI </div> 
        <div className="result-card"> 
          <div className="confetti"> ✦ ✦ ✦ </div> 
          <div className="result-icon"> ✓ </div> 
          <p className="result-greeting"> Halo, <strong>{name}</strong>. </p> 
          <h1> {result.title} </h1> 
          <p className="result-text"> {result.text} </p> 
          <div className="result-detail"> {result.detail} </div> 
          <div className="result-divider"></div> 
          <p className="prank-message"><strong>Selamat!</strong> <br /> Kamu baru saja kena prank wkwk, serius amat bang, btw jgn lupa follow @haikaru_27 </p> 
          <button className="back-button" onClick={reset} > ← KEMBALI KE PORTAL </button> 
        </div> 
      </section> )} <footer> © 2026 Multimedia Selection Portal · All Rights Reserved </footer> </main> ); 
    
  } 
      
  export default App;