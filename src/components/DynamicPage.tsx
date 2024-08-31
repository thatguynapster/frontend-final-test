import { createFileRoute } from "@tanstack/react-router";
import axios from "axios";
import { useEffect, useState } from "react";

// @ts-expect-error
export const Route = createFileRoute("/fetch/$type")({
  component: DynamicPage,
});

function DynamicPage() {
  const { type } = Route.useParams();

  const [data, setData] = useState<Record<string, any>>({});

  useEffect(() => {
    axios
      .get(`http://${type}.jsontest.com/`)
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [type]);

  return (
    <div>
      <h1>Dynamic Page</h1>
      <p>Type: {type}</p>

      <div>
        {Object.keys(data).map((key) => (
          <p key={key} style={{ textTransform: "capitalize" }}>
            {key.replaceAll("_", " ")} {": "}
            {data[key]}
          </p>
        ))}
      </div>
    </div>
  );
}

export default DynamicPage;
