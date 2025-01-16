export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'imageSrc',
            type: 'image',
            title: 'Product Image',
            options: {
                hotspot: true, // Enables cropping and focal point selection
            },
        },
        {
            name: 'productName',
            type: 'string',
            title: 'Product Name',
        },
        {
            name: 'subTitle',
            type: 'string',
            title: 'Sub Title',
        },
        {
            name: 'description1',
            type: 'string',
            title: 'Description 1',
        },
        {
            name: 'description2',
            type: 'string',
            title: 'Description 2',
        },
        {
            name: 'priceTag',
            type: 'string',
            title: 'Price Tag',
        },
    ]
};
