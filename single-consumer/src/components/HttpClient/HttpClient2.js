
//const fetcher = (url) => fetch(url).then((res) => res.json());
function HttpClient2() {
    let data;
/*
curl -X POST "https://jsonplaceholder.typicode.com/posts" -H 'Content-Type: application/json' -d '{"title": "foo","body": "bar","userId": 1}'
*/
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
        }),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(response => response.json() )
    .then(response =>{
        data = JSON.stringify(response) 
        console.log(data)        
    })
    //.then(response => console.log( response.status ))
    return (
      <div className="App">
        --
        {/* {JSON.stringify( data )}     */}
        {data}    
        --
      </div>
    );
  }
  
  export default HttpClient2;
  