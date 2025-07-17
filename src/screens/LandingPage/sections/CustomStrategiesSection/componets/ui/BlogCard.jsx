import { Card, CardContent } from "../../../../../../components/ui/card";

// Import your blog post images (adjust paths as needed)
import blogImage1 from "../../../../../../assets/images/blog-1.png";
import blogImage2 from "../../../../../../assets/images/blog-2.png";
import blogImage3 from "../../../../../../assets/images/blog-3.png";
import blogImage4 from "../../../../../../assets/images/blog-4.png";

export const BlogCard = ({
  title,
  description,
  date,
  readTime,
  imageIndex, // Added to select different images
}) => {
  // Select image based on index
  const images = [blogImage1, blogImage2, blogImage3, blogImage4];
  const imageSrc = images[imageIndex] || blogImage1; // Fallback to first image

  return (
    <Card className="w-full max-w-[611px] mx-auto rounded-[20px] overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
      <CardContent className="p-0">
        <img
          className="w-full h-[250px] lg:h-[300px] object-cover"
          alt={`Blog thumbnail for ${title}`}
          src={imageSrc}
        />

        <div className="p-4 lg:p-5">
          <div className="h-32 lg:h-40 overflow-hidden">
            <h3 className="font-bold text-[#121416] text-xl lg:text-2xl xl:text-[28px] leading-6 lg:leading-7 hover:text-blue-600 transition-colors">
              {title}
            </h3>
            <p className="text-[#6c757d] text-lg lg:text-xl xl:text-2xl leading-6 lg:leading-8 mt-2">
              {description}
            </p>
          </div>

          <div className="flex items-center gap-4 lg:gap-6 mt-4">
            <span className="text-[#121416cf] text-sm lg:text-base">
              {date}
            </span>
            <div className="w-[18px] lg:w-[22px] h-px bg-[#121416cf]" />
            <div className="flex items-center gap-1">
              <div className="w-5 lg:w-6 h-5 lg:h-6 flex items-center justify-center">
                <div className="w-3 lg:w-3.5 h-3 lg:h-3.5 bg-[url(/vector-5.svg)] bg-[100%_100%]">
                  <img
                    className="w-[2.5px] lg:w-[3px] h-1 lg:h-1.5"
                    alt="Clock icon"
                    src="/vector-4.svg"
                  />
                </div>
              </div>
              <span className="text-[#121416cf] text-sm lg:text-base tracking-[0.32px]">
                {readTime}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
