// ⚙️ Configuración general del sitio
// Cambiá estos valores cuando quieras y el sitio entero se actualiza solo.

export const site = {
  name: 'Passive_l3arn',
  url: 'https://passive-l3arnn.vercel.app',
  tagline: 'Datos Curiosos Que No Sabías Que Necesitabas Saber',
  description:
    'Datos curiosos y fascinantes sobre ciencia, tecnología, naturaleza y el mundo. Aprende de forma pasiva con Passive_l3arn.',
}

// 🎨 Un color para cada categoría (se usa en las etiquetas)
export const categoryColors: Record<string, string> = {
  Ciencia: '#4a9fe0',       // azul
  Tecnología: '#8b7ff5',    // violeta
  Historia: '#e0a04a',      // ámbar
  Naturaleza: '#3fbf8f',    // verde
  Espacio: '#6c5ce7',       // índigo
  Curiosidades: '#f4849f',  // rosa
  Salud: '#e06a6a',         // rojo
}

export function catColor(cat?: string): string {
  return (cat && categoryColors[cat]) || '#8ecbf5'
}

// 🔗 Tus redes sociales — reemplazá el "#" por tu link real
export const socials = [
  { name: 'Instagram', url: 'https://www.instagram.com/passive_l3arn/', icon: 'instagram' },
  { name: 'TikTok', url: 'https://www.tiktok.com/@passive_l3arn4', icon: 'tiktok' },
  { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100088494974061', icon: 'facebook' },
]
