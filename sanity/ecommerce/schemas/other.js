export default {
    name: 'other',
    title: 'Other',
    type: 'document',
    fields: [{
        name:'image',
        title: 'Image',
        type: 'array',
        of: [{
            type: 'image'
        }],
        options: {
            hotspot: true,
        }
    }]
}