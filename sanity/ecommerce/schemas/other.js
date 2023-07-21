export default {
    name: 'other',
    title: 'Other',
    type: 'document',
    fields: [{
        name:'image',
        title: 'Image',
        type: image,
        options: {
            hotspot: true,
        }}, 
        {
        name: 'name',
        title: 'Name',
        type: 'string',
    }]
}