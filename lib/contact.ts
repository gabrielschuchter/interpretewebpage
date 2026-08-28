export const WHATSAPP_NUMBER = '5534984123241';
export const WHATSAPP_URL = 'https://wa.me/' + WHATSAPP_NUMBER;
export const CONTACT_MESSAGE = 'Olá! Vim pelo site do Interprete. Gostaria de entender qual formato faz mais sentido para mim.';

export function contactUrl(message = CONTACT_MESSAGE) {
  return WHATSAPP_URL + '?text=' + encodeURIComponent(message);
}
