import SanityImage from "@/components/atoms/SanityImage"
import { Internship } from "@/types/sanityTypes"
import { IoLocationOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { formatDate } from "@/utils/formatDate";
import { CiSaveUp2 } from "react-icons/ci";
import { ExtendedInternship } from "@/types/inheritSanityTypes";
import { RiLoader2Fill } from "react-icons/ri";
import { Loader } from "@/components/atoms/Loader";


interface Props {
    internships: ExtendedInternship[];
    loading?: boolean;
}

export const InternshipList = ({internships = [], loading = false}: Props) => {
    return (
        <div className="ml-12 w-[70%] flex flex-col">
            {loading ? <div className="flex justify-center"> <Loader/>  </div>: (
                <>
                    <div className="text-xs ml-auto mb-5">Showing results {internships.length} of {internships.length}</div>
                    {internships.length == 0 && (
                        <span>No matching results.</span>
                    )} 
                    
                    {internships.map(item => {
                        return (
                            <div className="p-4 border-1 rounded-xl mb-5 w-full group cursor-pointer shadow-xl">
                                <div className="text-2xl font-bold group-hover:underline flex justify-between items-center">
                                    <p>
                                        {item.title}
                                    </p>
                                    <CiSaveUp2 />
                                </div>
                                <div className="flex mt-3">
                                    <div className="relative w-24 h-24 mr-5">
                                        {item.image && (
                                            <SanityImage src={item.image} alt={item.slug.current} className="object-cover"/>
                                        )}
                                    </div>
                                    <div>
                                        <div className="font-bold">
                                            {item.employer.title}
                                        </div>
                                        <div className="flex gap-3 items-center mt-2">
                                            <IoLocationOutline />
                                            {item.location}
                                        </div>
                                        <div className="flex gap-3 items-center mt-2">
                                            <CiCalendar />
                                            {formatDate(item.deadline)}
                                        </div>
                                    </div>
        
                                </div>
                            </div>
                        )
                    })}
                </>
            )}
        </div>
    )
}