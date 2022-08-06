import {useEffect, useState} from 'react';
import * as api from '../../api/movie';
import MovieCards from '../../components/MovieCards/MovieCards';
import useTitle from '../../hooks/useTitle';
import Loading from '../../components/Loading/Loading';
import {
    MoviesContainer,
    Title,
    MoviesRow
} from './styledMovies';

const Movies = () => {
    useTitle('Movie App - Movies');

    const [popularMovies, setPopularMovies] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
        setLoading(true)

        const getPopularMovies = async () => {
            try {
                const res = await api.getPopular({signal:controller.signal});
                if(isMounted) {
                    setPopularMovies(res?.data?.results) 
                    setLoading(false);
                }
                
            } catch(e) {
                if(e?.response){
                    console.log(e)
                }
            }
        }

        getPopularMovies();

        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [])

    if(isLoading) {
        return (<Loading />)
    }

    return ( 
        <MoviesContainer>
            <Title>Popular Movies</Title>
                <MoviesRow>
                    {
                        popularMovies.map((movie) => {
                            return (<MovieCards movie={movie} key={movie.id} />)
                        })
                    }
                </MoviesRow>
        </MoviesContainer>
    );
}

export default Movies;