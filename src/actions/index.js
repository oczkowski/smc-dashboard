export const getPhoto = () => {
    return {
        type: 'GET_PHOTO',
        payload: {
            url: 'https://cdn.smct.co/17746-682.png',
            name: 'Your basket saved.'
        }
    };
};

export const toggleSidebar = () => {
    return {
        type: 'TOGGLE_SIDEBAR',
        payload: { tof: true }
    };
};

export const getOverlaysData = () => {
    return {
        type: 'GET_OVERLAYS_DATA',
        payload: [
            {
                'Tag Name': 'testtag.com',
                'User Impressions': Math.round(Math.random() * 100) + 1000,
                'Overlays Shown': Math.round(Math.random() * 100) + 100,
                'Overlays Clicked': Math.round(Math.random() * 100),
                Revenue: Math.round(Math.random() * 100) + 10000
            },
            {
                'Tag Name': 'somerandomsitre.net',
                'User Impressions': Math.round(Math.random() * 100) + 1000,
                'Overlays Shown': Math.round(Math.random() * 100) + 100,
                'Overlays Clicked': Math.round(Math.random() * 100),
                Revenue: Math.round(Math.random() * 100) + 10000
            }
        ]
    };
};
