import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
interface queryProps {
  queryKeyName: string;
  url: string;
}
const useToGetPublicData = ({ queryKeyName, url }: queryProps) => {
  const axiosPublic = useAxiosPublic();
  const { data, refetch, isError, error, isLoading } = useQuery({
    queryKey: [queryKeyName],
    queryFn: async (): Promise<object[]> => {
      const res = await axiosPublic.get(url);
      return res.data;
    },
  });
  return { data, refetch, isError, error, isLoading };
};

export default useToGetPublicData;
