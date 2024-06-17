document.addEventListener('DOMContentLoaded', function() {
    const deals = [
        {
            title: "Deal 1",
            description: "Amazing discount on TV 55' 4 Series 4K UHD smart TV  with Fire TV Alexa Voice Remote, stream live TV without cable  Bring movies and shows to life with support for vivid 4K Ultra HD, HDR 10, HLG, and Dolby Digital Plus.. ",
            price: "$49.99",
            originalPrice: "$79.99",
            imageUrl: "images/t1.jpg"
        },
        {
            title: "Deal 2",
            description: "Huge savings on eufy Robot Vacuum G30, 2000 Pa Suction, Robot Vacuum for Carpets and Hard Floors.",
            price: "$29.99",
            originalPrice: "$59.99",
            imageUrl: "images/t2.jpg"
        },
        {
            title: "Deal 3",
            description: "Don't miss out on Ring Video Doorbell, Satin Nickel bundle with Ring Stick Up Cam Battery, White.",
            price: "$19.99",
            originalPrice: "$39.99",
            imageUrl: "images/t3.jpg"
        },
        {
            title: "Deal 1",
            description: "Amazing discount on Apple AirPods (2nd Generation) Wireless Earbuds with Lightning Charging Case with AppleCare+ (2 Years).",
            price: "$49.99",
            originalPrice: "$79.99",
            imageUrl: "images/t4.jpg"
        },
        {
            title: "Deal 2",
            description: "Huge savings on Apple AirPods (2nd Generation) Wireless Earbuds with Lightning Charging Case with AppleCare+ (2 Years).",
            price: "$29.99",
            originalPrice: "$59.99",
            imageUrl: "images/t5.jpg"
        },
        {
            title: "Deal 3",
            description: "Don't miss out on  DJI FPV Explorer Combo (Goggles Integra), FPV Drone with Camera for Immersive Flight Experience, 4K/60fps, 10km HD Low-Latency Video Transmission, Emergency Brake and Hover, FAA Remote ID Compliant.",
            price: "$19.99",
            originalPrice: "$39.99",
            imageUrl: "images/t6.jpg"
        },

        {
            title: "Deal 1",
            description: "Amazing discount on CHEFMAN Indoor Pizza Oven - Makes 12 Inch Pizzas in Minutes, Heats up to 800°F - Countertop Electric Pizza Maker with 5 Touchscreen Presets, Pizza Stone and Peel Included - Stainless Black.",
            price: "$49.99",
            originalPrice: "$79.99",
            imageUrl: "images/t7.jpg"
        },
        {
            title: "Deal 2",
            description: "Huge savings on Hamilton Beach Professional Digital LCD Temperature Control Electric Tea Kettle, Water Boiler & Heater, 1.7 Liter, Fast Boiling 1500 Watts, Cordless, Auto-Shutoff & Boil-Dry Protection, Silver (41028).",
            price: "$29.99",
            originalPrice: "$59.99",
            imageUrl: "images/t8.jpg"
        },
        {
            title: "Deal 3",
            description: "Don't miss out on Fitbit Sense 2 Advanced Health and Fitness Smartwatch with Tools to Manage Stress and Sleep, ECG App, SpO2, 24/7 Heart Rate and GPS, Lunar White/Platinum, One Size (S & L Bands Included).",
            price: "$19.99",
            originalPrice: "$39.99",
            imageUrl: "images/t9.jpg"
        },
        {
            title: "Deal 1",
            description: "Amazing discount on Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128 GB   Available at a lower price from other sellers hat may not offer free Prime shipping   .",
            price: "$49.99",
            originalPrice: "$79.99",
            imageUrl: "images/t10.jpg"
        },
        {
            title: "Deal 2",
            description: "Huge savings on product  BISSELL® Little Green® Cordless Multi-Purpose Portable Deep Carpet and Upholstery Cleaner, Car and Auto Detailer with 25V Lithium-Ion Battery, 3682 Available at a lower price from other sellers that may not offer free Prime shipping..",
            price: "$29.99",
            originalPrice: "$59.99",
            imageUrl: "images/t11.jpg"
        },
        {
            title: "Deal 3",
            description: "Don't miss out on Govee Outdoor Neon Rope Lights, 32.8ft RGBIC IP67 Waterproof Patio Decorations with 64 Scene Modes, Music Sync, Flexible LED Outdoor Lights,  .",
            price: "$19.99",
            originalPrice: "$39.99",
            imageUrl: "images/t12.jpg"
        },
        // Add more deals as needed
    ];

    const dealsContainer = document.querySelector('.deals-container');

    deals.forEach(deal => {
        const dealItem = document.createElement('div');
        dealItem.classList.add('deal-item');
        
        dealItem.innerHTML = `
            <img src="${deal.imageUrl}" alt="${deal.title}">
            <h2>${deal.title}</h2>
            <p>${deal.description}</p>
            <div class="price">${deal.price} <span class="original-price">${deal.originalPrice}</span></div>
            <button>Buy Now</button>
        `;
        
        dealsContainer.appendChild(dealItem);
    });
});
