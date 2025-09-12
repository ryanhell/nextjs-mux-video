import { Button } from '@/components/ui/Button';
import { ArrowRight, Menu } from 'lucide-react';
import { Card } from "@/components/ui/card";
import Logo from "./Logo";
import Link from "next/link";


import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const navItems = [
    {
        title: '911',
        href: '/CADFiles',
    },
    {
        title: 'Poice',
        href: '/PoliceReport',
    },
    {
        title: 'Videos',
        href: '/videos',
    },
    {
        title: 'Mysterious',
        href: '/SallyBagshaw',
    },
    {
        title: '911 Director',
        href: '/JeremiahJohnson',
    },
    {
        title: 'Contact',
        href: '/aboutRyan',
    },
];

export default function HeroSection() {
    return (
        <header className="dark relative isolate [&_nav]:items-end">
            <img className="absolute inset-0 z-[-1] h-full w-full object-cover object-center" src="/ryansPhotos/shitshowcircus.jpg" alt="Sally Bagshaw uses Director of Rivercom 911, Chelan County Sheriffs, and Wenatchee Valley Fire to Coordinate a Kidnap and Murder Scheme Upon Law Abiding Citizens Who Called 911 For Life Threatening Medical Emergencies" />
            <div className="bg-background/50 absolute inset-0 z-[-1] h-full w-full"></div>

            <div className="py-16 lg:py-32 xl:py-8">
                <div className="mx-auto w-full max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
                    <div className="mx-auto text-center [&>p]:mx-auto [&>p]:max-w-xl">
                        <h1 className="text-4xl/tight font-bold tracking-tight sm:text-4xl/tight lg:text-6xl/tight">
                            URGENT <span className="hidden lg:inline-block">LEGAL</span> HELP NEEDED
                        </h1>
                        <div className='flex flex-col md:flex-row'>
                            <div className='basis-1/2'>
                                <Card className='blues ml-4'>

                                    <Card className="radd pl-4">
                                        <h3 className='font-black text-3xl'>What's this all about?</h3>
                                        <p className="mb-3 text-left text-white text-xl leading-relaxed font-medium italic opaque-30">A complex legal matter involving top level corruption, which has deadly consequences for me if I am convicted.</p>
                                        <p className="text-left text-white text-xl leading-relaxed font-medium italic opaque-30">I desperately seek immediate assistance in order to help me present my case to defend these completely fabricated alligations, which have been orchastrated to cover up an attempt to silence me after I have exposed corruption on multiple occasions including:</p>
                                        <h3>Possible Motivators for High Level Conspiracy to Silence Ryan Hell</h3>
                                        <Card className='blues'>
                                            <h3>Covid 19 Caronavirus Revelations</h3>
                                            <ul className='list-decimal list-inside text-left'>
                                                <li>I uncovered and shared Covid 19 scientific legal arcchives in early lockdown, which I obtained through University Library archive access doing research from NYC while locked down in the first days of the pandemic.</li>
                                                <li>Yielded evidence of a previous legal injunction by federal and international authorities prohibiting the gain of function research of Covid 19 and Coronavirus.</li>
                                                <li>Yielded findings of criminal contempt of court committed by DR FAUCI when research was illegally moved off shore to Wuhan China in an effort to circumvent the court ordered moritorium placed upon research involving GAIN OF FUNCTION.</li>
                                                <li>Yielded DOZENS of citations which pointed to acedemic document archives including court, editorial, and peer reviewed scientific acedemic media which implicated a wide array of co-conspirators who were engaged in the assorted actions which ultimately resulted in the deaths of over 25 Million innocent citizens globally, and untold Trillions of dollars in financial losses. </li>
                                            </ul>
                                        </Card>
                                        <Card className='blues'>
                                            <h3>Former Seattle Mayor Ed Murray Child Abuse Scandal</h3>
                                            <ul className='list-decimal list-inside text-left'>
                                                <li>I provided Seattle Times investigators with critical last minute intel on where to find a hidden archive containing evidence of Murrays history of molestinbg black foster children as a CPS worker in Eugene Oregon in the 1980's.</li>
                                                <li>I publicly asked the communtiy repeatedly to press for prosecution of Murray as there were dozens of black children he molested and his gay white elitist background should not make him exempt from accountability.</li>
                                                <li>I raised converstions and started public dialogues pertaining to investigations of who propelled MURRAY; an unlikely candidate, to the high office of mayor of Seattle, since it seems obvious based on the FOIA release of Murrays public records he was in communications with lawyers to prepare for these accusers since day one of being Mayor. Who hired this puppet politician?</li>
                                                <li>I DEMANDED answers for the death of one of Murrays accusers just days after his lasuit is settled. Delvin Heckard died of a mysterious overdose: mysterious being that he never did opiates and the death occured in 2017 before fentynal epidemic hit here. </li>
                                            </ul>
                                        </Card>
                                    </Card>


                                    <p className="ml-2 text-white text-left"> These criminal accusations are desperate last minute attempts to over up grossly negligent criminal intent abuse of role actions, and or inteded to silence me altogether. Inside this complex incident is a conspiracy to commit murder as well as the resultant effort to mitigate damage for a large private PSAP 911 service who were implicit with allowing their Operations Manager and a dispatcher to kidnap medical emergency callers while fielding the calls remotely from their vehicle and later on the property where they took them to. </p>
                                    <p className="text-slate-200 text-xl text-left">This case is being heard in Chelan County Washington State. The case number is</p>
                                    <h3 className='text-3xl'>2410025304</h3>

                                </Card>
                            </div>
                            <div className='basis-1/2'>
                                <Card className='fineLeather p-4'>
                                    <h3 className='text-3xl text-bold'>KEY EVIDENCE OF CONSPIRACY</h3>
                                    <p className="ml-3 text-xl text-left">
                                        Watch the former chief king county prosecutor, Seattle city council and disgraced mayor Ed Murray advocate on city council as she flees the scene at the incident... this is the crime scene they are now trying to falsely convvict me of making threats to dispatchers..., who literally kidnapped us during a 911 call for emergency medical help.
                                    </p>
                                    <p className='text-xs'>Resigned Seattle Politioco, Sally Bagshaw, Flees Failed Murder Plot As Police Wait To Commence Murder By SWATTING</p>
                                    <div><Link href="/SallyBagshaw"><Button>Bagshaw</Button></Link></div>
                                    <h4 className='text-lg'>Demonstrated Pattern of Systemic Egregious, Desperate, Dishonest Ethics Misconduct Far Beyond Typical Prosecutorial Shortcomings.</h4>
                                    <p className="mt-4 text-sm leading-relaxed text-left">I have painstakingly assembled this presentation with duee diligence and while under extreme hardships. The evidence and my observations here are precise and with integrity and I am prepared to expand upon anything you may need more information about, provided I can. I have developed this app to be resilient and stand beyond my time in the event the situation turns worse and I am unable to personally participate.The Chelan County Court and Rivercom have engaged in multiple incidents of noteworthy cover up conduct including swift changes of core policy, remission of data and alteration of CAD files, dashcam footage, and incident eye witness footage. I tried filing a forensics preservation motion and was railroaded intentionally by public assigned counsel as well as a laughing judge who essentiallu bulldozed over my motion and yelled at me denying my request to order preservation of forensics in light of obvious discrepensies on video, as well as intentionally being mislead by counsel and the court itself, on the record regarding the 911 audio. The actual court STENOGRAPGHER for Chelan Superior, was literalluy present at the scene of the crimes. She was introduced was the Operations Managers mother multiple times.  Also worth noting; Rivercom now denies Jena is or ever was their employee.... I watched her field my 911 call on the scene. I definately recognized her voice. I also watched her enter Rivercom's secure building using a swipe card. They definately are lying about Jenas employment and I have that lie confirmed im their email response via legal request.</p>
                                    <h3 className='text-xl italic'>They are quite literally lying about just about everything.</h3>
                                </Card>
                            </div>
                        </div>
                        <div className="mt-8 grid gap-3 sm:flex sm:justify-center">
                            <Button>eMail Me</Button>
                            <Button variant={'ghost'}>
                                Call Me Directly <ArrowRight />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </header >
    );
}
