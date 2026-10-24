export interface BusinessConfig {
  storeName: string;
  storeNameArabic: string;
  businessType: string;
  tagline: string;
  phone: string;
  whatsapp: string;
  tiktokUsername: string;
  tiktokUrl: string;
  instagramUsername: string;
  instagramUrl: string;
  googleMapsUrl: string;
  address: string;
  addressArabic: string;
  city: string;
  governorate: string;
  country: string;
  defaultWhatsAppMessage: string;
}

export const BUSINESS_CONFIG: BusinessConfig = {
  storeName: "Abo El Dahab",
  storeNameArabic: "أبو الدهب للزيوت",
  businessType: "Automotive Oils",
  tagline: "Quality Automotive Oils. Trusted Performance.",
  phone: "+201022556513",
  whatsapp: "+201022556513",
  tiktokUsername: "@abo.eldahabb",
  tiktokUrl: "https://www.tiktok.com/@abo.eldahabb",
  instagramUsername: "@abooeldahab",
  instagramUrl: "https://www.instagram.com/abooeldahab/",
  googleMapsUrl:
    "https://www.google.com/maps?q=PQPQ+6VH+ابو+الدهب+للزيوت,+Al+Inatag+St,+Ad+Daydamoun,+Faqous,+Al-Sharqia+Governorate+7324222&ftid=0x14f8250003a64221:0x51a3b46c28307a44&entry=gps&shh=CAE&lucs=,94297699,94231188,94280568,100821555,47071704,94218641,94282134,100835699,94286869,100820247,100822504,100838877,121816461&g_ep=CAISEjI2LjQyLjIuOTk3NTU3MzI0MBgAIIgnKnssOTQyOTc2OTksOTQyMzExODgsOTQyODA1NjgsMTAwODIxNTU1LDQ3MDcxNzA0LDk0MjE4NjQxLDk0MjgyMTM0LDEwMDgzNTY5OSw5NDI4Njg2OSwxMDA4MjAyNDcsMTAwODIyNTA0LDEwMDgzODg3NywxMjE4MTY0NjFCAkVH&skid=be9b58f9-254a-48b6-98dd-00da8f269a0e&g_st=ic",
  address: "Al Inatag St, Ad Daydamoun, Faqous, Al Sharqia Governorate, Egypt",
  addressArabic: "شارع الإنتاج، الديدامون، فاقوس، محافظة الشرقية، مصر",
  city: "Faqous",
  governorate: "Al Sharqia",
  country: "Egypt",
  defaultWhatsAppMessage:
    "Hello Abo El Dahab, I would like to inquire about your available automotive oils.",
};

// URL generators for safe, encoded links
export const getWhatsAppUrl = (message?: string): string => {
  const cleanPhone = BUSINESS_CONFIG.whatsapp.replace(/[^0-9]/g, "");
  const text = message || BUSINESS_CONFIG.defaultWhatsAppMessage;
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
};

export const getPhoneCallUrl = (): string => {
  return `tel:${BUSINESS_CONFIG.phone}`;
};

export const getEmbedMapUrl = (): string => {
  const query = encodeURIComponent("PQPQ+6VH ابو الدهب للزيوت, Al Inatag St, Ad Daydamoun, Faqous, Al-Sharqia Governorate 7324222");
  return `https://maps.google.com/maps?q=${query}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
};
