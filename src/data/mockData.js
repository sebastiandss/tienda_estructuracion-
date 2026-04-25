export const stores = [
  {
    id: 'tech-store',
    name: 'merC',
    theme: {
      primaryColor: '#0C6E50',
      secondaryColor: '#E6F4EE',
      backgroundColor: '#F0F2F5',
      textColor: '#1C1C1E',
      font: '"Figtree", sans-serif'
    },
    products: [
      { 
        id: 1, 
        name: 'Auriculares Pro X', 
        price: 289000, 
        originalPrice: null,
        description: 'Cancelación de ruido activa · 40h batería, conexión multidevice', 
        category: 'Audio',
        tags: [{ type: 'new', label: 'Nuevo' }],
        rating: 4.9,
        reviews: 120,
        imageClass: 'thumb-a' 
      },
      { 
        id: 2, 
        name: 'Monitor 27" 144Hz QHD', 
        price: 980000, 
        originalPrice: 1150000,
        description: 'Panel IPS QHD (2560×1440) 1ms · FreeSync Premium, sRGB 99%', 
        category: 'Monitores',
        tags: [{ type: 'sale', label: '−15%' }, { type: 'pop', label: 'Popular' }],
        rating: 4.8,
        reviews: 382,
        imageClass: 'thumb-b' 
      },
      { 
        id: 3, 
        name: 'Teclado Mecánico TKL', 
        price: 320000, 
        originalPrice: null,
        description: 'Switches Red · Sin teclado numérico · RGB por tecla, PBT doubleshot', 
        category: 'Periféricos',
        tags: [],
        rating: 4.7,
        reviews: 85,
        imageClass: 'thumb-h' 
      },
      { 
        id: 4, 
        name: 'Altavoz Portátil Wave', 
        price: 192000, 
        originalPrice: 240000,
        description: '360° · Resistente al agua IPX7 · 24h autonomía, par estéreo', 
        category: 'Audio',
        tags: [{ type: 'sale', label: '−20%' }],
        rating: 4.6,
        reviews: 210,
        imageClass: 'thumb-a' 
      },
      { 
        id: 5, 
        name: 'Cámara Mirrorless M50', 
        price: 2100000, 
        originalPrice: null,
        description: '24MP · Video 4K30fps · OLED táctil, estabilización 5 ejes', 
        category: 'Cámaras',
        tags: [{ type: 'pop', label: 'Popular' }],
        rating: 4.9,
        reviews: 45,
        imageClass: 'thumb-b' 
      },
      { 
        id: 6, 
        name: 'Ratón Gaming Inalámbrico', 
        price: 145000, 
        originalPrice: null,
        description: 'Sensor óptico 20K DPI · Latencia <1ms, 70h batería, RGB', 
        category: 'Periféricos',
        tags: [{ type: 'new', label: 'Nuevo' }],
        rating: 4.8,
        reviews: 312,
        imageClass: 'thumb-c' 
      },
      { 
        id: 7, 
        name: 'SSD NVMe 1TB Gen4', 
        price: 210000, 
        originalPrice: 260000,
        description: 'Lectura 7000MB/s · Ideal para PS5 y PC Gaming', 
        category: 'Almacenamiento',
        tags: [{ type: 'sale', label: '−19%' }],
        rating: 4.9,
        reviews: 890,
        imageClass: 'thumb-e' 
      },
      { 
        id: 8, 
        name: 'Smartwatch Series X', 
        price: 850000, 
        originalPrice: 950000,
        description: 'Pantalla AMOLED 1.4" · GPS integrado, monitor de ritmo cardíaco', 
        category: 'Wearables',
        tags: [{ type: 'sale', label: '−10%' }],
        rating: 4.7,
        reviews: 240,
        imageClass: 'thumb-f' 
      },
      { 
        id: 9, 
        name: 'Micrófono USB Condensador', 
        price: 220000, 
        originalPrice: null,
        description: 'Patrón cardioide · Plug & Play para PC/Mac, control de ganancia', 
        category: 'Audio',
        tags: [{ type: 'pop', label: 'Popular' }],
        rating: 4.6,
        reviews: 156,
        imageClass: 'thumb-g' 
      },
      { 
        id: 10, 
        name: 'Tablet Pro 11"', 
        price: 1800000, 
        originalPrice: null,
        description: '128GB, WiFi 6 · Pantalla Liquid Retina, compatible con stylus', 
        category: 'Tablets',
        tags: [{ type: 'new', label: 'Nuevo' }],
        rating: 4.9,
        reviews: 420,
        imageClass: 'thumb-i' 
      },
      { 
        id: 11, 
        name: 'Webcam 4K Ultra HD', 
        price: 340000, 
        originalPrice: 400000,
        description: 'Enfoque automático · HDR, micrófono dual integrado', 
        category: 'Periféricos',
        tags: [{ type: 'sale', label: '−15%' }],
        rating: 4.5,
        reviews: 95,
        imageClass: 'thumb-b' 
      },
      { 
        id: 12, 
        name: 'Powerbank 20000mAh', 
        price: 95000, 
        originalPrice: null,
        description: 'Carga rápida 20W · 2 puertos USB-A, 1 puerto USB-C PD', 
        category: 'Accesorios',
        tags: [],
        rating: 4.8,
        reviews: 650,
        imageClass: 'thumb-d' 
      }
    ]
  }
];
