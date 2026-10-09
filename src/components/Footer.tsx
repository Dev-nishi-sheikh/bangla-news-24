
const Footer = () => {
    return (
        <footer className="w-full border border-gray-200 rounded-b-lg bg-white">
            <div className="max-w-7xl mx-auto px-6 py-7 flex flex-col sm:flex-row items-center justify-between gap-3 text-[#64748b]">
                <p>
                    © {new Date().getFullYear()} BanglaBulletin
                </p>

                <p>
                    Source: BBC Bangla
                </p>
            </div>
        </footer>
    );
};

export default Footer;

