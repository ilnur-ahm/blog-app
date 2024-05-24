import './App.css';
import Title from './Title';
import { useNavigate } from "react-router-dom"

function Post(props) {
  const navigate = useNavigate();

  const navigateDashboard = (event) => {
    navigate(`/blog-app/${props.id}`);
  };

  return (

    <div className="wrap">
      <div className="card">
        <div className="card-text">
          <Title title={props.title} />
          <p>{props.shortText}</p>
        </div>
        <div className='more'>
          <button onClick={navigateDashboard}>Подробнее</button>
        </div>
      </div>
    </div>

  );
}

export default Post;
