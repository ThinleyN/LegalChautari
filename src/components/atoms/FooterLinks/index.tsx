import Link from "next/link"

export const FooterLinks = ({children, href}) => {
    return (
        <Link
            href={href}
            className="mb-4 inline-block text-base duration-300 hover:text-gray dark:text-body-color-dark dark:hover:text-white"
        >
            {children}
        </Link>
    )
}