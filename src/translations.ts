export interface TranslationSet {
  nav: {
    home: string;
    about: string;
    services: string;
    portfolio: string;
    faq: string;
    contact: string;
    requestQuote: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaQuote: string;
    ctaPortfolio: string;
  };
  about: {
    badge: string;
    title: string;
    desc1: string;
    desc2: string;
    projectsCompleted: string;
    happyClients: string;
    productCategories: string;
    baseCity: string;
    serviceArea: string;
    statsLabelProjects: string;
    statsLabelClients: string;
    statsLabelCategories: string;
    statsLabelCity: string;
    statsLabelArea: string;
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      wallPanels: { title: string; desc: string };
      pvcPanels: { title: string; desc: string };
      wpcCladding: { title: string; desc: string };
      tvWalls: { title: string; desc: string };
      roomSeparators: { title: string; desc: string };
      ledIntegration: { title: string; desc: string };
      wall3d: { title: string; desc: string };
      artificialGardens: { title: string; desc: string };
      customMoldings: { title: string; desc: string };
      consulting: { title: string; desc: string };
    };
  };
  process: {
    badge: string;
    title: string;
    subtitle: string;
    steps: {
      step1: { title: string; desc: string };
      step2: { title: string; desc: string };
      step3: { title: string; desc: string };
      step4: { title: string; desc: string };
      step5: { title: string; desc: string };
    };
  };
  portfolio: {
    badge: string;
    title: string;
    subtitle: string;
    categories: {
      all: string;
      interior: string;
      exterior: string;
    };
    viewProject: string;
    categoryLabel: string;
    referenceLabel: string;
    dimensionsLabel: string;
    colorsLabel: string;
    materialLabel: string;
    descLabel: string;
    charLabel: string;
    appsLabel: string;
    instLabel: string;
    priceLabel: string;
    variantsAvailable: string;
    searchPlaceholder: string;
    noResults: string;
  };
  whyUs: {
    badge: string;
    title: string;
    subtitle: string;
    points: {
      installation: { title: string; desc: string };
      materials: { title: string; desc: string };
      designs: { title: string; desc: string };
      custom: { title: string; desc: string };
      delivery: { title: string; desc: string };
      team: { title: string; desc: string };
      expertise: { title: string; desc: string };
      pricing: { title: string; desc: string };
      consultation: { title: string; desc: string };
    };
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    q1: string;
    a1: string;
    q2: string;
    a2: string;
    q3: string;
    a3: string;
    q4: string;
    a4: string;
    q5: string;
    a5: string;
    q6: string;
    a6: string;
    q7: string;
    a7: string;
    q8: string;
    a8: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    formName: string;
    formEmail: string;
    formPhone: string;
    formService: string;
    formMessage: string;
    formSubmit: string;
    formSending: string;
    formSuccess: string;
    addressLabel: string;
    addressVal: string;
    phoneLabel: string;
    emailLabel: string;
    hoursLabel: string;
    hoursVal: string;
    whatsappLabel: string;
    instagramLabel: string;
    moroccoCoverage: string;
  };
  quoteModal: {
    title: string;
    subtitle: string;
    selectService: string;
    preferredTime: string;
    successTitle: string;
    successDesc: string;
    close: string;
    pastRequests: string;
    noRequests: string;
  };
}

