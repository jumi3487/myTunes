import React, { useState } from "react";
import './index.css';

function App() {
  const [openAlbums, setOpenAlbums] = useState([]);

  const toggleAlbum = (albumName) => {
    if (openAlbums.includes(albumName)) {
      setOpenAlbums(openAlbums.filter(name => name !== albumName));
    } else {
      setOpenAlbums([...openAlbums, albumName]);
    }
  };


  return (
    <>
      <header>
        <h1>MyTunes</h1>
      </header>
      <main>
        <section>
          <img className="seventeen" src="/seventeen.jpg" alt="SEVENTEEN" />
        </section>
        <section>
          <h2 className="seventeen">SEVENTEEN's Albums</h2>
          <div>
            <div className="ablum-title" onClick={() => toggleAlbum("Heng:garæ")} style={{ cursor: "pointer", fontWeight: "bold" }}>
              <span>Heng:garæ</span>
              <span>{openAlbums.includes("Heng:garæ") ? "-" : "+"}</span>
            </div>
            {openAlbums.includes("Heng:garæ") && (
              <ul>
                <li>"Fearless"</li>
                <li>"Left&Right"</li>
                <li>"MyMy"</li>
                <li>"I Wish</li>
                <li>"Kidult"</li>
              </ul>
            )}
            <div className="ablum-title" onClick={() => toggleAlbum("Face the Sun")} style={{ cursor: "pointer", fontWeight: "bold" }}>
              <span>Face The Sun</span>
              <span>{openAlbums.includes("Face the Sun") ? "-" : "+"}</span>
            </div>
            {openAlbums.includes("Face the Sun") && (
              <ul>
                <li>"HOT"</li>
                <li>"Darl+ing"</li>
                <li>"DON QUIXOTE"</li>
                <li>"March"</li>
                <li>"Domino"</li>
              </ul>
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
