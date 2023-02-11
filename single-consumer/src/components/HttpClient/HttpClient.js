import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());
function HttpClient() {
    
    const { data, error, isLoading } = useSWR(
        "https://jsonplaceholder.typicode.com/users",
      fetcher
    );
    
    if (error) return "An error has occurred.";
    if (isLoading) return "Loading...";
    //console.log(data);
    return (
      <div className="App">
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
        {data.map(({ id, name, email, company }) => (
          <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
          </tr>
        ))}
      </table>

      </div>
    );
  }
  
  export default HttpClient;
  