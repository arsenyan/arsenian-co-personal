import Link from "next/link";

const Announcement: React.FC = () => {
        return (
            <div className="flex justify-center my-12">
            <div className="border border-accent text-accent rounded-t-lg rounded-br-lg md:p-5 p-3 max-w-[900px] flex md:flex-row flex-col gap-4 justify-between items-center">
                <p className="w-full md:text-2xl">Explore my accomplished projects and delve into their stories.</p>
                
                <Link href="/projects" className="w-full px-3 py-1 text-center text-white transition-all border bg-accent border-accent md:w-2/5 hover:bg-transparent hover:text-accent">explore projects</Link>
             
            </div>
            </div>
        );
    };

    export default Announcement;