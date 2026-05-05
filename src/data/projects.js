const villa159Modules = import.meta.glob('../assets/Project-1-Villa-159/*', { eager: true, import: 'default' });
const villa80Modules = import.meta.glob('../assets/Project-2-Villa-80/*', { eager: true, import: 'default' });
const villa113Modules = import.meta.glob('../assets/Project-3-Villa-113/*', { eager: true, import: 'default' });

const IMAGE_EXTENSIONS = ['.jpeg', '.jpg', '.png', '.webp', '.gif', '.JPEG', '.JPG', '.PNG'];

function filterAssets(modules, extensions) {
  return Object.entries(modules)
    .filter(([path]) => {
      const ext = path.substring(path.lastIndexOf('.')).toLowerCase();
      return extensions.map(e => e.toLowerCase()).includes(ext);
    })
    .map(([, url]) => url);
}

const villa159Images = filterAssets(villa159Modules, IMAGE_EXTENSIONS);
const villa159Pdfs = filterAssets(villa159Modules, ['.pdf']);

const villa80Images = filterAssets(villa80Modules, IMAGE_EXTENSIONS);
const villa80Pdfs = filterAssets(villa80Modules, ['.pdf']);

const villa113Images = filterAssets(villa113Modules, IMAGE_EXTENSIONS);
const villa113Pdfs = filterAssets(villa113Modules, ['.pdf']);

export const projects = [
  {
    id: 1,
    name: 'Villa 159',
    nameAr: 'فيلا 159',
    location: 'الحي الثاني شرق، مدينة الشروق',
    locationDetail: 'فيلا 159 تقع في أميز احياء مدينة الشروق والأكثر نسبة اشغال وخدمات الحي الثاني شرق بالقرب من نادي جرين هيلز والدون تاون وكمبوند جنة ودار مصر',
    images: villa159Images,
    pdfs: villa159Pdfs,
    tag: 'PREMIUM',
    tagColor: '#C0501A',
  },
  {
    id: 2,
    name: 'Villa 80',
    nameAr: 'فيلا 80',
    location: 'الحي الثالث شرق، مدينة الشروق',
    locationDetail: 'فيلا 80 الحي الثالث شرق لوكشن مميز قريب من طريق الحرية',
    images: villa80Images,
    pdfs: villa80Pdfs,
    tag: 'DISTINCTIVE',
    tagColor: '#E8845A',
  },
  {
    id: 3,
    name: 'Villa 113',
    nameAr: 'فيلا 113',
    location: 'الحي الثاني شرق، مدينة الشروق',
    locationDetail: 'فيلا 113 الحي الثاني شرق مجاورة الثالثة ثاني نمرة من طريق السادات وشارع الشباب وميدان النهضة',
    images: villa113Images,
    pdfs: villa113Pdfs,
    tag: 'EXCLUSIVE',
    tagColor: '#8C3A12',
  },
];