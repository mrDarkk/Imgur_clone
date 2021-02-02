const tileData = [
    {
        id: 1,
        img: 'https://i.imgur.com/Hy0Mt1G.jpeg',  
        title: 'Magic pictures are still fun right?', 
        link: 'https://imgur.com/gallery/9vMJ3LK',
        views: 34,
    },
    {
        id: 2,
        img: 'https://images.unsplash.com/photo-1612128686557-71729cbcfe41?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=767&q=80',
        title: 'Lion cub',
        link: 'https://images.unsplash.com/photo-1612128686557-71729cbcfe41?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=767&q=80',
        views: 77,
    },
    {
        id: 3,
        img: 'https://images.unsplash.com/photo-1612135860800-6371ff306888?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=754&q=80',
        title: 'bright road',
        link: 'https://images.unsplash.com/photo-1612135860800-6371ff306888?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=754&q=80',
        views: 125,
    },
    {
        id: 4,
        img: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&h=350',
        title: 'Woman with glass',
        link:  'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&h=350',
        views: 458,
    },
    {
        id: 5,
        img: 'https://images.unsplash.com/photo-1612030568496-a756fb46101f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80',
        title: 'Make someone happy',
        link: 'https://images.unsplash.com/photo-1612030568496-a756fb46101f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80',
        views: 874,
    },
    {
        id: 6,
        img: 'https://images.unsplash.com/photo-1612188511593-2391bb421b99?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        title: 'Sub urban',
        link: 'https://images.unsplash.com/photo-1612188511593-2391bb421b99?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        views: 74,
    },
    {
        id: 7,
        img: 'https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        title: 'Laptop',
        link: 'https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        views: 17,
    },
    {
        id: 8,
        img: 'https://images.unsplash.com/photo-1612139861700-556daf8c95be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        title: 'Look at the nature',
        link: 'https://images.unsplash.com/photo-1612139861700-556daf8c95be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        views: 7,
    },
    {
        id: 9,
        img: 'https://images.unsplash.com/photo-1611870936107-123e5d472038?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        title: 'Change the date',
        link: 'https://images.unsplash.com/photo-1611870936107-123e5d472038?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        views: 43,
    },
    {
        id: 10,
        img: 'https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=f05c14dd4db49f08a789e6449604c490',
        title: 'Stylish',
        link: 'https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=f05c14dd4db49f08a789e6449604c490',
        views: 3,
    },
    {
        id: 11,
        img: 'https://images.unsplash.com/photo-1612105358098-f1818cae321f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        title: 'Night owl grid',
        link: 'https://images.unsplash.com/photo-1612105358098-f1818cae321f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        views: 27
    },
    {
        id: 12,
        img: 'https://images.unsplash.com/photo-1612032636260-70ff387b0d5a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
        title: 'Race to win',
        link: 'https://images.unsplash.com/photo-1612032636260-70ff387b0d5a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
        views: 63
    },
  ];
  
  export default tileData;