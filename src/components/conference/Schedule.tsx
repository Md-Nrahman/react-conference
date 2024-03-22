import { gql, useQuery } from "@apollo/client";
import { LoaderComponent } from "../Loader";

const QUERY = gql`
  query Conference($id: ID!) {
    conference(id: $id) {
      schedules {
        day
        location {
          name
          about
          city
          address
        }
        description
        intervals {
          title
          drawing
          begin
          end
          title
          drawing
        }
      }
    }
  }
`;
interface Interval {
  id: string;
  title: string;
  begin: string;
  end: string;
}

interface ScheduleData {
  day: string;
  intervals?: Interval[];
}

interface ScheduleProps {
  id: string;
}

const Schedule: React.FC<ScheduleProps> = ({ id }) => {
  const weekday: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const { data, loading, error } = useQuery(QUERY, {
    variables: { id },
  });

  if (!id || typeof id !== "string") {
    throw new Error("Invalid id prop supplied to Schedule component");
  }

  if (loading) {
    return <LoaderComponent />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const schedules: ScheduleData[] = data?.conference?.schedules || [];

  return (
    <>
      {schedules.length > 0 &&
        schedules.map((schedule) => (
          <div
            key={schedule?.day}
            className="flex justify-between space-x-3 bg-white p-3 rounded-md"
          >
            <div className="space-y-4">
              <h1 className="font-bold">{schedule?.day}</h1>
              {schedule?.intervals?.length &&
                schedule?.intervals?.map(
                  (interval) =>
                    interval?.title && (
                      <div key={interval?.id}>
                        <p className="text-xs text-gray-600">
                          Duration: {interval?.begin} - {interval?.end}
                        </p>
                        <ul className="text-xs text-gray-600">
                          <li className="list-disc list-inside">
                            {interval?.title}
                          </li>
                        </ul>
                      </div>
                    )
                )}
            </div>
            <div>
              <h1 className="font-bold">
                {weekday[new Date(schedule?.day)?.getDay()]}
              </h1>
            </div>
          </div>
        ))}
    </>
  );
};

export default Schedule;
