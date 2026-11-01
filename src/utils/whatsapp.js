import { siteConfig } from '../data/siteConfig';

/**
 * Normalizes phone number into international format digits only
 * e.g. "+91 98765 43210" -> "919876543210"
 */
export const cleanPhoneNumber = (phone) => {
  if (!phone) return '';
  return phone.replace(/[^\d]/g, '');
};

/**
 * Creates a WhatsApp click-to-chat URL with properly encoded message
 */
export const createWhatsAppUrl = (phone, text) => {
  const cleanPhone = cleanPhoneNumber(phone || siteConfig.studio.whatsappNumber);
  const encodedText = encodeURIComponent(text.trim());
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
};

/**
 * Opens WhatsApp in a new tab safely
 */
export const openWhatsApp = (url) => {
  if (typeof window !== 'undefined') {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
};

/**
 * Formats enquiry from the Contact Form
 */
export const sendContactEnquiry = ({
  name = '',
  email = '',
  phone = '',
  category = '',
  packageChoice = '',
  date = '',
  location = '',
  budget = '',
  message = ''
}) => {
  const lines = [
    `✨ *New Shoot Enquiry — ${siteConfig.studio.name}* ✨\n`,
    `Hello! I would like to enquire about your photography & cinematography services.\n`,
    `👤 *Client Name:* ${name || 'Prospective Client'}`,
    email ? `📧 *Email:* ${email}` : '',
    phone ? `📞 *Phone:* ${phone}` : '',
    category ? `📸 *Category / Service:* ${category}` : '',
    packageChoice ? `📦 *Selected Package:* ${packageChoice}` : '',
    date ? `🗓️ *Preferred Event Date:* ${date}` : '',
    location ? `📍 *Location / Venue:* ${location}` : '',
    budget ? `💰 *Budget Range:* ${budget}` : '',
    message ? `\n📝 *Client Note / Vision:*\n"${message}"` : '',
    `\nPlease let me know your availability, detailed quotation, and next steps.`
  ].filter(Boolean);

  const formattedMessage = lines.join('\n');
  const url = createWhatsAppUrl(siteConfig.studio.whatsappNumber, formattedMessage);
  openWhatsApp(url);
  return { success: true, url, message: formattedMessage };
};

/**
 * Quick Category Enquiry
 */
export const sendCategoryEnquiry = (categoryTitle, samplePrice = '') => {
  const text = `Hello ${siteConfig.studio.name}! 👋\n\nI was exploring your portfolio and I am deeply interested in your *${categoryTitle}* services.\n${samplePrice ? `Reference Starting Budget: ${samplePrice}\n` : ''}\nCould you please share your availability, sample deliverables, and bespoke package details?`;
  const url = createWhatsAppUrl(siteConfig.studio.whatsappNumber, text);
  openWhatsApp(url);
};

/**
 * Quick Package Enquiry
 */
export const sendPackageEnquiry = (packageName, serviceName, price = '') => {
  const text = `Hello ${siteConfig.studio.name}! 📸\n\nI would love to book or discuss the *${packageName}* for *${serviceName}* (${price ? `Est: ${price}` : 'Custom Quote'}).\n\nPlease let me know your current availability and the booking procedure.`;
  const url = createWhatsAppUrl(siteConfig.studio.whatsappNumber, text);
  openWhatsApp(url);
};

/**
 * Hero / General Quick Booking
 */
export const sendGeneralBooking = (context = 'General Enquiry') => {
  const text = `Hello ${siteConfig.studio.name}! 🌟\n\nI visited your website and would love to discuss booking a photography/videography session (${context}).\n\nLooking forward to hearing from you!`;
  const url = createWhatsAppUrl(siteConfig.studio.whatsappNumber, text);
  openWhatsApp(url);
};
