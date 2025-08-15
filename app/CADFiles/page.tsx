import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function Page() {
    return (
        <div className="container mt-22">
            <Card>
                <img src="/CADFiles/intialDuressCallto911/CleanCAD1.png"
                    alt={'wdwdwd'}
                    fill objectFit="cover"
                />
            </Card>
            <br></br>
            <Card>
                <img src="/CADFiles/intialDuressCallto911/CleanCAD2.png"
                    alt={'wdwdwd'}
                    fill objectFit="cover"
                />
            </Card>
        </div>
    )
}