import {useState, useEffect} from 'react';
import SliderImage from '../../components/Slider/SliderImage';
import {
    HomeContainer,
    Section,
    SectionTitle
} from './styledHome';
import Loading from '../../components/Loading/Loading';
import axios from 'axios';
import useTitle from '../../hooks/useTitle';
import * as api from '../../api/movie';

const Home = () => {
    useTitle("Movie App - Home")

    const [isData1, setData1] = useState([]);
    const [isData2, setData2] = useState([]);
    const [isData3, setData3] = useState([]);
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
        setLoading(true);

        const fetchAll = async () => {
            try {
                const init = await axios.all([
                    await api.upComing({signal:controller.signal}),
                    await api.topRated({signal:controller.signal}),
                    await api.nowPlaying({signal:controller.signal}),
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