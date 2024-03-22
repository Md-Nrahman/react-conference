import { gql, useQuery } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import { FaDribbble, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { LoaderComponent } from "../Loader";

const QUERY = gql`
  query Conference($id: ID!) {
    conference(id: $id) {
      id
      name
      series {
        id
      }
      speakers {
        name
        about
        image {
          url
        }
        social {
          twitter
          linkedin
          dribble
          github
        }
      }
      year
      startDate
      endDate
    }
  }
`;

interface Speaker {
  name: string;
  image?: {
    url: string;
  };
  social?: {
    twitter?: string;
    linkedin?: string;
    dribble?: string;
    github?: string;
  };
  about?: string;
}

interface SpeakersProps {
  id: string;
}

const Speakers: React.FC<SpeakersProps> = ({ id }) => {
  const { data, loading, error } = useQuery(QUERY, {
    variables: { id },
  });

  if (!id || typeof id !== "string") {
    throw new Error("Invalid id prop supplied to Speakers component");
  }

  if (loading) {
    return <LoaderComponent />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const speakers: Speaker[] = data?.conference?.speakers || [];

  return (
    <>
      {speakers.length > 0 &&
        speakers.map((speaker) => (
          <div
            key={speaker?.name}
            className="flex space-x-3 bg-white p-3 rounded-md"
          >
            <Image
              alt="Organizer"
              src={speaker?.image?.url || ""}
              className="md:h-16 h-10 w-auto rounded-md"
              width={50}
              height={50}
            />
            <div className="space-y-2 w-full">
              <div className="flex justify-between">
                <h1 className="font-bold">{speaker?.name}</h1>
                <div className="flex items-center space-x-3 text-xs">
                  {speaker?.social?.twitter && (
                    <Link href={speaker?.social?.twitter} target="_blank">
                      <FaTwitter />
                    </Link>
                  )}
                  {speaker?.social?.linkedin && (
                    <Link href={speaker?.social?.linkedin} target="_blank">
                      <FaLinkedin />
                    </Link>
                  )}
                  {speaker?.social?.dribble && (
                    <Link href={speaker?.social?.dribble} target="_blank">
                      <FaDribbble />
                    </Link>
                  )}
                  {speaker?.social?.github && (
                    <Link href={speaker?.social?.github} target="_blank">
                      <FaGithub />
                    </Link>
                  )}
                </div>
              </div>
              <p className="text-xs text-gray-600">{speaker?.about}</p>
            </div>
          </div>
        ))}
    </>
  );
};

export default Speakers;
