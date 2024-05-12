import { UserCompleteInfo, UserProfile } from "@/types";

export const filterList = ["Discover", "Frontend Developer", "Backend Developer", "Software Developer"]

export const userDataList: Array<{ profile: UserProfile, info?: UserCompleteInfo[] }> = [
    {
        profile: {
            fullname: "John Doe",
            location: "New jersey, USA",
            priceInUSD: "250,000",
            title: "Frontend developer",
            profilePic: "/assets/images/john-1.png"
        },
        info: [
            {
                infoType: "text",
                lastUpdated: "Tue, Dec 13, 2022",
                tag: "Other",
                title: "My_Resume",
                content: "I am updating my resume, as completing my projects."
            }, {
                infoType: "text",
                lastUpdated: "Tue, Dec 13, 2022",
                tag: "Other",
                title: "Portfolio",
            }
        ]
    },
    {
        profile: {
            fullname: "John Doe",
            location: "Lagos, Nigeria",
            priceInUSD: "1000-3000",
            title: "Frontend developer",
            profilePic: "/assets/images/john-2.png"
        },
        info: [
            {
                infoType: "text",
                lastUpdated: "Tue, Dec 13, 2022",
                tag: "Other",
                title: "My_Resume",
                content: "I am updating my resume, as completing my projects."
            },
            {
                infoType: "image",
                title: "designcode.io",
                imgSrc: "/assets/images/designcode.jpeg"
            },
            {
                infoType: "text",
                lastUpdated: "Tue, Dec 13, 2022",
                tag: "Other",
                title: "Portfolio",
            }
        ]
    },
];