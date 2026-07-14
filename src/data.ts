export interface Variant {
  image: string;
  reference: string;
  colorNameFr?: string;
  colorNameDarija?: string;
}

export interface Product {
  id: string;
  image: string;
  nameFr: string;
  nameDarija: string;
  reference: string;
  category: "interior" | "exterior";
  dimensions?: string;
  colors?: string[];
  materialFr?: string;
  materialDarija?: string;
  descriptionFr?: string;
  descriptionDarija?: string;
  characteristicsFr?: string[];
  characteristicsDarija?: string[];
  applicationsFr?: string[];
  applicationsDarija?: string[];
  variants?: Variant[];
  catalogueImage?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  roleFr: string;
  roleDarija: string;
  contentFr: string;
  contentDarija: string;
  rating: number;
  avatar: string;
  projectTypeFr: string;
  projectTypeDarija: string;
}

export const products: Product[] = [
  {
    id: "int-1",
    image: "/src/assets/images/dps115_anthracite_1783539539128.jpg",
    nameFr: "Série DPS115 - Lambris Polymère",
    nameDarija: "سلسلة DPS115 - لومبري بوليمر",
    reference: "DPS115-D2, DPS115-ANDZ, DPS115-Ç, DPS115-AS, DPS115-C, DPS115-SANT, DPS115-ANT",
    category: "interior",
    dimensions: "11,5 cm x 290 cm x 1,2 cm",
    colors: ["Blanc", "Beige/Taupe", "Bois Rayures Noires", "Bois Foncé Noir", "Bois Marron Foncé", "Bois Gris", "Anthracite", "Noir"],
    materialFr: "Polymère",
    materialDarija: "بوليمر",
    descriptionFr: "Lambris gris pour plafond et mur. Design décoratif luxueux. Résistant à l'eau, à l'humidité et aux chocs. Surface brillante avec couche UV.",
    descriptionDarija: "تغليف رمادي للسقف والحائط. تصميم ديكور فاخر. مقاوم للماء والرطوبة والصدمات. سطح لامع مع طبقة UV.",
    characteristicsFr: ["Résistant à l'eau", "Résistant aux chocs", "Surface UV brillante"],
    characteristicsDarija: ["مقاوم للماء", "مقاوم للصدمات", "سطح UV لامع"],
    applicationsFr: ["Revêtement mural intérieur", "Plafonds", "Espaces résidentiels", "Commerciaux"],
    applicationsDarija: ["تغليف الحوائط الداخلية", "الأسقف", "المناطق السكنية", "التجارية"],
  },
  {
    id: "int-2",
    image: "/src/assets/images/serie_f_black_2_ribs_1783540599981.jpg",
    nameFr: "Série F - Lambris Polymère Premium",
    nameDarija: "سلسلة F - لومبري بوليمر ممتاز",
    reference: "F-01, F-02, F-03",
    category: "interior",
    dimensions: "11,5 cm x 290 cm x 2 cm",
    colors: ["Anthracite Noir", "Noir Pin (bois rayures noires)", "Noir Bois (bois naturel avec noir)"],
    materialFr: "Polymère",
    materialDarija: "بوليمر",
    descriptionFr: "Série premium avec finitions noires profondes et combinaisons bois.",
    descriptionDarija: "سلسلة ممتازة بلمسات سوداء عميقة وتشكيلات خشبية.",
    applicationsFr: ["Revêtement mural intérieur", "Plafonds"],
    applicationsDarija: ["تغليف الحوائط الداخلية", "الأسقف"]
  },
  {
    id: "int-3",
    image: "/src/assets/images/dl120_walnut_profile_1783540631107.jpg",
    nameFr: "Série DL120 - Lambris Polymère",
    nameDarija: "سلسلة DL120 - لومبري بوليمر",
    reference: "DL120-D2 à DL120-S",
    category: "interior",
    dimensions: "12 cm x 290 cm x 2 cm",
    colors: ["11 variantes premium"],
    materialFr: "Polymère",
    materialDarija: "بوليمر",
    descriptionFr: "Série premium avec riches finitions en grain de bois, anthracite et designs bicolores spéciaux.",
    descriptionDarija: "سلسلة ممتازة مع فينيسيون غنية بخشب، أنثراسيت وتصاميم خاصة بلونين.",
    applicationsFr: ["Revêtement mural intérieur", "Plafonds"],
    applicationsDarija: ["تغليف الحوائط الداخلية", "الأسقف"],
    variants: [
      {
        image: "/src/assets/images/dl120_walnut_profile_1783540631107.jpg",
        reference: "DL120-D2",
        colorNameFr: "Blanc Pur",
        colorNameDarija: "أبيض ناصع"
      },
      {
        image: "/src/assets/images/dl120_walnut_profile_1783540631107.jpg",
        reference: "DL120-ANDZ",
        colorNameFr: "Gris Clair",
        colorNameDarija: "رمادي فاتح"
      },
      {
        image: "/src/assets/images/dl120_walnut_profile_1783540631107.jpg",
        reference: "DL120-RZN",
        colorNameFr: "Gris Moyen",
        colorNameDarija: "رمادي متوسط"
      },
      {
        image: "/src/assets/images/dps115_anthracite_1783539539128.jpg",
        reference: "DL120-ANT",
        colorNameFr: "Anthracite",
        colorNameDarija: "أنثراسيت"
      },
      {
        image: "/src/assets/images/dl120_walnut_profile_1783540631107.jpg",
        reference: "DL120-CM",
        colorNameFr: "Noyer (Walnut)",
        colorNameDarija: "جوز (Walnut)"
      },
      {
        image: "/src/assets/images/dl120_walnut_profile_1783540631107.jpg",
        reference: "DL120-AC",
        colorNameFr: "Chêne Foncé",
        colorNameDarija: "بلوط غامق"
      },
      {
        image: "/src/assets/images/dl120_walnut_profile_1783540631107.jpg",
        reference: "DL120-KÇ",
        colorNameFr: "Noyer & Noir",
        colorNameDarija: "جوز و أسود"
      },
      {
        image: "/src/assets/images/dl120_walnut_profile_1783540631107.jpg",
        reference: "DL120-AS",
        colorNameFr: "Chêne & Noir",
        colorNameDarija: "بلوط و أسود"
      },
      {
        image: "/src/assets/images/dl120_walnut_profile_1783540631107.jpg",
        reference: "DL120-ZY",
        colorNameFr: "Vert Forêt",
        colorNameDarija: "أخضر غامق"
      },
      {
        image: "/src/assets/images/serie_f_double_rib_black_1783540266795.jpg",
        reference: "DL120-SA",
        colorNameFr: "Noir & Or",
        colorNameDarija: "أسود و ذهبي"
      },
      {
        image: "/src/assets/images/dl210_black_4_ribs_1783547393400.jpg",
        reference: "DL120-S",
        colorNameFr: "Noir Mat",
        colorNameDarija: "أسود مطفي"
      }
    ]
  },
  {
    id: "int-5",
    image: "/src/assets/images/dl210_black_4_ribs_1783547393400.jpg",
    nameFr: "Série DL210 - Lambris Polymère",
    nameDarija: "سلسلة DL210 - لومبري بوليمر",
    reference: "DL210-D2, DL210-ANT, DL210-SANT, DL210-KB, DL210-KÇ, DL210-AS",
    category: "interior",
    dimensions: "21 cm x 290 cm x 1,2 cm",
    colors: ["Anthracite", "combinaisons bois"],
    materialFr: "Polymère",
    materialDarija: "بوليمر",
    descriptionFr: "Série grand format (21cm) avec finitions anthracite et combinaisons bois.",
    descriptionDarija: "سلسلة حجم كبير (21 سم) بفينيسيون أنثراسيت وتشكيلات خشبية.",
    applicationsFr: ["Revêtement mural intérieur", "Plafonds"],
    applicationsDarija: ["تغليف الحوائط الداخلية", "الأسقف"]
  },
  {
    id: "int-6",
    image: "/src/assets/images/corner_module_21cm_anthracite_1783680123620.jpg",
    nameFr: "Modules d'Angle - Accessoires Lambris",
    nameDarija: "موديلات الزوايا - إكسسوارات لومبري",
    reference: "DL210, DL120, SEA150 Köşe Modülü",
    category: "interior",
    dimensions: "Profils: 2cm, 3cm, 3cm Sea",
    colors: ["Blanc", "Noir", "Anthracite", "Bois", "Blanc-Or", "Lin Bronze", "Gris Bronze", "Noir-Or"],
    materialFr: "Polymère",
    materialDarija: "بوليمر",
    descriptionFr: "Profils d'angle et modules de finition pour une jonction parfaite entre les panneaux de lambris.",
    descriptionDarija: "بروفيلات الزاوية وموديلات الفينيساج لربط مثالي بين ألواح اللومبري.",
    applicationsFr: ["Accessoires de finition pour lambris", "Angles sortants", "Jonctions murales"],
    applicationsDarija: ["إكسسوارات فينيسيون", "زوايا خارجية", "وصلات حائطية"],
    variants: [
      {
        image: "/src/assets/images/corner_module_21cm_anthracite_1783680123620.jpg",
        reference: "DL210-KM",
        colorNameFr: "21 cm Corner Modülü",
        colorNameDarija: "21 سم موديل الزاوية"
      },
      {
        image: "/src/assets/images/corner_module_15cm_sea_gold_1783680135958.jpg",
        reference: "SEA150-KM",
        colorNameFr: "15 cm Sea Corner Modülü",
        colorNameDarija: "15 سم موديل الزاوية Sea"
      },
      {
        image: "/src/assets/images/corner_module_12cm_walnut_1783680146330.jpg",
        reference: "DL120-KM",
        colorNameFr: "12 cm Corner Modülü",
        colorNameDarija: "12 سم موديل الزاوية"
      },
      {
        image: "/src/assets/images/corner_module_3cm_sea_seri_1783680156769.jpg",
        reference: "SEA-SERI-KM",
        colorNameFr: "3 cm Sea Seri Profil",
        colorNameDarija: "3 سم بروفيل Sea Seri"
      }
    ]
  },
  {
    id: "int-7",
    image: "/src/assets/images/mdf_arch_wall_panel_kemer_1783680609302.jpg",
    nameFr: "Collection MDF Décorative - Arches & Ovales",
    nameDarija: "مجموعة MDF الديكورية - أقواس وأشكال بيضاوية",
    reference: "MDF Oval / MDF Kemer",
    category: "interior",
    dimensions: "Diverses (96cm, 100cm, 280cm)",
    colors: ["Beige", "Blanc", "Bois Naturel", "Gris", "Vert Olive"],
    materialFr: "MDF de première classe",
    materialDarija: "MDF درجة أولى",
    descriptionFr: "Collection d'arches murales et de lattes ovales en MDF pour une décoration sophistiquée et moderne.",
    descriptionDarija: "مجموعة من الأقواس الحائطية وشرائح MDF البيضاوية لديكور راقٍ وعصري.",
    applicationsFr: ["Décoration murale", "Salons", "Chambres d'enfants", "Hôtels"],
    applicationsDarija: ["ديكور حائطي", "صالات", "غرف الأطفال", "الفنادق"],
    variants: [
      {
        image: "/src/assets/images/mdf_oval_lath_mdf3_beige_1783680550048.jpg",
        reference: "MDF-3",
        colorNameFr: "Oval Beige",
        colorNameDarija: "بيضاوي بيج"
      },
      {
        image: "/src/assets/images/mdf_oval_lath_mdf2_green_1783680566296.jpg",
        reference: "MDF-2",
        colorNameFr: "Oval Vert",
        colorNameDarija: "بيضاوي أخضر"
      },
      {
        image: "/src/assets/images/mdf_oval_seren2_mirror_1783680581228.jpg",
        reference: "SEREN2",
        colorNameFr: "Oval Miroir",
        colorNameDarija: "بيضاوي مرآة"
      },
      {
        image: "/src/assets/images/mdf_oval_nova2_double_arch_1783680594635.jpg",
        reference: "NOVA2",
        colorNameFr: "Double Arch",
        colorNameDarija: "قوس مزدوج"
      },
      {
        image: "/src/assets/images/mdf_arch_wall_panel_kemer_1783680609302.jpg",
        reference: "MDF-Kemer",
        colorNameFr: "Panneau Arch",
        colorNameDarija: "بانو القوس"
      }
    ]
  },
  {
    id: "int-8",
    image: "/src/assets/images/mdf_half_oval_raw_technical_1783681274250.jpg",
    nameFr: "Collection MDF Géométrique - Panneaux & Formes",
    nameDarija: "مجموعة MDF الهندسية - ألواح وأشكال",
    reference: "MDF108-ISK / MDF10-KARE",
    category: "interior",
    dimensions: "Demi-Oval: 79×39,5cm / Carré: 48×48cm",
    colors: ["Blanc", "Beige", "Gris", "Anthracite"],
    materialFr: "MDF de première classe",
    materialDarija: "MDF درجة أولى",
    descriptionFr: "Panneaux MDF géométriques pour créer des murs d'accent artistiques et modernes.",
    descriptionDarija: "ألواح MDF هندسية لإنشاء جدران فنية وعصرية.",
    applicationsFr: ["Murs d'accent", "Salons", "Espaces Commerciaux", "Hôtels"],
    applicationsDarija: ["جدران ديكورية", "صالات", "فضاءات تجارية", "فنادق"],
    variants: [
      {
        image: "/src/assets/images/mdf_half_oval_raw_technical_1783681274250.jpg",
        reference: "MDF108-ISK",
        colorNameFr: "Half Oval (Brut)",
        colorNameDarija: "نصف بيضاوي (خام)"
      },
      {
        image: "/src/assets/images/mdf_square_raw_technical_1783681286689.jpg",
        reference: "MDF10-KARE",
        colorNameFr: "Square (Brut)",
        colorNameDarija: "مربع (خام)"
      }
    ]
  },
  {
    id: "int-9",
    image: "/src/assets/images/separator_ds001_oak_1783681900803.jpg",
    nameFr: "Collection DS - Séparateurs en Bois",
    nameDarija: "مجموعة DS - فواصل خشبية",
    reference: "Série DS (5x5cm / 5x8cm)",
    category: "interior",
    dimensions: "L: 280 cm",
    colors: ["Chêne", "Noyer", "Anthracite", "Noir"],
    materialFr: "MDF de première classe (8mm)",
    materialDarija: "MDF درجة أولى (8 ملم)",
    descriptionFr: "Séparateurs verticaux décoratifs en MDF. Design épuré, montage facile. Ratio 1:1.",
    descriptionDarija: "فواصل خشبية عمودية من MDF. تصميم عصري وتركيب سهل. نسبة 1:1.",
    applicationsFr: ["Séparateurs de pièces", "Lattes décoratives", "Pergolas"],
    applicationsDarija: ["فواصل غرف", "شرائح ديكورية", "بيرغولات"],
    variants: [
      {
        image: "/src/assets/images/separator_ds001_oak_1783681900803.jpg",
        reference: "DS-001",
        colorNameFr: "Chêne Naturel",
        colorNameDarija: "بلوط طبيعي"
      },
      {
        image: "/src/assets/images/separator_ds001_oak_1783681900803.jpg",
        reference: "DS-002",
        colorNameFr: "Chêne Scandinave",
        colorNameDarija: "بلوط اسكندنافي"
      },
      {
        image: "/src/assets/images/separator_ds003_walnut_1783681918739.jpg",
        reference: "DS-003",
        colorNameFr: "Noyer Classique",
        colorNameDarija: "جوز كلاسيكي"
      },
      {
        image: "/src/assets/images/separator_ds003_walnut_1783681918739.jpg",
        reference: "DS-004",
        colorNameFr: "Noyer Profond",
        colorNameDarija: "جوز عميق"
      },
      {
        image: "/src/assets/images/separator_ds008_anthracite_1783681931757.jpg",
        reference: "DS-005",
        colorNameFr: "Gris Anthracite",
        colorNameDarija: "رمادي أنتراسيت"
      },
      {
        image: "/src/assets/images/separator_ds008_anthracite_1783681931757.jpg",
        reference: "DS-008",
        colorNameFr: "Noir Mat",
        colorNameDarija: "أسود مطفي"
      }
    ]
  },
  {
    id: "int-10",
    image: "/src/assets/images/led_profile_30cm_large_1783676138401.jpg",
    nameFr: "Collection LED - Éclairage de Séparateurs",
    nameDarija: "مجموعة LED - إضاءة الفواصل",
    reference: "Série LED",
    category: "interior",
    descriptionFr: "Solutions d'éclairage LED intégrées pour séparateurs. Design épuré, ambiance moderne. Ratio 1:1.",
    descriptionDarija: "حلول إضاءة ليد مدمجة للفواصل. تصميم عصري وأجواء راقية. نسبة 1:1.",
    applicationsFr: ["Éclairage d'ambiance", "Séparateurs lumineux"],
    applicationsDarija: ["إضاءة الأجواء", "فواصل مضيئة"],
    variants: [
      {
        image: "/src/assets/images/led_profile_30cm_large_1783676138401.jpg",
        reference: "LED-80",
        colorNameFr: "Profil 80cm",
        colorNameDarija: "بروفيل 80 سم"
      },
      {
        image: "/src/assets/images/led_profile_12cm_akustik_1783676127688.jpg",
        reference: "LED-130",
        colorNameFr: "Profil 130cm",
        colorNameDarija: "بروفيل 130 سم"
      },
      {
        image: "/src/assets/images/led_profile_08cm_mdf_1783676116485.jpg",
        reference: "LED-180",
        colorNameFr: "Profil 180cm",
        colorNameDarija: "بروفيل 180 سم"
      },
      {
        image: "/src/assets/images/hero_luxury_interior_1783009992571.jpg",
        reference: "LED-SPOT",
        colorNameFr: "Spot Intégré",
        colorNameDarija: "سبوت مدمج"
      }
    ]
  },
  {
    id: "int-22",
    image: "/src/assets/images/du244_11_white_marble_1783549035089.jpg",
    nameFr: "Série DU244 - Panneaux Muraux PVC Marbre",
    nameDarija: "سلسلة DU244 - بانو حائطي رخام PVC",
    reference: "DU244-11",
    category: "interior",
    dimensions: "122×244 cm, Ép: 2,7 mm, Couverture: 3 m²",
    colors: ["12 designs de marbre et textures variés"],
    materialFr: "PVC 4 couches: Film Protecteur + UV + Motif + Base",
    materialDarija: "PVC 4 طبقات: فيلم حماية + UV + موتيف + باز",
    descriptionFr: "Une collection complète de 12 designs incluant marbres classiques et surfaces texturées modernes. Étanche et ignifuge.",
    descriptionDarija: "مجموعة كاملة من 12 تصميم كتشمل رخام كلاسيكي وأسطح منقوشة عصرية. مضاد للما والعافية.",
    applicationsFr: ["Revêtement mural intérieur."],
    applicationsDarija: ["تغليف حائطي داخلي."],
    variants: [
      {
        image: "/src/assets/images/du244_11_white_marble_1783549035089.jpg",
        reference: "DU244-11",
        colorNameFr: "Blanc Classique",
        colorNameDarija: "أبيض كلاسيكي"
      },
      {
        image: "/src/assets/images/du244_12_brown_marble_1783549190878.jpg",
        reference: "DU244-12",
        colorNameFr: "Marron/Tan",
        colorNameDarija: "بني/تان"
      },
      {
        image: "/src/assets/images/du244_13_black_marble_1783549049788.jpg",
        reference: "DU244-13",
        colorNameFr: "Noir Imperial",
        colorNameDarija: "أسود إمبراطوري"
      },
      {
        image: "/src/assets/images/du244_14_gold_marble_1783549065300.jpg",
        reference: "DU244-14",
        colorNameFr: "Blanc & Or",
        colorNameDarija: "أبيض و ذهبي"
      },
      {
        image: "/src/assets/images/du244_15_white_gold_veins_1783549204339.jpg",
        reference: "DU244-15",
        colorNameFr: "Blanc Veiné Or",
        colorNameDarija: "أبيض بعروق ذهبية"
      },
      {
        image: "/src/assets/images/du244_16_grey_marble_1783549217320.jpg",
        reference: "DU244-16",
        colorNameFr: "Gris",
        colorNameDarija: "رمادي"
      },
      {
        image: "/src/assets/images/du244_17_white_gold_textured_panel_1783549577510.jpg",
        reference: "DU244-17",
        colorNameFr: "Blanc & Or Texturé",
        colorNameDarija: "أبيض و ذهبي منقوش"
      },
      {
        image: "/src/assets/images/du244_18_purple_white_marble_1783549229525.jpg",
        reference: "DU244-18",
        colorNameFr: "Blanc & Pourpre",
        colorNameDarija: "أبيض و أرجواني"
      },
      {
        image: "/src/assets/images/du244_19_black_white_textured_panel_1783549590715.jpg",
        reference: "DU244-19",
        colorNameFr: "Noir & Blanc Texturé",
        colorNameDarija: "أسود و أبيض منقوش"
      },
      {
        image: "/src/assets/images/du244_20_teal_marble_1783549080624.jpg",
        reference: "DU244-20",
        colorNameFr: "Teal & Or Lux",
        colorNameDarija: "تيل و ذهبي"
      },
      {
        image: "/src/assets/images/du244_21_dark_grey_marble_1783549242097.jpg",
        reference: "DU244-21",
        colorNameFr: "Gris Foncé",
        colorNameDarija: "رمادي غامق"
      },
      {
        image: "/src/assets/images/du244_22_light_grey_marble_1783549254898.jpg",
        reference: "DU244-22",
        colorNameFr: "Gris Clair",
        colorNameDarija: "رمادي فاتح"
      }
    ]
  },
  {
    id: "int-23",
    image: "/src/assets/images/ipvc_black_marble_1783552355123_jpg_1783548672121.jpg",
    nameFr: "Panneaux PVC Translucides",
    nameDarija: "بانويات PVC شفافة",
    reference: "IPVC-B",
    category: "interior",
    dimensions: "122×244 cm, Ép: 2,2 mm",
    colors: ["Noir (IPVC-B)", "Tan (IPVC-T)"],
    materialFr: "PVC",
    materialDarija: "PVC",
    descriptionFr: "Laissent passer la lumière, ignifuges, hygiéniques.",
    descriptionDarija: "كيدوزو الضو، مضادين للعافية، وصحيين.",
    applicationsFr: ["Revêtement mural avec passage de lumière."],
    applicationsDarija: ["تغليف حائطي مع مرور الضو."],
    variants: [
      {
        image: "/src/assets/images/ipvc_black_marble_1783552355123_jpg_1783548672121.jpg",
        reference: "IPVC-B",
        colorNameFr: "Noir",
        colorNameDarija: "أسود"
      },
      {
        image: "/src/assets/images/ipvc_tan_marble_1783552360123_jpg_1783548685203.jpg",
        reference: "IPVC-T",
        colorNameFr: "Tan",
        colorNameDarija: "تان"
      }
    ]
  },
  {
    id: "int-24",
    image: "/src/assets/images/pvc_eb_beige_textured_panel_1783549548955.jpg",
    nameFr: "Panneaux PVC Texturés",
    nameDarija: "بانويات PVC منقوشة",
    reference: "PVC-EB",
    category: "interior",
    colors: ["Beige", "Gris", "Blanc/Or", "Noir/Blanc"],
    materialFr: "PVC",
    materialDarija: "PVC",
    descriptionFr: "Surfaces texturées pierre réalistes, imperméables et durables.",
    descriptionDarija: "أسطح منقوشة بحال الحجر حقيقي، مضادة للما وصحيحة.",
    applicationsFr: ["Revêtement mural effet pierre."],
    applicationsDarija: ["تغليف حائطي بتأثير الحجر."],
    variants: [
      {
        image: "/src/assets/images/pvc_eb_beige_textured_panel_1783549548955.jpg",
        reference: "PVC-EB (Beige)",
        colorNameFr: "Beige",
        colorNameDarija: "بيج"
      },
      {
        image: "/src/assets/images/pvc_eb_grey_textured_panel_1783549562990.jpg",
        reference: "PVC-EB (Gris)",
        colorNameFr: "Gris",
        colorNameDarija: "رمادي"
      }
    ]
  },
  {
    id: "int-25",
    image: "/src/assets/images/du244_01_teal_navy_gold_marble_1783583418256.jpg",
    nameFr: "Panneaux PVC Sur Mesure (Premium)",
    nameDarija: "بانويات PVC بالعبار (ممتاز)",
    reference: "DU244-1",
    category: "interior",
    colors: ["Teal/Or", "Rouge/Or", "Blanc", "Blanc/Lilas", "Gris", "Noir/Bronze", "Blanc/Or", "Bleu/Or"],
    materialFr: "PVC",
    materialDarija: "PVC",
    descriptionFr: "Production spéciale sur mesure. Designs exclusifs et luxueux.",
    descriptionDarija: "إنتاج خاص بالعبار. تصاميم حصرية وفخمة.",
    applicationsFr: ["Min. 80 pièces, délai 15 jours."],
    applicationsDarija: ["أقل طلب 80 قطعة، أجل 15 يوم."],
    variants: [
      {
        image: "/src/assets/images/du244_01_teal_navy_gold_marble_1783583418256.jpg",
        reference: "DU244-1",
        colorNameFr: "Teal & Or",
        colorNameDarija: "تيل و ذهبي"
      },
      {
        image: "/src/assets/images/du244_02_red_burgundy_marble_1783583432960.jpg",
        reference: "DU244-2",
        colorNameFr: "Rouge Imperial",
        colorNameDarija: "أحمر إمبراطوري"
      },
      {
        image: "/src/assets/images/du244_03_classic_white_marble_1783583447348.jpg",
        reference: "DU244-3",
        colorNameFr: "Blanc Pur",
        colorNameDarija: "أبيض نقي"
      },
      {
        image: "/src/assets/images/du244_04_white_lilac_marble_1783583461356.jpg",
        reference: "DU244-4",
        colorNameFr: "Blanc & Lilas",
        colorNameDarija: "أبيض و ليلكي"
      },
      {
        image: "/src/assets/images/du244_05_grey_stone_marble_1783583474838.jpg",
        reference: "DU244-5",
        colorNameFr: "Gris Pierre",
        colorNameDarija: "رمادي حجري"
      },
      {
        image: "/src/assets/images/du244_06_black_bronze_marble_1783583488889.jpg",
        reference: "DU244-6",
        colorNameFr: "Noir & Bronze",
        colorNameDarija: "أسود و برونزي"
      },
      {
        image: "/src/assets/images/du244_07_white_gold_veins_1783583504800.jpg",
        reference: "DU244-7",
        colorNameFr: "Blanc & Or Fin",
        colorNameDarija: "أبيض و ذهبي رقيق"
      },
      {
        image: "/src/assets/images/du244_10_blue_white_gold_marble_1783583519328.jpg",
        reference: "DU244-10",
        colorNameFr: "Bleu & Or",
        colorNameDarija: "أزرق و ذهبي"
      }
    ]
  },
  {
    id: "int-26",
    image: "/src/assets/images/aluminum_profile_internal_corner_silver_1783583775812.jpg",
    nameFr: "Modules d'Angle et Profilés Aluminium PVC",
    nameDarija: "موديلات الزوايا وبروفيلات ألومنيوم PVC",
    reference: "Alüminyum Profil",
    category: "interior",
    colors: ["Argent", "Noir", "Or", "Blanc"],
    materialFr: "Aluminium de haute qualité",
    materialDarija: "ألومنيوم عالي الجودة",
    descriptionFr: "Profilés de finition et d'angle pour une installation parfaite des panneaux PVC. Disponibles en plusieurs designs et couleurs.",
    descriptionDarija: "بروفيلات فينيسيون وزوايا لتركيب مثالي لبانويات PVC. متوفرة بتصاميم وألوان متعددة.",
    applicationsFr: ["Finition d'angle intérieur/extérieur, jonction et bordure."],
    applicationsDarija: ["فينييسيون الزوايا الداخلية والخارجية، الربط والحواف."],
    variants: [
      {
        image: "/src/assets/images/aluminum_profile_internal_corner_silver_1783583775812.jpg",
        reference: "İç Köşe - Gümüş",
        colorNameFr: "Angle Intérieur Argent",
        colorNameDarija: "زاوية داخلية فضي"
      },
      {
        image: "/src/assets/images/aluminum_profile_internal_black_1783583836740.jpg",
        reference: "İç Köşe - Siyah",
        colorNameFr: "Angle Intérieur Noir",
        colorNameDarija: "زاوية داخلية أسود"
      },
      {
        image: "/src/assets/images/aluminum_profile_internal_gold_1783583823524.jpg",
        reference: "İç Köşe - Altın",
        colorNameFr: "Angle Intérieur Or",
        colorNameDarija: "زاوية داخلية ذهبي"
      },
      {
        image: "/src/assets/images/aluminum_profile_internal_white_1783583919496.jpg",
        reference: "İç Köşe - Beyaz",
        colorNameFr: "Angle Intérieur Blanc",
        colorNameDarija: "زاوية داخلية أبيض"
      },
      {
        image: "/src/assets/images/aluminum_profile_joint_silver_v2_1783583847340.jpg",
        reference: "Ek Birleşim - Gümüş",
        colorNameFr: "Joint Argent",
        colorNameDarija: "ربط فضي"
      },
      {
        image: "/src/assets/images/aluminum_profile_joint_black_v2_1783583858716.jpg",
        reference: "Ek Birleşim - Siyah",
        colorNameFr: "Joint Noir",
        colorNameDarija: "ربط أسود"
      },
      {
        image: "/src/assets/images/aluminum_profile_joint_gold_1783583786322.jpg",
        reference: "Ek Birleşim - Altın",
        colorNameFr: "Joint Or",
        colorNameDarija: "ربط ذهبي"
      },
      {
        image: "/src/assets/images/aluminum_profile_joint_white_1783583931104.jpg",
        reference: "Ek Birleşim - Beyaz",
        colorNameFr: "Joint Blanc",
        colorNameDarija: "ربط أبيض"
      },
      {
        image: "/src/assets/images/aluminum_profile_external_silver_v2_1783583870067.jpg",
        reference: "Dış Köşe - Gümüş",
        colorNameFr: "Angle Extérieur Argent",
        colorNameDarija: "زاوية خارجية فضي"
      },
      {
        image: "/src/assets/images/aluminum_profile_external_corner_black_1783583797044.jpg",
        reference: "Dış Köşe - Siyah",
        colorNameFr: "Angle Extérieur Noir",
        colorNameDarija: "زاوية خارجية أسود"
      },
      {
        image: "/src/assets/images/aluminum_profile_external_gold_v2_1783583881770.jpg",
        reference: "Dış Köşe - Altın",
        colorNameFr: "Angle Extérieur Or",
        colorNameDarija: "زاوية خارجية ذهبي"
      },
      {
        image: "/src/assets/images/aluminum_profile_external_white_1783583941643.jpg",
        reference: "Dış Köşe - Beyaz",
        colorNameFr: "Angle Extérieur Blanc",
        colorNameDarija: "زاوية خارجية أبيض"
      },
      {
        image: "/src/assets/images/aluminum_profile_end_silver_1783583806514.jpg",
        reference: "Bitiş - Gümüş",
        colorNameFr: "Profil de Finition Argent",
        colorNameDarija: "بروفيل فينيسيون فضي"
      },
      {
        image: "/src/assets/images/aluminum_profile_end_black_v2_1783583902934.jpg",
        reference: "Bitiş - Siyah",
        colorNameFr: "Profil de Finition Noir",
        colorNameDarija: "بروفيل فينيسيون أسود"
      },
      {
        image: "/src/assets/images/aluminum_profile_end_gold_v2_1783583892981.jpg",
        reference: "Bitiş - Altın",
        colorNameFr: "Profil de Finition Or",
        colorNameDarija: "بروفيل فينيسيون ذهبي"
      },
      {
        image: "/src/assets/images/aluminum_profile_end_white_1783583953159.jpg",
        reference: "Bitiş - Beyاز",
        colorNameFr: "Profil de Finition Blanc",
        colorNameDarija: "بروفيل فينيسيون أبيض"
      }
    ]
  },
  {
    id: "int-27",
    image: "/src/assets/images/nil_01_d_dark_grey_stone_1783584807300.jpg",
    nameFr: "Série NİL - Panneaux Muraux SPC",
    nameDarija: "سلسلة NİL - بانو حائطي SPC",
    reference: "NİL-1-D à NİL-7-D",
    category: "interior",
    dimensions: "96,5×280 cm, Ép: 3 mm, 2,70 m²",
    colors: ["7 variantes premium"],
    materialFr: "SPC (Stone Plastic Composite)",
    materialDarija: "SPC (مركب الحجر والبلاستيك)",
    descriptionFr: "100% étanche, antibactérien, absorbant le son, surface ultra-mate avec texture pierre réaliste.",
    descriptionDarija: "100% مضاد للما، مضاد للبكتيريا، عازل للصوت، سطح مطفي بزايد مع ملمس حجري حقيقي.",
    applicationsFr: ["Revêtement mural intérieur de luxe."],
    applicationsDarija: ["تغليف حائطي داخلي فاخر."],
    variants: [
      {
        image: "/src/assets/images/nil_01_d_dark_grey_stone_1783584807300.jpg",
        reference: "NİL-1-D",
        colorNameFr: "Gris Foncé Pierre",
        colorNameDarija: "رمادي غامق حجري"
      },
      {
        image: "/src/assets/images/nil_02_d_charcoal_grey_stone_v2_1783584821408.jpg",
        reference: "NİL-2-D",
        colorNameFr: "Anthracite Pierre",
        colorNameDarija: "أنثراسيت حجري"
      },
      {
        image: "/src/assets/images/nil_04_d_beige_marble_v2_1783584835102.jpg",
        reference: "NİL-4-D",
        colorNameFr: "Beige Marbre",
        colorNameDarija: "بيج رخامي"
      },
      {
        image: "/src/assets/images/nil_03_d_white_marble_v2_1783584846501.jpg",
        reference: "NİL-3-D",
        colorNameFr: "Blanc Classique",
        colorNameDarija: "أبيض كلاسيكي"
      },
      {
        image: "/src/assets/images/nil_05_d_dark_grey_marble_v2_1783584859914.jpg",
        reference: "NİL-5-D",
        colorNameFr: "Gris Impérial",
        colorNameDarija: "رمادي إمبراطوري"
      },
      {
        image: "/src/assets/images/nil_06_d_white_brown_marble_v2_1783584874064.jpg",
        reference: "NİL-6-D",
        colorNameFr: "Blanc & Terre",
        colorNameDarija: "أبيض و ترابي"
      },
      {
        image: "/src/assets/images/nil_07_d_grey_white_marble_v2_1783584891195.jpg",
        reference: "NİL-7-D",
        colorNameFr: "Gris & Blanc",
        colorNameDarija: "رمادي و أبيض"
      }
    ]
  },
  {
    id: "int-28",
    image: "/src/assets/images/eps_moonlight_final_v2_1783585773652.jpg",
    nameFr: "Panneaux Muraux EPS (BTN & Moonlight)",
    nameDarija: "بانو حائطي EPS (BTN و Moonlight)",
    reference: "BTN Series, Moonlight",
    category: "interior",
    dimensions: "50×100/120 cm, Ép: 2-3 cm",
    colors: ["Blanc (Peignable)"],
    materialFr: "EPS (Polystyrène Expansé)",
    materialDarija: "EPS (بوليسيتيرين)",
    descriptionFr: "Isolation thermique et acoustique, léger, résistant aux chocs. Designs 3D uniques.",
    descriptionDarija: "عزل حراري وصوتي، خفيف، ومضاد للصدمات. تصاميم 3D فريدة.",
    applicationsFr: ["Revêtement mural avec isolation décorative."],
    applicationsDarija: ["تغليف حائطي مع عزل ديكوري."],
    variants: [
      {
        image: "/src/assets/images/eps_btn_white_ribbed_1783585285750.jpg",
        reference: "BTN Series",
        colorNameFr: "Vertical Ribbed (Blanc)",
        colorNameDarija: "مخطط عمودي (أبيض)"
      },
      {
        image: "/src/assets/images/eps_moonlight_final_v2_1783585773652.jpg",
        reference: "Ayışığı (Moonlight)",
        colorNameFr: "Surface Lunaire (Blanc)",
        colorNameDarija: "سطح قمري (أبيض)"
      }
    ]
  },
  {
    id: "int-30",
    image: "/src/assets/images/venus_3ddp_white_1783696657437.jpg",
    nameFr: "Panneau Mural 3D Vénus",
    nameDarija: "بانو حائطي 3D فينوس",
    reference: "Série 3DDP",
    category: "interior",
    dimensions: "50x50cm",
    colors: ["Blanc, Gris, Noir, Or, Rouge"],
    materialFr: "PVC Haute Densité",
    materialDarija: "PVC عالي الكثافة",
    descriptionFr: "Motif 3D fluide et élégant inspiré des vagues. Apporte une texture luxueuse à vos murs.",
    descriptionDarija: "زخرفة 3D انسيابية وأنيقة مستوحاة من الأمواج. كيعطي ملمس فاخر للحيوط.",
    applicationsFr: ["Décoration murale premium", "Suites d'hôtels", "Showrooms"],
    applicationsDarija: ["ديكور حائطي ممتاز", "أجنحة الفنادق", "قاعات العرض"],
    catalogueImage: "/src/assets/images/venus_3ddp_white_1783696657437.jpg",
    variants: [
      {
        image: "/src/assets/images/venus_3ddp_white_1783696657437.jpg",
        reference: "3DDP-B",
        colorNameFr: "Blanc",
        colorNameDarija: "أبيض"
      },
      {
        image: "/src/assets/images/du244_16_grey_marble_1783549217320.jpg",
        reference: "3DDP-G",
        colorNameFr: "Gris",
        colorNameDarija: "رمادي"
      },
      {
        image: "/src/assets/images/du244_13_black_marble_1783549049788.jpg",
        reference: "3DDP-S",
        colorNameFr: "Noir",
        colorNameDarija: "أسود"
      },
      {
        image: "/src/assets/images/du244_14_gold_marble_1783549065300.jpg",
        reference: "3DDP-A",
        colorNameFr: "Or",
        colorNameDarija: "ذهبي"
      },
      {
        image: "/src/assets/images/du244_02_red_burgundy_marble_1783583432960.jpg",
        reference: "3DDP-K",
        colorNameFr: "Rouge",
        colorNameDarija: "أحمر"
      }
    ]
  },
  {
    id: "int-29",
    image: "/src/assets/images/mdf_geometric_panels_hero_1783681103387.jpg",
    nameFr: "Panneau Mural 3D Hexagonal",
    nameDarija: "بانو حائطي 3D سداسي",
    reference: "Série MZK",
    category: "interior",
    dimensions: "60x60cm",
    colors: ["Blanc, Gris, Noir, Or, Rouge"],
    materialFr: "PVC Haute Densité",
    materialDarija: "PVC عالي الكثافة",
    descriptionFr: "Panneaux décoratifs hexagonaux avec effet 3D. Parfait pour créer des murs d'accent modernes et géométriques.",
    descriptionDarija: "بانويات ديكورية سداسية بتأثير 3D. مثالية لخلق حيوط عصرية وهندسية.",
    applicationsFr: ["Murs d'accent", "Salons", "Bureaux", "Hôtels"],
    applicationsDarija: ["حيوط الزينة", "الصالونات", "المكاتب", "الفنادق"],
    catalogueImage: "/src/assets/images/eps_moonlight_white_cratered_1783585301532.jpg",
    variants: [
      {
        image: "/src/assets/images/eps_moonlight_white_cratered_1783585301532.jpg",
        reference: "MZK-B",
        colorNameFr: "Blanc",
        colorNameDarija: "أبيض"
      },
      {
        image: "/src/assets/images/pvc_eb_grey_textured_panel_1783549562990.jpg",
        reference: "MZK-G",
        colorNameFr: "Gris",
        colorNameDarija: "رمادي"
      },
      {
        image: "/src/assets/images/nil_02_d_charcoal_grey_stone_v2_1783584821408.jpg",
        reference: "MZK-S",
        colorNameFr: "Noir",
        colorNameDarija: "أسود"
      },
      {
        image: "/src/assets/images/du244_14_gold_marble_1783549065300.jpg",
        reference: "MZK-A",
        colorNameFr: "Or",
        colorNameDarija: "ذهبي"
      },
      {
        image: "/src/assets/images/du244_02_red_burgundy_marble_1783583432960.jpg",
        reference: "MZK-K",
        colorNameFr: "Rouge",
        colorNameDarija: "أحمر"
      }
    ]
  },
  {
    id: "int-31",
    image: "/src/assets/images/vertical_garden_wall_hero_1783677659482.jpg",
    nameFr: "Jardin Vertical Artificiel",
    nameDarija: "حديقة عمودية اصطناعية",
    reference: "ZP Series",
    category: "interior",
    dimensions: "50×50, 50×100, 100×100 cm",
    colors: ["Vert Naturel"],
    materialFr: "Polyéthylène Haute Densité",
    materialDarija: "بولي إيثيلين عالي الكثافة",
    descriptionFr: "Plantes artificielles ultra-réalistes, résistantes aux UV et sans entretien.",
    descriptionDarija: "نباتات اصطناعية واقعية للغاية، مقاومة للأشعة فوق البنفسجية وبدون صيانة.",
    applicationsFr: ["Décoration murale", "Balcons", "Terrasses", "Showrooms"],
    applicationsDarija: ["ديكور حائطي", "بالكونات", "تراسات", "قاعات العرض"],
    variants: [
      {
        image: "/src/assets/images/garden_tile_zp5014_boxwood_1783677672288.jpg",
        reference: "ZP-5014",
        colorNameFr: "Boxwood Classic",
        colorNameDarija: "بوكسوود كلاسيك"
      },
      {
        image: "/src/assets/images/garden_tile_zp1003_forest_1783677683424.jpg",
        reference: "ZP-1003",
        colorNameFr: "Forêt Mixte",
        colorNameDarija: "غابة مختلطة"
      },
      {
        image: "/src/assets/images/garden_tile_zp1025_flowers_1783677694588.jpg",
        reference: "ZP-1025",
        colorNameFr: "Floral Jardin",
        colorNameDarija: "حديقة الزهور"
      },
      {
        image: "/src/assets/images/garden_tile_zp5041_hanging_1783677707104.jpg",
        reference: "ZP-5041",
        colorNameFr: "Vignes Tropicales",
        colorNameDarija: "كروم استوائية"
      }
    ]
  },
  {
    id: "int-33",
    image: "/src/assets/images/hero_luxury_interior_1783009992571.jpg",
    nameFr: "Collection Miroir Deconil",
    nameDarija: "مجموعة مرايا ديكونيل",
    reference: "D01, D04, D06, D07, D17, DAP",
    category: "interior",
    dimensions: "300×300 mm / 1×244 cm",
    colors: ["Argent, Or, Or Rose"],
    materialFr: "Verre / Plexiglass",
    materialDarija: "زجاج / بليكسي غلاص",
    descriptionFr: "Collection complète de miroirs décoratifs et plexiglass autocollants.",
    descriptionDarija: "مجموعة كاملة من المرايا الديكورية والبليكسي غلاص اللاصق.",
    applicationsFr: ["Décoration murale", "Crédences", "Hôtels et Résidences", "Meubles"],
    applicationsDarija: ["ديكور حائطي", "المطابخ", "الفنادق والإقامات", "الأثاث"],
    variants: [
      {
        image: "/src/assets/images/mirror_tiles_d01_silver_cross_1783676555206.jpg",
        reference: "D01",
        colorNameFr: "Silver Cross",
        colorNameDarija: "فضي كروس"
      },
      {
        image: "/src/assets/images/mirror_tiles_d04_silver_grid_1783676570198.jpg",
        reference: "D04",
        colorNameFr: "Silver Grid",
        colorNameDarija: "فضي مربعات"
      },
      {
        image: "/src/assets/images/mirror_tiles_d06_vertical_silver_1783676582748.jpg",
        reference: "D06",
        colorNameFr: "Silver Vertical",
        colorNameDarija: "فضي طولي"
      },
      {
        image: "/src/assets/images/mirror_tiles_d07_bronze_vertical_1783676596805.jpg",
        reference: "D07",
        colorNameFr: "Bronze Vertical",
        colorNameDarija: "برونزي طولي"
      },
      {
        image: "/src/assets/images/mirror_tiles_d17_gold_grid_1783676610233.jpg",
        reference: "D17",
        colorNameFr: "Gold Grid",
        colorNameDarija: "ذهبي مربعات"
      }
    ]
  },
  {
    id: "int-34",
    image: "/src/assets/images/led_profile_08cm_mdf_1783676116485.jpg",
    nameFr: "Barre LED",
    nameDarija: "بار ليد",
    reference: "MDF / Akustik / Large",
    category: "interior",
    dimensions: "0,8-3 cm × 30-100 cm",
    colors: ["3200K (Lumière du jour)"],
    materialFr: "Aluminium / LED",
    materialDarija: "ألومنيوم / ليد",
    descriptionFr: "Température 3200K, protection IP54. Idéal pour intégration dans les tasseaux MDF et acoustiques.",
    descriptionDarija: "حرارة 3200K، حماية IP54. مثالي للتركيب في اللومبري MDF والأكوستيك.",
    applicationsFr: ["Éclairage décoratif", "Intégration murale", "Plafonniers"],
    applicationsDarija: ["إضاءة ديكورية", "دمج حائطي", "أضواء السقف"],
    variants: [
      {
        image: "/src/assets/images/led_profile_08cm_mdf_1783676116485.jpg",
        reference: "MDF Lambri LED",
        colorNameFr: "0.8 cm (MDF)",
        colorNameDarija: "0.8 سم (MDF)"
      },
      {
        image: "/src/assets/images/led_profile_12cm_akustik_1783676127688.jpg",
        reference: "Akustik Lambri LED",
        colorNameFr: "1.2 cm (Akustik)",
        colorNameDarija: "1.2 سم (أكوستيك)"
      },
      {
        image: "/src/assets/images/led_profile_30cm_large_1783676138401.jpg",
        reference: "Large LED Profile",
        colorNameFr: "3.0 cm (Large)",
        colorNameDarija: "3.0 سم (عريض)"
      }
    ]
  },
  {
    id: "int-36",
    image: "/src/assets/images/deconil_beyaz_mastik_450g_v2_1783676186110.jpg",
    nameFr: "Solutions de Fixation Deconil",
    nameDarija: "حلول التثبيت ديكونيل",
    reference: "Mastik & Silicone",
    category: "interior",
    dimensions: "450g / 290ml",
    materialFr: "Mastic & Silicone",
    materialDarija: "مستيك و سيلكون",
    descriptionFr: "Solutions de fixation professionnelles : Mastic Blanc pour finitions et Silicone Clou (High Tack) pour collage puissant.",
    descriptionDarija: "حلول تثبيت احترافية: مستيك أبيض للفينيسيون وسيلكون كلو (High Tack) للصاق قوي.",
    applicationsFr: ["Fixation des lambris", "Jointoiement", "Collage haute résistance"],
    applicationsDarija: ["تثبيت اللومبري", "ملء الفراغات", "لاصق قوي المقاومة"],
    variants: [
      {
        image: "/src/assets/images/deconil_beyaz_mastik_450g_v2_1783676186110.jpg",
        reference: "Beyaz Mastik",
        colorNameFr: "Mastic Blanc 450g",
        colorNameDarija: "مستيك أبيض 450غ"
      },
      {
        image: "/src/assets/images/deconil_civi_silikonu_290ml_1783592305297.jpg",
        reference: "Çivi Silikonu",
        colorNameFr: "Silicone Clou 290ml",
        colorNameDarija: "سيلكون كلو 290مل"
      }
    ]
  },

  {
    id: "ext-3",
    image: "/src/assets/images/dck10_architectural_setting_1783937836814.jpg",
    nameFr: "Profilés de Finition Série DCK10",
    nameDarija: "بروفيلات فينيسيون سلسلة DCK10",
    reference: "Série DCK10",
    category: "exterior",
    dimensions: "Longueur: 3000mm",
    colors: ["Aspect Bois"],
    materialFr: "WPC / Composite",
    materialDarija: "خشب مركب / كومبوزيت",
    descriptionFr: "Profilés de départ et de finition pour l'installation parfaite du système de panneaux DCK10.",
    descriptionDarija: "بروفيلات البداية والنهاية لتركيب نظام ألواح DCK10 بشكل مثالي.",
    characteristicsFr: ["Bords nets", "Résistance aux UV", "Étanche"],
    characteristicsDarija: ["حواف نقية", "مقاوم للأشعة فوق البنفسجية", "مقاوم للماء"],
    applicationsFr: ["Accessoires de finition pour panneaux DCK10"],
    applicationsDarija: ["إكسسوارات فينيسيون لألواح DCK10"],
    catalogueImage: "/src/assets/images/dck10_catalog_shot_1783937824645.jpg",
    variants: [
      {
        image: "/src/assets/images/dck10_catalog_shot_1783937824645.jpg",
        reference: "DCK10-STUDIO",
        colorNameFr: "Vue Studio",
        colorNameDarija: "عرض ستوديو"
      }
    ]
  },
  {
    id: "ext-5",
    image: "/src/assets/images/dck20_start_profile_bas_1783938973850.jpg",
    nameFr: "Profilés de Finition Série DCK20",
    nameDarija: "بروفيلات فينيسيون سلسلة DCK20",
    reference: "Série DCK20",
    category: "exterior",
    dimensions: "Longueur: 3000mm",
    colors: ["Aspect Bois"],
    materialFr: "WPC / Composite",
    materialDarija: "خشب مركب / كومبوزيت",
    descriptionFr: "Profilés de départ et de finition pour l'installation du système de panneaux DCK20.",
    descriptionDarija: "بروفيلات البداية والنهاية لتركيب نظام ألواح DCK20 بشكل مثالي.",
    characteristicsFr: ["Bords nets", "Résistance aux UV", "Étanche"],
    characteristicsDarija: ["حواف نقية", "مقاوم للأشعة فوق البنفسجية", "مقاوم للماء"],
    applicationsFr: ["Accessoires de finition pour panneaux DCK20"],
    applicationsDarija: ["إكسسوارات فينيسيون لألواح DCK20"],
    catalogueImage: "/src/assets/images/dck20_start_profile_bas_1783938973850.jpg",
    variants: [
      {
        image: "/src/assets/images/dck20_start_profile_bas_1783938973850.jpg",
        reference: "DCK20-BAŞ",
        colorNameFr: "Profil de Départ",
        colorNameDarija: "بروفيل البداية"
      },
      {
        image: "/src/assets/images/dck20_end_profile_bts_1783938958299.jpg",
        reference: "DCK20-BTŞ",
        colorNameFr: "Profil de Finition",
        colorNameDarija: "بروفيل النهاية"
      }
    ]
  },

  {
    id: "ext-11",
    image: "/src/assets/images/dck1418_architectural_view_1783939541013.jpg",
    nameFr: "Siding Wall Panel (DCK1418)",
    nameDarija: "بانو سيدينغ حائطي (DCK1418)",
    reference: "DCK1418",
    category: "exterior",
    dimensions: "W: 141mm × H: 18mm × L: 3000mm | Coverage: 123mm",
    colors: ["Options de couleurs intérieures et extérieures"],
    materialFr: "WPC (Wood Plastic Composite)",
    materialDarija: "خشب بلاستيكي مركب (WPC)",
    descriptionFr: "Panneau de bardage horizontal avec design à chevauchement.",
    descriptionDarija: "بانو سيدينغ أفقي بتصميم متداخل.",
    characteristicsFr: ["Étanche", "Anti-humidité", "Ininflammable", "Isolation acoustique", "Résistance aux UV", "Isolation thermique"],
    characteristicsDarija: ["مقاوم للماء", "مقاوم للرطوبة", "غير قابل للاشتعال", "عازل للصوت", "مقاوم للأشعة فوق البنفسجية", "عازل حراري"],
    applicationsFr: ["Bardage extérieur", "Revêtement de façade"],
    applicationsDarija: ["سيدينغ خارجي", "تغليف الواجهات"],
    catalogueImage: "/src/assets/images/dck1418_catalog_shot_1783939526445.jpg",
    variants: [
      {
        image: "/src/assets/images/dck1418_catalog_shot_1783939526445.jpg",
        reference: "DCK1418-STUDIO",
        colorNameFr: "Vue Studio",
        colorNameDarija: "عرض ستوديو"
      },
      {
        image: "/src/assets/images/dck1418_architectural_view_1783939541013.jpg",
        reference: "DCK1418-ARCHI",
        colorNameFr: "Mise en situation",
        colorNameDarija: "عرض معماري"
      }
    ]
  },
  {
    id: "ext-13",
    image: "/src/assets/images/pvc_marble_wall_1783010022744.jpg",
    nameFr: "PVC Double Wall Panel (DCK14-PVC)",
    nameDarija: "بانو PVC مزدوج (DCK14-PVC)",
    reference: "DCK14-PVC",
    category: "exterior",
    dimensions: "W: 141mm × H: 18mm × L: 3000mm | Coverage: 110mm",
    colors: ["Options de couleurs intérieures et extérieures"],
    materialFr: "PVC (Polyvinyl Chloride)",
    materialDarija: "PVC",
    descriptionFr: "Panneau mural à double nervure à base de PVC pour usage intérieur.",
    descriptionDarija: "بانو حائطي PVC بضلعين للاستعمال الداخلي.",
    characteristicsFr: ["Étanche", "Anti-humidity", "Ininflammable", "Isolation acoustique", "Résistance aux UV", "Isolation thermique"],
    characteristicsDarija: ["مقاوم للماء", "مقاوم للرطوبة", "غير قابل للاشتعال", "عازل للصوت", "مقاوم للأشعة فوق البنفسجية", "عازل حراري"],
    applicationsFr: ["Décoration murale intérieure", "Panneaux arrière TV", "Murs d'accent"],
    applicationsDarija: ["ديكور داخلي", "بانو خلف التلفزة", "حيط ديكوري"],
  },
  {
    id: "ext-14",
    image: "/src/assets/images/dck1918_architectural_view_1783940166240.jpg",
    nameFr: "PVC Triple Wall Panel (DCK1918-PVC)",
    nameDarija: "بانو PVC ثلاثي (DCK1918-PVC)",
    reference: "DCK1918-PVC",
    category: "exterior",
    dimensions: "W: 196mm × H: 18mm × L: 3000mm | Coverage: 165mm",
    colors: ["Options de couleurs intérieures et extérieures"],
    materialFr: "PVC (Polyvinyl Chloride)",
    materialDarija: "PVC",
    descriptionFr: "Panneau mural à triple nervure à base de PVC pour usage intérieur.",
    descriptionDarija: "بانو حائطي PVC بثلاثة أضلاع للاستعمال الداخلي.",
    characteristicsFr: ["Étanche", "Anti-humidité", "Ininflammable", "Isolation acoustique", "Résistance aux UV", "Isolation thermique"],
    characteristicsDarija: ["مقاوم للماء", "مقاوم للرطوبة", "غير قابل للاشتعال", "عازل للصوت", "مقاوم للأشعة فوق البنفسجية", "عازل حراري"],
    applicationsFr: ["Décoration murale intérieure", "Têtes de lit", "Murs d'accent"],
    applicationsDarija: ["ديكور داخلي", "خلفية السرير", "حيط ديكوري"],
    catalogueImage: "/src/assets/images/dck1918_catalog_shot_1783940146325.jpg",
    variants: [
      {
        image: "/src/assets/images/dck1918_catalog_shot_1783940146325.jpg",
        reference: "DCK1918-STUDIO",
        colorNameFr: "Vue Studio",
        colorNameDarija: "عرض ستوديو"
      },
      {
        image: "/src/assets/images/dck1918_architectural_view_1783940166240.jpg",
        reference: "DCK1918-ARCHI",
        colorNameFr: "Mise en situation",
        colorNameDarija: "عرض معماري"
      }
    ]
  },
  {
    id: "ext-15",
    image: "/src/assets/images/dck14_bas_pvc_profile_1783940520000_1783940455300.jpg",
    nameFr: "PVC Panel Start Profile (DCK14-BAŞ PVC)",
    nameDarija: "بروفيل بداية بانو PVC (DCK14-BAŞ PVC)",
    reference: "DCK14-BAŞ",
    category: "exterior",
    dimensions: "W: 56mm × H: 18mm × L: 3000mm | Coverage: 33mm",
    colors: ["Finition aspect bois"],
    materialFr: "PVC",
    materialDarija: "PVC",
    descriptionFr: "Profil de départ pour l'installation de panneaux PVC.",
    descriptionDarija: "بروفيل البداية لتركيب بانويات PVC.",
    characteristicsFr: ["Fournit un bord de départ propre"],
    characteristicsDarija: ["كيعطي حافة بداية نقية"],
    applicationsFr: ["Accessoire d'installation pour panneaux PVC"],
    applicationsDarija: ["إكسسوار تركيب لبانويات PVC"],
  },
  {
    id: "ext-16",
    image: "/src/assets/images/dck14_bts_pvc_profile_v2_1783940835000_1783940842838.jpg",
    nameFr: "PVC Panel End Profile (DCK14-BTŞ PVC)",
    nameDarija: "بروفيل نهاية بانو PVC (DCK14-BTŞ PVC)",
    reference: "DCK14-BTŞ",
    category: "exterior",
    dimensions: "W: 63mm × H: 18mm × L: 3000mm | Coverage: 55mm",
    colors: ["Finition aspect bois"],
    materialFr: "PVC",
    materialDarija: "PVC",
    descriptionFr: "Profil de bord de finition pour système de panneaux PVC.",
    descriptionDarija: "بروفيل الحافة النهائية لنظام بانويات PVC.",
    characteristicsFr: ["Fournit un bord de terminaison propre"],
    characteristicsDarija: ["كيعطي حافة نهاية نقية"],
    applicationsFr: ["Accessoire d'installation pour panneaux PVC"],
    applicationsDarija: ["إكسسوار تركيب لبانويات PVC"],
  },
  {
    id: "ext-17",
    image: "/src/assets/images/dck1828_kitkat_profile_catalog_1783941013825.jpg",
    nameFr: "KitKat Profile (DCK1828)",
    nameDarija: "بروفيل كيت كات (DCK1828)",
    reference: "DCK1828",
    category: "exterior",
    dimensions: "W: 180mm × H: 28mm × L: 3000mm | Coverage: 158mm",
    colors: ["Finition aspect bois"],
    materialFr: "WPC (Wood Plastic Composite)",
    materialDarija: "خشب بلاستيكي مركب (WPC)",
    descriptionFr: "Nouveau produit - Panneau mural multi-nervures de style KitKat.",
    descriptionDarija: "منتج جديد - بانو حائطي بستايل كيت كات متعدد الأضلاع.",
    characteristicsFr: ["Design à quatre nervures with chambres creuses", "Esthétique moderne", "Léger", "Installation facile"],
    characteristicsDarija: ["تصميم بـ 4 أضلاع مع غرف مجوفة", "جمالية عصرية", "خفيف", "تركيب ساهل"],
    applicationsFr: ["Revêtement mural intérieur et extérieur", "Panneaux décoratifs"],
    applicationsDarija: ["تغليف حائطي داخلي وخارجي", "بانويات ديكورية"],
  },
  {
    id: "ext-18",
    image: "/src/assets/images/dck1830_pvc_kitkat_eco_catalog_1783941174203.jpg",
    nameFr: "KitKat Eco Profile (DCK1830-PVC)",
    nameDarija: "بروفيل كيت كات اقتصادي (DCK1830-PVC)",
    reference: "DCK1830-PVC",
    category: "exterior",
    dimensions: "W: 180mm × H: 30mm × L: 3000mm | Coverage: 156mm",
    colors: ["Finition aspect bois"],
    materialFr: "PVC",
    materialDarija: "PVC",
    descriptionFr: "Nouveau produit - Panneau PVC de style KitKat écologique.",
    descriptionDarija: "منتج جديد - بانو PVC بستايل كيت كات صديق للبيئة.",
    characteristicsFr: ["Design à trois nervures with chambres creuses", "Esthétique moderne", "Léger", "Rentable"],
    characteristicsDarija: ["تصميم بـ 3 أضلاع مع غرف مجوفة", "جمالية عصرية", "خفيف", "اقتصادي"],
    applicationsFr: ["Décoration murale intérieure", "Murs d'accent"],
    applicationsDarija: ["ديكور داخلي", "حيط ديكوري"],
  },
  {
    id: "ext-19",
    image: "/src/assets/images/dck1828_bas_start_profile_1783963844289.jpg",
    nameFr: "KitKat Start Profile (DCK1828-BAŞ)",
    nameDarija: "بروفيل بداية كيت كات (DCK1828-BAŞ)",
    reference: "DCK1828-BAŞ",
    category: "exterior",
    dimensions: "W: 53mm × H: 28mm × L: 3000mm | Coverage: 37mm",
    colors: ["Finition aspect bois"],
    materialFr: "WPC / Composite",
    materialDarija: "خشب مركب / كومبوزيت",
    descriptionFr: "Profil de départ pour l'installation du panneau DCK1828.",
    descriptionDarija: "بروفيل البداية لتركيب ألواح DCK1828.",
    characteristicsFr: ["Fournit un bord de départ propre"],
    characteristicsDarija: ["كيعطي حافة بداية نقية"],
    applicationsFr: ["Accessoire d'installation pour panneaux DCK1828"],
    applicationsDarija: ["إكسسوار تركيب لألواح DCK1828"],
  },
  {
    id: "ext-20",
    image: "/src/assets/images/dck1828_bts_end_profile_1783963970739.jpg",
    nameFr: "KitKat End Profile (DCK1828-BTŞ)",
    nameDarija: "بروفيل نهاية كيت كات (DCK1828-BTŞ)",
    reference: "DCK1828-BTŞ",
    category: "exterior",
    dimensions: "W: 59mm × H: 28mm × L: 3000mm | Coverage: 53mm",
    colors: ["Finition aspect bois"],
    materialFr: "WPC / Composite",
    materialDarija: "خشب مركب / كومبوزيت",
    descriptionFr: "Profil de bord de finition pour système de panneaux KitKat.",
    descriptionDarija: "بروفيل الحافة النهائية لنظام بانويات كيت كات.",
    characteristicsFr: ["Fournit un bord de terminaison propre"],
    characteristicsDarija: ["كيعطي حافة نهاية نقية"],
    applicationsFr: ["Accessoire d'installation pour panneaux DCK1828"],
    applicationsDarija: ["إكسسوار تركيب لألواح DCK1828"],
  },
  {
    id: "ext-21",
    image: "/src/assets/images/dck1830_bas_eco_start_profile_1783964139969.jpg",
    nameFr: "KitKat Eco Start Profile (DCK1830-BAŞ)",
    nameDarija: "بروفيل بداية كيت كات اقتصادي (DCK1830-BAŞ)",
    reference: "DCK1830-BAŞ",
    category: "exterior",
    dimensions: "W: 48mm × H: 30mm × L: 3000mm | Coverage: 30mm",
    colors: ["Finition aspect bois"],
    materialFr: "PVC",
    materialDarija: "PVC",
    descriptionFr: "Profil de départ pour l'installation du panneau DCK1830-PVC.",
    descriptionDarija: "بروفيل البداية لتركيب ألواح DCK1830-PVC.",
    characteristicsFr: ["Fournit un bord de départ propre"],
    characteristicsDarija: ["كيعطي حافة بداية نقية"],
    applicationsFr: ["Accessoire d'installation pour panneaux DCK1830-PVC"],
    applicationsDarija: ["إكسسوار تركيب لألواح DCK1830-PVC"],
  },
  {
    id: "ext-22",
    image: "/src/assets/images/dck1830_bts_eco_end_profile_1783964286130.jpg",
    nameFr: "KitKat Eco End Profile (DCK1830-BTŞ)",
    nameDarija: "بروفيل نهاية كيت كات اقتصادي (DCK1830-BTŞ)",
    reference: "DCK1830-BTŞ",
    category: "exterior",
    dimensions: "W: 58mm × H: 30mm × L: 3000mm | Coverage: 53mm",
    colors: ["Finition aspect bois"],
    materialFr: "PVC",
    materialDarija: "PVC",
    descriptionFr: "Profil de bord de finition pour système de panneaux KitKat Eco.",
    descriptionDarija: "بروفيل الحافة النهائية لنظام بانويات كيت كات الاقتصادي.",
    characteristicsFr: ["Fournit un bord de terminaison propre"],
    characteristicsDarija: ["كيعطي حافة نهاية نقية"],
    applicationsFr: ["Accessoire d'installation pour panneaux DCK1830-PVC"],
    applicationsDarija: ["إكسسوار تركيب لألواح DCK1830-PVC"],
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Yassine El Kadiri",
    roleFr: "Client Particulier",
    roleDarija: "زبون خاص",
    contentFr: "Nous avons commandé des panneaux PVC marbre pour notre villa à Bouskoura. La qualité des matériaux est exceptionnelle et la livraison a été très rapide. Un excellent grossiste à Casablanca !",
    contentDarija: "شرينا بانو رخام PVC للفيلا ديالنا في بوسكورة. السلعة جودتها عالية بزاف والتوصيل كان سريع. بائع جملة ممتاز في كازا !",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    projectTypeFr: "Panneaux PVC Marbre",
    projectTypeDarija: "بانويات PVC رخامية",
  },
  {
    id: "t2",
    name: "Sarah Bensouda",
    roleFr: "Architecte d'Intérieur",
    roleDarija: "مهندسة ديكور داخلي",
    contentFr: "En tant qu'architecte, je recommande Deconil Maroc pour la richesse de leur catalogue et la qualité de leurs produits. Leurs lambris polymère sont parfaits pour des finitions haut de gamme.",
    contentDarija: "أنا كمهندسة ديكور كننصح بـ Deconil Maroc على قبل تنوع السلعة والجودة ديالها. اللومبري بوليمر ديالهم ممتاز للفينيسيون الراقية.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    projectTypeFr: "Lambris Polymère & Profilés",
    projectTypeDarija: "لومبري بوليمر وبروفيلات",
  },
  {
    id: "t3",
    name: "Karim Tazi",
    roleFr: "Gérant de Commerce",
    roleDarija: "مسير تجاري",
    contentFr: "Nous avons utilisé leur bardage WPC pour notre local commercial. Le matériau est très résistant et le prix est très compétitif. Le stock est toujours disponible.",
    contentDarija: "خدمنا بالـ WPC ديالهم للمحل التجاري ديالنا. السلعة صحيحة بزاف والثمن مناسب جداً. الستوك ديما موجود.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
    projectTypeFr: "Bardage WPC Extérieur",
    projectTypeDarija: "تغليف WPC خارجي",
  }
];
