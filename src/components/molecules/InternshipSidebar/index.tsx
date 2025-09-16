"use client";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";
import { useState } from "react";

interface Props {
    industries: any;
    employers: any;
    locations: any;
}


export const InternshipSidebar = ({industries,employers,locations}: Props) => {
    const [open, setOpen] = useState({a: true, b:true, c:true});

    const handleOpen = (id:string) => {
        setOpen({
            ...open,
            [id]: !open[id]
        })
    };
    
    return (
        <aside className="w-[30%] bg-gray-dark text-white p-5 pb-12 rounded-xl">
            <div>
                <Accordion 
                    open={open.a} 
                    placeholder={undefined} 
                    // onPointerEnterCapture={undefined} 
                    // onPointerLeaveCapture={undefined}
                >
                    <AccordionHeader 
                        className="text-3xl font-bold cursor-pointer" 
                        onClick={() => handleOpen('a')} 
                        children={'Sectors'} 
                        placeholder={undefined} 
                        // onPointerEnterCapture={undefined} 
                        // onPointerLeaveCapture={undefined}
                        >
                    </AccordionHeader>
                    <AccordionBody>
                        {industries.map(item => {
                            return (
                                <>
                                <p className="text-sm mt-3">{item.title}</p>
                                <hr />
                                </>
                            )
                        })}
                            {/* <p className="text-sm">Commercial</p>
                            <hr />
                            <p className="text-sm mt-3">Finance</p>
                            <hr />
                            <p className="text-sm mt-3">Technology & IT</p>
                            <hr /> */}
                        </AccordionBody>
                </Accordion>
                
                <Accordion 
                    open={open.b} 
                    placeholder={undefined} 
                    // onPointerEnterCapture={undefined} 
                    // onPointerLeaveCapture={undefined}
                >
                     <AccordionHeader 
                        className="text-3xl font-bold cursor-pointer" 
                        onClick={() => handleOpen('b')} 
                        children={'Employers'} 
                        placeholder={undefined} 
                        // onPointerEnterCapture={undefined} 
                        // onPointerLeaveCapture={undefined}
                        >
                    </AccordionHeader>
                    <AccordionBody>
                    {employers.map(item => {
                            return (
                                <>
                                <p className="text-sm mt-3">{item.title}</p>
                                <hr />
                                </>
                            )
                        })}
                        </AccordionBody>
                </Accordion>


                <Accordion 
                    open={open.c} 
                    placeholder={undefined} 
                    // onPointerEnterCapture={undefined} 
                    // onPointerLeaveCapture={undefined}
                >
                     <AccordionHeader 
                        className="text-3xl font-bold cursor-pointer" 
                        onClick={() => handleOpen('c')} 
                        children={'Location'} 
                        placeholder={undefined} 
                        // onPointerEnterCapture={undefined} 
                        // onPointerLeaveCapture={undefined}
                        >
                    </AccordionHeader>
                    <AccordionBody>
                    {locations.map(item => {
                            return (
                                <>
                                <p className="text-sm mt-3">{item}</p>
                                <hr />
                                </>
                            )
                        })}
                        </AccordionBody>
                </Accordion>
            </div>
        </aside>
    )
}
