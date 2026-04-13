const Footer = () => (
    <footer className="bg-indigo-700 text-white">
        <div className="mx-auto max-w-7xl px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
                <span className="text-xl" aria-hidden="true">🔴</span>
                <span className="font-extrabold tracking-wide">Pokédex</span>
            </div>
            <p className="text-sm text-indigo-200 text-center">
                &copy; 2026 All rights reserved.
            </p>
        </div>
    </footer>
);

export default Footer;