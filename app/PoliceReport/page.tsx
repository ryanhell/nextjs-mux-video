import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function Page() {
    return (
        <div className="container mt-22">
            <Card>
                <img src="/PoliceReport/Chelan_2410025304_PoliceReportWork.pdf"
                    alt={'Chelan County Incident Report for Case 2410025304 Ryan Hell, Kidnapped by Rivercom 911 Operations Manager During Medical Duress Call'}
                    fill objectFit="cover"
                />
            </Card>
            <br></br>
            <Card>
                <h1>Incident Report By Chelan County Deputies</h1>


            </Card>
        </div>
    )
}