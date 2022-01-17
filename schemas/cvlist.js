export default {
    name: 'cvList',
    title: 'Cv ',
    type: 'document',
    fields: [
        {
            name:'employee',
            title:'Employee',
            type:'string'
        }
    ],
    preview: {
        select: {
            title: 'employee',
            
        }
    }
}