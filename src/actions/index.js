export const getPhoto = () => {
    return {
        type: 'GET_PHOTO',
        payload: {
            url: 'https://cdn.smct.co/17746-682.png',
            name: 'Your basket saved.'
        }
    };
};
