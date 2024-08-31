import React, { useEffect, useState } from "react";

type DataType = {
  time: string;
  milliseconds_since_epoch: number;
  date: string;
};

const Home: React.FC = () => {
  //   const router = useRouter();
  //   const searchParams = useSearch<{ data?: string }>();
  const [data, setData] = useState<DataType | null>(() => {
    return null;
    // return searchParams.data ? JSON.parse(searchParams.data) : null;
  });

  useEffect(() => {
    if (!data) {
      fetch("http://date.jsontest.com/")
        .then((response) => response.json())
        .then((fetchedData: DataType) => {
          setData(fetchedData);
          // Update the URL search params
          //   router.setSearch({ data: JSON.stringify(fetchedData) });
        });
    }
    //   }, [data, router]);
  }, [data]);

  return (
    <div>
      <h1>JSON Test Data</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
};

export default Home;
