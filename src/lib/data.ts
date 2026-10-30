export const navLinks = [
  { label: 'الرئيسية', href: '#' },
  { label: 'الخدمات', href: '#services' },
  { label: 'الأعمال', href: '#work' },
  { label: 'المنتجات', href: '#products' },
  { label: 'عن OTHVM', href: '#about' },
  { label: 'تواصل', href: '#contact' },
];

export const valuePillars = [
  {
    title: 'سرعة أكبر',
    description: 'أنجز المهام والعمليات بكفاءة أعلى.',
    icon: 'speed',
  },
  {
    title: 'تكلفة أقل',
    description: 'قلّل الهدر والخطوات غير الضرورية.',
    icon: 'cost',
  },
  {
    title: 'قدرة أكبر',
    description: 'أنجز شغل أكتر من غير ما تعتمد على مجهودك اليدوي.',
    icon: 'power',
  },
  {
    title: 'فرص نمو أفضل',
    description: 'وجّه وقتك ومواردك للحاجات اللي ممكن تطوّر البيزنس.',
    icon: 'growth',
  },
];

export const services = [
  {
    title: 'أتمتة العمليات',
    description: 'تقليل العمل اليدوي وتسريع تنفيذ المهام اليومية في شغلك.',
    icon: 'automation',
  },
  {
    title: 'ربط الأنظمة والأدوات',
    description: 'خلّي بياناتك وعملياتك تشتغل مع بعض بدل التشتت بين أدوات منفصلة.',
    icon: 'integration',
  },
  {
    title: 'حلول ومساعدات ذكية',
    description: 'أنظمة تنفّذ مهام محددة وتساعدك في إدارة الشغل بشكل أذكى.',
    icon: 'smart',
  },
  {
    title: 'أدوات مخصصة',
    description: 'حلول تُبنى حسب طبيعة مشروعك — مش قالب واحد للجميع.',
    icon: 'custom',
  },
];

export const projects = [
  {
    title: 'مساعد المحتوى',
    status: 'نموذج أولي',
    problem: 'إنتاج محتوى باللغة العربية بيأخد وقت كتير.',
    solution: 'نموذج أولي لمساعد يساعد في توليد أفكار وصياغة محتوى عربي بسرعة.',
    tags: ['AI', 'Python', 'Prompt Engineering'],
  },
  {
    title: 'أتمتة تقرير يومي',
    status: 'تجربة شخصية',
    problem: 'إعداد تقارير يدوية يومياً يستهلك وقت من الفريق.',
    solution: 'تجربة لأتمتة سحب البيانات وتوليد تقرير منسّق تلقائياً.',
    tags: ['Automation', 'n8n', 'Google Sheets'],
  },
  {
    title: 'بوت خدمة عملاء',
    status: 'نموذج أولي',
    problem: 'الردود المتكررة على استفسارات العملاء تستنزف الجهد.',
    solution: 'نموذج أولي لبوت واتساب يرد على الأسئلة الشائعة تلقائياً.',
    tags: ['WhatsApp API', 'AI', 'Node.js'],
  },
];

export const products = [
  {
    title: 'AI للمبتدئين',
    subtitle: 'كتاب عربي عن الذكاء الاصطناعي',
    description: 'دليل عملي للمبتدئين بالعربي — تفهم AI، تستخدمه في حياتك اليومية، وتبدأ تشوف الفرص حواليك.',
    status: 'قريباً',
  },
  {
    title: 'AI والفلوس',
    subtitle: 'كيف تبني مصدر دخل بالذكاء الاصطناعي',
    description: 'دليل عملي لاستكشاف الفرص الاقتصادية في عصر AI — أفكار، نماذج، وخطوات تنفيذية.',
    status: 'قريباً',
  },
];

export const contactOptions = [
  {
    type: 'whatsapp' as const,
    title: 'تواصل على واتساب',
    detail: '',
    cta: 'ابدأ محادثة',
    link: 'https://wa.me/201007078085',
  },
  {
    type: 'email' as const,
    title: 'راسلنا على الإيميل',
    detail: 'othvm.me@gmail.com',
    cta: 'ابعت إيميل',
    link: 'mailto:othvm.me@gmail.com',
  },
  {
    type: 'instagram' as const,
    title: 'تابع OTHVM',
    detail: '@othvmai',
    cta: 'تابعنا',
    link: 'https://www.instagram.com/othvmai/',
  },
];
