import Link from "next/link"

export const FooterLinks = ({children, href}) => {
    return (
        <Link
            href={href}
            className="mb-4 inline-block text-base text-body-color duration-300 hover:text-black dark:text-body-color-dark dark:hover:text-white"
        >
            {children}
        </Link>
    )
}