import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function CarouselImage(props) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/550/similar?api_key=${process.env.apiKeyDb}`)
      .then(response => {
        setImages(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={image.url}
            alt={image.alt}
          />
          <Carousel.Caption>
            <h3>{image.title}</h3>
            <p>{image.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselImage;
