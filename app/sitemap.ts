import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap { const base='https://gabrielschuchter.com.br'; return ['','/home','/acompanhamento-nutricional','/interprete'].map(path=>({url:`${base}${path}`,lastModified:new Date()})); }
