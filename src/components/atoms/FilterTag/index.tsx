import { MdOutlineClose } from "react-icons/md";

interface Props {
    handleAdd: () => void;
    handleRemove: () => void;
    title: string;
    id: string;
    active: boolean;
}

export const FilterTag = ({handleAdd, handleRemove, title, id, active}: Props) => {
    return (
        <>
            <div 
            onClick={() => {
                !active && 
                handleAdd()
            }}
            className={`${active && 'bg-dark text-white' } border duration-300 transition-all w-fit mb-2 rounded-xl text-xs mt-3 py-1 px-2 cursor-pointer flex items-center`}>
                {title} {active &&  <MdOutlineClose className="ml-3 text-lg w-6" onClick={() => handleRemove()}/>}
            </div>
            <hr />
        </>
    )
}