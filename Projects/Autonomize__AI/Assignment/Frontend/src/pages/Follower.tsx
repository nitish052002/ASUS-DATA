import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Tile from "../components/Tile";
import { Link } from "react-router-dom";
import "./follower.css";

interface FollowerData {
  id: number;
  login: string;
  avatar_url: string;
}

const Follower: React.FC = () => {
  const { username } = useParams<{ username: string }>();

  const FETCHING_REPO_CALLBACK = async () => {
    const response = await axios.get<FollowerData[]>(
      `https://api.github.com/users/${username}/followers`
    );
    return response.data;
  };

  const { isLoading, data } = useQuery<FollowerData[], Error>({
    queryKey: ["followers", username],
    queryFn: FETCHING_REPO_CALLBACK,
  });

  if (isLoading) {
    return <h2>Loading</h2>;
  }

  if (!data) {
    return <h1>No Followers Yet</h1>;
  }

  return (
    <div className="follower-section">
      <div className="title">Followers</div>
      <div className="repo-list list">
        {data.length ? (
          data.map((follower) => {
            const { id, login, avatar_url } = follower;
            return (
              <Link to={`/repos/${login}`} key={id}>
                <Tile label={login} logo={avatar_url} />
              </Link>
            );
          })
        ) : (
          <h2>No Followers Yet</h2>
        )}
      </div>
    </div>
  );
};

export default Follower;
