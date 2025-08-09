import BagShawGallery from "@/components/BagShawGallery";
import React from "react";

const page = () => {
    return (
        <div className="min-h-screen bg-gray-50">

            <div className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden">

                <div className="absolute inset-0">
                    <img
                        src="/ryansPhotos/IMG_6450 2.JPG"
                        alt="Sally Bagshaw flees crime scene hit and run after failed kidnap extortion plot interfered with medical 911 call Rivercom 911"
                        className="w-full h-full object-cover object-center"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>


                <div className="relative z-10 h-full flex items-end">
                    <div className="w-full px-4 sm:px-6 lg:px-8 pb-8 md:pb-12">
                        <div className="max-w-7xl mx-auto">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                                Sally Bagshaw was ordered here to hurry and leave so cops could come on the property.
                            </h1>
                            <p className="quote">Where is Ryan? I cant let Ryan see me!"</p>
                            <ul className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl">
                                <li>Fellow at Harvard's Advanced Leadership Initiative</li>
                                <li>Two term city council woman</li>
                                <li>13 Year King County Prosecutor and 8 of those years as Chief Civil Prosecutor </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 lg:gap-12">
                    <div className="lg:col-span-2 space-y-8">
                        <section>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">About</h2>
                            <div className="prose prose-lg max-w-none text-gray-700">
                                <p className="text-xl leading-relaxed mb-10">
                                    I do not wish to say whether I think Mrs Bagshaw is a bad person or a good person but I will say that I have been trying to address this bizarre and deadly encounter which I cought her vacating the scene to allow the deputies to come and do whatever it was that they could not do while Sally Bagshaw was on the property. Seems outright sinister Im not gonna lie. Matter of fact; after over a year of really looking at the Bagshaw component from a hundred angles; I can not see a logical or practical reason she would have been there or yelled "I can not let Ryan see me" and i really dont get why she would have to vacate the property unless they planned to shoot me, after all that is what Operations Manager Jeremiah Johnson claimed, and what he remarked about on the evidence video, and I think it is actually noted in the transcipts with Rivercom 911 center as dispatch. notifed Jeremia that the. deputy was en route to arrest me and take me away. "Ryan needs to disappear for good not just go to jail or be taken away." </p>
                                <BagShawGallery />
                                <p className="leading-relaxed mb-6">
                                    I have never even heard of Sally Bagshaw but the minute I realized she was the mystery VIP who fled in Chelan County; I didnt have to dig deep to realize this all makes sense now. In 2017 had helped investigators located a sealed archive from Eugene Oregon where a cps judge ruled Ed Murray had molested his foster son. My wife was a Federal Officer; a TSO at Seatac and shortly after the Murray scandal peaked; my wife was robbed and more relivently, chased into a very busy and dangerous hiway while she waited for her bus to work. There was no secret made of the fact they did it; because the detective in Federal Way named Nolan, who called her in weeks later, asked her to bring me. He made snide remarks and gestures and was incredibly bold about letting me know it was inside. Towards the end he asked my wife whewre she was moving us as we had been planning to move for a while; and she said NYC, Nolan replied "oh yah what part?", my wife answered "Queens". Nolan then sneered and looked at me then said "tahts where Im from. I got family there still and he gives me a grin that might as well have been spitting in my face."
                                </p>
                                <p className="leading-relaxed mb-6">
                                    There are a lot of nuances and details I will eventually highlight which will prove these kidnapping dispatchers were not just confident; they were likely experienced and have done these sorts of things before. This was a thing they had done many times I could tell.The fact I survived is nothing short of a miracle. And I am well aware that it is not over yet.
                                </p>
                                <p className="leading-relaxed">
                                    As much as I genuinely start to pain for Jeremiah perhaps losing his credentials or his career altogether; I want to inform everyone readinf that my dialogue with Jeremiah was very candid; it was extremely candid in fact. I gave him ample opportunity to go back now and avoid this very situation. I even reminded him that these things he has done are impossible to hide. As a dispatch operations managerr and ten plus year 911 expert; he knew damn well there would be a forensics mess. Or did he count on Sally Bagshaw to hide it all? I dont know. He also may have had no expectation of worrying about me if he expected me to die there. At any rate I plead with him to let my passenger go and to give me my keys so I could go get help. I know his wife makes a vivid note acknowledging the state of near death my passenger was actually in. So he knew it was a serious emergency. Yet his dialogue was centered around calling his deoputy buddy and a "messy end" for me.
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;