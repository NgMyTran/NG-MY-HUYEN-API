import React from "react";
import { useParams } from "react-router-dom";

export default function AboutDetail() {
  //   const params = useParams();
  //   console.log(params.slug);
  //   return <div>AboutDetail {params.slug} </div>;

  //   Cách viết 2
  const { slug } = useParams();
  console.log("slug", slug);
  return <div>AboutDetail {slug}</div>;
}
