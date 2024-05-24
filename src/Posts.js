import Post from "./Post"
import { postData } from './redux/postData';


function Posts() {
    const posts = postData.map(el =>
        <Post id={el.id} title={el.title} shortText={el.shortText} fullText={el.fullText} />
    )

    return (
        <div className="App">
            {posts}
        </div >
    )
}

export default Posts;
