export const initialState = {
  categories: [
    {
      key: 'scissors',
      name: 'Ножницы',
      img: 'scissors.svg'
    },
    {
      key: 'combs',
      name: 'Расчёски',
      img: 'comb.svg'
    },
    {
      key: 'cosmetics',
      name: 'Косметика',
      img: 'cosmetics.svg'
    },
    {
      key: 'nail-kits',
      name: 'Маникюрные наборы',
      img: 'nail-kit.svg'
    },
    {
      key: 'hair-dyes',
      name: 'Краска для волос',
      img: 'hair-dye.svg'
    },
    {
      key: 'hairsprays',
      name: 'Лак для волос',
      img: 'hairspray.svg'
    }
  ],
  products: {
    scissors: [
      {
        id: '0',
        category: 'scissors',
        name: 'Ножницы 0',
        img: 'https://rezat.ru/db.img/catalog/img/wm/38305.jpg',
        price: 228,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
          'Consequatur deserunt eaque in inventore ' +
          'iure maiores neque, nobis quas qui quo ratione tenetur ut ' +
          'vitae? Eaque expedita iste maxime officia provident.'
      },
      {
        id: '1',
        category: 'scissors',
        name: 'Ножницы 1',
        img: '',
        price: 228,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
          'Consequatur deserunt eaque in inventore ' +
          'iure maiores neque, nobis quas qui quo ratione tenetur ut ' +
          'vitae? Eaque expedita iste maxime officia provident.'
      },
      {
        id: '2',
        category: 'scissors',
        name: 'Ножницы 2',
        img: 'https://cdn1.ozone.ru/s3/multimedia-1/wc1200/6018875125.jpg',
        price: 228,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
          'Consequatur deserunt eaque in inventore ' +
          'iure maiores neque, nobis quas qui quo ratione tenetur ut ' +
          'vitae? Eaque expedita iste maxime officia provident.'
      }
    ],
    combs: [
      {
        id: '3',
        category: 'combs',
        name: 'Расчёски 0',
        img: '',
        price: 228,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
          'Consequatur deserunt eaque in inventore ' +
          'iure maiores neque, nobis quas qui quo ratione tenetur ut ' +
          'vitae? Eaque expedita iste maxime officia provident.'
      },
      {
        id: '4',
        category: 'combs',
        name: 'Расчёски 1',
        img: '',
        price: 228,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
          'Consequatur deserunt eaque in inventore ' +
          'iure maiores neque, nobis quas qui quo ratione tenetur ut ' +
          'vitae? Eaque expedita iste maxime officia provident.'
      },
      {
        id: '5',
        category: 'combs',
        name: 'Расчёски 2',
        img: '',
        price: 228,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
          'Consequatur deserunt eaque in inventore ' +
          'iure maiores neque, nobis quas qui quo ratione tenetur ut ' +
          'vitae? Eaque expedita iste maxime officia provident.'
      }
    ],
    cosmetics: [
      {
        id: '6',
        category: 'cosmetics',
        name: 'Косметика 0',
        img: '',
        price: 228,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
          'Consequatur deserunt eaque in inventore ' +
          'iure maiores neque, nobis quas qui quo ratione tenetur ut ' +
          'vitae? Eaque expedita iste maxime officia provident.'
      },
      {
        id: '7',
        category: 'cosmetics',
        name: 'Косметика 1',
        img: '',
        price: 228,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
          'Consequatur deserunt eaque in inventore ' +
          'iure maiores neque, nobis quas qui quo ratione tenetur ut ' +
          'vitae? Eaque expedita iste maxime officia provident.'
      },
      {
        id: '8',
        category: 'cosmetics',
        name: 'Косметика 2',
        img: 'https://images.wbstatic.net/c516x688/new/4020000/4023621-1.jpg',
        price: 228,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
          'Consequatur deserunt eaque in inventore ' +
          'iure maiores neque, nobis quas qui quo ratione tenetur ut ' +
          'vitae? Eaque expedita iste maxime officia provident.'
      }
    ],
    'nail-kits': [
      {
        id: '9',
        category: 'nail-kits',
        name: 'Маникюрные наборы 0',
        img: '',
        price: 228,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
          'Consequatur deserunt eaque in inventore ' +
          'iure maiores neque, nobis quas qui quo ratione tenetur ut ' +
          'vitae? Eaque expedita iste maxime officia provident.'
      },
      {
        id: '10',
        category: 'nail-kits',
        name: 'Маникюрные наборы 1',
        img: '',
        price: 228,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
          'Consequatur deserunt eaque in inventore ' +
          'iure maiores neque, nobis quas qui quo ratione tenetur ut ' +
          'vitae? Eaque expedita iste maxime officia provident.'
      },
      {
        id: '11',
        category: 'nail-kits',
        name: 'Маникюрные наборы 2',
        img: '',
        price: 228,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
          'Consequatur deserunt eaque in inventore ' +
          'iure maiores neque, nobis quas qui quo ratione tenetur ut ' +
          'vitae? Eaque expedita iste maxime officia provident.'
      }
    ],
    'hair-dyes': [
      {
        id: '12',
        category: 'hair-dyes',
        name: 'Краска для волос 0',
        img: '',
        price: 228,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
          'Consequatur deserunt eaque in inventore ' +
          'iure maiores neque, nobis quas qui quo ratione tenetur ut ' +
          'vitae? Eaque expedita iste maxime officia provident.'
      },
      {
        id: '13',
        category: 'hair-dyes',
        name: 'Краска для волос 1',
        img: '',
        price: 228,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
          'Consequatur deserunt eaque in inventore ' +
          'iure maiores neque, nobis quas qui quo ratione tenetur ut ' +
          'vitae? Eaque expedita iste maxime officia provident.'
      },
      {
        id: '14',
        category: 'hair-dyes',
        name: 'Краска для волос 2',
        img: '',
        price: 228,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
          'Consequatur deserunt eaque in inventore ' +
          'iure maiores neque, nobis quas qui quo ratione tenetur ut ' +
          'vitae? Eaque expedita iste maxime officia provident.'
      }
    ],
    hairsprays: [
      {
        id: '15',
        category: 'hairsprays',
        name: 'Лак для волос 0',
        img: '',
        price: 228,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
          'Consequatur deserunt eaque in inventore ' +
          'iure maiores neque, nobis quas qui quo ratione tenetur ut ' +
          'vitae? Eaque expedita iste maxime officia provident.'
      },
      {
        id: '16',
        category: 'hairsprays',
        name: 'Лак для волос 1',
        img: '',
        price: 228,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
          'Consequatur deserunt eaque in inventore ' +
          'iure maiores neque, nobis quas qui quo ratione tenetur ut ' +
          'vitae? Eaque expedita iste maxime officia provident.'
      },
      {
        id: '17',
        category: 'hairsprays',
        name: 'Лак для волос 2',
        img: '',
        price: 228,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
          'Consequatur deserunt eaque in inventore ' +
          'iure maiores neque, nobis quas qui quo ratione tenetur ut ' +
          'vitae? Eaque expedita iste maxime officia provident.'
      }
    ]
  },
  cart: []
}
