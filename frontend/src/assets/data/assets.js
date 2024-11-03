import logo from "../images/logo.svg";
import dropdown_icon from "../images/dropdown_icon.svg";
import menu_icon from "../images/menu_icon.svg";
import cross_icon from "../images/cross_icon.png";
import chats_icon from "../images/chats_icon.svg";
import verified_icon from "../images/verified_icon.svg";
import arrow_icon from "../images/arrow_icon.svg";
import info_icon from "../images/info_icon.svg";
import upload_icon from "../images/upload_icon.png";
import stripe_logo from "../images/stripe_logo.png";
import razorpay_logo from "../images/razorpay_logo.png";

// Anish
import anish from "../images/anish.jpg";
import anish1 from "../images/anish-1.jpg";
import anish2 from "../images/anish-2.jpg";
import anish3 from "../images/anish-3.jpg";
import anish4 from "../images/anish-4.jpg";

// Rahul
import rahul from "../images/rahul.png";
import rahul1 from "../images/rahul-1.png";
import rahul2 from "../images/rahul-2.png";
import rahul3 from "../images/rahul-3.png";
import rahul4 from "../images/rahul-4.png";

// himanshu
import himanshu from "../images/himanshu.png";
import himanshu1 from "../images/himanshu-1.png";
import himanshu3 from "../images/himanshu-3.png";
import himanshu4 from "../images/himanshu-4.png";

// dheeraj
import dheeraj from "../images/dheeraj.png";
import dheeraj1 from "../images/dheeraj-1.png";
import dheeraj2 from "../images/dheeraj-2.png";
import dheeraj3 from "../images/dheeraj-3.png";
import dheeraj4 from "../images/dheeraj-4.png";

export const assets = {
  logo,
  chats_icon,
  verified_icon,
  info_icon,
  arrow_icon,
  menu_icon,
  cross_icon,
  dropdown_icon,
  upload_icon,
  stripe_logo,
  razorpay_logo,
};

