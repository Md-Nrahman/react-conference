import { gql, useQuery } from "@apollo/client";
import Image from "next/image";

// Define types for the data received from the GraphQL query
interface OrganizerData {
  conference: {
    organizer: {
      name: string;
      about: string;
      image: {
        url: string;
      };
    };
  };
}

// Define the type for the props
interface OrganizerProps {
  id: string;
}

const QUERY = gql`
  query Conference($id: ID!) {
    conference(id: $id) {
      id
      name
      series {
        id
      }
      organizer {
        name
        about
        image {
          url
        }
      }
      year
      startDate
      endDate
    }
  }
`;

const Organizer: React.FC<OrganizerProps> = ({ id }) => {
  const { data, loading, error } = useQuery<OrganizerData>(QUERY, {
    variables: { id: id },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      {data?.conference?.organizer && (
        <div
          key={data.conference.organizer.name}
          className="flex items-center space-x-3 bg-white p-3 rounded-md"
        >
          <Image
            alt="Organizer"
            src={data.conference.organizer.image.url}
            className="h-auto max-w-[50%] rounded-md"
            width={50}
            height={50}
          />
          <div>
            <h1 className="font-bold"> {data.conference.organizer.name} </h1>
            <p className="text-xs text-gray-600">
              {" "}
              {data.conference.organizer.about}{" "}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Organizer;
