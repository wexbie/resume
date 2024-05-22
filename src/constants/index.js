import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Hakkımda",
  },
  {
    id: "work",
    title: "Projelerim",
  },
  {
    id: "contact",
    title: "İletişim",
  },
];

const services = [
  {
    title: "Web Geliştirici",
    icon: web,
  },
  {
    title: "React Geliştici",
    icon: mobile,
  },
  {
    title: "Front-End Developer",
    icon: backend,
  },
  {
    title: "Proje Üretici",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React.js Geliştiricisi",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Mart 2020 - Nisan 2021",
    points: [
      "React.js ve diğer ilgili teknolojileri kullanarak web uygulamalarını geliştirme ve bakımını yapma.",
      "Tasarımcılar, ürün yöneticileri ve diğer geliştiriciler gibi çeşitli ekiplerle iş birliği yaparak yüksek kaliteli ürünler oluşturma.",
      "Duyarlı tasarımı uygulama ve çeşitli tarayıcılarda uyumluluğu sağlama.",
      "Kod incelemelerine katılma ve diğer geliştiricilere yapıcı geri bildirim sağlama.",
    ],
  },
  {
    title: "React Native Geliştiricisi",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Ocak 2021 - Şubat 2022",
    points: [
      "React.js ve diğer ilgili teknolojileri kullanarak web uygulamalarını geliştirme ve bakımını yapma.",
      "Tasarımcılar, ürün yöneticileri ve diğer geliştiriciler gibi çeşitli ekiplerle iş birliği yaparak yüksek kaliteli ürünler oluşturma.",
      "Duyarlı tasarımı uygulama ve çeşitli tarayıcılarda uyumluluğu sağlama.",
      "Kod incelemelerine katılma ve diğer geliştiricilere yapıcı geri bildirim sağlama.",
    ],
  },
  {
    title: "Web Geliştiricisi",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Ocak 2022 - Ocak 2023",
    points: [
      "React.js ve diğer ilgili teknolojileri kullanarak web uygulamalarını geliştirme ve bakımını yapma.",
      "Tasarımcılar, ürün yöneticileri ve diğer geliştiriciler gibi çeşitli ekiplerle iş birliği yaparak yüksek kaliteli ürünler oluşturma.",
      "Duyarlı tasarımı uygulama ve çeşitli tarayıcılarda uyumluluğu sağlama.",
      "Kod incelemelerine katılma ve diğer geliştiricilere yapıcı geri bildirim sağlama.",
    ],
  },
  {
    title: "Full Stack Geliştiricisi",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Ocak 2023 - Şu Anda",
    points: [
      "React.js ve diğer ilgili teknolojileri kullanarak web uygulamalarını geliştirme ve bakımını yapma.",
      "Tasarımcılar, ürün yöneticileri ve diğer geliştiriciler gibi çeşitli ekiplerle iş birliği yaparak yüksek kaliteli ürünler oluşturma.",
      "Duyarlı tasarımı uygulama ve çeşitli tarayıcılarda uyumluluğu sağlama.",
      "Kod incelemelerine katılma ve diğer geliştiricilere yapıcı geri bildirim sağlama.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Web sitemizi ürünümüz kadar güzel yapmanın imkansız olduğunu düşünmüştüm, ama Eyüp beni yanılttı.",
    name: "Aylin Demir",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Eyüp gibi müşterilerinin başarısına gerçekten önem veren bir web geliştiriciyle daha önce hiç karşılaşmadım.",
    name: "Zeynep Gündoğdu",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    testimonial:
      "Eyüp web sitemizi optimize ettikten sonra, trafiğimiz %50 arttı. Kendilerine yeterince teşekkür edemeyiz!",
    name: "Burak Özdemir",
    designation: "CTO",
    company: "Anonim",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Çeşitli sağlayıcılardan araç kiralama arama, rezervasyon yapma ve yönetme imkanı sunan web tabanlı bir platform. Kullanıcılara taşıma ihtiyaçları için uygun ve etkili bir çözüm sunar.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/wexbie",
  },
  {
    name: "Job IT",
    description:
      "Kullanıcıların iş ilanlarını arayabilmesini, pozisyonlar için tahmini maaş aralıklarını görüntülemesini ve mevcut konumlarına göre uygun işleri bulmasını sağlayan web uygulaması.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/wexbie",
  },
  {
    name: "Trip Guide",
    description:
      "Kullanıcılara uçuş, otel ve araç kiralama için rezervasyon yapma imkanı sunan ve popüler destinasyonlar için öneriler sunan kapsamlı bir seyahat rezervasyon platformu.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/wexbie",
  },
];

export { services, technologies, experiences, testimonials, projects };
