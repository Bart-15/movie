import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {BiMoviePlay} from 'react-icons/bi';
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
    VideoContainer
} from './styledMovieItem';
const MovieItem = () => {
    const {id} = useParams();

    const [movie, setMovie] = useState({});

    const imgUrl = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`;

    const [openModal, setOpenModal] = useState(false)

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const fetchMovie = async () => {
            try {
                const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=54931a9461e6d4827987b707a2b44d61&language=en-US&append_to_response=videos`, {signal:controller.signal})
                isMounted && setMovie(res?.data);
            }catch (e) {
                if(e?.response) {
                    console.log(e)
                }
            }
        }

        fetchMovie();

        return  () => {
            isMounted = false;
            controller.abort();
        }
    }, []);

    const [video, setVideo] = useState("");

    useEffect(() => {
        const result = movie?.videos?.results.find(item => item?.type === "Trailer");
        setVideo(`https://www.youtube.com/embed/${result?.key}`);
    }, [movie])

    console.log(movie)
    return ( 
        <Container>
            <Section>
                <SectionCol1>
                    <MovieImg src={imgUrl} loading="lazy" alt={movie.title}/>
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
                    <Button onClick={() => setOpenModal(true)}>Watch Trailer</Button>
                </SectionCol2>
            </Section>
            {/* Modal */}
            <Modal open={openModal}>
                <VideoContainer>
                <Button onClick={() => setOpenModal(false)}>Close</Button> <br />
                <iframe width="1000" height="500"  frameborder="0" scrolling="no" id="iframe" src={video} title="hello"></iframe>
                </VideoContainer>
            </Modal>
        </Container>
    );
}

export default MovieItem;