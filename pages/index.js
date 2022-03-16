export default function Index({ data, queryString }) {
  return (
    <content>
      <p>
        {queryString} routed to https://swapi.dev{queryString}
      </p>
      <p>
        <a href="?people/2">Try</a>
        &nbsp;
        <a href="/">Reset</a>
      </p>
      <pre>{data ? JSON.stringify(data, null, 2) : "Loading..."}</pre>
    </content>
  );
}
