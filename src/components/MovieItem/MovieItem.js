import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import noImg from '../../assets/img/2922280_27002.jpg'
import {
    Container,
    Section,
    SectionCol1,
    SectionCol2,
    MovieImg, 
    Title,
    Description,
    ReleaseDate,
    GenreContainer,
    Genre,
    Button,
    Modal,
    VideoContainer,
    Iframe,
    SliderContainer,
    SliderTitle,
    HomeLink
} from './styledMovieItem';
import SliderImage from '../../components/Slider/SliderImage';
import Loading from '../../components/Loading/Loading';
import * as api from '../../api/movie';

const MovieItem = () => {
    const {id} = useParams();

    const [movie, setMovie] = useState({});
    const [similarMovies, setSimilarMovies] = useState([]);
    
    const imgUrl = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`;

    const [openModal, setOpenModal] = useState(false);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        setLoading(true);
        let isMounted = true;
        const controller = new AbortController();

        const fetchAll = async () => {
            try {
                const init = await axios.all([
                    await api.movieById(
                        id,
                        controller.signal
                    ),
                    await api.similarMovies(
                        id,
                        controller.signal
                    )
                ])  
                if(isMounted) {
                    setMovie(init[0].data);
                    setSimilarMovies(init[1].data.results);
                    setLoading(false)
                }
            }catch (e) {
                if(e?.response) {
                    console.log(e);
                }
            }
        }

        fetchAll();

        return  () => {
            isMounted = false;
            controller.abort();
        }
        
    }, [id]);

        
    const ModalComponent = () => {
        const [video, setVideo] = useState("");

        useEffect(() => {
            if(movie) {
                const result = movie?.videos?.results.find(item => item?.type === "Trailer");
                setVideo(`https://www.youtube.com/embed/${result?.key}`);
            }
        }, []);
        
        const handleClose = () => {
            setVideo("");
            setOpenModal(false)
        }

        return (
            <Modal open={openModal}>
                <VideoContainer>
                <Button onClick={handleClose}>Close</Button> <br />
                <Iframe frameBorder="0" scrolling="no" id="iframe" src={video} title="hello" allowFullScreen></Iframe>
                </VideoContainer>
            </Modal>
        )
    }

    if(isLoading) {
        return (<Loading />)
    }
    

    return ( 
        <Container>
            <Section>
                <SectionCol1>
                <HomeLink href={`${movie.homepage}`} target="_blank">
                    <MovieImg src={movie?.poster_path ? imgUrl : noImg} loading="lazy" alt={movie.title}/>
                </HomeLink>
                </SectionCol1>
                <SectionCol2>
                    <Title>{movie.title}</Title>
                    <ReleaseDate>Release Date: {movie.release_date}</ReleaseDate>
                        <GenreContainer>
                            {movie?.genres?.map((item) => {
                                return (<Genre key={item.id}>{item.name}</Genre>)
                            })}
                        </GenreContainer>
                    <Description>{movie.overview}</Description>
                    {movie?.videos?.results.length > 0 && ( <Button onClick={() => setOpenModal(true)}>Watch Trailer</Button> )}
                </SectionCol2>
            </Section>
            {similarMovies.length ? (
                <SliderContainer>
                    <SliderTitle>Similar Movies</SliderTitle>
                    <SliderImage data={similarMovies} />
                </SliderContainer>
            ) : "" }
            {/* Modal */}
            <ModalComponent />
        </Container>
    );
}

export default MovieItem;