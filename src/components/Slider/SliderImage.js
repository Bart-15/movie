import Slider from "react-slick";
import settings from './settings';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {
    Card,
    CardContent,
    Img,
    Title
} from './stylesCard';
const SliderImage = ({data}) => {
    return ( 
        <Slider {...settings}>
            {
                data?.map((item) => {
                    return (
                    <Card key={item.id}>
                        <Img src={`https://image.tmdb.org/t/p/w500${item?.poster_path}`} alt="hello"/>
                        <CardContent>
                        { item?.title && ( <Title to={`/movie-item/${item.id}`}>{item.title}</Title> )} 
                        { item?.name && ( <Title to={`/tv-show/${item.id}`}>{item.name}</Title> )} 
                        </CardContent>
                    </Card>
                    )
                })
            }
        </Slider> 
    );
}

export default SliderImage;