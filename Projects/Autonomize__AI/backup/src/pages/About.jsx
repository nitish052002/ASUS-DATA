import { useNavigate, useParams } from "react-router-dom";
import "./about.css";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";

export default function Detail({ repoDetailData }) {
  const param = useParams();
  const username = param.username;
  const repoID = param.repoid;

  const displayTooltip = (event) => {
    event.currentTarget.classList.toggle("active");
  };

  const FETCHING_REPO_CALLBACK = async () => {
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );
    return response.data;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["about", , username],
    queryFn: FETCHING_REPO_CALLBACK,
  });

  if (isLoading) {
    return <h2>Loading</h2>;
  }

  if (error) {
    return <h1>Error</h1>;
  }

  const REPO__DATA = data.find((repo) => {
    return repo.id === Number(repoID);
  });

  return (
    <div className="detail_sec">
      <div className="row">
        <div className="col-1">
          <div className="user_avatar">
            <div className="round">
              <img src={REPO__DATA.owner.avatar_url} alt="Image not found" />
            </div>
          </div>
          <div className="content_section">
            <div className="section-one">
              <div className="line-1">
                {" "}
                <span>
                  <i className="bx bxs-badge-check check"></i>
                </span>
                <b> {REPO__DATA.owner.login}</b>
              </div>
              <div className="line-2">
                Github confirms that app meets the{" "}
                <span>reuiqrements for verification</span>
              </div>
            </div>
            <div className="section-two">
              <p className="title">Categories</p>
              <span
                className="badge"
                onMouseOver={displayTooltip}
                onMouseLeave={displayTooltip}
              >
                Wacthers <i className="tooltip">{REPO__DATA.watchers}</i>{" "}
              </span>
              <span
                className="badge"
                onMouseOver={displayTooltip}
                onMouseLeave={displayTooltip}
              >
                Size <i className="tooltip">{REPO__DATA.size}</i>
              </span>
              <span
                className="badge"
                onMouseOver={displayTooltip}
                onMouseLeave={displayTooltip}
              >
                Forks <i className="tooltip">{REPO__DATA.forks}</i>
              </span>
              <span
                className="badge"
                onMouseOver={displayTooltip}
                onMouseLeave={displayTooltip}
              >
                Visibilty <i className="tooltip">{REPO__DATA.visibility}</i>
              </span>
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="repo-title">
            <p>{REPO__DATA.full_name}</p>
          </div>
          <div className="button-area">
            <button>Set up a plan</button>
          </div>
          <div className="bio-section">
            <p className="p1">
              <span>Gitpod</span> is the online IDE for Github
            </p>
            <p className="p2">{repoDetailData && repoDetailData.description}</p>
            <p className="p3">
              Install the app and get your project prebuilt so you don't have to
              wait for your build downloading the internet when starting a
              Gitpod workspace
            </p>
            <p className="p4">
              Github is{" "}
              <b>
                is the First IDE that build your project before you even open it
              </b>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
