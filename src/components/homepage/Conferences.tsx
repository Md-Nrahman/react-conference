"use client";
import { gql, useQuery } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import Marker from "../../assets/marker.png";
import Thunder from "../../assets/thunder.png";
import { LoaderComponent } from "../Loader";

const QUERY = gql`
  {
    conferences {
      id
      name
      startDate
      organizer {
        aboutShort
      }
    }
  }
`;

const Conferences = () => {
  const { data, loading, error } = useQuery(QUERY);

  if (loading) {
    return <LoaderComponent />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="container mx-auto w-full h-full">
      <p className="text-4xl font-bold my-5 flex justify-center">Conferences</p>

      <div className="relative wrap overflow-hidden p-10 h-full">
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          {data?.conferences?.length &&
            data.conferences.map((conference: any) => (
              <Link
                href={`/conference/${conference.id}`}
                key={conference?.id}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-[#FFC93E]/20 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <Image alt="Thunder" src={Thunder} />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#F9FAFB] border-t-2 border-t-[#CDCDCD] rounded-lg shadow-md px-6 py-4">
                  <h3 className="mb-3 font-bold text-gray-800 text flex space-x-2 items-center">
                    <Image alt="Marker" src={Marker} className="w-4 h-4" />{" "}
                    <span>{conference?.name}</span>
                  </h3>
                  <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100 ml-6">
                    {conference?.organizer?.aboutShort}
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Conferences;
