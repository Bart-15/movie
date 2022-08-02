import {
    Card,
    ImgCard,
    CardContent,
    CardTitle,
    CardDesc
} from './styledCards';

const TvShowCards = ({show}) => {
    const imgUrl = `https://image.tmdb.org/t/p/w500${show?.poster_path}`

    return ( 
        <Card>
            <ImgCard src={imgUrl} />
            <CardContent>
                <CardTitle>{show.name}</CardTitle>
                <CardDesc>
                    {show.overview.substring(0, 120) }...
                </CardDesc>
            </CardContent>
        </Card>
    );
}

export default TvShowCards;