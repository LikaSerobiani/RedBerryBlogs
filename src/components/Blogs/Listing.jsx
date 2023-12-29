import React from "react";
import Card from "./Card";

export default function Listing({ blogs, loading, filteredBlogs }) {
  const displayBlogs = filteredBlogs.length > 0 ? filteredBlogs : blogs;

  return (
    <div className="container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-wrap justify-start gap-x-[32px] gap-y-[56px] mb-[66px]">
          {displayBlogs.map((blog) => (
            <div key={blog.id}>
              <Card
                id={blog.id}
                image={blog.image}
                author={blog.author}
                publish_date={blog.publish_date}
                title={blog.title}
                description={blog.description}
                categories={blog.categories}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
