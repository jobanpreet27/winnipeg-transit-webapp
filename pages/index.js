import Head from "next/head";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Stops from "../components/Stops";
import GetLocation from "../components/Utils/getLocation";
import Header from "../components/Header/index.js";

export default function Home() {
  const [coords, setCoords] = useState("");
  useEffect(() => {
    GetLocation(setCoords);
  }, [coords]);

  return (
    <div className={styles.container}>
      {coords ? (
        <>
          <Header />
          <Stops url={process.env.REACT_APP_SERVER_URL + coords} />
        </>
      ) : (
        <>
          <h2>Allow Location to See nearby Stops</h2>
          <h2>Deny if Out of Winnipeg</h2>s
        </>
      )}
    </div>
  );
}
