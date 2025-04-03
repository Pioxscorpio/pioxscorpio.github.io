const experience = [
  {
    company: 'Creativo MZ 2003, c.a.',
    from: 'Agosto 2024',
    to: 'Presente',
    rol: 'Desarrollador Web Fullstack',
    skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Laravel'],
    description: 'Desarrollo una e-commerce en PHP Laravel.'
  },
  {
    company: 'Gráficas Lithoxpress, c.a.',
    from: 'Enero 2017',
    to: 'Julio 2024',
    rol: 'Desarrollador Web Fullstack',
    skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'GIT'],
    description: 'Colaboré en el desarrollo de un sistema interno de gestión de pedidos y cáculo de precios, en el cual se uso PHP como backend y en el frontend Jquery. Además se uso MySQL como base de datos.'
  }
]

export default function Experience() {
  return (
    <div id="experience" className="mt-24 text-slate-300 text-balance">
      <h3 className="text-4xl font-bold mb-6">Experiencia</h3>
      <div className="text-slate-400 ml-2">
        {experience.map((item) => (
          <div key={item.id} className="mt-6">
            <h4 className="font-bold text-xl">{item.company}</h4>
            <p>
              {item.rol}<br />
              {item.from} - {item.to}
            </p>
            <p className="mt-2">{item.description}</p>
            {item.skills.map((skill) => (
              <span className="text-slate-300 px-2 py-1 mr-2 mt-4 text-xs inline-block rounded-xl bg-slate-700">{skill}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}