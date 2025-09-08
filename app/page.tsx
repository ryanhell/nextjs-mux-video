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
import RobinsonCarousel from "@/components/imageComponents/Carousels/RobinsonCarousel";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col md:mx-5 servefast">
      <div>
        <Card className="gold">
          <Image src="/ryansPhotos/shitshowcircus.jpg"
            width={1900}
            height={1000}
            alt="edded"
            style={{ objectFit: 'cover', overflow: 'hidden' }} // Ensures the image covers the area without distortion
          />
        </Card>
        <Card className="radd md:mx-13 md:my-13 drop-shadow-2xl border-2 border-white">
          <p className="text-white mx-3 md:mx-12 text-3xl leading-relaxed bold font-bold italic opaque-30">Surreptitious criminal conduct involving Chelan & Douglas County's 911 provider, Rivercom 911, their 'Director of Operations', dispatchers, Chelan County Sheriffs, Wenatchee Fire, Ballard Ambulance and Chelan County Superior Court, namely Judge Jourdan and the county attorneys office as well as defendents assigned indigent legal council; Chelan Public Defenders Justin Titus, Sean Estworthy, and Brian Chase. </p><br></br><div className="float-right"><RobinsonCarousel /></div><p className="mx-3 md:mx-12 text-2xl leading-relaxed text-white">
            The above listed agencies and individuals are have cognized and identified as contributors to the facilitation of this crime, the planning and execution, and or the attempt to conceil the crimes and silence the victim, knowing the original cases severity and significance and the consequences that it carries.
            They are bound by the key evidence as well as other indicators such as deliberate indifference and cruelty such as the course of conduct which which was demonstrated during this deadly incident as Wenatchee Fire Fighters and EMT's stood down while a severely injured disabled woman suffered while being held captive in the kidnappers garage. The woman's driver, Ryan Hell, who previously attempted to get her to a hospital; also ill, was being beat, verbally abused, had his truck stolen in what amounts to armed robbery, he was extorted and then told he would be shot and killed if he did not leave on foot and walk to town abandoning his passenger. In a deperate plea for compasand in prove these people have worked in conjunctiiosion he begged the gunman to surrender his pasenger so he could try some other means of getting her to a hospital. He was spit on and then swatted by violent Sheriff Deputy associates of the kidnapper who spent more than an hour on his personal phone pleading for his deputy friend to "make Ryan disappear for good".</p>
        </Card>
        <Card className="md:mx-44 md:px-12 blues inner-shadow-2xl border-zinc-6005">
          <p className="mx-3 md:mx-9 text-2xl leading-relaxed text-white drop-shadow-amber-500">
            The primary kidnapper and gunman is Jeremiah Johnson of Malaga Washington State, is confirmed as the Director of Rivercom 911, a private PSAP  911 service in central rural Washington State. This company enjoys a hybrid structure of private and municipal ownership which is rare for PSAP's. Jeremiah sits on the board of advisers and he provided much of the technical setup and holds much of the licensing required by the Federal Government to maintain this facility. Perhaps Jeremiah engaged in a roadside robbery of stranded emergency medical callers, and abused his role as DIRECTOR of the 911 service in order to do so. Or, perhaps Jeremiah was acting to carry out the request of a non-official who is not commissioned or otherwise performing official business. Meaning, Jeremiah used a Federally Regulated Emergency System, as well as coordinated with Wenatchee Fire and Cheelan County Sheriffs in order to do some type of grievous harm to Ryan Hell and his passenger as consequence. Without a doubt; one of these two scenarios is an absolute fact. When we consider the unknown woman who Jeremiah Johnson hastily ushered off the property in the moments before Deputies arrested Mr Hell; we an break down the language and ascertain some of the potential meanings. Additionally we can exclude some of the likelihood that Jeremiah's intent at dispatch was to merely hustle two people for a old beat up pickuop truck.

            Jeremiah and Wenatchee Fire Fighters were heard yelling to the unidentified woman in the pickup:
            "you have to go", "you have to leave", "the sheriffs are almost here", "the sheriffs are hear", "they wont come in until you have left the property". These are almost verbatim what was yelled. Multiple people. Rivercom personel as well as Wenatchee Fire. The woman responded from inside of her pickup; "where is Ryan, I cant let Ryan see me." After the woman drove precariously, as I approached and asked her to wait for police, she pushed past me driving onto the grass striking me with the mirror of her truck, then sped away down the gravel driveway and beyond. Just moments after; the deities and wildlife agent slowly swerved up the road driving about 5 mph, which was unusual for a call. I put my hands up, palms toward the deputies knowing there is a high likelihood there will be some sort of desire to shoot me or perhaps a mistake caused by Jeremiahs false accusations. I was in plain view in the center of the lane at the driveeway apron to the property.

            Another fun fact. I am unable to or maybe not yet around to it enough to solve it: but the residence noted in the documents on Colockum Road; it appears to not be in Jeremiah or Jenas name. I am not yet 100% sure. Records seem to change when I search. However doing a reverse search in order to determine if this is in fact the Joihnsons personal home or was it perhaps property belonging to Rivercom 911? The property has some details about it which lead me to suspect it belongs to a commercial entity. If so it is also being appropriated by non official use, although that could be legal I am not sure. When I did the reverse search for properties I did find a house supposed to be just two doors down the road, which is in Jeremiah Johnsons name. So this is worth looking into. If Rivercom owns the property Jeremiah and Jena took us to: this case takes on a new dynamic. Obviously everyone claims Jeremiah was off that day and volunteering for brush fire duty on the 4th of juky, then took off to pick us up and then took us to his "personal home"  to "wait for a tow truck". None of that passes the litmus test of common sense 101, for me anyhow. What seems much more plausible, in fact seems obvious aside from the denials by the perpetrators: Jeremiah and Jena were both at work at Rivercom 911 on 4th of July. They abused their roles and engaged in a serious criminal conspiracy to deprive and likely intentionally murder two completely innocent people stranded in a state park on the fourth of july. We already know they utilized their dispatch systems to intercept, mismanage miscategorize then facilitate their fake rescue. The sheer magnitude of criminality demonstrated in these concrete items alone, which I think we can all see; would surely not be worth a measly 1000 dollar cash ransom or a beatup 2007 F150 with nearly 300K miles on it. They needed the cooperation of several others we know for sure; not likely. However; if a VIP of some sort; like say, a Harvard Leader, were to come to them and ask them for their assistance; would they throw caution to the wind and ignore consequences assuming they were above the law?




            The passenger and driver who called 911 did not succomb yet to these injuries or illnesses. The passenger, a 58 year old diabetic friend of Ryan's; had been given the keys to his truck after Ryan was arrested then drove the truck back towards Seattle and had broken down due to the tire losing air again, near Cle Elum. At that location she was able to achieve a tow by using her AAA Roadside, and the vehicle was towed to Ryan's residence in Seattle.

            According to the narrative the county is pushing: Ryan and his passenger were up driving around and got lost got a flat tire then called 911 for road side assistance. This contradicts clear statute and guidelines on the matter of neutrality of 911 from roadside. In fact, the FCC recently posted an article on the subjeect re-iterating the fundemental rule of 911 staying away and uninvolved from roadside assistance. They save lives and property if signicant risk exist. This truck was on the side of a gravel park road, miles away from any people. It was not obstructing the road way.

            Rather; what actually occured is Ryan and his passenger had traveled to Malaga for a long awaited camping trip to get the passengers medical dogs away from fireworks. Once there they seen a welcome board for the Wa State Discovery Park system which the passenger had an annual pass, as well as stating Fishing License granted provisions for access, which Ryan Held for 2024. The road was a bumpy and not maintained gravel wagon road, which winded through the hills and valleys of the various canyons throught the deserts and thickets of timbers etc. Mostly rocky and arrid terrain, no sight of habitations, structures, or other resources so be prepared as the sign said.
          </p>
          <Image src="/ryansPhotos/passengerEvidence/passengerICUDischargeSummary.jpg"
            width={1700}
            height={2267}
            alt="My Passengers discharge sumary for a similar medical emergency in late August 2025, which required ambulance to ICU and several days intebsive care"
          />
          <p className="md:mx-44 md:px-12 blues inner-shadow-2xl border-zinc-6005">
            The emergency call was for urgent life saving medical. There was NEVER anything else implied or permitted. My passengers critical life threatening medical emeergency was explicitly described with proper patience and understanding since my own mother passed some years ago after a life long battle with diabetes. I know a little about it. However; oddly eniough, during this most extreme and bizzare encounter with RIVERCOM 911 essentially mishandling at least one life threatening medical emergency; they in fact said a LOT of things which no surprise did not make their final cut for the CAD dispatch log. You see; from the beginning the dispatcher laughed. Refused ambulance, refused access to first aid help, refused any sort of help. She offered to buy my truck. She started asking if I needed a tune up. How many miles does my truck have. Is it 4 wheel drive, what engine the v6 or v8. Those are COMPLETELY innapropriate questions during an emergency medical 911 call, and I dont care if they erased all record of Rivercom 911's adherance to  Because storage space is super expensive thsee days. They have to erase and record over it every 90 days? Absurd we are to believe this type of thing. On the record well witwhich completely doze over the description bizarre and go straight into criminal malicious and idiotic. My passenger is dying Ryan said. The dispatcher laughed, she said its your problem. We cant help. She argued with Ryan nearly an hour while she berated him and made senseless accusations and said things like "we shouldnt pay for stupid people from seattle who get in trouble in Chelan". Ryan told her they could pay for the ambulance and the passenger has insurance. She asked who her insurance was then said she would see what she could do. She called back and said they could get a deputy or city council to pick them up. Ryan said yes if that is the only option to get her to the hospital. Several other odd things were mentioned by the dispatcher which put Ryan into an immediate defensive posture regarding his vehicle. The dispatcher mid stride, as Ryan is telling her about the passengers deadly situation and urgent medical emergency, interupted Ryan to ask him what year his truck was, is it 4 wheel drive, and was it paid for or financed. This is obviously illegal to ask in an emergency call and its also concerning since Ryan worked at car lots and tow yards many years ago, and is familiar with an assortment of laws especially the tyransferall of ownership of a vehicle, under Mechanic Lien or outstaning debts. She asked later how many miles and if it was 4 wheel drive. Then she offered to send a mechanic. When Ryan declined and asked her repeatedly to hurry and focus on the injuured passenger; the dispatcher would only eventusally, reluctantly return to her duties. She said if yoiu want anyt help you are going to let us fix your truck and that set Ryan off. These dispatchers were clearly engaged in a very well rehearsed scam of taking vehicles. Ryan had faith in the nations 911 laws and those associated technologies as being truly reslient and impervious to tampering or destruction. He made a very clear and very formal decleration after the dispatcher sent some people to pick them up to take them to "meet an ambulance which accepted our insurance", Ryan said thank you, and for the record, NOBODY is touching my truck. The dispatcher was again behaving dodgy. She reluctantly aggrees to not touch Ryan's truck and note that no work, tow or seervice or anything is to be performed without Ryan's written authorization and presence. It merely needed air in the tire. The dispatcher spent no less than 15 minutes of the overall call duration; trying to rope Ryan into free tune ups, assessments, reppairs and so forth. All scams. Ryan repeatedly told her there was nothing wrong with his truck and she still recommended a tune up; to just let their guy take a look at it. Its hard to believe and it is very likey this was all a ruse being done by the dispatcher for whatever other innterest behind the scenes was going on, or perhaps for entertainment. But the call was radically out of control and bizarre.</p>

          <p className="mx-3 md:mx-12 text-2xl leading-relaxed text-slate-200"> The truck that came to pick them up was the operations manager of that 911 center as Ryan later uncovered and confirmed. At the time of incident he was dressed in Fire Fighter uniform and claimed he was a Fireman. The female he had with him was immediately recognizable by voice and attitude as the dispatcher Ryan had talked to. She was on the phone much of the drive to the house the Operations Manager said she was a dispatcher. Ryan asked if she was the one who took his call and she said no. Ryan knew she was lying but reserved that opinion.</p>
        </Card>



        <br></br>
        <Card className="ryanspaper">

          <p className="mx-3 md:mx-12 text-2xl leading-relaxed text-black"> & his wife taking Us To His "Personal Home" With lThe False Promise of an Ambulance; During The Nearly 3 Hour Ordeal They Stole My Truck, Robbed Me and His Wife; As Their Panic and Desperation Grew, The Female Dispatcher Violently Assaulted Me in Attempt to Elicit a Fight So Her Armed Husband, </p><br></br>
          <p className="mx-5 md:mx-15 text-2xl text-black">The Operation Center Manager; Could Shoot and Kill Me. These People LITERALLY Created a Deadly, Unlawful Imprisonment Situation Amidst My Urgent Medical Emergency for Both My Passenger and Myself Being Stranded in a Desert on The Fourth of July. The Chelan County Prosecutor And Judge Jourdan Have Made No Secret of Their Contempt for Me; They Behave Outraged and Indignified as if I Did ANYTHING Wrong At ALL, AT ANY POINT IN TIME.</p>
        </Card>
        <Card className="bagshaw mx-4 px-12">
          <Card className="gould border-zinc-600 border-3 drop-shadow-2xl mx-3 px-3">



            <ul>
              <li> <h3 className="text-4xl text-right">18 USC 241: Conspiracy against rights</h3></li>
              <li><hr></hr></li>
              <li> From Title 18-CRIMES AND CRIMINAL PROCEDURE</li>
              <li>  CHAPTER 13-CIVIL RIGHTS</li>
              <li> CHAPTER 13-CIVIL RIGHTS
              </li>
            </ul>
            <p className="text-xl italic px-5">
              18 USC 241: Conspiracy against rights
              From Title 18-CRIMES AND CRIMINAL PROCEDURE

              CHAPTER 13-CIVIL RIGHTS

              §241. Conspiracy against rights
              If two or more persons conspire to injure, oppress, threaten, or intimidate any person in any State, Territory, Commonwealth, Possession, or District in the free exercise or enjoyment of any right or privilege secured to him by the Constitution or laws of the United States, or because of his having so exercised the same; or
              If two or more persons go in disguise on the highway, or on the premises of another, with intent to prevent or hinder his free exercise or enjoyment of any right or privilege so secured-
              They shall be fined under this title or imprisoned not more than ten years, or both; and if death results from the acts committed in violation of this section or if such acts include kidnapping or an attempt to kidnap, aggravated sexual abuse or an attempt to commit aggravated sexual abuse, or an attempt to kill, they shall be fined under this title or imprisoned for any term of years or for life, or both, or may be sentenced to death.</p></Card>
          <Card className="blues">
            <h2 className="text-2xl mx-4">100% Law Abiding Citizens Violently Attacked in Coordinated Conspiracy Involving Multiple Local Agencies Abusing Color of Law While Acting on Behalf of a Non-Authority.</h2>
            <h4 className="text-2xl mx-4"> I believe it is POSSIBLE this attack was facilitated by Sally Bagshaw as retaliation for my helping Seattle Times located a time sensitive record archive which declared Murray a pedophile molestor. Sally Bagshaw had a extremely unique protective intetrest with keeping Murray in office, many have noted. She was recently caught on film inside a Hotel with multiple lobbyist, and she since resigned from political office and is now working as a major construction chair on the hiways devlopemts.</h4>





            <Card className="blues">
              <blockquote className="relative p-4">
                <span className="icon-[tabler--quote] text-base-300/20 absolute -start-3 -top-3 size-16 rotate-180 rtl:rotate-0"></span>
                <div className="relative z-1">
                  <p className="text-base-content text-center text-5xl">
                    Conspiracy:<br></br>
                    <em className="text-4xl">
                      'a secret plan by a group to do something unlawful or harmful'.
                    </em>
                  </p>
                  <p className="text-xs text-muted italic">so lets not giiglee and act like there are not huge provision in the penile code that arent explicitly there just to prevent the type of abuse of power, organized malfeasance and silencing of opposition which these people were engaged in.</p>
                </div>

              </blockquote>

            </Card>


            <h3 className="m-12 text-3xl">I BARELY SURVIVD Multiple Swatting Efforts. There were ViP's; RETIRED OFFICIALS; Being Ushered Off The PROPERTY. Fire / EMT Crews Sitting By Ordered Not To Interact. And I Am Patiently Waiting For Justice, for Legal Aid. I am falsely accused in a brazen bold attempt to conceil a very obvious and easy to spot criminal conspiracy which exposes deadly criminal racketeering where a retirted non official potentially, is able to facilitate the revenge for a wealthy elite child predator, by using her connections in state law circles, and a loosely managed large 911 provider in a State Park, on the Fourth of July. Leaving a legally disabled woman to suffer and nearly die as First Responders watched on.</h3>
            <hr></hr></Card>
        </Card>
        <div className="container px-4 my-9 mb-4">
          <h1 className="text-5xl text-center">Demonstrated Disregard for Life & Property, With Clear Pattern of Intentional & Unnecissary Violations Under Color of Law</h1>
          <h3 className="text-3xl">..on the Fourth of July, rather than tending to legitimate duties they were busy abusing us</h3>
          <Image src="/JeremiahJohnson/JeremiahJohnsonRivercomOfficerThumb.jpeg"
            width={2300}
            height={300}
            alt={"Jeremiah Johnson was the Rivercom 911 Director; Operations Manager, confirmed oin July 4th 2024. He then donned the clothing of a Wenatchee Fire department firefighter and interfered with an urgent life saving medical emergency call for a disabled 58 year diabetic who was going into shock for insulin shocck and stranded outside cell service in a state park. Jeremiah and his wife Jena Johnson, another dispatcher devised and hatched a scheme to deny them an ambu8lance at the scene then transported the two injured motorist to the Johnsons Personal estate located in aniother desert canyon on a remote dead end road with limited cell phone service. Once there Jeremiah called an associate to go back and steal mr Hell's 2007 F150, then replace his flat tire using his own wheel and tire he brought. He then drove mr Hells treuck 5 miles to the Johnsons estate and Jeremiah ushered Mr Hell outside where his cohort was sitting inside ryans truck and then demanded 1000 dollars, cash only. Ryan said he was dealing with a medical emergency and needed to go and wanted his passenger and then things escalated after Jena assaulted Ryan, and Jeremiah stood by with his firearm and made threats to shoot and kill Ryan."}
          />
        </div>
      </div>
      <div className="wddewdw">

        <Card className="blues md:px-12 px-3 mx-3">
          <h3 className="text-2xl headlined">Intentional Mis-Identification Of Key Subjects, By Deputies, Victims, and Dispatch Company</h3>
          <p className="headlined text-xl">The reason why? Simple: becuase during the incident when I was ambushed essentially, by this unwanted and unneeded not to mention fictitious repair as they claimed it were; the tow man was never towing my truck i fact. He admitted he went to the place we left it while i was struggling to get a non existent ambulance to show up which the Operations Manager and his dispatcher wife Jena Johnson never actually called for as it turns out. Instead, they called this man, who owned the B&T Towing truck they say, to come secretly replace my trucks wheel and tire while we were stranded at Jeremiahs home miles away, a place isolated without cell service. This was quite literally taking motor vehicle without owners permission and other violations potentially; however; I commend the B&T tow operator who took my truck for listening to my reasoming and yielding to my recommendation to pass on this scheme becuase I would report him to Wa State Patrol and since he lacks written contract or any valid proof of even a verbal contract; he will struggle to explain what gave him the right to move my vehicle.</p>
          <h4 className="pt-4 underline italic text-3xl headlined"> Additional Pattern of Misconduct Exposed in Front of Multiple Witnesses</h4>
          <p className="headlined text-xl">
            B7T Towing of Cashmere was pissed and threw my keys down and spit on the ground, then swore at Jeremiah for wasting his time on a lucrative holiday such as 4th of July, then made a parting comment to Jeremiah that he would owe him another dispatch after this one went bad as it had... and this opens up a real concern since state and federal dispatch guidelines and statutes explicitly prohibit dispatchers from referring tows; and only makes marginal provisions under extrenuating circumstances and only then it would still have to be what is known as a non-preference tow. You see; tow drivers and dispatchers make untrustworthy business partners and they are typically regulated heavily in the matter of referalls and such for reasons just like this case.   </p>
          <Card className="bg-gradient-to-r from-fuchsia-500 to-pink-500 px-12">
            <Image src="/Tow/towScandalLIES.jpg"
              width={2230}
              height={440}
              className="mr-4 float-left flex-shrink-0"
              alt='scam includes INTENTIONAL ATTEMPT TO MISADDRESS NAME OF TOW COMPANY I ALLEGEDLY RIPPED OFF'
            />
          </Card>
        </Card>
      </div>
      <div className="Bagshaw flex-row md:flex-col md:mx-12">
        <Card className="bagshaw flex md:flex-row md:mx-12">
          <Card className="foil">
            <CardHeader>
              <h2 className="text-xl headlined">The most important case in the Country?</h2>
            </CardHeader>
            <CardContent className="my-1 bg-blue-400 bg-opacity-10 mx-1">
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

      <div className="flex-col md:flex-row gap-5">
        <div className="flex-col gap-4">
          <div className="gap-3">
            <Card className="accordianStyles"><EthicalMisconduct /></Card>
          </div>

          <Card className="gap-3 accordianStyles"><Discrepencies /></Card>
        </div>
      </div>
      <div className="lex-row md:flex-row">
        <Card className="blues gap-3">
          <h2 className="text-4xl">Above Reproach Should Never Mean Immune From Accountability</h2>
          <p className="text-2xl">However; there is still a substanctial amount of incredibly damnding evidence and it is pretty obvious these officials didnt merely make a bad judgement call; they were engaged in straight up nefarious activities and targeted me, a law abiding legal citixen while trying to save a womans life and do the right thing. Theyve called themselves GOOD SAMARITANS over and over. Keep in mind its on video they DEMANDED 1000 cash for the tire they surprised me with, and when that tow driver backed out and stopped, the two dispatchers started saying I owed them now. For saving our life. They also acknowledge the passenger was near death.</p>


          <blockquote className="relative p-4">
            <span className="icon-[tabler--quote] text-base-300/20 absolute -start-3 -top-3 size-16 rotate-180 rtl:rotate-0"></span>
            <div className="relative z-1">


              <em className="text-4xl">
                Yet strangely enough; they never list my disabled diabetic passenger  who I see they DID leave in the call CAD file as something I just casully mentioned as if "hey I need a tow and tire and wheel, some cold drinks. Yah by the way that pesky passenger of mine has not had her insulin in days and is in diabetic shock. So what time can you guys get us in for service on the old truck?" And they simply logged "no medical emergency, call downgraded." The prosecutor and my prior attorneys have very addemately formally advised me that the jury in Chelan county are not sophisticated enough to be able to process this type of information. They have tried to advise me that the jury will be mad and they will never buy into my claims. They are not claims. These are the facts as they have been dumped onto me against my will. And I fully plan to re-post and make sure I do everything I can so bno more people die or are harmed.      </em>


            </div>

          </blockquote>





          <p className="text-2xl">Dificult complex case with many twist....its been intentionally designed to overwhelm an already weary and underrepresented defendent...done by a 20 year senior CHIEF prosecutor {`(`}retired but still pulling shameful shit apparently{`)`}</p>
          <h3 className="text-4xl">This incident was not just sketchy dispatchers and tow mutts trying to get over on tourist. </
          h3>
          <p className="text-2xl">It was kidnapping with a clear conspiracy to commit murder while interfering in life threatening medical duress call to 911. I have not violated any laws or rules or even decency expectations of any sort. </p>
          <p className="text-3xl">The sheer volume of discrepencioes and unaddressed detaails like what the hell was a retired former 20 year CHIEF prosecutor from Seattle doing runnin out the back door so to speak, of these scumbag corrupt city workers home?</p>
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
              <p className="text-1xl">After nearly an entire YEAR, I was finally told I could watch but not take home Jenas videos. I was invited to assigned counsels office to watch a copy of un-tampered video which clearly showed deputy asking tow operatopr for impound bill and the tow operator said Ryan doesnt owe me anything. He was asked about impound, tow, and the services / parts rendered to "fix" my truck and the tow operator adimently and sternly informed the deputy that he was not owed ANYTHING by me and he had no interest in my truck. Yet that deputy lied on his incident report stating that I was outraged over some repair or impound bill I wasnt able to pay. Keep in mind also; my truck was given to my passenger to drive home. They wrote that up as "we dropped his truck off at the park and ride" but in fact the tow operator drove my passenger to the park and ride then sent her on her way. The deputy actually came to the car window to get my consent on his body cam which conflicts the claim Chelan Sherifs make that their deputies are not equiped with body cams. But the Deputy did in fact ask and I graciously said yes please and thanks. They lack chain of custody for an impound claim. Further, the truck had a tire failure again due to low pressure and it had to be towed from Snoqualmie to Seattle that same night.  </p>
            </ul>
          </CardContent>
        </Card>


      </div>
    </div >

  );
}