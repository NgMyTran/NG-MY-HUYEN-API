import React from "react";
import { useNavigate } from "react-router-dom";

const about = [
  {
    id: 1,
    name: "About 1",
    slug: "about-1",
  },
  {
    id: 2,
    name: "About 2",
    slug: "about-2",
  },
  {
    id: 3,
    name: "About 3",
    slug: "about-3",
  },
];

export default function About() {
  const navigate = useNavigate();
  const handleDetailPage = (id) => {
    console.log(id, "AAA");
    navigate(`/about/${id}`);
  };
  return (
    <>
      <h2 className="mb-4">About</h2>
      {/* <p>
        2.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
        eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p> */}
      <ul>
        {about.map((item) => (
          <li key={item.id}>
            {/* <a href={`/about/${item.slug}`}>{item.name}</a> */}
            <p>{item.name}</p>
            <button onClick={() => handleDetailPage(item.id)}>Click me</button>
          </li>
        ))}
      </ul>
    </>
  );
}
