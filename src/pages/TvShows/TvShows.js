import {useEffect, useState} from 'react';
import {
    TvShowsContainer,
    TvShowsRow,
    Title
} from './styledTvShows';
import TvShowCards from '../../components/TvShowCards/TvShowCards';
import * as api from '../../api/movie';


const TvShows = () => {
    const [popularTvShows, setPopularTvShows] = useState([]);
    
    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getPopularTvShows= async () => {
            try {
                const res = await api.getTvShow({signal:controller.signal});
                isMounted && setPopularTvShows(res?.data?.results)
            } catch(e) {
                if(e?.response){
                    console.log(e)
                }
            }
        }


        getPopularTvShows();

        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [])


    return ( 
        <TvShowsContainer>
            <Title>Top Rated TV Shows</Title>
            <TvShowsRow>
                {
                    popularTvShows.map((show) => {
                        return (<TvShowCards show={show} />)
                    })
                }
            </TvShowsRow>
        </TvShowsContainer>
    );
}

export default TvShows;