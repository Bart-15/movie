import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
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
            let apiKey = "54931a9461e6d4827987b707a2b44d61"

            try {
                const init = await axios.all([
                    await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US&append_to_response=videos`, {signal:controller.signal}),
                    await axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apiKey}&language=en-US&page=1`, {signal:controller.signal})
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

    console.log(movie)
    return ( 
        <Container>
            <Section>
                <SectionCol1>
                <HomeLink href={`${movie.homepage}`} target="_blank">
                    <MovieImg src={imgUrl} loading="lazy" alt={movie.title}/>
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
            <SliderContainer>
                <SliderTitle>Similar Movies</SliderTitle>
                <SliderImage data={similarMovies} />
            </SliderContainer>
            {/* Modal */}
            <ModalComponent />
        </Container>
    );
}

export default MovieItem;