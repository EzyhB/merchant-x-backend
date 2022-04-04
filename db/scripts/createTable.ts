import query from "..";

const createTable = () => {
  return query(
    "CREATE TABLE IF NOT EXISTS pokemon_data (id serial PRIMARY KEY, name TEXT, description TEXT, sprite TEXT);"
  );
};

createTable();
