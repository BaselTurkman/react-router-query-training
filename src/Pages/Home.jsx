import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const Home = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["cat"], // Query key as an array
        queryFn: () => Axios.get("https://catfact.ninja/fact").then((res) => res.data), // Fetching logic
    });

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>Error occurred while fetching the data.</p>;
    }

    return (
        <div>
            <h1>This is Home Page</h1>
            <p>{data?.fact}</p>
        </div>
    );
};
