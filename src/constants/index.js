import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3,thumbnailShoe1, thumbnailShoe2, thumbnailShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7} from "../assets/images"


export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "OZMORPH SHOES",
        price: "$200.20",
    },
    {
        imgURL: shoe5,
        name: "TERREX SOULSTRIDE FLOW TRAIL RUNNING SHOES",
        price: "$210.20",
    },
    {
        imgURL: shoe6,
        name: "NMD_R1 V3 SHOES",
        price: "$220.20",
    },
    {
        imgURL: shoe7,
        name: "X_PLRBOOST SHOES",
        price: "$230.20",
    },
];


export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];


export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Running Shoes", link: "#" },
            { name: "Basketball Shoes", link: "#" },
            { name: "Soccer Cleats/Football Boots", link: "#" },
            { name: "Training Shoes", link: "#" },
            { name: "Originals Lifestyle Shoes", link: "#" },
            { name: "Outdoor and Hiking Shoes", link: "#" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "#" },
            { name: "FAQs", link: "#" },
            { name: "How it works", link: "#" },
            { name: "Privacy policy", link: "#" },
            { name: "Payment policy", link: "#" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@adidas.com", link: "mailto:customer@adidas.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];