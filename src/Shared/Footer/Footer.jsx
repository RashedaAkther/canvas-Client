import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import logo from "../../assets/resoures/logo.png";

const Footer = () => {
    return (
        <footer className="px-4 divide-y dark:bg-gray-800 dark:text-gray-400">
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
            <div className="lg:w-1/3">
                <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
                    <div className="flex items-center justify-center w-24 h-16 rounded-full dark:bg-violet-400">
                    <img src={logo} />
                    </div>
                    <div>
                    <p className="self-center text-2xl text-yellow-600 font-semibold">CANVAS</p>
                    <p className="self-center text-2xl text-yellow-600 font-semibold"> PROPERTIES</p>
                    </div>
                </a>
            </div>
            <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                <div className="space-y-3">
                    <h3 className="tracki uppercase dark:text-gray-50 text-yellow-600 font-semibold">Product</h3>
                    <ul className="space-y-1 text-yellow-400">
                        <li>
                            <a rel="noopener noreferrer" href="#">Features</a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="#">Integrations</a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="#">Pricing</a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="#">FAQ</a>
                        </li>
                    </ul>
                </div>
                <div className="space-y-3">
                    <h3 className="tracki uppercase dark:text-gray-50 text-yellow-600 font-semibold">Company</h3>
                    <ul className="space-y-1 text-yellow-400">
                        <li>
                            <a rel="noopener noreferrer" href="#">Privacy</a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="#">Terms of Service</a>
                        </li>
                    </ul>
                </div>
                <div className="space-y-3">
                    <h3 className="uppercase dark:text-gray-50 text-yellow-600 font-semibold">Developers</h3>
                    <ul className="space-y-1 text-yellow-400">
                        <li>
                            <a rel="noopener noreferrer" href="#">Public API</a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="#">Documentation</a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="#">Guides</a>
                        </li>
                    </ul>
                </div>
                <div className="space-y-3">
                    <div className="uppercase dark:text-gray-50 text-yellow-600 font-semibold">Social media</div>
                    <div className="flex justify-start space-x-3">
                        <a rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center p-1">
                            <FaFacebook className="text-3xl text-yellow-800"></FaFacebook>
                        </a>
                        <a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center p-1">
                           <FaGithub  className="text-3xl text-yellow-800"></FaGithub>
                        </a>
                        <a rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center p-1">
                            <FaInstagram  className="text-3xl text-yellow-800"></FaInstagram>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="py-6 text-sm text-center text-yellow-800 dark:text-gray-400">© 1968 Company Co. All rights reserved.</div>
    </footer>
    );
};

export default Footer;