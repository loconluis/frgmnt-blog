import React from 'react'

export default function FooterOfHomeScene() {
  return (
    <div className="footer-home">
      ¡Hecho con <span className="footer-heart">❤️</span> por mi!
      <style jsx>{`
        .footer-home {
          font-family: 'Montserrat', sans-serif;
          color: #0d09096b;
          position: absolute;
          bottom: 10px;
        }
        .footer-heart {
          color: red;
        }
      `}</style>
    </div>

  )
}
