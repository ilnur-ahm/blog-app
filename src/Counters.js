import { useSelector } from 'react-redux';
import './App.css';

function Counters(props) {

    const countEl = (props.postData.map(el =>
        el.fullText.length
    )).reduce((acc, num) => acc + num, 0)

    const countPost = (props.postData.map(el =>
        el.id
    )).length

    const countComments = useSelector(state => {
        const { commentsReducer } = state;
        return commentsReducer.comments.length
    }
    )
    return (
        <div className="card">
            <h1>Количество статей: {countPost}</h1>
            <h1>Количество символов: {countEl}</h1>
            <h1>Количество комментариев: {countComments}</h1>
        </div>

    );
}

export default Counters;