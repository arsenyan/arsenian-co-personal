import Link from "next/link"

export default async function NotFoundTemplate() {
    return (
        <div className="">
            <h1 className="pb-4 mt-20 font-serif text-2xl lg:text-6xl md:text-4xl text-accent">404. not found</h1>
            <hr className="pb-4 border-accent" />
            <p className="mt-4">the page you are looking for does not exist.</p>
            <Link className="mb-10 underline-animation text-accent" href="/">return home</Link>
            <div className="md:h-[30vw] h-[50vw]"></div>
        </div>
    )
}