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
    SmallText,
    SmallTextContainer,
    HomeLink,
    SliderContainer,
    SliderTitle,    
} from './styledTvShow';
import SliderImage from '../../components/Slider/SliderImage';
import Loading from '../../components/Loading/Loading';
import * as api from '../../api/movie';

const TvShowItem = () => {
    const {id} = useParams();

    const [tvShow, setTvShow] = useState({});
    const [similarShows, setSimilarShows] = useState([]);

    const imgUrl = `https://image.tmdb.org/t/p/w500${tvShow?.poster_path}`;

    const [openModal, setOpenModal] = useState(false);
    const [isLoading, setLoading] = useState(false);


    useEffect(() => {
        window.scrollTo(0, 0);
        setLoading(true);
        let isMounted = true;
        const controller = new AbortController();

        const fetchMovie = async () => {
            try {
                const init = await axios.all([
                    await api.tvShowById(
                        id,
                        controller.signal
                    ),
                    await api.similarTvShows(
                        id,
                        controller.signal
                    )
                ])

                if(isMounted) {
                    setTvShow(init[0].data);
                    setSimilarShows(init[1].data.results);
                    setLoading(false);
                }
                
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
    }, [id]);


    /**
     * This is a custom modal component for youtube player
     * 
     */
    const ModalComponent = () => {
        const [video, setVideo] = useState("");

        useEffect(() => {
            const result = tvShow?.videos?.results.find(item => item?.type === "Trailer");
            setVideo(`https://www.youtube.com/embed/${result?.key}`);
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
                    <HomeLink href={`${tvShow.homepage}`} target="_blank"> 
                        <MovieImg src={tvShow?.poster_path ? imgUrl : noImg} loading="lazy" alt={tvShow.name}/>
                    </HomeLink>
                </SectionCol1>
                <SectionCol2>
                    <Title>{tvShow.name}</Title>
                    <ReleaseDate>Release Date: {tvShow.first_air_date}</ReleaseDate>
                        <GenreContainer>
                            {tvShow?.genres?.map((item) => {
                                return (<Genre key={item.id}>{item.name}</Genre>)
                            })}
                        </GenreContainer>
                    <Description>{tvShow.overview}</Description>
                    <SmallTextContainer>
                        <SmallText>Total Episodes: {tvShow.number_of_episodes}</SmallText>
                        <SmallText>Total Seasons: {tvShow.number_of_seasons}</SmallText>
                    </SmallTextContainer>
                    {tvShow?.videos?.results.length > 0 && ( <Button onClick={() => setOpenModal(true)}>Watch Trailer</Button> )}
                </SectionCol2>
            </Section>
            <SliderContainer>
                <SliderTitle>Similar Tv Shows</SliderTitle>
                <SliderImage data={similarShows} />
            </SliderContainer>
            <ModalComponent />
        </Container>
    );
}

export default TvShowItem;