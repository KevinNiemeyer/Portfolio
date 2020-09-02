//code to get github repos with axios in projects
/* 
const [repos, setRepos] = useState([]);
  const getData = () => {
    const url =
      'https://api.github.com/users/KevinNiemeyer/repos?fbclid=IwAR2stMhMjngpObVKnSVLthIUb6J4oMsix7PmYw_T3kqkWDSuyyNaYvAGWUE';
    axios
      .get(url, {
        private: 'false',
        fork: 'false',
      })
      .then((response) => {
        let result = response.data;
        setRepos([...repos, ...result]);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  if (repos.length === 0) {
    return null;
  }

{repos
    .filter((repo) => repo.private === false && repo.fork === false)
    .map((repo) => {
      return (
        <Project
          repo={repo}
          key={repo.id}
          id={repo.id}
          git_url={repo.git_url}
          description={repo.description}
          pic={''}></Project>
      );
    })}
  ; */

// in project:
// const liveDemoURL = `https://kevinniemeyer.github.io/${props.repo.name}/`;
