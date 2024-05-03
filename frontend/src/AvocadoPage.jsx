import React, { useEffect, useState } from "react"
import { request } from "./utils/Api"
import "./App.css"

function AvocadoPage() {
  const [avocados, setAvocados] = useState([])

  useEffect(() => {
    request("sales/topBagsSold").then((response) => {
      setAvocados(response.data)
    }).catch((error) => {
      console.error("There was an error!", error)
    })
  }, [])

  return (
    <div className="Page">
      <div className="Titlepage">
        <h1>Best selling avocados:</h1>
      </div>
      {avocados.map((avocado) => (
        <div key={avocado.id}>
          <h2>{avocado.region}</h2>

          <p className="p-style">
            Number of bags sold: {avocado.totalBagsSold}
          </p>
        </div>
      ))}
    </div>
  )
}

export default AvocadoPage
