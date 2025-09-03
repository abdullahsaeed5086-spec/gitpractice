import Aos from 'aos'
import React, { useEffect } from 'react'
import "aos/dist/aos.css"

const AosLea = () => {
  useEffect(()=>{
    Aos.init({duration:"2000"})
  },[])
  return (
 <div style={{ padding: "50px", textAlign: "center" }}>
      <h1 style={{ marginBottom: "40px", fontSize: "2rem", color: "#333" }}>
        Abubakar Aslam
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        <div
          data-aos="fade-up"
          style={{
            background: "#4CAF50",
            padding: "40px",
            borderRadius: "12px",
            color: "#fff",
            fontWeight: "bold",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          }}
        >
          Fade Up
        </div>

        <div
          data-aos="fade-down"
          style={{
            background: "#2196F3",
            padding: "40px",
            borderRadius: "12px",
            color: "#fff",
            fontWeight: "bold",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          }}
        >
          Fade Down
        </div>

        <div
          data-aos="fade-right"
          style={{
            background: "#FF5722",
            padding: "40px",
            borderRadius: "12px",
            color: "#fff",
            fontWeight: "bold",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          }}
        >
          Fade Right
        </div>

        <div
          data-aos="fade-left"
          style={{
            background: "#9C27B0",
            padding: "40px",
            borderRadius: "12px",
            color: "#fff",
            fontWeight: "bold",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          }}
        >
          Fade Left
        </div>

        <div
          data-aos="fade-zoom-in"
          style={{
            background: "#FF9800",
            padding: "40px",
            borderRadius: "12px",
            color: "#fff",
            fontWeight: "bold",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          }}
        >
          Zoom In
        </div>

        <div
          data-aos="flip-left"
          style={{
            background: "#009688",
            padding: "40px",
            borderRadius: "12px",
            color: "#fff",
            fontWeight: "bold",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          }}
        >
          Flip Left
        </div>

        <div
          data-aos="flip-right"
          style={{
            background: "#E91E63",
            padding: "40px",
            borderRadius: "12px",
            color: "#fff",
            fontWeight: "bold",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          }}
        >
          Flip Right
        </div>
      </div>
    </div>
   
  )
}

export default AosLea;