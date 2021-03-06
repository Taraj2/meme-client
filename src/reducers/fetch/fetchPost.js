import {FETCH_POST_REQUEST, FETCH_POST_FAILURE, FETCH_POST_SUCCESS} from '../../actions/fetch/fetchPost';

export function fetchPost(state = {
    post: null,
    error: null,
    isLoaded: false
}, action) {
    switch (action.type) {
        case FETCH_POST_SUCCESS:
            return Object.assign({}, state, {
                post: {
                    id: action.response.id,
                    author: {
                        nickname: action.response.author.nickname,
                    },
                    memeUrl: action.response.url,
                    title: action.response.title,
                    createAt: new Date(action.response.createdAt).toLocaleDateString('pl-PL'),
                    tags: action.response.tags.map(tag => {
                        return tag.name
                    }),
                    likes: action.response.likes,
                    dislikes: action.response.dislikes
                },
                error: null,
                isLoaded: true
            });
        case FETCH_POST_FAILURE:
            return Object.assign({}, state, {
                post: null,
                error: action.error,
                isLoaded: true
            });
        case FETCH_POST_REQUEST:
            return Object.assign({}, state, {
                post: null,
                error: null,
                isLoaded: false
            });
        default:
            return state
    }
}