import {useState, useEffect} from 'react';
import SliderImage from '../../components/Slider/SliderImage';
import {
    HomeContainer,
    Section,
    SectionTitle
} from './styledHome';
import Loading from '../../components/Loading/Loading';
import axios from 'axios';
const Home = () => {

    const [isData1, setData1] = useState([]);
    const [isData2, setData2] = useState([]);
    const [isData3, setData3] = useState([]);
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
        setLoading(true);

        const fetchAll = async () => {
            let apiKey = "54931a9461e6d4827987b707a2b44d61"

            try {
                const init = await axios.all([
                    await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`, {signal:controller.signal}),
                    await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`, {signal:controller.signal}),
                    await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`, {signal:controller.signal})
                ])

                if(isMounted) {
                    setData1(init[0].data.results);
                    setData2(init[1].data.results);
                    setData3(init[2].data.results);
                    setLoading(false)
                }
            }catch (e) {
                if(e?.response) {
                    console.log(e.message)
                }
            }
        }

        fetchAll();
        
        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [])

    return ( 
        <HomeContainer>
            {isLoading ? (<Loading />) : (
                <>
                    <Section>
                        <SectionTitle>Now Playing</SectionTitle>
                    <SliderImage data={isData3} />
                    </Section>
                    <Section>
                        <SectionTitle>Upcoming Movies</SectionTitle>
                        <SliderImage data={isData1} />
                    </Section>
                    <Section>
                        <SectionTitle>Top Rated</SectionTitle>
                        <SliderImage data={isData2} />
                    </Section>
                </>
            )}
        </HomeContainer>
    );
}

export default Home;