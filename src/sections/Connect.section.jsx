import { motion } from "motion/react";
import { IoLogoGithub } from "react-icons/io5";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Tilt } from "react-tilt";

const ConnectSection = () => {
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                form.current,
                {
                    publicKey: import.meta.env.VITE_PUBLIC_KEY,
                }
            )
            .then(
                () => {
                    console.log("SUCCESS!");
                    form.current.reset();
                },
                (error) => {
                    console.log("FAILED...", error.text);
                    alert("Sending mail failed");
                }
            );
    };

    return (
        <>
            {/* Connect section */}
            <motion.section
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                id="Contact"
            >
                <div className="mt-[25vh] mx-[5vw] flex flex-col md:flex-row gap-10 md:gap-20">
                    {/* Left side */}
                    <div className="flex flex-col gap-6 md:gap-10 w-full md:w-[50%]">
                        <h2 className="text-4xl md:text-6xl text-[#03e6ff] font-bold">
                            LET'S CONNECT
                        </h2>
                        <p className="text-sm md:text-base text-gray-300">
                            I’d love to hear from you. Whether you’re sharing feedback,
                            exploring new ideas, or just want to chat about tech—or anything
                            in between. Let’s connect and turn thoughts into actions by some
                            conversation. Your message matters!
                        </p>

                        <div className="flex gap-4 md:gap-5">
                            <a href="https://github.com/Ganesh6811">
                                <IoLogoGithub className="w-8 h-8 md:w-10 md:h-10 hover:text-[#03e6ff] hover:cursor-pointer" />
                            </a>
                            <a href="https://www.linkedin.com/in/ganesh-s-95b848273">
                                <BiLogoLinkedinSquare className="w-8 h-8 md:w-10 md:h-10 hover:text-[#03e6ff] hover:cursor-pointer" />
                            </a>
                        </div>
                    </div>

                    {/* Form Section */}
                    
                        <div className="w-full md:w-[40%] bg-[#1a1a2b] p-4 md:p-6 rounded-2xl">
                            <form
                                ref={form}
                                onSubmit={(e) => handleSubmit(e)}
                                className="flex flex-col gap-6 md:gap-10"
                            >
                                <div>
                                    <label className="block mb-1 font-medium">Your email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="w-full p-2 rounded bg-[#0d0d0d] text-white border border-gray-700 focus:outline-none focus:border-purple-500"
                                        placeholder="you@example.com"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block mb-1 font-medium">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        className="w-full p-2 rounded bg-[#0d0d0d] text-white border border-gray-700 focus:outline-none focus:border-purple-500"
                                        placeholder="Subject"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block mb-1 font-medium">Message</label>
                                    <textarea
                                        className="w-full p-2 rounded bg-[#0d0d0d] text-white border border-gray-700 focus:outline-none focus:border-purple-500"
                                        name="message"
                                        placeholder="Type your message here..."
                                        rows={4}
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="px-5 md:px-6 py-2.5 md:py-3 text-sm md:text-base text-white font-semibold rounded-xl bg-gradient-to-r from-[#71cbff] to-[#8000ff] w-fit hover:cursor-pointer"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div> 

                </div>
            </motion.section>
        </>
    );
};

export default ConnectSection;
