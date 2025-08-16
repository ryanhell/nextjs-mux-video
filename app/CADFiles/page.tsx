import Image from "next/image";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Page() {
    return (
        <div className="container mt-22">
            <p>Slow internet connection? Check out the downloads page where each file is available for download.</p>
            <Link href="/Downloads">Downloads</Link>
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