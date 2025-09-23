"use client";
import { FilterTag } from "@/components/atoms/FilterTag";
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
    filter: any;
    setFilter: any;
}

export const InternshipSidebar = ({industries,employers,locations, filter, setFilter}: Props) => {
    const [open, setOpen] = useState({a: true, b:true, c:true});

    const handleOpen = (id:string) => {
        setOpen({
            ...open,
            [id]: !open[id]
        })
    };

    const removeItemsFromFilter = (id: string, filterSection:'sector' | 'employer' | 'location' ) => {
        const newSector = filter[filterSection].filter(item => item != id);
        setFilter({...filter, [filterSection]: newSector});
    }

    const addItemToFilter = (id:string, filterSection: 'sector' | 'employer' | 'location') => {
        setFilter({
            ...filter,
            [filterSection]: [...filter[filterSection], id]
        })
    }

    console.log(filter, "filterss")
    return (
        <aside className="w-[30%] bg-white text-dark p-5 pb-12 rounded-xl shadow-xl">
            <div>
                <Accordion 
                    open={open.a}
                    placeholder={undefined} 
                     onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                    
                     // onPointerEnterCapture={undefined} 
                    // onPointerLeaveCapture={undefined}
                >
                    <AccordionHeader 
                        className="text-2xl font-bold cursor-pointer"
                        onClick={() => handleOpen('a')}
                        children={'Sectors'}
                        placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                        
                        // onPointerEnterCapture={undefined} 
                        // onPointerLeaveCapture={undefined}
                        >
                    </AccordionHeader>
                    <AccordionBody className="pt-0 pb-2">
                        {industries.map(item => {
                            return (
                                <FilterTag 
                                    title={item.title} 
                                    id={item._id} 
                                    handleAdd={() => addItemToFilter(item.title, 'sector')} 
                                    handleRemove={() => removeItemsFromFilter(item.title, 'sector')} 
                                    active={filter.sector.includes(item.title)}
                                />
                            )
                        })}
                        </AccordionBody>
                </Accordion>
                
                <Accordion 
                    open={open.b}
                    placeholder={undefined} 
                    onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                    
                    // onPointerEnterCapture={undefined} 
                    // onPointerLeaveCapture={undefined}
                >
                     <AccordionHeader 
                        className="text-2xl font-bold cursor-pointer"
                        onClick={() => handleOpen('b')}
                        children={'Employers'}
                        placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                        
                        // onPointerEnterCapture={undefined} 
                        // onPointerLeaveCapture={undefined}
                        >
                    </AccordionHeader>
                    <AccordionBody className="pt-0 pb-2">
                    {employers.map(item => {
                            return (
                                <FilterTag 
                                    title={item.title} 
                                    id={item._id} 
                                    handleAdd={() => addItemToFilter(item.title, 'employer')} 
                                    handleRemove={() => removeItemsFromFilter(item.title, 'employer')} 
                                    active={filter.employer.includes(item.title)}
                                />
                            )
                        })}
                        </AccordionBody>
                </Accordion>


                <Accordion 
                    open={open.c}
                    placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                    
                    // onPointerEnterCapture={undefined} 
                    // onPointerLeaveCapture={undefined}
                >
                     <AccordionHeader 
                        className="text-2xl font-bold cursor-pointer"
                        onClick={() => handleOpen('c')}
                        children={'Location'}
                        placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                        
                        // onPointerEnterCapture={undefined} 
                        // onPointerLeaveCapture={undefined}
                        >
                    </AccordionHeader>
                    <AccordionBody className="pt-0 pb-2">
                    {locations.map(item => {
                            return (
                                <FilterTag 
                                    title={item} 
                                    id={item} 
                                    handleAdd={() => addItemToFilter(item, 'location')} 
                                    handleRemove={() => removeItemsFromFilter(item, 'location')} 
                                    active={filter.location.includes(item)}
                                />
                            )
                        })}
                        </AccordionBody>
                </Accordion>
            </div>
        </aside>
    )
}
