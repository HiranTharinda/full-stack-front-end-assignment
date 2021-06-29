import React, {
    useState,
    useEffect
} from 'react';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import {
    PageWrapper,
    PageMobileWrapper,
    CardHeaderWrapper,
    PageHeader,
    CardAuthor,
    PageMobileHeader,
    LogoImage
} from "../../molecules/styledComponents";

import nyt from '../../../assets/img/nyt.png'
import { getBestSellingBooks } from '../../../actions/booksAction';
import BookCard from '../../organisms/bookCard/bookCard';

function BestSellers() {

    const dispatch = useDispatch();
    const books = useSelector(state => state.books.books)
    const [windowWidth, setWindowDimensions] = useState(getWindowDimensions());


    function getWindowDimensions() {
        const { innerWidth: width } = window;
        return width;
    }

    useEffect(() => {
        dispatch(getBestSellingBooks());

        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [dispatch])

    if (books.length && books !== 'failed') {
        if (windowWidth < 700) {
            return (
                <div>
                    <PageMobileWrapper>
                        <CardHeaderWrapper>
                            <LogoImage src={nyt} />
                            <PageMobileHeader>
                                Best Sellers - Hardcover Fiction
                            </PageMobileHeader>
                        </CardHeaderWrapper>
                        {books.map(book =>
                            <BookCard book={book} mobile={true} />
                        )}
                    </PageMobileWrapper>
                </div>
            )
        }
        return (
            <div>
                <PageWrapper>
                    <CardHeaderWrapper>
                        <LogoImage src={nyt} />
                        <PageHeader>
                            Best Sellers - Hardcover Fiction
                        </PageHeader>
                    </CardHeaderWrapper>
                    {books.map(book =>
                        <BookCard book={book} mobile={false} />
                    )}
                </PageWrapper>
            </div>
        )
    }

    if (books === 'failed') {
        return (
            <div>
                <PageWrapper>
                    <CardHeaderWrapper>
                        <LogoImage src={nyt} />
                        <CardAuthor>
                            Something is not right!  <span>&#9748;</span>
                        </CardAuthor>
                    </CardHeaderWrapper>
                </PageWrapper>
            </div>
        )
    }


    return (
        <div>
            <PageWrapper>
                <CardHeaderWrapper>
                    <LogoImage src={nyt} />
                    <CardAuthor>
                        Just a second <span>&#9203;</span>
                    </CardAuthor>
                </CardHeaderWrapper>
            </PageWrapper>
        </div>
    )
}

export default BestSellers;