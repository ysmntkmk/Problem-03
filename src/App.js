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
  const pinnedProjects = projects.filter(project => project.isPinned);

  return (
    <div className='projects-wrapper'>
      <h2 className='projects-title'>Pinlenmiş Projeler</h2>
      <ul className='projects-list'>
        {pinnedProjects.map((project, index) => (
          <li key={index} className='project-list-item'>
            <div className={`project-initials ${project.bgColor}`}>{project.initials}</div>
            <div className='project-content-wrapper'>
              <div className='project-content'>
                <a href={project.href} className='project-link'>
                  {project.name}
                </a>
                <p className='project-members'>{project.members} Üye</p>
              </div>
              <div className='project-button-wrapper'>
                <EllipsisVerticalIcon className='h-5 w-5 text-gray-500' />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