export const doctors = [
  {
    _id: "anish",
    name: "Anish Sharma",
    image: anish,
    images: [anish, anish1, anish2, anish3, anish4],
    speciality: "Udhampur",
    address: "/tours/67248db458d0e6db0cf48aae",
    about:
      "<p>Embark on a mystical expedition through the captivating landscapes of Jammu and Kashmir. This guide unveils two hidden gems: Sudh Mahadev and Mantalai, promising unforgettable experiences.<h5>Sudh Mahadev: A Divine Sanctuary</h5><p>Located 42 kilometers from Patnitop, Sudh Mahadev Temple is steeped in legend. It features a stunning black marble statue of Shiva and attracts many devotees during full moon nights in Sawan.<h5>Mantalai: Nature’s Embrace</h5><p>Mantalai is a serene village surrounded by lush deodar forests at 1,450 meters. According to lore, this is where Lord Shiva married Goddess Parvati, offering scenic trails to Naina Devi.<h5>Udhampur: Gateway to Exploration</h5><p>Don’t miss Udhampur, the third-largest city in Jammu, surrounded by Eucalyptus forests. It serves as the district capital and hosts the Northern Command headquarters of the Indian Army.<h5>Plan Your Visit</h5><p>Ready for your spiritual adventure? We’ll help you navigate your journey with accommodation, travel tips, and guided tours for a memorable visit to Sudh Mahadev and Mantalai.",
  },
  {
    _id: "dheeraj",
    name: "Dheeraj Sharma",
    image: dheeraj,
    images: [dheeraj, dheeraj1, dheeraj2, dheeraj3, dheeraj4],
    speciality: "Hamirpur",
    address: "/tours/67277cc121f2711b73439b2e",
    about:
      "<p>Welcome to an Enchanting Journey! Discover the serene beauty and tranquility of Garib Das Mandir, Sunset Point Pathliar, and Barchetu Fort, hidden gems in the breathtaking landscapes of Himachal Pradesh. Each destination offers a unique escape for those seeking peace, adventure, and spirituality amidst the stunning Himalayan backdrop.</p><h5>Garib Das Mandir: A Sacred Retreat</h5><p>Garib Das Mandir invites visitors to experience a peaceful spiritual ambiance surrounded by lush greenery and the calm beauty of Himachal’s hills. Dedicated to Saint Garib Das, this tranquil temple offers a haven for meditation and reflection, perfect for those seeking inner peace and connection with nature.</p><h5>Sunset Point, Pathliar: Evening’s Golden Glow</h5><p>Sunset Point in Pathliar is a nature lover’s paradise, where evenings come alive with vibrant hues as the sun sets over the mountains. This scenic viewpoint offers a memorable experience for photographers and anyone captivated by the beauty of dusk. Witness the sky transform as the sun dips behind the hills, creating a magical moment.</p><h5>Barchetu Fort: A Journey Through Time</h5><p>Barchetu Fort stands as a historical marvel with ancient walls and panoramic views that evoke a sense of the past. Perched on a hilltop, this fort is ideal for adventure seekers and history enthusiasts. Explore its architecture, imagine the stories of bygone days, and enjoy sweeping views of Himachal’s landscapes.</p><h5>Plan Your Visit</h5><p>Ready to explore these enchanting sites in Himachal Pradesh? Let us guide you with personalized recommendations for accommodations, travel tips, and local insights. Whether you’re drawn to the peaceful Garib Das Mandir, the scenic Sunset Point, or the historic Barchetu Fort, Himachal promises an enriching getaway. Embrace the beauty and tranquility of these hidden gems for an unforgettable experience.</p>",
  },
  {
    _id: "himanshu",
    name: "Himanshu Papola",
    image:
      "https://media.licdn.com/dms/image/v2/C5603AQGLO3ItCGo_rQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1595780147580?e=1735776000&v=beta&t=f3ycLwXjlYD8DxtLWdhzdi4ACHLeOIMOsKINRncUbNE",
    speciality: "Kausani, Chaukori",
    images: [
      "https://media.licdn.com/dms/image/v2/C5603AQGLO3ItCGo_rQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1595780147580?e=1735776000&v=beta&t=f3ycLwXjlYD8DxtLWdhzdi4ACHLeOIMOsKINRncUbNE",
      himanshu,
      himanshu1,
      himanshu3,
      himanshu4,
    ],
    address: "/tours/6724f1e41a60e8cddb7f1b0d",

    about:
      "<p>Welcome to an Enchanting Journey! Embark on a mesmerizing expedition through the scenic hills of Uttarakhand. This guide unveils two hidden gems: Kausani and Chaukori, offering a blend of tranquility and natural beauty for an unforgettable escape.<h5>Kausani: The Switzerland of India</h5><p>Nestled in the Kumaon region, Kausani is renowned for its panoramic views of the Himalayan peaks, including Trishul, Nanda Devi, and Panchachuli. This serene town is a haven for nature lovers and provides an enchanting backdrop for sunrise and sunset views. Kausani also holds historical charm, as Mahatma Gandhi spent time here, inspiring the Anasakti Ashram.<h5>Chaukori: A Himalayan Oasis</h5><p>Chaukori, another Kumaon gem, lies surrounded by dense forests and tea gardens at an altitude of 2,010 meters. Known for its peaceful environment, this village is an ideal spot for stargazing and birdwatching. The sight of the sun casting a glow over the snow-capped peaks in the morning is simply magical, making Chaukori an idyllic retreat.<h5>Bageshwar: Gateway to Spiritual Bliss</h5><p>Don’t miss Bageshwar, a small town known for the confluence of rivers and historical temples dedicated to Lord Shiva. It serves as a base for treks to Pindari, Kafni, and Sunderdhunga glaciers, adding an adventurous edge to your visit.<h5>Plan Your Visit</h5><p>Ready for a rejuvenating retreat? We’ll help you plan your journey with recommendations for stays, travel tips, and guided tours to experience the best of Kausani and Chaukori.",
    fees: 50,
  },
  {
    _id: "rahul",
    name: "Rahul Sah",
    image: "http://www.traveldairyofvatsal.com/kumaon/himalays_at_chakauri.jpg",
    images: [rahul1, rahul2, rahul, rahul3, rahul4],
    speciality: "Chaukori",
    degree: "MBBS",
    experience: "3 Years",
    address: "/tours/6724e9a21a60e8cddb7f1a8c",
    about:
      "<p>Welcome to an Enchanting Journey! Discover the serene beauty and tranquility of Chaukori, a hidden gem in the Kumaon region of Uttarakhand. This charming village is an ideal destination for those seeking a peaceful escape amidst the majestic Himalayas.<h5>Mountains in Chaukori: Nature’s Splendor</h5><p>Chaukori is surrounded by dense forests and sprawling tea gardens at an altitude of 2,010 meters. It offers breathtaking views of the Himalayan peaks, including the stunning Nanda Devi and Panchachuli ranges. This peaceful village is perfect for stargazing and birdwatching, making it a haven for nature enthusiasts.<p>The sight of the sun casting a golden glow over the snow-capped mountains at sunrise is magical, inviting visitors to embrace the serene environment and immerse themselves in nature.<h5>Nearby Attractions: Exploring the Charm</h5><p>While in Chaukori, explore the surrounding areas for stunning views that create a dramatic backdrop, making it a photographer’s paradise. Adventurous souls can embark on trekking routes through lush forests and picturesque landscapes.<p>Visit the local tea gardens to learn about tea cultivation and enjoy fresh brews with panoramic views. The nearby temple of Purnagiri, situated on a hilltop, offers a spiritual retreat with serene ambiance and stunning vistas.<h5>Plan Your Visit</h5><p>Ready for a rejuvenating retreat in Chaukori? We’ll help you plan your journey with tailored recommendations for accommodations, travel tips, and guided tours. Experience the best this tranquil destination has to offer, whether you seek adventure, relaxation, or a blend of both. Chaukori promises an unforgettable getaway.",
  },
];
