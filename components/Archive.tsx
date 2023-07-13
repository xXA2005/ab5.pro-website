import { useEffect, useState } from "react";
import RepoCard from "./RepoCard";
import SectionTitle from "./SectionTitle";

type Repo = {
  name: string;
  description: string;
  stargazers_count: number;
  language: string;
  fork: boolean;
  html_url: string;
};

const RepoList = () => {
  const [repos, setRepos] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/xXA2005/repos"
        );
        const data = await response.json();
        const filteredRepos = data.filter((repo: Repo) => !repo.fork);
        setRepos(filteredRepos);
      } catch (error) {
        console.error("Error fetching repos:", error);
      }
    };

    fetchRepos();
  }, []);

  const visibleRepos = showMore ? repos : repos.slice(0, 3);

  return (
    <div className="max-w-[1140px] mx-auto px-4 py-24">
      <SectionTitle title="Other Projects" titleNumber="3." />
      <div className="w-full flex flex-col items-center">
        <p className="text-sm text-blue-500">View Projects</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        {visibleRepos.map((repo: Repo) => (
          <RepoCard
            key={repo.name}
            title={repo.name}
            description={repo.description}
            stars={repo.stargazers_count}
            lang={repo.language}
            url={repo.html_url}
          />
        ))}
      </div>
      <div className="mt-12 flex items-center justify-center">
        <button
          onClick={() => setShowMore((prevState) => !prevState)}
          className="w-36 h-12 rounded-md text-blue-500 text-[13px] border border-blue-500 hover:bg-[#112240]"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default RepoList;