export const translations: Record<"fr" | "darija", TranslationSet> = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À Propos",
      services: "Services",
      portfolio: "Catalogue Produits",
      faq: "FAQ",
      contact: "Contact",
      requestQuote: "Demander un Devis",
    },
    hero: {
      title: "Transformez votre intérieur en un chef-d'œuvre moderne",
      subtitle: "Habillages muraux premium, panneaux PVC & WPC, portes sur mesure, murs TV, cheminées décoratives et finitions intérieures haut de gamme à Casablanca et partout au Maroc.",
      ctaQuote: "Devis Gratuit",
      ctaPortfolio: "Voir le Portfolio",
    },
    about: {
      badge: "Qui Sommes-Nous",
      title: "L'expert de l'habillage mural et des matériaux décoratifs au Maroc",
      desc1: "Deconil Maroc est un grossiste basé à Casablanca, spécialisé dans la fourniture de solutions d'habillage mural et de matériaux décoratifs de haute qualité pour les espaces résidentiels et commerciaux. Nous proposons une vaste sélection de produits importés répondant aux standards internationaux.",
      desc2: "Nous nous adressons principalement aux professionnels, distributeurs et entreprises tout en acceptant les commandes de particuliers selon les quantités souhaitées. Notre mission est de vous fournir les meilleurs matériaux pour transformer vos espaces avec élégance et durabilité.",
      projectsCompleted: "500+",
      happyClients: "1000+",
      productCategories: "15+",
      baseCity: "Casablanca",
      serviceArea: "Livraison Maroc",
      statsLabelProjects: "Produits Référencés",
      statsLabelClients: "Clients Satisfaits",
      statsLabelCategories: "Gammes de Produits",
      statsLabelCity: "Siège Social",
      statsLabelArea: "Zone de Livraison",
    },
    services: {
      badge: "Nos Produits",
      title: "Solutions de décoration intérieure et extérieure",
      subtitle: "Grossiste de matériaux décoratifs innovants pour architectes, professionnels et particuliers.",
      items: {
        wallPanels: {
          title: "Lambris Polymère",
          desc: "Large gamme de lambris intérieurs résistants à l'eau et aux chocs pour une décoration moderne.",
        },
        pvcPanels: {
          title: "Panneaux PVC Marbre",
          desc: "L'élégance du marbre avec la légèreté et la facilité d'entretien du PVC pour vos murs intérieurs.",
        },
        wpcCladding: {
          title: "Bardage Extérieur WPC",
          desc: "Matériaux robustes et esthétiques en bois composite pour vos façades et espaces extérieurs.",
        },
        tvWalls: {
          title: "Solutions Murs TV",
          desc: "Kits de matériaux complets (marbre PVC, tasseaux) pour créer des murs TV spectaculaires.",
        },
        roomSeparators: {
          title: "Séparateurs de Pièces",
          desc: "Profilés et tasseaux décoratifs pour délimiter vos espaces avec style et élégance.",
        },
        ledIntegration: {
          title: "Intégration LED",
          desc: "Profilés aluminium spécifiquement conçus pour l'éclairage indirect et d'ambiance.",
        },
        wall3d: {
          title: "Décors Muraux 3D",
          desc: "Panneaux texturés en PVC ou MDF pour apporter du relief et du caractère à vos murs.",
        },
        artificialGardens: {
          title: "Jardins Verticaux",
          desc: "Verdure artificielle sans entretien pour vos murs intérieurs et extérieurs, résistante aux UV.",
        },
        customMoldings: {
          title: "Moulures et Profilés",
          desc: "Large choix de finitions, plinthes et modules d'angle pour sublimer vos projets.",
        },
        consulting: {
          title: "Conseil Matériaux",
          desc: "Expertise technique pour vous aider à choisir les meilleurs produits selon vos besoins spécifiques.",
        },
      },
    },
    process: {
      badge: "Processus de Commande",
      title: "Comment commander chez Deconil Maroc",
      subtitle: "Un parcours simple et efficace pour obtenir vos matériaux de décoration partout au Maroc.",
      steps: {
        step1: {
          title: "1. Consultation",
          desc: "Explorez notre catalogue et contactez nos conseillers pour définir vos besoins en matériaux.",
        },
        step2: {
          title: "2. Choix des Matériaux",
          desc: "Sélectionnez les références, les couleurs et les quantités nécessaires pour votre projet.",
        },
        step3: {
          title: "3. Devis Détaillé",
          desc: "Nous vous envoyons un devis complet incluant les produits et les éventuels frais de livraison.",
        },
        step4: {
          title: "4. Paiement & Confirmation",
          desc: "Une fois le devis validé et le paiement effectué, votre commande est préparée avec soin.",
        },
        step5: {
          title: "5. Livraison Rapide",
          desc: "Nous organisons l'expédition de vos marchandises vers votre adresse partout au Maroc dans les meilleurs délais.",
        },
      },
    },
    portfolio: {
      badge: "Catalogue Produits",
      title: "Habillage Intérieur & Extérieur",
      subtitle: "Découvrez notre gamme complète d'habillages muraux premium pour sublimer vos espaces résidentiels et commerciaux.",
      categories: {
        all: "Tous",
        interior: "Habillage Intérieur",
        exterior: "Habillage Extérieur",
      },
      viewProject: "Voir le produit",
      categoryLabel: "Catégorie",
      referenceLabel: "Référence",
      dimensionsLabel: "Dimensions",
      colorsLabel: "Couleurs disponibles",
      materialLabel: "Matériau",
      descLabel: "Description",
      charLabel: "Caractéristiques",
      appsLabel: "Applications",
      instLabel: "Instructions d'installation",
      priceLabel: "Prix",
      variantsAvailable: "Designs Disponibles",
      searchPlaceholder: "Rechercher un produit (référence, nom, couleur...)",
      noResults: "Aucun produit ne correspond à votre recherche.",
    },
    whyUs: {
      badge: "Pourquoi Nous Choisir",
      title: "La référence des matériaux décoratifs au Maroc",
      subtitle: "Deconil Maroc se distingue par la qualité de ses produits et son expertise dans les solutions d'habillage mural.",
      points: {
        installation: {
          title: "Vente en Gros & Détail",
          desc: "Nous fournissons des matériaux en gros pour les professionnels et acceptons les commandes au détail selon la quantité.",
        },
        materials: {
          title: "Matériaux de Qualité",
          desc: "Sélection rigoureuse de PVC, WPC et matériaux importés, certifiés pour leur durabilité et leur esthétique.",
        },
        designs: {
          title: "Variété de Designs",
          desc: "Un large choix de textures et de couleurs pour répondre à toutes les tendances de décoration moderne.",
        },
        custom: {
          title: "Stock Disponible",
          desc: "Nous maintenons un stock important pour assurer une disponibilité rapide de nos références phares.",
        },
        delivery: {
          title: "Livraison Partout au Maroc",
          desc: "Nous organisons le transport de vos commandes vers toutes les villes du Maroc en toute sécurité.",
        },
        team: {
          title: "Conseils d'Experts",
          desc: "Notre équipe vous accompagne dans le choix des matériaux les plus adaptés à vos besoins techniques.",
        },
        expertise: {
          title: "Usage Intérieur & Extérieur",
          desc: "Des solutions spécifiques pour chaque environnement, garantissant une résistance optimale.",
        },
        pricing: {
          title: "Prix Compétitifs",
          desc: "En tant que grossiste, nous offrons les meilleurs tarifs du marché sur nos gammes de produits.",
        },
        consultation: {
          title: "Accompagnement Pro",
          desc: "Un service dédié pour les architectes, promoteurs et revendeurs à travers le royaume.",
        },
      },
    },
    faq: {
      badge: "Questions Fréquentes",
      title: "Tout ce que vous devez savoir",
      subtitle: "Des réponses claires à vos questions pour aborder vos travaux d'aménagement en toute sérénité.",
      q1: "Vendez-vous uniquement aux professionnels ?",
      a1: "Nous vendons principalement en gros aux professionnels, distributeurs et entreprises. Les particuliers peuvent également commander selon les quantités demandées.",
      q2: "Proposez-vous un service d'installation ?",
      a2: "Non. Nous fournissons uniquement les produits et ne proposons pas de service d'installation.",
      q3: "Quels types de produits proposez-vous ?",
      a3: "Nous proposons une large gamme de solutions pour l'habillage intérieur et extérieur, notamment des panneaux décoratifs, revêtements muraux, plafonds, lames, et autres matériaux de finition.",
      q4: "Puis-je acheter une petite quantité ?",
      a4: "Oui, selon le produit et les quantités disponibles. Contactez-nous pour connaître les conditions.",
      q5: "Comment obtenir un devis ?",
      a5: "Vous pouvez nous contacter par téléphone, WhatsApp ou via le formulaire de contact en indiquant les produits et les quantités souhaitées.",
      q6: "Livrez-vous dans tout le Maroc ?",
      a6: "Oui, nous pouvons organiser la livraison dans différentes villes du Maroc selon la commande.",
      q7: "Comment savoir si un produit est disponible ?",
      a7: "Contactez notre équipe pour connaître la disponibilité des stocks et les délais de livraison.",
      q8: "Quels moyens de paiement acceptez-vous ?",
      a8: "Les modalités de paiement sont communiquées lors de la confirmation de votre commande.",
    },
    contact: {
      badge: "Contactez-Nous",
      title: "Obtenez vos matériaux de décoration",
      subtitle: "Notre équipe est à votre disposition pour toute demande de prix, de disponibilité ou de conseil technique.",
      formName: "Nom Complet",
      formEmail: "Adresse Email",
      formPhone: "Numéro de Téléphone (WhatsApp)",
      formService: "Produit Intéressé",
      formMessage: "Détails de votre demande (quantités, références...)",
      formSubmit: "Envoyer ma Demande",
      formSending: "Envoi en cours...",
      formSuccess: "Merci ! Votre demande a été envoyée. Nous vous recontacterons rapidement par WhatsApp ou téléphone.",
      addressLabel: "Notre Showroom / Dépôt",
      addressVal: "Quartier Oulfa, Hay Hassani, Casablanca 20230, Maroc",
      phoneLabel: "Téléphone",
      emailLabel: "Email Professionnel",
      hoursLabel: "Heures d'ouverture",
      hoursVal: "Lundi - Samedi: 09:00 - 19:00 (Fermé le Dimanche)",
      whatsappLabel: "WhatsApp Direct",
      instagramLabel: "Suivez-nous sur Instagram",
      moroccoCoverage: "Livraison disponible dans toutes les villes du Maroc.",
    },
    quoteModal: {
      title: "Demande de Prix / Devis",
      subtitle: "Remplissez ce formulaire pour recevoir une estimation gratuite selon les produits et quantités souhaités.",
      selectService: "Sélectionnez le type de produit",
      preferredTime: "Quantité approximative souhaitée",
      successTitle: "Demande envoyée !",
      successDesc: "Nous avons bien reçu votre demande. Un conseiller Deconil Maroc vous contactera sur WhatsApp pour vous fournir les tarifs.",
      close: "Fermer",
      pastRequests: "Vos demandes récentes",
      noRequests: "Aucune demande envoyée pour le moment.",
    },
  },
  darija: {
    nav: {
      home: "الرئيسية",
      about: "شكون حنا",
      services: "المنتوجات",
      portfolio: "الكتالوج",
      faq: "تساؤلات",
      contact: "اتصل بنا",
      requestQuote: "طلب الثمن",
    },
    hero: {
      title: "رجع الصالون والدار ديالك تحفة فنية عصرية",
      subtitle: "ديكورات الحائط الراقية، ألواح PVC و WPC، بيبان عصرية، حيوط التلفزة (TV walls)، وفينيسيون طوب في الدار البيضاء وجميع مدن المغرب.",
      ctaQuote: "طلب ثمن فابور",
      ctaPortfolio: "شوف الكتالوج",
    },
    about: {
      badge: "شكون حنا",
      title: "خبير ديكور الحائط ومواد التزيين في المغرب",
      desc1: "Deconil Maroc شركة بيع بالجملة في الدار البيضاء، متخصصة في توفير حلول تغليف الحائط ومواد الديكور عالية الجودة للمساحات السكنية والتجارية. كنقدمو تشكيلة واسعة من المنتجات المستوردة اللي كتحترم المعايير الدولية.",
      desc2: "كنتعاملو أساساً مع المحترفين، الموزعين والشركات، وكنقبلو طلبات الأفراد على حساب الكمية المطلوبة. المهمة ديالنا هي نوفرو ليكم أحسن المواد باش تجملو المساحات ديالكم بأناقة وجودة دايزة الكلام.",
      projectsCompleted: "+500",
      happyClients: "+1000",
      productCategories: "+15",
      baseCity: "الدار البيضاء",
      serviceArea: "توصيل للمغرب",
      statsLabelProjects: "منتجات متوفرة",
      statsLabelClients: "كليان راضيين",
      statsLabelCategories: "أنواع الديكورات",
      statsLabelCity: "المقر الرئيسي",
      statsLabelArea: "منطقة التوصيل",
    },
    services: {
      badge: "المنتوجات ديالنا",
      title: "حلول الديكور الداخلي والخارجي",
      subtitle: "بائع جملة متخصص في مواد الديكور العصري للمهندسين، المحترفين والأفراد.",
      items: {
        wallPanels: {
          title: "لومبري بوليمر",
          desc: "تشكيلة واسعة من اللومبري الداخلي مقاوم للماء والصدمات لديكور عصري.",
        },
        pvcPanels: {
          title: "بانو PVC رخامي",
          desc: "أناقة الرخام مع خفة وسهولة تنظيف الـ PVC للحيوط الداخلية ديالك.",
        },
        wpcCladding: {
          title: "تغليف خارجي WPC",
          desc: "مواد صحيحة وجمالية من الخشب البلاستيكي للواجهات والمساحات الخارجية.",
        },
        tvWalls: {
          title: "حلول حائط التلفزة",
          desc: "مجموعات مواد كاملة (رخام PVC، لومبري) باش تصاوب حيط تلفزة واعر.",
        },
        roomSeparators: {
          title: "فواصل الغرف",
          desc: "بروفيلات وعناصر ديكورية لتقسيم المساحات ديالكم بأناقة وجمالية.",
        },
        ledIntegration: {
          title: "إضاءة LED مدمجة",
          desc: "بروفيلات ألومنيوم مصممة خصيصاً للإضاءة غير المباشرة وأجواء راقية.",
        },
        wall3d: {
          title: "ديكورات حائط 3D",
          desc: "بانويات منقوشة PVC أو MDF باش تعطي شكل وحياة للحيوط ديالك.",
        },
        artificialGardens: {
          title: "حدائق عمودية",
          desc: "نباتات اصطناعية بدون صيانة للحيوط الداخلية والخارجية، مقاومة للشمس.",
        },
        customMoldings: {
          title: "مؤطرات وبروفيلات",
          desc: "اختيار واسع من الفينيسيون، بلانت (plinthes) وزوايا باش تكمل المشروع ديالك.",
        },
        consulting: {
          title: "استشارة في المواد",
          desc: "خبرة تقنية باش نعاونوك تختار أحسن المنتجات على حساب الاحتياجات ديالك.",
        },
      },
    },
    process: {
      badge: "طريقة الطلب",
      title: "كيفاش تطلب من Deconil Maroc",
      subtitle: "خطوات بسيطة وواضحة باش توصل بالسلعة ديالك فين ما كنتي في المغرب.",
      steps: {
        step1: {
          title: "1. استشارة",
          desc: "شوف الكتالوج ديالنا وتواصل مع المستشارين باش نحددو شنو محتاج من مواد.",
        },
        step2: {
          title: "2. اختيار المواد",
          desc: "اختار الموديلات، الألوان والكميات اللي محتاج للمشروع ديالك.",
        },
        step3: {
          title: "3. تقدير الثمن (Devis)",
          desc: "كنصيفطو ليك Devis مفصل فيه السلعة ومصاريف التوصيل إذا كانت كاينا.",
        },
        step4: {
          title: "4. الأداء والتأكيد",
          desc: "من بعد ما توفق على الـ Devis وتخلص، كنوجدو الطلبية ديالك بكل عناية.",
        },
        step5: {
          title: "5. توصيل سريع",
          desc: "كنرتبو شحن السلعة ديالك للعنوان اللي بغيتي في جميع مدن المغرب في أقرب وقت.",
        },
      },
    },
    portfolio: {
      badge: "كتالوج المنتجات",
      title: "تغليف داخلي وخارجي",
      subtitle: "اكتشف مجموعتنا الكاملة من ديكورات الحائط الراقية لتزيين منزلك أو محلك التجاري.",
      categories: {
        all: "الكل",
        interior: "ديكور داخلي",
        exterior: "ديكور خارجي",
      },
      viewProject: "عرض المنتج",
      categoryLabel: "الفئة",
      referenceLabel: "المرجع",
      dimensionsLabel: "القياسات",
      colorsLabel: "الألوان المتوفرة",
      materialLabel: "المواد",
      descLabel: "الوصف",
      charLabel: "المميزات",
      appsLabel: "الاستعمالات",
      instLabel: "طريقة التركيب",
      priceLabel: "الثمن",
      variantsAvailable: "تصاميم متوفرة",
      searchPlaceholder: "ابحث عن منتج (مرجع، اسم، لون...)",
      noResults: "لم يتم العثور على أي منتج يطابق بحثك.",
    },
    whyUs: {
      badge: "علاش تختار Deconil Maroc",
      title: "الرقم 1 في مواد الديكور وتغليف الحائط بالمغرب",
      subtitle: "كنتميزو بجودة السلعة والخبرة ديالنا في حلول الديكور العصري.",
      points: {
        installation: {
          title: "البيع بالجملة والتقسيط",
          desc: "كنوفرو السلعة بالجملة للمحترفين وكنقبلو طلبات التقسيط على حساب الكمية.",
        },
        materials: {
          title: "جودة المواد",
          desc: "اختيار دقيق للـ PVC والـ WPC والمواد المستوردة اللي كتدوم ومكتخسرش.",
        },
        designs: {
          title: "تنوع الأشكال",
          desc: "تشكيلة واسعة من الألوان والنقوش اللي كتناسب كاع الأذواق العصرية.",
        },
        custom: {
          title: "السلعة متوفرة (Stock)",
          desc: "عندنا ديما الستوك واجد باش نلبيو الطلبات ديالكم في أسرع وقت.",
        },
        delivery: {
          title: "توصيل لجميع مدن المغرب",
          desc: "كنوصلو ليك السلعة ديالك فين ما كنتي في المغرب بكل أمان.",
        },
        team: {
          title: "نصائح الخبراء",
          desc: "الفريق ديالنا كيعاونك تختار أحسن المواد اللي كتناسب الاحتياجات التقنية ديالك.",
        },
        expertise: {
          title: "لداخل وبرا ديال الدار",
          desc: "حلول خاصة لكل بلاصة، كتضمن مقاومة ممتازة للظروف المناخية.",
        },
        pricing: {
          title: "أثمنة تنافسية",
          desc: "بما أننا بائعو جملة، كنقدمو أحسن الأثمنة في السوق على كاع المنتجات ديالنا.",
        },
        consultation: {
          title: "مواكبة للمحترفين",
          desc: "خدمة خاصة للمهندسين، المقاولين والموزعين في كاع أنحاء المملكة.",
        },
      },
    },
    faq: {
      badge: "أسئلة كيتعاودو بزاف",
      title: "كل ما كيتعلق بالخدمة ديالنا",
      subtitle: "أجوبة واضحة على التساؤلات ديالكم حول المنتجات والبيع بالجملة.",
      q1: "واش كتبيعو غير للمحترفين؟",
      a1: "كنبيعو أساساً بالجملة للمحترفين، الموزعين والشركات. حتى الأفراد يقدرو يطلبو على حساب الكميات المطلوبة.",
      q2: "واش كديرو التركيب؟",
      a2: "لا، حنا كنوفرو غير السلعة وما كديروش خدمة التركيب.",
      q3: "شنو هما أنواع السلعة اللي عندكم؟",
      a3: "عندنا بزاف ديال الحلول للديكور الداخلي والخارجي، بحال لي بانو ديكوراتيف، تغليف الحائط، الأسقف، والعديد من مواد الفينيسيون.",
      q4: "واش نقدر نشري كمية قليلة؟",
      a4: "نعم، على حساب النوع ديال السلعة والكمية اللي متوفرة. تواصلو معانا باش تعرفو الشروط.",
      q5: "كيفاش نقدر ناخد دوبري (تقدير ثمن)؟",
      a5: "تقدرو تواصلو معانا بالهاتف، واتساب أو عن طريق استمارة التواصل مع ذكر المنتجات والكمية اللي بغيتو.",
      q6: "واش كتوصلو لجميع مدن المغرب؟",
      a6: "نعم، كنقدرو ننظمو التوصيل لمختلف مدن المغرب على حساب الطلبية.",
      q7: "كيفاش نعرف واش السلعة كاينا؟",
      a7: "تواصلو مع الفريق ديالنا باش تعرفو واش السلعة كاينة في الستوك وأوقات التوصيل.",
      q8: "شنو هما طرق الخلاص اللي كتقبلو؟",
      a8: "طرق الخلاص كنعلموكم بيها فاش كنأكدو الطلبية ديالكم.",
    },
    contact: {
      badge: "اتصل بنا",
      title: "احصل على مواد الديكور ديالك",
      subtitle: "الفريق ديالنا رهن الإشارة ديالكم لأي طلب ثمن، معلومة أو استشارة تقنية.",
      formName: "الاسم الكامل",
      formEmail: "البريد الإلكتروني",
      formPhone: "رقم الهاتف (واتساب)",
      formService: "المنتوج المطلوب",
      formMessage: "تفاصيل الطلب ديالك (كميات، مراجع...)",
      formSubmit: "إرسال الطلب ديالي",
      formSending: "جاري الإرسال...",
      formSuccess: "شكراً ! الطلب ديالك تيرسل. غادي نتواصلو معاك قريب في الواتساب أو الهاتف.",
      addressLabel: "الشوروم / المستودع ديالنا",
      addressVal: "حي الألفة، حي حسني، الدار البيضاء 20230، المغرب",
      phoneLabel: "الهاتف",
      emailLabel: "البريد الإلكتروني",
      hoursLabel: "أوقات العمل",
      hoursVal: "الإثنين - السبت: 09:00 تال 19:00 (الأحد مغلق)",
      whatsappLabel: "واتساب مباشر",
      instagramLabel: "تابعونا على إنستغرام",
      moroccoCoverage: "التوصيل متوفر لجميع مدن المغرب.",
    },
    quoteModal: {
      title: "طلب ثمن / Devis",
      subtitle: "عمر هاد المعلومات باش توصل بتقدير ثمن فابور على حساب السلعة والكمية اللي بغيتي.",
      selectService: "اختار نوع المنتوج",
      preferredTime: "الكمية التقريبية اللي محتاج",
      successTitle: "تم إرسال الطلب !",
      successDesc: "توصلنا بالطلب ديالك. مستشار من Deconil Maroc غادي يتواصل معاك في الواتساب باش يعطيك الأثمنة.",
      close: "إغلاق",
      pastRequests: "الطلبات الأخيرة ديالك",
      noRequests: "مازال ما صيفطي حتى شي طلب.",
    },
  },
};
