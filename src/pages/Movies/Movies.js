import {useEffect, useState} from 'react';
import MovieCards from '../../components/MovieCards/MovieCards';
import {
    MoviesContainer,
    Title,
    MoviesRow
} from './styledMovies';
import * as api from '../../api/movie';

const Movies = () => {
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getPopularMovies = async () => {
            try {
                const res = await api.getPopular({signal:controller.signal});
                isMounted && setPopularMovies(res?.data?.results)
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