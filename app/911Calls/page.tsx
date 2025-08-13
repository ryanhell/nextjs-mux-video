import React from "react";
import CAD1 from "@/components/CAD1";
import TypographyH1 from "@/components/ui/TypographyH1";
import Synopsis from "@/components/synopsis";


export default function page() {
    return (
        <>
            <div className="">
                <h1 className="text-8xl">CAD Evidence</h1>
                <h2 className="TypographyH1">Rivercom 911 Engaged in SERIOUS sketchy business!</h2>
                <Synopsis></Synopsis>
            </div>
            <CAD1></CAD1>
        </>
    )
}