const Announcement: React.FC = () => {
        return (
            <div className="flex justify-center my-12">
            <div className="border border-accent text-accent rounded-t-lg rounded-br-lg md:p-5 p-3 max-w-[900px] flex md:flex-row flex-col gap-4 justify-between items-center">
                <p className="w-full md:text-2xl">Explore my accomplished projects and delve into their stories.</p>
                <button className="text-white bg-accent border border-accent px-3 py-1 md:w-2/5 w-full hover:bg-transparent hover:text-accent transition-all">explore projects</button>
            </div>
            </div>
        );
    };

    export default Announcement;