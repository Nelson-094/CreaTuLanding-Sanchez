const products = [
    {
        id: '1',
        title: 'Remera Básica Blanca',
        price: 2500,
        category: 'remeras',
        description: 'Remera básica de algodón 100% en color blanco. Perfecta para cualquier ocasión.',
        image: 'https://via.placeholder.com/300x300/FFFFFF/000000?text=Remera+Blanca',
        stock: 15
    },
    {
        id: '2',
        title: 'Remera Estampada Negra',
        price: 3200,
        category: 'remeras',
        description: 'Remera con estampado moderno en color negro. Material premium.',
        image: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=Remera+Negra',
        stock: 8
    },
    {
        id: '3',
        title: 'Jean Clásico Azul',
        price: 8500,
        category: 'pantalones',
        description: 'Jean clásico de corte recto en color azul tradicional.',
        image: 'https://via.placeholder.com/300x300/4169E1/FFFFFF?text=Jean+Azul',
        stock: 12
    },
    {
        id: '4',
        title: 'Pantalón Chino Beige',
        price: 6800,
        category: 'pantalones',
        description: 'Pantalón chino elegante en color beige. Ideal para ocasiones formales.',
        image: 'https://via.placeholder.com/300x300/F5F5DC/000000?text=Chino+Beige',
        stock: 20
    },
    {
        id: '5',
        title: 'Zapatillas Deportivas',
        price: 12000,
        category: 'calzado',
        description: 'Zapatillas deportivas cómodas y modernas. Perfectas para entrenar.',
        image: 'https://via.placeholder.com/300x300/FF6347/FFFFFF?text=Zapatillas',
        stock: 6
    },
    {
        id: '6',
        title: 'Zapatos Casuales',
        price: 15500,
        category: 'calzado',
        description: 'Zapatos casuales de cuero genuino. Elegantes y cómodos.',
        image: 'https://via.placeholder.com/300x300/8B4513/FFFFFF?text=Zapatos',
        stock: 10
    }
];

// Simular delay de API
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 1000);
    });
};

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filteredProducts = products.filter(product => product.category === categoryId);
            resolve(filteredProducts);
        }, 1000);
    });
};

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const product = products.find(product => product.id === productId);
            resolve(product);
        }, 1000);
    });
};