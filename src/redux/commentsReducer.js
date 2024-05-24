import { COMMENT_CREATE, COMMENT_UPDATE, COMMENT_DELETE } from "./types";
import uniqid from 'uniqid'

const initialState = {
    comments: [
        { id: uniqid(), text: 'Отлично' },
        { id: uniqid(), text: 'Класс' },
        { id: uniqid(), text: 'Ставлю лайк' },
        { id: uniqid(), text: 'great' }
    ]
}

export const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case COMMENT_CREATE:
            return {
                ...state,
                comments: [...state.comments, action.data]
            }

        case COMMENT_UPDATE:
            const { data } = action
            const { comments } = state
            const itemIndex = comments.findIndex(res => res.id === data.id)

            const nextComments = [
                ...comments.slice(0, itemIndex),
                data,
                ...comments.slice(itemIndex + 1)
            ]

            return {
                ...state,
                comments: nextComments

            }

        case COMMENT_DELETE:
            return (() => {
                const { id } = action
                const { comments } = state
                const itemIndex = comments.findIndex(res => res.id === id)

                const nextComments = [
                    ...comments.slice(0, itemIndex),
                    ...comments.slice(itemIndex + 1)
                ]

                return {
                    ...state,
                    comments: nextComments
                }
            })()


        default:
            return state
    }
}