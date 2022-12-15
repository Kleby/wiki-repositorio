import React from "react";
import { ItemContainer, ItemContent } from "./styles";

const ItemRepor = ({ repo, handleRemoveRepo }) => {
  const handleRemove = () => {
    handleRemoveRepo(repo.id);
  };

  return (
    <ItemContainer>
      <ItemContent>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <div className="reposInfor">
          <a
            href={repo.html_url}
            target="_blank"
            className="viewRepos"
            rel="noreferrer"
          >
            Visualizar repositório
          </a>
          <a
            href="#"
            className="remover"
            rel="noreferrer"
            onClick={handleRemove}
          >
            Remover
          </a>
        </div>
      </ItemContent>
      <div className="line" />
    </ItemContainer>
  );
};

export default ItemRepor;
