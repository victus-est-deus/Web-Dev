export interface Product {
    id: number;
    name: string;
    rating: string;
    description: string;
    link: string;
    img: string;
  
  }
  
  export const products = [
    {
      id: 1,
      name: `Смартфон Apple iPhone 14 Pro Max 1Tb Dual Sim`,
      rating: '4.5 / 5.0',
      description: "технология NFC: Да цвет: черный тип экрана: OLED, Super Retina XDR display с возможностью постоянной работы диагональ: 6.7 дюйм размер оперативной памяти: 6 ГБ процессор: 6-ядерный Apple A16 Bionic объем встроенной памяти: 1024 ГБ емкость аккумулятора: 3095 мАч",
      link: `https://kaspi.kz/shop/p/apple-iphone-14-pro-max-1tb-dual-sim-chernyi-107116389/?c=750000000#!/item`,
      img: `iphone14.jpg`,
    },
    {
      id: 2,
      name: 'Смартфон Samsung Galaxy Z Fold4 12 ГБ/512 ГБ ',
      rating: '4.7 / 5.0',
      description: 'технология NFC: Да цвет: черныйтип экрана: Dynamic AMOLED 2X диагональ: 7.6 дюйм размер оперативной памяти: 12 ГБпроцессор: 8-ядерный Qualcomm Snapdragon 8 Gen 1 объем встроенной памяти: 512 ГБ емкость аккумулятора: 4400 мАч',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-z-fold4-12-gb-512-gb-chernyi-podarok-106036420/?c=750000000#!/item',
      img: 'zfold.jpg'
    },
    {
      id: 3,
      name: 'Смартфон Huawei Mate XS 2 PAL-LX9 8 ГБ/512 ГБ',
      rating: '4.8 / 5.0',
      description: 'технология NFC: Да цвет: белый тип экрана: OLED, сенсорный, мультитач диагональ: 7.8 дюйм размер оперативной памяти: 8 ГБ процессор: 8-ядерный Qualcomm Snapdragon 888 объем встроенной памяти: 512 ГБ емкость аккумулятора: 4600 мАчBig tablet',
      link: 'https://kaspi.kz/shop/p/huawei-mate-xs-2-pal-lx9-8-gb-512-gb-belyi-106299672/?c=750000000#!/item',
      img: 'huaweimate.jpg',
    },
    {
      id: 4,
      name: 'Планшет Apple iPad Pro 2020 11 1Tb ',
      rating: '3.9 / 5.0',
      description: 'диагональ: 11 дюйм разрешение экрана: 2388x1668 технология изготовления экрана: TFT IPS размер оперативной памяти: 6 Гб размер встроенной памяти: 1024 ГБ емкость аккумулятора: 2800 мАч цвет: серый',
      link: 'https://kaspi.kz/shop/p/apple-ipad-pro-2020-11-1tb-wi-fi-cellular-seryi-100277111/?c=750000000#!/item',
      img: 'ipad.jpg',
    },
    {
      id: 5,
      name: 'Планшет Samsung Galaxy Tab S8 Ultra SM-X906 14.6 дюймов 12 Гб/256 Гб серый',
      rating: '4.7 / 5.0',
      description: 'диагональ: 14.6 дюйм разрешение экрана: 1848x2960 технология изготовления экрана: Super AMOLED размер оперативной памяти: 12 Гб размер встроенной памяти: 256 ГБ емкость аккумулятора: 11200 мАч цвет: серый',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s8-ultra-sm-x906-14-6-djuimov-12-gb-256-gb-seryi-103700021/?c=750000000#!/item',
      img: 'samsungtab8.jpg',
    },
    {
      id: 6,
      name: 'Iphone14',
      rating: '3.7 / 5.0',
      description: 'Useless phone for the price',
      link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiAxbefBhDfARIsAL4XLRqJQ2ypisjDix88pAAY3uqDCOhK633XOEVDbIroqqdhBMpVDxpsd6EaAp31EALw_wcB#!/item',
      img: 'Iphone14.jpg',
    },
    {
      id: 7,
      name: 'Lenovo IdeaPad 3',
      rating: '4.1 / 5.0',
      description: 'Good Laptop for the price',
      link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiAxbefBhDfARIsAL4XLRqJQ2ypisjDix88pAAY3uqDCOhK633XOEVDbIroqqdhBMpVDxpsd6EaAp31EALw_wcB#!/item',
      img: 'LenovoIdeapad3.jpg',
    },
    {
      id: 8,
      name: 'SamsungA13',
      rating: '4.9 / 5.0',
      description: 'Good phone for the price',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiAxbefBhDfARIsAL4XLRqJQ2ypisjDix88pAAY3uqDCOhK633XOEVDbIroqqdhBMpVDxpsd6EaAp31EALw_wcB#!/item',
      img: 'SamsungA13.jpg',
    },
    {
      id: 9,
      name: `Samsung Galaxy Tab4`,
      rating: '4.0 / 5.0',
      description: 'Good tablet for the price',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-a8-sm-x205n-10-5-djuimov-4-gb-64-gb-seryi-103450735/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiAxbefBhDfARIsAL4XLRqJQ2ypisjDix88pAAY3uqDCOhK633XOEVDbIroqqdhBMpVDxpsd6EaAp31EALw_wcB#!/item',
      img: 'SamsungGalaxyTab4.jpg',
    },
    {
      id: 10,
      name: 'Xiaomi Redmi11',
      rating: '4.9 / 5.0',
      description: 'Good phone for the quality && price',
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-10c-4-gb-128-gb-seryi-104417231/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiAxbefBhDfARIsAL4XLRqJQ2ypisjDix88pAAY3uqDCOhK633XOEVDbIroqqdhBMpVDxpsd6EaAp31EALw_wcB#!/item',
      img: 'XiamoRedmi11.jpg',
    },
  ];