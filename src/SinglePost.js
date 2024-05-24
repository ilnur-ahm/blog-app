import './App.css';
import Comments from './Comments';
import Likes from './Likes';
import Title from './Title';

function SinglePost(props) {

    return (

        <div className="wrap">
            <div className="card">
                <div className="card-text">
                    <Title title={props.postData.title} />
                    <p>{props.postData.fullText}</p>
                    <Likes postData={props.postData} />
                </div>
                <Comments postData={props.postData} />
            </div>
        </div>

    );
}

export default SinglePost;