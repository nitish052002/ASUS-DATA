import React from "react";
import "./repo.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Tile from "../components/Tile";
import { Link } from "react-router-dom";

interface Repo {
  id: number;
  name: string;
  description: string;
  avatar_url: string;
  owner: {
    avatar_url: string;
  };
}

const Repos: React.FC = () => {
  const { username } = useParams<{ username: string }>();
  const navigate = useNavigate();

  const FETCHING_REPO_CALLBACK = async () => {
    const response = await axios.get<Repo[]>(
      `https://api.github.com/users/${username}/repos`
    );
    return response.data;
  };

  const { isLoading, data } = useQuery<Repo[], Error>({
    queryKey: ["repos", username],
    queryFn: FETCHING_REPO_CALLBACK,
  });

  if (isLoading) {
    return <h2>Loading</h2>;
  }

  if (!data) {
    return <h1>About not mentioned</h1>;
  }

  return (
    <div className="repos_section">
      <div className="title-section">
        <h1>{username && username.toUpperCase()} | REPOS</h1>
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
          data.map((repo) => (
            <Link key={repo.id} to={`/about/${username}/${repo.id}`}>
              <Tile
                label={repo.name}
                bio={repo.description}
                logo={repo.avatar_url ? repo.avatar_url : repo.owner.avatar_url}
              />
            </Link>
          ))
        ) : (
          <h2>User does not exist</h2>
        )}
      </div>
    </div>
  );
};

export default Repos;
