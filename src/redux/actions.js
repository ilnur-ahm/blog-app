import { INCREMENT, DECREMENT, COMMENT_CREATE, COMMENT_UPDATE, COMMENT_DELETE } from "./types";

export function incrementLikes() {
    return {
        type: INCREMENT
    }
}

export function decrementLikes() {
    return {
        type: DECREMENT
    }
}

export function commentCreate(text, id) {
    return {
        type: COMMENT_CREATE,
        data: { text, id }
    }
}

export function commentUpdate(text, id) {
    return {
        type: COMMENT_UPDATE,
        data: { text, id }
    }
}

export function commentDelete(id) {
    return {
        type: COMMENT_DELETE,
        id
    }
}