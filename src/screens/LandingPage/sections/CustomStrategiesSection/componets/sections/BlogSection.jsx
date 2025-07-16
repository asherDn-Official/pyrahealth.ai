import { BlogCard } from "../ui/BlogCard";

export const BlogSection = ({ blogPosts }) => {
  return (
    <section className="flex flex-col w-full items-center justify-center gap-8 lg:gap-10 py-8 lg:py-[30px]">
      <div className="flex flex-col w-full max-w-[1178px] items-center gap-4 lg:gap-5 px-4">
        <p className="max-w-[1016px] text-[#6c757d] text-lg sm:text-xl lg:text-2xl text-center tracking-[-0.48px] leading-7 lg:leading-9">
          Stay Ahead with AI-Driven Healthcare Trends
        </p>
      </div>

      <div className="flex flex-col items-start gap-4 lg:gap-5 px-4 w-full max-w-[1300px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5 w-full">
          {blogPosts.slice(0, 2).map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5 w-full">
          {blogPosts.slice(2, 4).map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};