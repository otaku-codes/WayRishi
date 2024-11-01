import appointment_img from "./appointment_img.png";
import header_img from "./header_img.png";
import group_profiles from "./group_profiles.png";
import profile_pic from "./profile_pic.png";
import contact_image from "./contact_image.png";
import about_image from "./about_image.png";
import logo from "./logo.svg";
import dropdown_icon from "./dropdown_icon.svg";
import menu_icon from "./menu_icon.svg";
import cross_icon from "./cross_icon.png";
import chats_icon from "./chats_icon.svg";
import verified_icon from "./verified_icon.svg";
import arrow_icon from "./arrow_icon.svg";
import info_icon from "./info_icon.svg";
import upload_icon from "./upload_icon.png";
import stripe_logo from "./stripe_logo.png";
import razorpay_logo from "./razorpay_logo.png";
import anish from "./anish.jpg";
import anish1 from "./anish-1.jpg";
import anish2 from "./anish-2.jpg";
import anish3 from "./anish-3.jpg";
import anish4 from "./anish-4.jpg";
import doc4 from "./doc4.png";
import doc5 from "./doc5.png";
import doc6 from "./doc6.png";
import doc7 from "./doc7.png";
import doc8 from "./doc8.png";
import doc9 from "./doc9.png";
import doc10 from "./doc10.png";
import doc11 from "./doc11.png";
import doc12 from "./doc12.png";
import doc13 from "./doc13.png";
import doc14 from "./doc14.png";
import doc15 from "./doc15.png";
import Dermatologist from "./Dermatologist.svg";
import Gastroenterologist from "./Gastroenterologist.svg";
import General_physician from "./General_physician.svg";
import Gynecologist from "./Gynecologist.svg";
import Neurologist from "./Neurologist.svg";
import Pediatricians from "./Pediatricians.svg";

export const assets = {
  appointment_img,
  header_img,
  group_profiles,
  logo,
  chats_icon,
  verified_icon,
  info_icon,
  profile_pic,
  arrow_icon,
  contact_image,
  about_image,
  menu_icon,
  cross_icon,
  dropdown_icon,
  upload_icon,
  stripe_logo,
  razorpay_logo,
};

export const specialityData = [
  {
    speciality: "General physician",
    image: General_physician,
  },
  {
    speciality: "Gynecologist",
    image: Gynecologist,
  },
  {
    speciality: "Dermatologist",
    image: Dermatologist,
  },
  {
    speciality: "Pediatricians",
    image: Pediatricians,
  },
  {
    speciality: "Neurologist",
    image: Neurologist,
  },
  {
    speciality: "Gastroenterologist",
    image: Gastroenterologist,
  },
];

export const doctors = [
  {
    _id: "doc1",
    name: "Dr. Richard James",
    image:
      "https://www.onacheaptrip.com/wp-content/uploads/onacheaptrip-at-Nainital-Uttarakhand.jpg",
    speciality: "Almora",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 50,
    address: {
      line1: "17th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc2",
    name: "Dr. Emily Larson",
    image: "http://www.traveldairyofvatsal.com/kumaon/himalays_at_chakauri.jpg",
    speciality: "Chaukori",
    degree: "MBBS",
    experience: "3 Years",
    about:
      "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 60,
    address: {
      line1: "27th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "anish",
    name: "Anish Sharma",
    image: anish,
    images: [anish, anish1, anish2, anish3, anish4],
    speciality: "Udhampur",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "<p>Embark on a mystical expedition through the captivating landscapes of Jammu and Kashmir. This guide unveils two hidden gems: Sudh Mahadev and Mantalai, promising unforgettable experiences.<h5>Sudh Mahadev: A Divine Sanctuary</h5><p>Located 42 kilometers from Patnitop, Sudh Mahadev Temple is steeped in legend. It features a stunning black marble statue of Shiva and attracts many devotees during full moon nights in Sawan.<h5>Mantalai: Nature’s Embrace</h5><p>Mantalai is a serene village surrounded by lush deodar forests at 1,450 meters. According to lore, this is where Lord Shiva married Goddess Parvati, offering scenic trails to Naina Devi.<h5>Udhampur: Gateway to Exploration</h5><p>Don’t miss Udhampur, the third-largest city in Jammu, surrounded by Eucalyptus forests. It serves as the district capital and hosts the Northern Command headquarters of the Indian Army.<h5>Plan Your Visit</h5><p>Ready for your spiritual adventure? We’ll help you navigate your journey with accommodation, travel tips, and guided tours for a memorable visit to Sudh Mahadev and Mantalai.",
    fees: 50,
    address: {
      line1: "17th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc2",
    name: "Dr. Emily Larson",
    image: "http://www.traveldairyofvatsal.com/kumaon/himalays_at_chakauri.jpg",
    speciality: "Chaukori",
    degree: "MBBS",
    experience: "3 Years",
    about:
      "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 60,
    address: {
      line1: "27th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
];
