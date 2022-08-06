import {useEffect, useState} from 'react';
import * as api from '../../api/movie';
import useTitle from '../../hooks/useTitle';
import TvShowCards from '../../components/TvShowCards/TvShowCards';
import Loading from '../../components/Loading/Loading';
import {
    TvShowsContainer,
    TvShowsRow,
    Title
} from './styledTvShows';

const TvShows = () => {
    useTitle('Movie App - Tv Shows')

    const [popularTvShows, setPopularTvShows] = useState([]);
    const [isLoading, setLoading] = useState(false);
    
    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getPopularTvShows= async () => {
            try {
                const res = await api.getTvShow({signal:controller.signal});
                if(isMounted) {
                    setPopularTvShows(res?.data?.results)
                    setLoading(false);
                }
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

    if(isLoading) {
        return (<Loading />)
    }

    return ( 
        <TvShowsContainer>
            <Title>Top Rated TV Shows</Title>
            <TvShowsRow>
                {
                    popularTvShows.map((show) => {
                        return (<TvShowCards show={show} key={show.id}/>)
                    })
                }
            </TvShowsRow>
        </TvShowsContainer>
    );
}

export default TvShows;