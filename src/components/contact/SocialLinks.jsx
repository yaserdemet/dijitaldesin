import { Icon } from '@iconify/react'

const SocialLinks = () => {
  const socials = [
    { icon: 'mdi:facebook', label: 'Facebook', link: '#' },
    { icon: 'mdi:instagram', label: 'Instagram', link: 'https://www.instagram.com/dijitaldesin.co/' },
    { icon: 'mdi:linkedin', label: 'LinkedIn', link: '#' },
  ]

  return (
    <div>
      <h3 className="text-lg font-bold text-gray-900 mb-4">Sosyal Medya</h3>
      <div className="flex gap-4 mb-8">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.link}
            title={social.label}
            className="w-12 h-12 bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center text-gray-900 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-black"
          >
            <Icon icon={social.icon} className="w-6 h-6" />
          </a>
        ))}
      </div>

      <div className="pt-6 border-t-2 border-gray-200">
        <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">Hakkımızda</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Dijitaldesin, zamanın ruhuna uygun dijital çözümlerle markaların büyümesine katkı sağlayan, Ankara merkezli bir dijital pazarlama ajansıdır. Her projede strateji, yaratıcılık ve veri analizi birleşir.
        </p>
      </div>
    </div>
  )
}

export default SocialLinks
