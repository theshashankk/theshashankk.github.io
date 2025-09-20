import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import Chat from "@/components/Chat";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

export const metadata = {
    title: "Shashank | Portofolio",

    description:
        "I’m Shashank sharma, a BBA student specializing in Digital Marketing at Dev Bhoomi Uttarakhand University.",

    author: "Shashank Sharma",
    siteUrl: "https://www.theshashankk.github.io",
    applicationName: "Shashank",

    keywords: [
        "theshashankk",
        "theshashank",
        "Shashank sharma",
        "Shashank",
        "Shashank sharma bokaro",
        "shashank sharma dehradun",
        "bloodfallen",
        "shashank portfolio",
        "shashank github",
    ],

    openGraph: {
        type: "website",
        url: "https://www.theshashankk.github.io",
        title: "Shashank | Portofolio",
        site_name: "Shashank | Portofolio",
        description: "My name is shashank, This is my portofolio website.",
        width: 1200,
        height: 630,
        images: [
            {
                url: "/og-image-rev.png",
                alt: "Shashank Portofolio",
            },
        ],
        site_name: "Shashank | Portofolio",
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <ClientTopProgressBar />
                <Navbar />
                {children}
                <Chat/>
                <Analytics />
            </body>
        </html>
    );
}
