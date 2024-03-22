import { gql, useQuery } from "@apollo/client";
import Image from "next/image";
import { LoaderComponent } from "../Loader";

const QUERY = gql`
  query Conference($id: ID!) {
    conference(id: $id) {
      id
      name
      series {
        id
      }
      sponsors {
        name
        image {
          url
        }
        about
      }
      year
      startDate
      endDate
    }
  }
`;

interface Sponsor {
  name: string;
  image?: {
    url: string;
  };
  about?: string;
}

interface SponsorsProps {
  id: string;
}

const Sponsors: React.FC<SponsorsProps> = ({ id }) => {
  const { data, loading, error } = useQuery(QUERY, {
    variables: { id },
  });

  if (!id || typeof id !== "string") {
    throw new Error("Invalid id prop supplied to Sponsors component");
  }

  if (loading) {
    return <LoaderComponent />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const sponsors: Sponsor[] = data?.conference?.sponsors || [];

  return (
    <>
      {sponsors.length > 0 &&
        sponsors.map((sponsor) => (
          <div
            key={sponsor?.name}
            className="flex items-center space-x-3 bg-white p-3 rounded-md"
          >
            <Image
              alt="Organizer"
              src={sponsor?.image?.url || ""}
              className="h-auto max-w-[50%] rounded-md"
              width={50}
              height={50}
            />
            <div>
              <h1 className="font-bold">{sponsor?.name}</h1>
              <p className="text-xs text-gray-600">{sponsor?.about}</p>
            </div>
          </div>
        ))}
    </>
  );
};

export default Sponsors;
