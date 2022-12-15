import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 80%;
  
  .line {
    content: "";
    border-bottom: 3px solid #fafafa60;
    border-radius: 10px;
    margin: 1rem 0;
  }
`;

export const ItemContent = styled.div`
  width: 100%;
  background-color: #44494f;
  border-radius: 10px;
  padding: .6rem .8rem ;

  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-size: 2rem;
    color: #fafafa;
  }

  p {
    font-size: 1rem;
    color: #fffada60;
    margin: 0.1rem 0 1rem 0;
  }

  h3, p {
    padding: 0 2rem;
  }

  .reposInfor {
    max-width: 400px;
    display: flex;
    /* justify-content: center; */
    align-items: center;
  }

  .reposInfor a {
    text-decoration: none;
    color: #fff;
    margin-right: 1rem;

    &:hover {
      filter: opacity(0.75);
      transition: 200ms filter;
    }
  }

  .reposInfor a.remover {
    margin: 0.6rem 0;
    background-color: #f33;
  }
  .reposInfor a.viewRepos {
    background-color: #383;
  }

  .reposInfor .remover,
  .reposInfor .viewRepos {
    background-color: #227;
    padding: 4px 12px;
    border-radius: 10px;
  }
`;
