import { Button } from '@/components/ui/Button';
import { ArrowRight, Menu } from 'lucide-react';
import { Card } from "@/components/ui/card";
import Logo from "./Logo";


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
                                <Card className='blues'>
                                    <h3 className='text-lg'>Resigned Seattle Politico Captured Fleeing Attempted Murder Scene</h3>
                                    <p className="text-lg leading-relaxed bold italic text-left ml-3">A serious legal matter with deadly consequences for me if convicted; I desperately require immediate help from any qualified or experienced legal experts who can provide any official or casual guidence in order to help me present my case to defend these alligations. These criminal accusations are desperate last minute attempts to over up grossly negligent criminal intent abuse of role actions, and or inteded to silence me altogether. Inside this complex incident is a conspiracy to commit murder as well as the resultant effort to mitigate damage for a large private PSAP 911 service who were implicit with allowing their Operations Manager and a dispatcher to kidnap medical emergency callers while fielding the calls remotely from their vehicle and later on the property where they took them to. </p>
                                    <p className="text-slate-200 text-xl text-left">This case is being heard in Chelan County Washington State. The case number is</p>
                                    <h3 className='text-3xl'>2410025304</h3>

                                </Card>
                            </div>
                            <div className='basis-1/2'>
                                <Card className='fineLeather p-4'>
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
