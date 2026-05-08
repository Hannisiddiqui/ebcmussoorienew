import Link from "next/link";
import { Container } from "../sectionComponants";
import { webSiteFooterData } from "./footerData";

export default function NewFooter() {

    const rooms = webSiteFooterData.lists[0].links

    const explore = webSiteFooterData.lists[1].links;

    const forYou = webSiteFooterData.lists[2].links;

    const socials = webSiteFooterData.lists[3].links;

    return (
        <footer className="bg-primary text-[#8d8d8d] flex items-center justify-center px-6 py-12">
            <Container className="w-full max-w-7xl  px-10 md:px-16">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-5">
                    {/* Brand Section */}
                    <div className="space-y-5">
                        <div>
                            <h2 className="text-4xl text-[#d2ab62]">
                                EBC
                            </h2>
                            <p className="mt-2 text-xs uppercase tracking-[0.35em] text-[#b8a06b]">
                                Mussoorie
                            </p>
                        </div>

                        <p className="leading-7 text-sm text-[#7f7f7f]">
                            {webSiteFooterData.description}
                        </p>

                        <div className="space-y-2 text-sm leading-6 flex flex-col">
                            <p>
                                {webSiteFooterData.contact?.links[0].label}
                            </p>
                            <Link href={webSiteFooterData.contact.links[1].href}>{webSiteFooterData.contact?.links[1].label}</Link>
                            <Link href={webSiteFooterData.contact.links[2].href}>{webSiteFooterData.contact?.links[2].label}</Link>
                        </div>
                    </div>

                    {/* Rooms */}
                    <div>
                        <h3 className="mb-6 text-lg font-medium text-[#d2ab62]">
                            Rooms
                        </h3>
                        <ul className="space-y-4 text-sm">
                            {rooms.map((room) => (
                                <li
                                    key={room.href}
                                    className="cursor-pointer transition hover:text-[#d2ab62]"
                                >
                                    {room.label}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Explore */}
                    <div>
                        <h3 className="mb-6 text-lg font-medium text-[#d2ab62]">
                            Explore
                        </h3>
                        <ul className="space-y-4 text-sm">
                            {explore.map((item) => (
                                <li
                                    key={item.href}
                                    className="cursor-pointer transition hover:text-[#d2ab62]"
                                >
                                    {item.label}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* For You */}
                    <div>
                        <h3 className="mb-6 text-lg font-medium text-[#d2ab62]">
                            For You
                        </h3>
                        <ul className="space-y-4 text-sm">
                            {forYou.map((item) => (
                                <li
                                    key={item.href}
                                    className="cursor-pointer transition hover:text-[#d2ab62]"
                                >
                                    {item.label}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social + CTA */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <h3 className="mb-6 text-lg font-medium text-[#d2ab62]">
                                Social
                            </h3>

                            <ul className="space-y-4 text-sm">
                                {socials.map((social) => (
                                    <Link href={social.href}
                                        key={social.href}
                                        className="flex items-center gap-2 cursor-pointer transition hover:text-[#d2ab62]"
                                    >
                                        <span>{social.icon}</span>
                                        <span className="capitalize">{social.label}</span>
                                    </Link>
                                ))}
                            </ul>
                        </div>

                        <Link href={webSiteFooterData.link.href} className="mt-10 w-fit rounded-md bg-[#d2ab62] px-6 py-4 text-sm font-semibold uppercase tracking-wider text-black transition hover:opacity-90">
                            {webSiteFooterData.link.label}
                        </Link>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-14 flex flex-col gap-4 border-t border-[#1b2a25] pt-6 text-xs text-[#6f6f6f] md:flex-row md:items-center md:justify-between">
                    <p>
                        © 2025 EBC Mussoorie — Everest Base Camp Mussoorie. All rights
                        reserved.
                    </p>

                    <p>
                        Park Estate, Hathipaon Road, Mussoorie, Uttarakhand 248179
                    </p>
                </div>
            </Container>
        </footer>
    );
}
