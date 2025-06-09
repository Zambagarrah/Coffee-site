import certified from './assets/svgs/certified.svg';
import coffeeCup from './assets/svgs/coffee-cup.svg';
import coffeeMachine from './assets/svgs/coffee-machine.svg';
import freeDelivery from './assets/svgs/delivery.svg';

import menu1 from './assets/menu/01.jpg';
import menu2 from './assets/menu/02.jpg';
import menu3 from './assets/menu/capp03.jpg';
import menu4 from './assets/menu/ex04.jpg';
import menu5 from './assets/menu/mocha05.jpg';
import menu6 from './assets/menu/iced06.jpg';
import menu7 from './assets/menu/cappu07.jpg';
import menu8 from './assets/menu/cappu08.jpg';

import gallery1 from './assets/gallery/01.jpg';
import gallery2 from './assets/gallery/02.jpg';
import gallery3 from './assets/gallery/capp03.jpg';
import gallery4 from './assets/gallery/ex04.jpg';
import gallery5 from './assets/gallery/mocha05.jpg';
import gallery6 from './assets/gallery/iced06.jpg'; 

import offer1 from './assets/offer/offer-1.webp';
import offer2 from './assets/offer/offer-2.webp';

export const links = [
    {
        name: 'Home',
        path: '#home',
    },
    {
        name: 'About',
        path: '#about',
    },
    {
        name: 'Features',
        path: '#features',
    },
    {
        name: 'Menu',
        path: '#menu',
    },
    {
        name: 'Gallery',
        path: '#gallery',
    },
    {
        name: 'Chats',
        path: '#chats',
    },
    {
        name: 'Testimonials',
        path: '#testimonials',
    },
];

export const features = [
    {
        id: 1,
        img: freeDelivery,
        title: 'Free Shipping',
        description: 
            'It is a long established fact that a reader will be by the readable content of a page looking at its layout.' ,
    },
    {
        id: 2,
        img: certified,
        title: 'Organic Certified',
        description: 
            'It is a long established fact that a reader will be by the readable content of a page looking at its layout.' ,
    },
    {
        id: 3,
        img: coffeeMachine,
        title: 'High Quality',
        description: 
            'It is a long established fact that a reader will be by the readable content of a page looking at its layout.' ,
    },
    {
        id: 4,
        img: coffeeCup,
        title: 'Proper Roasting',
        description: 
            'It is a long established fact that a reader will be by the readable content of a page looking at its layout.' ,
    },
];

export const menu = [
    {
        id: 1,
        img: menu1,
        title: 'Americano Coffee',
        description: 'Milk with vanilla flavored',
        price: 50.25,
    },
    {
        id: 2,
        img: menu2,
        title: 'Capuccino Arabica',
        description: 'Milk with vanilla flavored',
        price: 70.25,
    },
    {
        id: 3,
        img: menu3,
        title: 'Milk Cream Coffee',
        description: 'Milk with vanilla flavored',
        price: 30.25,
    },
    {
        id: 4,
        img: menu4,
        title: 'Special Raw Coffee',
        description: 'Milk with vanilla flavored',
        price: 80.25,
    },
    {
        id: 5,
        img: menu5,
        title: 'Fresh Black Coffee',
        description: 'Milk with vanilla flavored',
        price: 90.25,
    },
    {
        id: 6,
        img: menu6,
        title: 'Cappuccino Arabica',
        description: 'Milk with vanilla flavored',
        price: 70.25,
    },
    {
        id: 7,
        img: menu7,
        title: 'Milk Cream Coffee',
        description: 'Milk with vanilla flavored',
        price: 120.25,
    },
    {
        id: 8,
        img: menu8,
        title: 'Cold Coffee',
        description: 'Milk with vanilla flavored',
        price: 40.25,
    },
];

export const gallery = [
    {
        id: 1,
        img: gallery1,
        title: 'Cappuccino Arabica',
    },
    {
        id: 2,
        img: gallery2,
        title: 'Cappuccino Arabica',
    },
    {
        id: 3,
        img: gallery3,
        title: 'Cappuccino Plain',
    },
    {
        id: 4,
        img: gallery4,
        title: 'Expresso',
    },
    {
        id: 5,
        img: gallery5,
        title: 'Mocha Latte',
    },
    {
        id: 6,
        img: gallery6,
        title: 'Iced Coffee',
    },
];

export const offer = [
    {
        id: 1,
        img: offer1,
        title: 'Cappuccino Arabica',
        discount: 'Get 40% Offer!!',
        description: 
            "It's a long established fact that a reader will be distracted by the readable content of a page when looking at its normal distribution layout.", 
    },
    {
        id: 2,
        img: offer2,
        title: 'Iced Coffee',
        discount: 'Get 30% Offer!!',
        description: 
            "It's a long established fact that a reader will be distracted by the readable content of a page when looking at its normal distribution layout.", 
    },
];