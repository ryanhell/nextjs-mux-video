import React from "react";
import Image from 'next/image';
import JeremiahsList from "@/components/JeremiahsList";
import ColockumGallery from "@/components/ColockumGallery";
import { Card } from "@/components/ui/card";


export default function page() {

    return (

        <div className="container">
            <h3 className="text-2xl">My Case Documents etc, for Download </h3>
            <div className="grid md:grid-cols-2 gap-4">
                <div className="card">
                    <div className="title">Initial 911 Duress Call CAD Files</div>

                    <div className="content">
                        <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 mb-12 px-4 rounded"> <a href="CADFiles/intialDuressCallto911/24C06391 _page1.jpg" download="CAD1-T">Initial Duress 911 Call CAD File Page Two of Two ~ Tampered</a></button>
                        <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> <a href="CADFiles/intialDuressCallto911/RyanHell391_page2.pdf" download="CAD1-T">Initial Duress 911 Call CAD File Page Two of Two ~ Tampered</a></button>
                    </div>


                </div>

                <div className="card">
                    <div className="content">


                        <br></br>
                        <p className="text-2xl">Chelan County Sherrifs Incident Report</p>
                        <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> <a href="PoliceReport/Chelan_2410025304_PoliceReportWork.pdf" download="ChelanCountySheriff_2410025304">Download Police Report</a>
                        </button>


                        <p className="text-lg">Rivercom 911 Formerlly Denies a Known Dispatchers Employment Status and Acknoledges My Discovery That the Male Dispatcher Was In Fact Their Operations Manager</p>
                        <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> <a href="pdfs/AllegedVictimsEmploymentDeclerationsByRiverCom.pdf" download="rivercom911EmployeeDenialLetter">Rivercom 911 Letter</a></button>
                        <p>The problem I'm having witht this denial of fact letter is I had been told by Jeremiah and Jena at the scene she was a dispatcher and in fact she fielded multiple calls with her work amidst talking to us and needed a moment. Additionally, when I was released from Chelan County Jail for this incident, July 5th, I personally watched Jena and Jeremiah enter the Rivercom 911 Center's secure door. The facility requires a card which Jena swiped. Further; it had been immediate to me during being picked up by these two the time of incident; that the woman in the truck was none other than the woman who handled my 911 call. A very rude, obnoxiouss and wreckless woman legally speaking. She had laughed and said oh well and all sorts of crap during the first 911 call and I was begging for help for a dying passenger while stranded outdoors outside cell service with a flat tire. She was a callous fool and the momment I seen her and heard her voice I was fairly certain of it. This denial only seeks to seperate tort liability from Rivercom 911 in any potential title 18 Civil lawsuits. Yet it illustrates the lack of accountability / transparency and with brazen deceit which is complacent and routine across the State of Washington.</p>

                        <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 mb-12 px-4 rounded"> <a href="pdfs/DispositionIncidentClaims.pdf" download="conflictingDispostition">Another Statement By Jeremiah Where is Lying</a></button>
                        <p className="text-2xl">My Disabled Passengers Sworn Statement Post Incident</p>
                        <p className="text-lg">Passengers Statement submitted to case file</p>
                        <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> <a href="pdfs/gineHrpcha_Statement.pdf" download="passengersDisposition">Download My Passengers Statement</a></button>

                    </div>
                </div>
            </div>
            <hr className="pt-12"></hr>


            <h3 className="text-2xl">Photos From Colockum including those taken at Jeremiah's home where he had Sally Bagshaw Flee The Scene</h3>
            <ColockumGallery />
        </div>


    );
}