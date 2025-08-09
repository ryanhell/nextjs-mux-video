import React from "react";
import Image from 'next/image';


const page = () => {
    return (
        <div className="min-h-screen bg-gray-50">

            <div className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden">

                <div className="absolute inset-0">
                    <Image
                        src="../ryansPhotos/Jeremiah/jeremiah_1.jpg"
                        alt="Jeremiah of Rivercom 911"
                        layout="fill"
                        objectFit="cover"
                    />
                    <Image
                        src="../ryansPhotos/Jeremiah/jeremiah_2.jpg"
                        alt="Jeremiah of Rivercom 911"
                        layout="fill"
                        objectFit="cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>


                <div className="relative z-10 h-full flex items-end">
                    <div className="w-full px-4 sm:px-6 lg:px-8 pb-8 md:pb-12">
                        <div className="max-w-7xl mx-auto">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                                Meet Rivercom 911's Operations Center Manager
                            </h1>
                            <ul className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl">
                                <li>21 year Rivercom employee</li>
                                <li>Worked his way up the ladder to senior op man where he still sits today</li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

                    <div className="lg:col-span-2 space-y-8">
                        <section>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About</h2>
                            <div className="prose prose-lg max-w-none text-gray-700">
                                <p className="text-xl leading-relaxed mb-6">
                                    I do not wish to say whether I think Mrs Bagshaw is a bad person or a good person but I will say that I have been trying to address this bizarre and deadly encounter which I cought her vacating the scene to allow the deputies to come and do whatever it was that they could not do while Sally Bagshaw was on the property. Seems outright sinister Im not gonna lie. Matter of fact; after over a year of really looking at the Bagshaw component from a hundred angles; I can not see a logical or practical reason she would have been there or yelled "I can not let Ryan see me" and i really dont get why she would have to vacate the property unless they planned to shoot me, after all that is what Operations Manager Jeremiah Johnson claimed, and what he remarked about on the evidence video, and I think it is actually noted in the transcipts with Rivercom 911 center as dispatch. notifed Jeremia that the. deputy was en route to arrest me and take me away. "Ryan needs to disappear for good not just go to jail or be taken away." </p>
                                <p className="leading-relaxed mb-6">
                                    <h4>Why So Angry </h4>
                                    I just dont know what type of talk that is; for a 911 CALL CENTER OPERATIONS MANAGER in his shoes; doing what they did, and I simply could not pay and asked to leave with my passenger and saud I was reporting them. His wife actually assaulted me; punched me in the face with a closed fist when I wasnt looking. Im convinced the murder dialogue was not a joke. It was not just a temper talking. No, it was a panicked kidnapper who had just been told very cooly and calmly that he made a massive error when he decided to kidnap and extort me, and most damnding, whem he used his position of trust to abuse us and block us from legitimate life saving urgent medical assistance. He was shaking like a leaf on a tree and chain smoking. The death talk wasnt hollow threats at me; they were vivid plans orders, or request. And he very nearly achieved success. Nothing I did or said that day warranted the type of death threats Jeremiah made. Keep in mind he barely even made the threats known to me; it wasnt until much later I learned he was calling in his deputy buddy to murder me.
                                </p>
                                <p className="leading-relaxed mb-6">
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <p className="leading-relaxed">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Experience</h2>
                            <div className="space-y-8">
                                <div className="border-l-4 border-blue-500 pl-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Senior Creative Director</h3>
                                    <p className="text-blue-600 font-medium mb-2">Creative Agency Inc. • 2020 - Present</p>
                                    <p className="text-gray-700">
                                        Leading creative teams to develop innovative digital experiences for Fortune 500 companies.
                                    </p>
                                </div>
                                <div className="border-l-4 border-blue-500 pl-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Art Director</h3>
                                    <p className="text-blue-600 font-medium mb-2">Design Studio Co. • 2017 - 2020</p>
                                    <p className="text-gray-700">
                                        Managed visual design projects and collaborated with cross-functional teams.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                    <span className="text-gray-700">john.doe@example.com</span>
                                </div>/p
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                    </svg>
                                    <span className="text-gray-700">+1 (555) 123-4567</span>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                    <span className="text-gray-700">San Francisco, CA</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">UI/UX Design</span>
                                <span className="px-3 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Branding</span>
                                <span className="px-3 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Photography</span>
                                <span className="px-3 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Adobe Creative Suite</span>
                                <span className="px-3 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Figma</span>
                                <span className="px-3 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Team Leadership</span>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Connect</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clip-rule="evenodd"></path>
                                    </svg>
                                </a>
                                <a href="#" className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
                                    </svg>
                                </a>
                                <a href="#" className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;