import { Metadata } from "next";
import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AnimatedName } from "../n/animated-name";

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog",
};

interface BlogPost {
  slug: string;
  title: string;
  image: string;
  excerpt: string;
  date: string;
  id: string;
  tags: string[];
  author: string;
}

export default function BlogPage() {
  return (
    <>
      <AnimatedName />
      <div className=" flex justify-center items-center">
        <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {GetPosts().map((post, index) => (
              <Card key={index} className="flex flex-col h-full">
                <CardHeader className="p-0">
                  <div className="relative w-full pt-[56.25%]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                    />
                  </div>
                </CardHeader>
                <CardContent className="flex-grow p-4">
                  <CardTitle className="text-lg md:text-xl font-semibold mb-2 line-clamp-2">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:underline"
                    >
                      {post.title}
                    </Link>
                  </CardTitle>
                  <p className="text-gray-600 text-sm md:text-base mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="destructive"
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="text-xs md:text-sm text-gray-500 p-4">
                  <p className="truncate">
                    By{" "}
                    <span className="font-bold text-primary">
                      {post.author}
                    </span>{" "}
                    on {post.date}
                  </p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

function GetPosts(): BlogPost[] {
  const postsDirectory = path.join(process.cwd(), "app", "blog");
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames
    .map((dirName) => {
      const filePath = path.join(postsDirectory, dirName, "page.mdx");
      if (!fs.existsSync(filePath)) {
        return null;
      }
      const fileContents = fs.readFileSync(filePath, "utf8");

      // Extract the title and image from the frontmatter
      const titleMatch = fileContents.match(/title:\s*"(.+)"/);
      const imageMatch = fileContents.match(/image:\s*"(.+)"/);
      const date = fileContents.match(/date:\s*"(.+)"/);
      const title = titleMatch ? titleMatch[1] : dirName;
      const image = imageMatch ? imageMatch[1] : "";
      const excerpt = fileContents.match(/description:\s*"(.+)"/);
      const tags = fileContents.match(/tags:\s*\[(.+)\]/); // Adjust regex to match array format
      const author = fileContents.match(/author:\s*"(.+)"/);
      return {
        slug: dirName,
        title: title,
        image: image ? image : "",
        excerpt: excerpt ? excerpt[1] : "",
        date: date ? date[1] : "",
        id: dirName,
        tags: tags
          ? tags[1].split(",").map((tag) => tag.replace(/["']/g, "").trim())
          : [], // Remove quotes and trim
        author: author ? author[1] : "",
      };
    })
    .filter((post): post is BlogPost & { image: string } => post !== null)
    // Add sorting by date in descending order
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return posts;
}
