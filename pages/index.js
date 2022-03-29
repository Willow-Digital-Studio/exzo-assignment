import React, { useEffect, useRef } from "react";
import Head from "next/head";
import gsap from 'gsap'

export default function About({ data }) {

  return (
    <div>
      <Head>
        <title>EXZO  | Eiken terras 19 cm fijnbezaagd - 2.7 x 19 cm - per m2 (prijs incl. 1 cm voeg) (lengtes 250 cm)</title>
        <meta name="description" content="FRONT-END-TEMPLATE" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*content here*/}

      <div className="content__item">
        <p className="link link--metis text-center mt-40 mx-auto">EXZO</p>
      </div>

    </div>
  );
}

// export async function getServerSideProps(context) {
//     const {data} = await axios.get(process.env.NEXT_PUBLIC_LT_WP_DATA_URL + "/over-ons");
//
//     return {
//         props: {
//             data,
//         }
//     };
// }