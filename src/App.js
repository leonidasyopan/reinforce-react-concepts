import React, { useState, useEffect } from "react";

function App() {
  const [repositories, setRepositories] = useState([
    { id: 1, name: "repo-test1" },
    { id: 2, name: "repo-test2" },
    { id: 3, name: "repo-test3" },
  ]);

  function handleAddRepository() {
    setRepositories([
      ...repositories,
      { id: Math.random(), name: "Novo Repo" },
    ]);
  }

  return (
    <>
      <ul>
        {repositories.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>

      <button onClick={handleAddRepository}>Adicionar Repositório</button>
    </>
  );
}

export default App;
