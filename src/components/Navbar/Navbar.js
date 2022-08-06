import {useContext, useState, useEffect} from 'react';
import {
    MenuContainer,
    MenuLinks,
    Nav,
    NavContainer,
    NavLogo,
    SearchBar,
    DropdownContainer,
    HamburgerIcon,
    DropDown,
    ListContainer,
    ListItem,
    Text
} from './styledNav';
import popcorn from '../../assets/img/popcorn.png';
import NavContext from '../../context/NavContext';
import useDebounce from '../../hooks/useDebounce';
import {AiOutlineMenu} from 'react-icons/ai';
import * as api from '../../api/movie';
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const navContext = useContext(NavContext);
    const navigate = useNavigate()
    const { setOpen } = navContext;

    const [searchFocus, setSearchFocus] = useState(false);
    const [query, setQuery] = useState("");

    const [results, setResults] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [noData, setNoData] = useState(false);
    
    const queryDebounce = useDebounce(query, 1000);

    useEffect(() => {
        if(!query) {
            setResults([]);
            setNoData(false);
        }   
    }, [query])
    
    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
        setLoading(true)

        if(queryDebounce.length > 1){

        const getResult = async() => {
                try {
                    const res = await api.searchMovie(queryDebounce.toLowerCase(), controller.signal);
                    if(isMounted){
                        setResults(res?.data?.results)
                        setLoading(false)
                        setNoData(res?.data.results.length === 0 ? true : false);
                    } 
                }catch (e) {
                    if(e?.response) {
                        console.log(e.response);
                    }
                }
            }
            
            getResult();
        }

        return () => {
            isMounted = false;
            controller.abort();
        }

    }, [queryDebounce])


    const handleClick = (id) => {
        setResults([]);
        setQuery("")
        navigate(`/movie-item/${id}`)
    }

    return ( 
        <>
            <Nav>
                <NavContainer>
                    <NavLogo src={popcorn} alt="popcorn"/>
                    <MenuContainer>
                        <MenuLinks to="/">Home</MenuLinks>
                        <MenuLinks to="/movies">Movies</MenuLinks>
                        <MenuLinks to="/tv-shows">Tv Shows</MenuLinks>
                        <SearchBar type="input" value={query} onChange={(e) => setQuery(e.target.value)}placeholder='Search Here...' onFocus={() =>  setSearchFocus(true)} onBlur={() => setSearchFocus(false)}/>
                    </MenuContainer>
                    <HamburgerIcon>
                        <AiOutlineMenu size={30} color="#333" onClick={() => setOpen(true)}/>
                    </HamburgerIcon>
                </NavContainer>
            </Nav>
            <DropdownContainer>
                <DropDown 
                    results={results}
                    noData={noData}
                    focus={searchFocus}
                    >
                    <ListContainer>
                        {
                            results.map((item) => {
                                return (<ListItem key={item.id} onClick={() => handleClick(item.id)}>{item?.title}</ListItem>)
                            })
                        }
                        {(!isLoading && noData) && (<Text>Movie ot found.</Text>)}
                    </ListContainer>
                </DropDown>
            </DropdownContainer>
        </>    
    );
}

export default Navbar;