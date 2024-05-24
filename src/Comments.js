import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import uniqid from 'uniqid'
import { commentCreate } from "./redux/actions.js"
import SingleComment from "./SingleComment.js"

function Comments(props) {
    const [textComment, setTextComment] = useState('')

    const comments = useSelector(state => {
        const { commentsReducer } = state;
        return commentsReducer.comments
    }
    )

    const dispatch = useDispatch()

    const handleInput = (e) => {
        setTextComment(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = uniqid();
        dispatch(commentCreate(textComment, id))
        setTextComment('')
    }

    return (
        <div className="card-comments">
            <form onSubmit={handleSubmit} className="comments-item-create">
                <input type='text' value={textComment} onChange={handleInput} placeholder="Оставьте комментарий" />
                <input type="submit" hidden />
            </form>
            {!!comments.length && comments.map(res => {
                return <SingleComment key={res.id} data={res} postId={props.postData} />
            })}
        </div>
    )
}

export default Comments