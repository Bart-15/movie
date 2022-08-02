import {
    Card,
    ImgCard,
    CardContent,
    CardTitle,
    CardDesc
} from './styledCards';

const MovieCards = ({movie}) => {
    const imgUrl = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`
    console.log(movie)
    return ( 
        <Card>
            <ImgCard src={imgUrl} />
            <CardContent>
                <CardTitle>{movie.original_title}</CardTitle>
                <CardDesc>
                    {movie.overview.substring(0, 120) }...
                </CardDesc>
            </CardContent>
        </Card>
    );
}

export default MovieCards;