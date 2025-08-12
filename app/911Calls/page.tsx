import React from "react";
import CAD1 from "@/components/CAD1";
import Link from "next/link";
import TypographyH1 from "@/components/ui/TypographyH1";


export default function page() {
    return (
        <>
            <div className="flex-box px-7 mt-7">


                <h1 className="text-8xl">CAD Evidence</h1>
                <h2 className="TypographyH1">Rivercom 911 Engaged in SERIOUS sketchy business!</h2>
                <ul>
                    <li>Washington State 911 Rules @ Washington Emergency Management<br></br>
                        <Link href="https://mil.wa.gov/e911" target="_blank">https://mil.wa.gov/e911</Link>
                    </li>

                </ul>
                <CAD1></CAD1>
            </div>
        </>
    )
}