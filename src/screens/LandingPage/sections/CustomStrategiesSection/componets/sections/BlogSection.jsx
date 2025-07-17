import { BlogCard } from "../ui/BlogCard";

export const BlogSection = ({ blogPosts }) => {
  return (
    <section className="flex flex-col w-full items-center justify-center gap-8 lg:gap-10 py-8 lg:py-[30px]">
      <div className="flex flex-col w-full max-w-[1178px] items-center gap-4 lg:gap-5 px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-1px] mb-4 lg:mb-6 text-[#121416]">
          Insights &{" "}
          <span className="bg-[linear-gradient(180deg,rgba(114,0,98,1)_0%,rgba(255,45,125,1)_46%,rgba(246,120,0,1)_100%)] text-transparent bg-clip-text">
            Articles
          </span>
        </h2>

        <p className="max-w-[1016px] text-[#6c757d] text-lg sm:text-xl lg:text-2xl text-center tracking-[-0.48px] leading-7 lg:leading-9">
          Stay Ahead with AI-Driven Healthcare Trends
        </p>
      </div>

      <div className="flex flex-col items-start gap-4 lg:gap-5 px-4 w-full max-w-[1300px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5 w-full">
          {blogPosts.slice(0, 2).map((post, index) => (
            <BlogCard key={index} {...post} imageIndex={index} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5 w-full">
          {blogPosts.slice(2, 4).map((post, index) => (
            <BlogCard key={index + 2} {...post} imageIndex={index + 2} />
          ))}
        </div>
      </div>
    </section>
  );
};
