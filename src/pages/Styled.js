import styled from 'styled-components';

export const StyledMovieDetails = styled.div``;
export const StyledMovieDetailsMeta = styled.section`
  display: flex;
  .genre {
    margin-right: 8px;
    border: 1px solid black;
    display: inline-block;
    padding: 8px;
  }
`;

export const StyledMovieAdditionalInfo = styled.section`
  .additional-handlers {
    display: flex;
    .link {
      margin-right: 8px;
      padding: 8px;
    }
  }
`;

export const StyledCast = styled.div`
  ul {
    .cast-item {
      text-align: left;
      img {
        max-width: 150px;
      }
      p {
        margin-top: 5px;
      }
      margin-bottom: 25px;
    }
  }
`;
export const StyledReviews = styled.div`
  ul {
    .cast-item {
      text-align: left;
      p {
        margin-top: 5px;
      }
      margin-bottom: 25px;
    }
  }
`;
