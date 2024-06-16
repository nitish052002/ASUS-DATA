import React from "react";
import "./repo.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Tile from "../components/Tile";
import { Link } from "react-router-dom";

const Repos = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const FETCHING_REPO_CALLBACK = async () => {
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );
    return response.data;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["repos" , username],
    queryFn: FETCHING_REPO_CALLBACK,
  });

  if (isLoading) {
    return <h2>Loading</h2>;
  }

  if (error) {
    return <h1>Error</h1>;
  }

  return (
    <>
      <div className="repos_section">
        <div className="title-section">
          <h1>{username.toUpperCase()} | REPOS</h1>
          <button
            className="follower-btn btn"
            onClick={() => {
              navigate(`/followers/${username}`);
            }}
          >
            Followers
          </button>
        </div>
        <div className="repo-list list">
          {data.length ? (
            data.map((repo) => {
              const { id, name, description, avatar_url, owner } = repo;
              return (
                <Link to={`/about/${username}/${id}`}>
                  <Tile
                    label={name}
                    bio={description}
                    key={id}
                    logo={avatar_url ? avatar_url : owner.avatar_url}
                  />
                </Link>
              );
            })
          ) : (
            <h2>User does not exist</h2>
          )}
        </div>
      </div>
    </>
  );
};

export default Repos;
