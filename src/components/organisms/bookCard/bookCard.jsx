import React from 'react';
import {
  CardHorizontalWrapper,
  CardVerticalWrapper,
  CardMobileHorizontalWrapper,
  CardVerticalOuterWrapper,
  CardRankHeader,
  CardHeader,
  CardAuthor,
  CardDescription,
  CardButton,
  CardImage,
} from "../../molecules/styledComponents";

function BookCard({ book, mobile }) {

  function viewReview() {
    window.open(book.book_review_link);
  }

  if (mobile) {
    return (
      <div>
        <CardVerticalOuterWrapper>
          <CardMobileHorizontalWrapper>
            <CardImage src={book.book_image} />
            <CardRankHeader>
              {'#' + book.rank}
            </CardRankHeader>
          </CardMobileHorizontalWrapper>
          <CardVerticalWrapper>
            <CardHeader>
              {book.title}
            </CardHeader>
            <CardAuthor>
              {book.author}
            </CardAuthor>
            <CardDescription>
              {book.description}
            </CardDescription>
            {book.book_review_link ? (
              <CardButton onClick={viewReview}>
                Read Full Review
              </CardButton>
            ) : (null)}
          </CardVerticalWrapper>
        </CardVerticalOuterWrapper>
      </div>
    );
  }
  return (
    <div>
      <CardHorizontalWrapper>
        <CardImage src={book.book_image} />
        <CardVerticalWrapper>
          <CardHeader>
            {'#' + book.rank + ' ' + book.title}
          </CardHeader>
          <CardAuthor>
            {book.author}
          </CardAuthor>
          <CardDescription>
            {book.description}
          </CardDescription>
          {book.book_review_link ? (
            <CardButton onClick={viewReview}>
              Read Full Review
            </CardButton>
          ) : (null)}
        </CardVerticalWrapper>
      </CardHorizontalWrapper>
    </div>
  );
}

export default BookCard;
