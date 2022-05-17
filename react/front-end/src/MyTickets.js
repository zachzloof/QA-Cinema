

function MyTickets() {

    let [responseData, setResponseData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4005/getTickets`)
        .then((response)=>{
            console.log(response.data);
            setResponseData(response.data);
            console.log(response.data)
           

        })
        .catch((error) => {
            console.log(error)
        })
     }, [])
    return(
        <div>
            <h1>Hello User</h1>
            <h2>Here you will find your tickets and incomplete orders</h2>



        </div>
    )
}


export default MyTickets;