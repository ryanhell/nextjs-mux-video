import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function Page() {
    return (
        <div className="container mt-22">
            <Card>
                <img src="/PoliceReport/Chelan_2410025304_PoliceReportWork.pdf"
                />
            </Card>
            <br></br>
            <Card className="bagshaw mx-4 px-6 drop-shadow-2xl py-3">
                <Card className="bg-slate-900 p-2 my-2 drop-shadow-2xl">
                    <Card className="bagshaw px-5 my-2">
                        <div className="flex flex-col">
                            <div className="col block">
                                <Image src="/ryansPhotos/527A6DA4-F8A3-4110-859A-D3D164A07FFC.jpeg"
                                    width={`300`}
                                    height={`300`}
                                    alt="efdef4f"
                                />
                                <h3 className="text-2xl text-right text-lead text-white text-shadow-2xs">Multiple Police Reports</h3>
                            </div>
                            <div className="col">
                                <h3>fdjefij4ioe</h3>
                            </div>
                        </div>

                        <hr></hr>
                        <p className="text-accent">...each incident report contains egregious errors and undeniable intentional attempts to deprive me of justice. Can you spot the discrepencies?</p>
                        <p>Chelan County Sheriff Incident Report #1 Issued July 5th with several pages missing.</p>
                        <h1>Incident Report By Chelan County Deputies</h1>
                        <Link href="/PoliceReport/ORIGINAL_Scan044.pdf" download><Button>Chelan Incident Report #1 PDF</Button></Link>
                        <p>Second Chelan Sheriffs Incident Report Issued 6 months later</p>
                        <Link href="/PoliceReport/Chelan_2410025304_PoliceReportWork.pdf" download><Button>Chelan Incident Report #2 PDF</Button></Link>
                    </Card>
                </Card>
            </Card>
        </div >
    )
}