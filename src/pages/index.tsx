import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <div className="w-full rounded-lg shadow-md lg:max-w-sm">
        <img
          className="object-cover w-full h-48"
          src="https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg"
          alt="image"
        />
        <div className="p-4">
          <h4 className="text-xl font-semibold tracking-tight text-blue-600">
            Hello world
          </h4>
          <p className="mb-2 leading-normal">반가워요</p>
          <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
            짱버튼
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
