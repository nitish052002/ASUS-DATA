import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Tile from "../components/Tile";
import { Link } from "react-router-dom";
import "./follower.css";

const Follower = () => {
  const { username } = useParams();




  const FETCHING_REPO_CALLBACK = async () => {
    const response = await axios.get(
      `https://api.github.com/users/${username}/followers`
    );
    return response.data;
  };

  

  const { isLoading, error, data } = useQuery({
    queryKey: ["followers", username],
    queryFn: FETCHING_REPO_CALLBACK,
  });




  if (isLoading) {
    return <h2>Loading</h2>;
  }




  if (error) {
    return <h1>Error</h1>;
  }








  return (
    <div className="follower-section">
      <div className="title">Followers</div>
      <div className="repo-list list">
        {data.length ? (
          data.map((repo) => {
            const { id, login, avatar_url } = repo;
            return (
              <Link to={`/repos/${login}`}>
                <Tile label={login} key={id} logo={avatar_url} />
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
