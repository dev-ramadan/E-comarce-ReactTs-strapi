import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IProduct } from "@/Utils/intefaces";

const useProducts = () => {
    return useQuery<IProduct[], Error>({
        queryKey: ["products"],
        queryFn: async () => {
            const { data } = await axios.get(
                `${import.meta.env.VITE_SERVER_URL}/api/products?populate[image]=true`
            );
            return data.data;
        },
    });
};

export default useProducts;
