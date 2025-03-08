import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'

const projects = [
  {
    name: 'Graph API',
    initials: 'GA',
    href: '#',
    members: 16,
    bgColor: 'bg-pink-600',
    isPinned: true,
  },
  {
    name: 'Component Design',
    initials: 'CD',
    href: '#',
    members: 12,
    bgColor: 'bg-purple-600',
    isPinned: true,
  },
  {
    name: 'Templates',
    initials: 'T',
    href: '#',
    members: 16,
    bgColor: 'bg-yellow-500',
    isPinned: false,
  },
  {
    name: 'React Components',
    initials: 'RC',
    href: '#',
    members: 8,
    bgColor: 'bg-green-500',
    isPinned: true,
  },
]

// Pinlenmiş projeleri görüntüleyen liste oluşturun.
// Verilen projects array'inde, yalnızca isPinned özelliği true olan projeleri görüntülemek için filter ve map yöntemlerini kullanın.
// Listeyi PinnedProjects bileşeni aracılığıyla oluşturun ve project bilgilerini dinamik olarak render edin.
// Çıktı örneği için public/preview.png dosyasını inceleyebilirsiniz.

// Not: EllipsisVerticalIcon bileşeni, Tailwind Heroicons kütüphanesinden alınmış ikon bileşenidir.
// Dikey üç nokta simgesi (vertical ellipsis) olarak görünür ve genellikle menü veya daha fazla işlem seçeneklerini göstermek için kullanılır.
// Daha fazla bilgi için: https://heroicons.com/

export default function PinnedProjects() {
  return (
    <div className='projects-wrapper'>
      <h2 className='projects-title'>Pinlenmiş Projeler</h2>
      <ul className='projects-list'>
        <li className='project-list-item'>
          <div className={` project-initials`}>AB</div>
          <div className='project-content-wrapper'>
            <div className='project-content'>
              <a href='#' className='project-link'>
                İsim
              </a>
              <p className='project-members'>0 Üye</p>
            </div>
            <div className='project-button-wrapper'>
              <button type='button' className='project-button'>
                <EllipsisVerticalIcon className='project-icon' />
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}
