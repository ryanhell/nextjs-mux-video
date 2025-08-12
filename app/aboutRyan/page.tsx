import React from "react";
import { TypographyH3 } from "@/components/ui/TypographyH3";

const page = () => {
    return (
        <div className="min-h-screen bg-gray-50">

            <div className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden">

                <div className="absolute inset-0">
                    <img
                        src="/bio/IMG_0029.jpeg"
                        alt="Sally Bagshaw flees crime scene hit and run after failed kidnap extortion plot interfered with medical 911 call Rivercom 911"
                        className="w-full h-full object-cover object-center"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">dwdfd</div>
                </div>
            </div>



            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 lg:gap-12">
                    <div className="lg:col-span-2 space-y-8">
                        <h4 className="text-slate-900 TypographyH3">Crime Free Since 2002!</h4>
                        <h4 className="text-3xl text-slate-900">...Reformed convict, with a new lease on life after 5 yerars of engineering university reviews from authentic new customers.</h4>
                        <h4 className="text-3xl text-slate-900">...3 time business owner and senior construction manager working with countless of townships, buros, and other larger size municioalities and cities across the east coast..dealing with dificult and frustrating problems and very angry and sometimes abusive even violent extortionist even.... its a thing out east too.</h4>
                        <h3 className="text-4xl text-slate-900">...Cum Laud Alumni from an accredited University Program 5 years of learning teams for software engineering, technical communications and business informatics.</h3>
                        <p className="text-slate-900 text-4xl">
                            Embattled since 2017 after propviding ethically driven advice to Seattle Times reporters for the matter of former Seattle Mayor Ed Murray's sealed archive of CPS guilt findings which I was key to locating just days before it was scheduled for permanent destruction.
                        </p>
                        <h4 className="text-red-500 text-4xl">
                            I desperately need help. Whether you are a lawyer or a civil expert who can help with advice or mentorship. Thios trial is soon. I am being railroaded by a corrupt city and the powers that be who are undeniably very concerned with their multi million dollar 911 PSAP after their Operation Manager engaged in a very serious criminal act on behalf of Sally Bagshaw.
                        </h4>
                        <p className="text-slate-900 text-4xl">This case is being heard in Chelan County Washington State. The case number is
                            2410025304
                        </p>

                        <p className="phone text-4xl text-blue-600">
                            267-777-2344
                        </p>
                        <p className="email text-4xl text-green-600">
                            ryanbrooklyn2020@gmail.com
                        </p>


                    </div>

                </div>
            </div>
        </div >
    );
};

export default page;