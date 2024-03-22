"use client";
import { LoaderComponent } from "@/components/Loader";
import Organizer from "@/components/conference/Organizer";
import Schedule from "@/components/conference/Schedule";
import Speakers from "@/components/conference/Speakers";
import Sponsors from "@/components/conference/Sponsors";
import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { BsArrowDownUp } from "react-icons/bs";

const QUERY = gql`
  query Conference($id: ID!) {
    conference(id: $id) {
      id
      name
      slogan
      series {
        id
      }
      year
      startDate
      endDate
    }
  }
`;

interface SectionProps {
  id: string;
}

const Home: React.FC<{ params: { id: string } }> = ({ params }) => {
  const number = params.id;
  const [activeSection, setActiveSection] = useState("organizer");
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [sections, setSections] = useState<string[]>([
    "organizer",
    "speakers",
    "schedule",
    "sponsors",
  ]);
  const { data, loading, error } = useQuery(QUERY, {
    variables: { id: number },
  });

  const getStateWiseComponent = () => {
    switch (activeSection) {
      case "organizer":
        return <Organizer id={number} />;
      case "speakers":
        return <Speakers id={number} />;
      case "schedule":
        return <Schedule id={number} />;
      case "sponsors":
        return <Sponsors id={number} />;
      default:
        return <Organizer id={number} />;
    }
  };

  const handleDrop = (
    e: React.DragEvent<HTMLLIElement>,
    targetItem: string
  ) => {
    e.preventDefault();

    // Find the index of the dragged item and the target item
    const draggedIndex = sections.findIndex((item) => item === draggedItem);
    const targetIndex = sections.findIndex((item) => item === targetItem);

    // Swap the positions of the dragged item and the target item
    const newItems = [...sections];
    [newItems[draggedIndex], newItems[targetIndex]] = [
      newItems[targetIndex],
      newItems[draggedIndex],
    ];

    // Update the state with the new items order
    setSections(newItems);

    // Reset the draggedItem state
    setDraggedItem(null);
  };

  const handleDragStart = (e: React.DragEvent<HTMLLIElement>, item: string) => {
    e.dataTransfer.setData("text/plain", item);
    setDraggedItem(item);
  };

  const handleDragOver = (e: React.DragEvent<HTMLLIElement>) => {
    e.preventDefault();
  };

  if (loading) {
    return <LoaderComponent />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <div className="w-full lg:px-24 md:px-16 px-14 py-2 min-h-[60vh]">
        <div className="my-4 space-y-3">
          <h1 className="font-bold text-3xl">{data?.conference?.name}</h1>
          <p className="text-xs text-gray-600">{data?.conference?.slogan}</p>
        </div>

        <section className="md:grid md:grid-cols-4 md:space-x-5">
          <ul className="space-y-5 col-span-1">
            {sections?.map((section) => (
              <>
                <li
                  key={section}
                  draggable
                  onDragStart={(e) => handleDragStart(e, section)}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, section)}
                  onClick={() => setActiveSection(section)}
                  className={`group p-2 hover:cursor-pointer hover:bg-yellow-500 ${
                    activeSection === section && "bg-yellow-500"
                  } flex items-center gap-x-2 border rounded-md`}
                >
                  <BsArrowDownUp
                    className={`text-yellow-500 p-2 text-4xl rounded-md group-hover:bg-white ${
                      activeSection === section && "bg-white"
                    }`}
                  />
                  <span
                    className={`group-hover:text-white ${
                      activeSection === section && "text-white"
                    } font-bold`}
                  >
                    {section?.charAt(0).toUpperCase() + section?.slice(1)}
                  </span>
                </li>
                {section === activeSection && (
                  <div className="col-span-3 space-y-4 md:hidden bg-[#F9FAFB] rounded-md p-10">
                    {getStateWiseComponent()}
                  </div>
                )}
              </>
            ))}
          </ul>

          <div className="col-span-3 space-y-4 hidden md:block bg-[#F9FAFB] rounded-md p-10">
            {getStateWiseComponent()}
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
