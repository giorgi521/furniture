import Github from '@/components/helper/icons/github';
import Instagram from '@/components/helper/icons/instagram';
import Facebook from '@/components/helper/icons/facebook';

 const RightMenu =[
    {
        id: 1,
        name:"story",
        link:"/story"
    },
    {
        id: 2,
        name:"contact",
        link:"/contact"
    },
    {
        id: 3,
        name:"track order",
        link:"/track-order"
    },
    {
        id: 5,
        name:"log in",
        link:"/log-in"
    }
];


export const FOOTERINFO = [
    {
        id:1,
        title: 'Links',
        links: RightMenu
    },
    {
        id:2,
        title: 'Contact',
        links: [
            {
                id: 1,
                name:"Bedroom",
                link:"/bedroom"
            },
            {
                id: 2,
                name:"Decor",
                link:"/decor"
            },
            {
                id: 3,
                name:"Living Room",
                link:"/living-room"
            },
            {
                id: 4,
                name:"Office",
                link:"/office"
            },
        ]
    }
];

export const SOCIALMEDIA = [
    // {
    //     id:1,
    //     icon: <LinkedIn />,
    //     link: 'https://www.linkedin.com/'
    // },
    {
        id:2,
        icon: <Github />,
        link: 'https://github.com/giorgi521'
    },
    {
        id:3,
        icon: <Instagram />,
        link: 'https://www.instagram.com/giorgi_gogoladze__/'
    },
    {
        id:4,
        icon: <Facebook />,
        link: 'https://www.facebook.com/giorgi.gogoladze.92798/'
    }
];