import Background from "@/components/Background";
import Image from "next/image";
import CAD1 from "@/components/CAD1";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import Intro from "@/components/storyComponents/Intro";
import EthicalMisconduct from "@/components/storyComponents/EthicalMisconduct";
import Discrepencies from "@/components/storyComponents/Discrepencies";
import data from '@/app/api/CaseData.json';
import { AccordianDemo } from '@/components/AccordianDemo';
import BagshawBadge from "@/components/BagshawBadge";
import JeremiahLiarLiarYouDontWorkOnFires from "@/components/JeremiahLiarLiarYouDontWorkOnFires";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container tables mx-auto p-1 md:p-3">


      <Card className="bagshaw md:px-12">
        <Card className="ryanPaper m-2 p-3 flex md:mx-12 drop-shadow-2xl">
          <div className="inset-shadow-2xs">
            <p className="mx-3 md:mx-12 text-lg leading-relaxed drop-shadow-md text-slate-600 drop-shadow-slate-500">Surreptitious Criminal Conduct Involving the Director of Rivercom 911 Taking Us To His "Personal Home" With The False Promise of an Ambulance; During The Nearly 3 Hour Ordeal They Stole My Truck, Robbed Me and His Wife; As Their Panic and Desperation Grew, The Female Dispatcher Violently Assaulted Me in Attempt to Elicit a Fight So Her Armed Husband, The Operation Center Manager; Could Shoot and Kill Me. These People LITERALLY Created a Deadly, Unlawful Imprisonment Situation Amidst My Urgent Medical Emergency for Both My Passenger and Myself Being Stranded in a Desert on The Fourth of July. The Chelan County Prosecutor And Judge Jourdan Have Made No Secret of Their Contempt for Me; Like I Did ANYTHING Wrong At ALL. I BARELY SURVIVED Multiple Swatting Efforts. There were ViP's; RETIRED OFFICIALS; Being Ushered Off The PROPERTY. Fire / EMT Crews Sitting By Ordered Not To Interact. And I Am Supposed To Quietly Tolerate All These Attacks on my Personal Liberty anmd Wellbeing? </p>
          </div>
          <figure>
            <Image
              src="/Chelan/july4_2024/960B101E-0D1C-45F9-BEAB-A7FA975B6B63_4_5005_c.jpeg"
              width={730}
              height={440}
              className="mr-4 float-left flex-shrink-0"
              alt='Wenatchee Fires Surplus HMVEE "brush truck" seen moving about with their lights on. There were multiple personnel onseen who appeared to be ordered to stand down and not assist or intervene in any way due to an EXTREMELY sensitive LEGAL situation created by Rivercom and Chelan County Sheriffs Office when they kidnapped me and my passenger, stole my truck, and then later arrested me on false charges. These actions yielded a serious problem with their CAD file architecture of the call I made requesting emergency medical help for my passenger who was near death. The CAD file was altered to remove any mention of a medical and it introduced a false narrative that I was seeking some sory of roadside for the flat tire I had. They somehow claim they had a truck, Wenatchee Fire EMTs and operastions manager for Rivercom just milling about with nothing better to do on the 4th of July in fire country. EMTs were there in case passengers situation degraded or went critical; but they had to lay low because taking her vitals would admit her name into the chronos and confirm this was in fact a 911 medical call. For over 4 hours they made this poor woman suffer, very nearly killed her, and called me the bad guy for staying focvused on her safety and getting her to a hospital.'
            />

            <figcaption className="mx-3 text-lg"><h3>Wenatchee Fire Present for Roadside on the 4th of July?</h3>Impressive. But really. Wenatchee Fires Surplus HMVEE known as a "brush truck" was seen moving about the property with their lights on. Multiple fire personnel were quietly present on scene, and it would seem they were ordered to stand down and not assist or intervene in any way due to an EXTREMELY sensitive LEGAL situa  tion created by Rivercom and Chelan County Sheriffs Office when they kidnapped me and my passenger, stole my truck, and then later arrested me on false charges. These actions yielded a serious problem with their CAD file architecture of the call I made requesting emergency medical help for my passenger who was near death. The CAD file was altered to remove any mention of a medical and it introduced a false narrative that I was seeking some sory of roadside for the flat tire I had. They somehow claim they had a truck, Wenatchee Fire EMTs and operastions manager for Rivercom just milling about with nothing better to do on the 4th of July in fire country. EMTs were there in case passengers situation degraded or went critical; but they had to lay low because taking her vitals would admit her name into the chronos and confirm this was in fact a 911 medical call. For over 4 hours they made this poor woman suffer, very nearly killed her, and called me the bad guy for staying focvused on her safety and getting her to a hospital.</figcaption>

          </figure>

        </Card>
        <Card className="bagshaw md:px-12 px-3 mx-3">
          <h3 className="text-2xl headlined">Intentional Mis-Identification Of Key Subjects, By Deputies, Victims, and Dispatch Company</h3>
          <p className="headlined text-xl">The reason why? Simple: becuase during the incident when I was ambushed essentially, by this unwanted and unneeded not to mention fictitious repair as they claimed it were; the tow man was never towing my truck i fact. He admitted he went to the place we left it while i was struggling to get a non existent ambulance to show up which the Operations Manager and his dispatcher wife Jena Johnson never actually called for as it turns out. Instead, they called this man, who owned the B&T Towing truck they say, to come secretly replace my trucks wheel and tire while we were stranded at Jeremiahs home miles away, a place isolated without cell service. This was quite literally taking motor vehicle without owners permission and other violations potentially; however; I commend the B&T tow operator who took my truck for listening to my reasoming and yielding to my recommendation to pass on this scheme becuase I would report him to Wa State Patrol and since he lacks written contract or any valid proof of even a verbal contract; he will struggle to explain what gave him the right to move my vehicle. <br></br>
            <h4 className="pt-4 underline italic text-3xl headlined"> Additional Pattern of Misconduct Exposed in Front of Multiple Witnesses</h4>
            B7T Towing of Cashmere was pissed and threw my keys down and spit on the ground, then swore at Jeremiah for wasting his time on a lucrative holiday such as 4th of July, then made a parting comment to Jeremiah that he would owe him another dispatch after this one went bad as it had... and this opens up a real concern since state and federal dispatch guidelines and statutes explicitly prohibit dispatchers from referring tows; and only makes marginal provisions under extrenuating circumstances and only then it would still have to be what is known as a non-preference tow. You see; tow drivers and dispatchers make untrustworthy business partners and they are typically regulated heavily in the matter of referalls and such for reasons just like this case.   </p>
          <Image src="/Tow/towScandalLIES.jpg"
            width={2230}
            height={440}
            className="mr-4 float-left flex-shrink-0"
            alt='scam includes INTENTIONAL ATTEMPT TO MISADDRESS NAME OF TOW COMPANY I ALLEGEDLY RIPPED OFF'
          />
        </Card>

      </Card>
      <div className="agshaw flex-row md:flex-col md:mx-12">
        <Card className="bagshaw flex md:flex-row md:mx-12">
          <Card className="foil">
            <CardHeader>
              <h2 className="text-xl headlined">The most important case in the Country?</h2>
            </CardHeader>
            <CardContent className="my-13 border-slate-400 border-1 rounded-bl-xl shadow-2xl bg-blue-400 bg-opacity-20 mx-3">
              <h3>Director of Rivercom or Wenatchee Firefighter?</h3>
              <p className="text-xl">
                Jeremiah Johnson, now being discretely referred to in subsequent chair meeting notes as simply Jeremiah Jones, which is a complete farce an attempt to hide this soon to be indicted criminal from Rivercom records and create space ahead of the legal shockwave they are antipating. Silly I know. </p>
              <p className="text-xl">
                The arresting cheland sheriff deputy confirmed to me verbally, with apparent distaste or perhaps growing frustration, to Jeremiah and Jenna as "BOTH are with Rivercom". I asked for clarification and he again said "they both work for Rivercom". It would appear to me that a NUMBER of individuals present at this incident were visibly and verbally growing sick and tired of the illegal activities conducted by the Johnsons and Rivercom. The tow operator as he backed out of the scam they were trying to pull, had swore and cussed Jeremiah out. My passenger later recounted to me how that tow operator told Jeremiah his entire 4th of july was wasted on this bogus endeavor and Jeremiah owed him another dispatch to make up for it. This of course is completely illegal under tow neutrality provisions applicable to 911 dispatch organizations and dispatchers. </p>
              <p className="text-xl">Jeremiah is Fireman According to Jeremiah and the Sheriffs Report, as well as Chelan Prosecutors. Jeremiah wore Wenatchee Fire personel clothing, he declared himself a firefighter, and he changed into his incident command gear at one point just prior to the man driving to Jermiahs home in my truck he stole from where we left it to go meet an ambulance at Jeremiahs homes. Jeremiah also had a desktop workstation PC; a computer keyboard and monitor and he attempted to entertain me by showing me his fire incident map and call que.
              </p>
              <p className="text-xl">
                I only barely was aware Jeremiah Johnson was a Rivercom employee by slight word of mouth by one of the other people at the scene. It donned on me I need to ID these people and i found Jeremiah's personal resume within about 5 minutes.
              </p>
              <Card>
                <JeremiahLiarLiarYouDontWorkOnFires />
              </Card>
              <BagshawBadge />  <p className="text-xl">
                The scene on Wenatchee is dicsussed is a violent and dangerous retired senior level CHIEF PROSECUTOR as well as later; the Seattle city council who killed Delvin Heckard and protected Ed Murray from his disgusting past as a serial african american orphan MOLESTER. While the same political party orchastrated the looting and burning of American cities and the hatred towards white privilge, Bagshaw coddled a mayor who had a KNOWN systemic track record and trail of accusewrs dating back to 1984, all of whom were BLACK kids. Not only did he escape justice then; he escaped again as Bagshaw and current mayor Herell PROTECTED Murray, and the gay money flooded Seattle and the pockets of unscrupulous enablers who never honored the law, yet suppported attacks on white americams... and now Bagshaw is said to have been effectively forced out of politics after being caught in a hotel with LOBBYIST..imagine that....photos so incriminating.. and a complete stab in the back of her loyal constituents. <br></br>
                Sally Bagshaw is a dangerous politician who still engages in criminal racketeering using her formal high office and position of trust she once held, in order to exact revenge and continue racketeering, currently involved in top dollar roads and hiways projects in seattle....seems like a logical career transition o0.
                In summary this case mildly meets the merits litmus required to constitue a felony harassment case. Check the video evidence I have included and listen closely. They have used AI and other tools to remove and tone down their stuff and wind mine up. Yet gems such as Jena Johnson, the Rivercom dispatcher and spouse of Operation Manager Jeremiah Johnson, is clearly heard saying to me: "Ill slap the shit out of your bitch ass". Keep in mind context! What was I doing to warrant such vitreol? Ill explain for you: THEY WERE IN SHEER DESPERATION: absolute hystericl PANIC as their planned and seemingly many times before conducted rouse of ABUSING Jeremiahs position of senior in command at this PSAP 911 center which serves most of 10 thousand square miles of rural and remote inland northwest. They used that tech and security access to manipulate call que and then created a scenario of absolute isolation by either executing a shakedown in a no cell coverage zone or more likelu as I am observing; Jeremiah using his radio and technology skill set which he grew during a fast paced career with Rivercom spanning 17 years starting as a radio installer, tech etc to Operation Manager. Keep in mind I had to uncover then force them to confirm this detail. They initiallu ALL lied even the deputy who arrested me; stating Jeremiah is a fireman. Thru a practice of miscategorizing inbound duress calls; I can only assume based on Jeremiah and Jenas enthusiasm and swift actions which cionsitute very serious and well known federal crimes: they have not only done this before but they do so with the protections of veryy powerful officials. Based on the rapid response and ongoing harassment and threats to my life subsequent to this incident; I think it is worth looking into whether Rivercom has been engaged in covert criminal activity, namely civil rights violations, by using their State and Federal, tax payer funded 911 platform as a means to intercept, kidnap, and harm other people whether for interest or for entewrtainment.
              </p>
            </CardContent>
          </Card>
        </Card>
        <div className="container flex-row md:flex-dol">
          <Card className="bagshaw md:mx-12">
            <Card className="blues lg:min-width-[80] mx-3 md:float-left md:mx-4">
              <CardHeader>
                <h2 className="text-3xl">Synopsis</h2>
                <p className="text-mute">
                  ..start here...
                </p>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-2xl">
                  <li>Case Number: 24-1-00253-04 </li>
                  <li>Being Prosecuted in: Chelan County Wa State </li>
                  <li>Represented By Counsel: Technically YES Effectively NO</li>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger><p className="text-2xl">Brady Violations? YES. (click to see more</p> </AccordionTrigger>
                      <AccordionContent className="md:mx-12">
                        <Card className="bagshaw mx-3 px-3 text-white text-xs">
                          <p>In summary this case mildly meets the merits litmus required to constitue a felony harassment case. Check the video evidence I have included and listen closely. They have used AI and other tools to remove and tone down their stuff and wind mine up. Yet gems such as Jena Johnson, the Rivercom dispatcher and spouse of Operation Manager Jeremiah Johnson, is clearly heard saying to me: "Ill slap the shit out of your bitch ass". Keep in mind context! What was I doing to warrant such vitreol? Ill explain for you: THEY WERE IN SHEER DESPERATION: absolute hystericl PANIC as their planned and seemingly many times before conducted rouse of ABUSING Jeremiahs position of senior in command at this PSAP 911 center which serves most of 10 thousand square miles of rural and remote inland northwest. They used that tech and security access to manipulate call que and then created a scenario of absolute isolation by either executing a shakedown in a no cell coverage zone or more likelu as I am observing; Jeremiah using his radio and technology skill set which he grew during a fast paced career with Rivercom spanning 17 years starting as a radio installer, tech etc to Operation Manager. Keep in mind I had to uncover then force them to confirm this detail. They initiallu ALL lied even the deputy who arrested me; stating Jeremiah is a fireman. Thru a practice of miscategorizing inbound duress calls; I can only assume based on Jeremiah and Jenas enthusiasm and swift actions which cionsitute very serious and well known federal crimes: they have not only done this before but they do so with the protections of veryy powerful officials. Based on the rapid response and ongoing harassment and threats to my life subsequent to this incident; I think it is worth looking into whether Rivercom has been engaged in covert criminal activity, namely civil rights violations, by using their State and Federal, tax payer funded 911 platform as a means to intercept, kidnap, and harm other people whether for interest or for entewrtainment.  </p>
                          <ul className="text-lg list-inside list-decimal">
                            <li>
                              Egregious alteration, tampering with video evidence. (check the dsynch in these files, forensic meta has been passed on as is from prosecutors office via assigned public defender)
                            </li>
                          </ul>
                        </Card>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <li>Brady Violations Evident? MULTIPLE: I have complained and attempted to file motion to preserve forensics regarding OBVIOUS altered 911 CAD logs, INTENTIONALLY DESTROYED audio of my initial medical duress 911 call, and extensive alteration /tampering with key evidence videos provided by the alleged victim who essentially filmed a nealry 3 hour ordeal, somehow on her phone. More on the video tampering confducted by Chelan County Proseutors which I addressed with counsel Sean Esworthy as well as prior counsel Justin Titus who both refused flat out to address my concern with what i know is obvious and egregious alteration of videos and includes replacement of bizare and incredibly criminal conduct such as repeated threats to shoot me if I did not abandon my ill passenger and vehicle, claims they now owned my vehicle and most importantly; MY COOL CALM AND COLLECTED RESPONSE TO THESE OVERT ATTEMPTS TO TRIGGER A PHYSICAL ALTERCATION, JUSTIFYING THEIR USE OF DEADLY FORCE thus eliminating a very problematic witness who threatened to report them for their crimes. Original video also contained footage of Chelan Deputy asking tow scam artist, of B&T Towing Cashmere Wa for his impound invoice or other seizure documents, to which he was clearly informed there was NO TOW; rather he DROVE my truck to Operation Manager Jeremiah Johnson, aka Jeremiah Jones according to recent chair meeting updates... deputy said {`"`}Doesn't Ryan owes you money for the repairs though?{`"`}</li>


                  <li>
                    Defendent: Ryan Hell, Age: 48 Residence: Seattle</li>
                  <li>Contact{`(`} 267{`)`}777-2344 ryanbrooklyn2020@gmail.com</li>
                  <li> I Am Prepared To Prove The Following Crimes Beyond Reasonable Doubt, Were Committed With Wanton Disregard for Our Safety and the Laws and Provisions of The State of Washington and US Federal Codes: False Imprisonment, False Arrest, Malicious Prosecution, Evidence Tampering,Witness Intimidation, First Degree Kidnapping, Extortion, Auto Theft, Assault, Interference with 911 Medical Duress Call, Civil Conspiracy to Violate the Rights of a Disabled American Using Color of Law, namely my passenger. </li>
                  <li>On July 4th 2024 In: Colockum Wilderness State Park in Washington State</li>
                  <li>Case #: 2410025304 Chelan County Superior Court</li>
                  <li>Charges: Three Counts Felony Threats to "leave and get a firearm and come back and shoot the place up"</li>
                  <li>   Court Status: Awaiting Trial Next Hearing: Wendsday via Zoom Case Readiness</li>
                  <li>  Evidence of alleged threat: Testimony by three dispatchers and tow truck driver present.</li>
                  <li>  Crimes or Violence by Defendent Visible or Audible in Evidence: NOT A SINGLE CRIME </li>
                  <li>  Criminal Conduct by Alleged Victims Evident?: YES, alleged victims threaten me and demand cash for the 911 rescue "saving our lives" visible in states evidence videos</li>
                  <li>    Defendents Criminal History: NOTHING GOING BACK AT LEAST 20 YEARS</li>
                </ul>
              </CardContent>
            </Card>




            <Card className="shadow-inner bg-gradient-to-br from-[#f43f5e] via-[#be185d] to-[#831843] text-white mx-3  md:float-right md:mx-4">
              <CardHeader>
                <h4 className="text-xl text-right">Disgusting, Eggregious, Brazen Violations of Duty of Care</h4>
              </CardHeader>
              <CardContent>

                <ul className="list-disc list-inside text-xl">
                  <li>
                    A disabled woman with serious complications required immeidate medical assistance after being trapped on a mountain inside a state park 4th of july with no cell service due to a flat tire.
                  </li>
                  <li>
                    Wenatchee Fire photographed on scene sitting idle during a medical duress call for urgent life saving medical
                  </li>
                  <li>
                    Chelan Prosecutors in Coordination with Rivercom 911 and Chelan Sheriffs Department, Wenatchee fire re-classify a 911 call for life saving medical emergency help to a roadside 911 call after caller threatened to report the Operation Manager for kidnap and extortion for interfering with his passengers need for an ambulance and surprising him with unwanted roadside scheme.
                  </li>
                  <li>
                    A dispute over a tow bill is alleged to have occurred however there was no impound and no tow. The vehicle was sent home with the ill passenger who is yet still never named in any paperwork but is visible in the evidence video.
                  </li>
                  <li>
                    The director of Rivercom 911 rerouted a 911 call to his personal residence, where an associate of his showed up demanding cash for unsolicited vehicle repairs while an unsuspecting owner waited beside a dying passenger.
                  </li>
                  <li>
                    Rivercom 911 director repeatedly says "Ryan needs to disappear for good", and has his wife, another dispatcher, assault Ryan at one point, in an effort to incite a justifiable homicide. When that fails he contacts a personal deputy friend and orders a shooting which narrowly did not occur.
                  </li>
                  <li>
                    False charges of threats were loosely fabricated and supporting evidence was withheld for almost a year while defendant and victim; driver of truck, Ryan Hell was harassed.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </Card>
        </div>


      </div>
      <div className="flex-col md:flex-row">
        <Card>
          <AccordianDemo></AccordianDemo>
        </Card>
      </div>
      <div className="flex-row md:flex-row">
        <div className="flex-col">
          <Card className="px-1"><EthicalMisconduct /></Card>
          <Card><Discrepencies /></Card>
        </div>



      </div>
      <div className="container px-2">
        <Card className="tspin md:mx-4">
          <Card className="foil px-1 inner-shadow drop-shadow-2xl">
            <h2 className="text-4xl">Above Reproach Should Never Mean Immune From Accountability</h2>
            <p className="text-2xl">However; there is still a substanctial amount of incredibly damnding evidence and it is pretty obvious these officials didnt merely make a bad judgement call; they were engaged in straight up nefarious activities and targeted me, a law abiding legal citixen while trying to save a womans life and do the right thing. Theyve called themselves GOOD SAMARITANS over and over. Keep in mind its on video they DEMANDED 1000 cash for the tire they surprised me with, and when that tow driver backed out and stopped, the two dispatchers started saying I owed them now. For saving our life. They also acknowledge the passenger was near death.</p>
            <p>Yet strangely enought hey never list the female in any of the police reports or incident logs, oir CAD files. Being that she was the ONLY reason I called and she was rhe entire reason for needed aid car.. its not right.</p>


            <p className="text-2xl">Dificult complex case with many twist....its been intentionally designed to overwhelm an already weary and underrepresented defendent...done by a 20 year senior CHIEF prosecutor {`(`}retired but still pulling shameful shit apparently{`)`}</p>
            <h3 className="text-4xl">This incident was not just sketchy dispatchers and tow mutts trying to get over on tourist. </
            h3>
            <p className="text-2xl">It was kidnapping with a clear conspiracy to commit murder while interfering in life threatening medical duress call to 911. I have not violated any laws or rules or even decency expectations of any sort. </p>
            <p className="text-3xl">The sheer volume of discrepencioes and unaddressed detaails like what the hell was a retired former 20 year CHIEF prosecutor from Seattle doing runnin out the back door so to speak, of these scumbag corrupt city workers home?</p>
          </Card>
        </Card>
        <Background />
        <CAD1 />
        <Card className="bg-slate-800 text-white drop-shadow-2xl shadow-inner">
          <CardHeader>
            <h2 className="text-5xl">Prosecutorial MISCONDUCT</h2>
            <h3 className="text-2xl drop-shadow-lg">Discrepencies...not just a few minor frivial things either.</h3>
          </CardHeader>
          <CardContent>
            <ul>
              <p className="text-2xl drop-shadow-lg">WRONG TOW COMPANY INTENTIONALLY LISTED </p>
              <p className="text-lg">After a lot of round and round and citing law and explaining I knew what they were doinf; saying they can take my truck but they will be arrested by STATE PATROL because Jeremiah interjected bragging how he had the local deputies in his phone on speed dial and he would call them for me; I said no worries, I will call State Patrol. And I may call 4 or 5 troops to get an honest one who will intervene. Or I might need to contact attorney general, to which he also laughed. I saud then that I would call FBI but not a day will go by that I stop seeking justice and bringing awaremess to these acts. Jeremiah became visible scared and the tow operator angrily threw my keys swearing at Jeremiah, saying he wants nothing to do with this. Smart man.Jeremiah howeever, for all the brains and glory he represents as an operations managaer at a large private dispatch center; wouldnt budge, picked the keys up and claimed he was TAKING my truck its his and I need to leave or I would be shot. Again. They refused to let my injured passenger even talk to me, and i woouldnt leave her. Being that the tow operator shifted down adn left his stake in this; I realized Jeremiah was the one who was supposed to shoot me if I refused to leave his property. Under vehicle abandonment law in Washington State, given the fact the B&T tow truck was there still; walking away could also cost me my vehicle. Jermeiahs wife Jenna ran over and punched me in the face at one point, without warning while Jeremiah was talking to me. They started spitting and hurling insults so I recognized their effort to provoke me into a fight for justifiable homicide had picked up considerably.  </p>
              <p className="text-lg">The arresting deputies incident report as well as the 911 CAD file claim Stans Mount View Towing is the tow operator. Im not aware of any of that and the man who DROVE my truck without permission, tried to demand cash then backed out of it smartly; was driving this red roll-back with door tags indicating B&T Towing out of Cashmere Washington. Jeremiah and himself had claimed to be buddies. There was definately some bad blood after this mess, and it is apparent that he refused to cooperate with this now out of control and completely desperate criminal activity. They had to get some substance for their completely false narrative about me threatening these so called "heros" over some repair or tow bill. They simply resorted to a local tow company who they can confide in and this speaks volumes of the Stans Mountain View Towing. Obviously worth being cautious of if you need a tow in Chelan since I can assure you there was no tow of any sort nor was their any consent to tow, nor legal auithority nor did I need a tow. Nor did I need a tire. And I will check but I am pretty sure tow companies are tow companies. And they probably cant legitmately just offer to sell you a used tire and wheel even if that were what was requested. It cwertainly was not.</p>
              <p className="text-2xl">Court is not allowing access to the actual victim / witness, i.e. the tow operator in this photo who was the only one there</p>
              <p className="text-xl">Stans accepts credit cards, also. And would have gladly yielded me a bill upon request as they are obligated to do. Again, Stan Mountain View ior whoever is being falsely introduced to compensate for a uncooperative tow operator who knew he was in over his head and tapped out. My compliments to him for his albeit late moment of clarity. Now if we could contact him... I cannot I have a court order not to and assigned counsel has refused to do so. So by slight of hand they railroad me here also.</p>
              <Image src="/Chelan/july4_2024/towtruck.jpg" width="1400" height="2800" loading="lazy" alt="This is a photp of the tow and operator at the scene. Stans Mountain View or whatever never existed"></Image>
              <div className="block mt-2 text-xl align-left antialiased font-normal leading-normal text-inherit mb-6">This is a screenshot from one of the prosecutions own videos.... it clearly shows B7T not Stans. Probably just trying to bog me down since I am fighting my case alone.</div>
              <Image src="/Chelan/july4_2024/E6EF22E9-DB1F-49B3-87E1-28D2CDE1CFC6_4_5005_c.jpeg" width="1900" height="2800" loading="lazy" alt="from left, in this photo: Jeremiah Johnson who is the Rivercom 911 OPERATIONS CENTER MANAGER, the actual tow operator, the female dispatcher they names as Jenna and now last minute have claimed is not and never has been a Rivercom employee... , unknown quiet man wearing wenatchee fire shirt, and possibly the other tow operator who had followed first tow operator as he drove my truck from the park to Jeremiahs home without my knowledge or consent, following him in the red B7T tow truck with a side by side ATV on bed. The two dogs are my passengers medical dogs and she never parts with them. They played on the element of causinf fear for my passengers safety by coddling her dogs and refusing to get her or say if she is ok, then laughing"></Image>

              <div className="block mt-2 text-m align-left antialiased font-normal leading-normal text-inherit">
                From left: Jeremiah Johnson the Rivercom 911 OPERATIONS CENTER MANAGER, tow operator on scene in my pickup, female dispatcher Jenna, unnamed quiet man wearing wenatchee fire shirt, and the 2nd tow operator who had followed first tow operator driving my truck to Jeremiahs home. The two dogs are my passengers medical dogs and she never parts with them.
              </div>

              <h3 className="text-2xl">Taunting Me, or Throwing Me a Bone?"</h3>
              <p className="text-1xl">After nearly an entire YEAR, I was finally told I could watch but not take home Jenas videos. I was invited to assigned counsels office to watch a copy of un-tampered video which clearly showed deputy asking tow operatopr for impound bill and the tow operator said Ryan doesnt owe me anything. He was asked about impound, tow, and the services / parts rendered to "fix" my truck and the tow operator adimently and sternly informed the deputy that he was not owed ANYTHING by me and he had no interest in my truck. Yet that deputy lied on his incident report stating that I was outraged over some repair or impound bill I wasnt able to pay. Keep in mind also; my truck was given to my passenger to drive home. They wrote that up as "we dropped his truck off at the park and ride" but in fact the tow operator drove my passenger to the park and ride then sent her on her way. The deputy actually came to the car window to get my consent on his body cam which conflicts the claim Chelan Sherifs make that their deputies are not equip[ed with body cams. But the Deputy did in fact ask and I graciously said yes please and thanks. They lack chain of custody for an impound claim. Further, the truck had a tire failure again due to low pressure and it had to be towed from Snoqualmie to Seattle that same night.  </p>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}