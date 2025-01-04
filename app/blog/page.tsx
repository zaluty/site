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
      <div className="flex justify-center items-center w-full">
        <main className="w-full max-w-[1600px] lg:max-w-[1200px] mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6">
            {GetPosts().then((posts) => posts.map((post, index) => (
              <Card key={index} className="flex flex-col h-full hover:shadow-lg transition-shadow duration-200">
                <CardHeader className="p-0">
                  <div className="relative w-full pt-[60%]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                    />
                  </div>
                </CardHeader>
                <CardContent className="flex-grow p-3 sm:p-4">
                  <CardTitle className="text-base sm:text-lg lg:text-xl font-semibold mb-2 line-clamp-2">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:underline"
                    >
                      {post.title}
                    </Link>
                  </CardTitle>
                  <p className="text-gray-600 text-xs sm:text-sm lg:text-base mb-3 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2">
                    {post.tags.map((tag: string, tagIndex: number) => (
                      <Badge
                        key={tagIndex}
                        variant="destructive"
                        className="text-[10px] sm:text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="text-[10px] sm:text-xs lg:text-sm text-gray-500 p-3 sm:p-4">
                  <p className="truncate">
                    By{" "}
                    <span className="font-bold text-primary">
                      {post.author}
                    </span>{" "}
                    on {post.date}
                  </p>
                </CardFooter>
              </Card>
            )))}
          </div>
        </main>
      </div>
    </>
  );
}





async function GetPosts(): Promise<BlogPost[]> {
"use server"
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
          : [],
        author: author ? author[1] : "",
      };
    })
    .filter((post): post is BlogPost & { image: string } => post !== null)
    // Add sorting by date in descending order
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return posts;
}
